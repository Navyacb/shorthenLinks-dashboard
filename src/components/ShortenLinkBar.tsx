import {Grid ,TextField , Button , Box, Typography , Snackbar , Alert} from '@mui/material'
import style from './ShortenLinkBar.module.css'
import { useState } from 'react'
import axios from 'axios'
import { useMediaQuery } from '@mui/material';
import {useEffect} from 'react'

interface IShortenLink {
    code: string;
    sharedLink: string;
    shortenLink: string;
    copyText: string;
}
  

export const ShortenLinkBar = ()=>{
    const [link,setLink] = useState('')
    const [errorMessage,setErrorMessage] = useState('')
    const [shortenLinks,setShortenLinks] = useState<IShortenLink[]>([])
    const [copySuccess, setCopySuccess] = useState(false)

    const isMobile = useMediaQuery('(max-width:480px)'); // Check for screens up to 480px wide

    useEffect(()=>{
        const storedLinks = JSON.parse(localStorage.getItem('shortenLinks') || '[]')
        setShortenLinks(storedLinks)
    },[])
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setLink(e.target.value)
    }

    const handleClick = async()=>{
        if(link){
            setErrorMessage('')
            try{
                const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`)
                const responseData = response.data.result
                const obj = {
                    code : responseData.code,
                    sharedLink : responseData.original_link,
                    shortenLink : responseData.full_short_link,
                    copyText : 'Copy'
                }
                const updatedLinks = [...shortenLinks, obj]
                setShortenLinks(updatedLinks)
                localStorage.setItem('shortenLinks', JSON.stringify(updatedLinks))
            }
            catch(errorMsg : any){
                setErrorMessage(errorMsg.response.data.error)
                console.log('error while fetching shorten url from api', errorMsg)
            }
        }else{
            setErrorMessage('Please add a link')
        }
    }

    const handleCopy = async (shortenLink: string , code: string) => {
        try {
            await navigator.clipboard.writeText(shortenLink)
            setCopySuccess(true)
            const result = shortenLinks.map(link=>{
                if(link.code === code){
                    return {...link,copyText:'Copied!'}
                }
                return {...link}
            })
            setShortenLinks(result)
          } catch (error) {
            console.error('Error copying link to clipboard:', error)
          }
    }
      
    const handleAlertClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
          if (reason === 'clickaway') {
            return
          }
          setCopySuccess(false)
    }

    return(
    <div className={style.shortenBlock}>
        <Box className={style.boxBackground}>
            <div className={style.shortenBar}>
                <TextField 
                    placeholder="Shorten a link here..."
                    className={style.textBar}
                    value={link}
                    onChange={handleChange}
                />
                {
                    (isMobile && errorMessage) && (<i className={style.error}>{errorMessage}</i>) 
                }
                <Button variant="contained" className={`${style.customizeButton} ${style.button}`} onClick={handleClick}>Shorten It!</Button>
            </div>
            {
                (!isMobile &&errorMessage) && (<i className={style.error}>{errorMessage}</i>) 
            }
        </Box>
        {
            (shortenLinks.length>0) &&
            (
                shortenLinks.map((link,i)=>{
                    return (
                    <Grid container className={`${style.shortenList} ${style.grid}`} key={i}>
                        <Grid item xs={12} sm={8} className={style.sharedText}>
                            <Typography variant="body1" align="left" className={style.wordWrap}>
                                {link.sharedLink}
                            </Typography>
                        </Grid>
                        {(isMobile) && <hr className={style.hr}/>}
                        <Grid item xs={12} sm={4} className={style.shortenGrid}>
                            <Box display="flex" justifyContent="flex-end" className={style.shortenBox}>
                                <Typography variant="body1" align="right" className={`${style.shortenLink} ${style.text}`}>
                                    <p>{link.shortenLink}</p>
                                </Typography>
                                <Button 
                                    className={`${style.customizeButton} ${link.copyText==='Copy' ? style.copyBackground : style.copiedBackground} ${style.copy}`} 
                                    onClick={() => handleCopy(link.shortenLink,link.code)}
                                >
                                    {link.copyText}
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                    )
                })
            )
        }
        <Snackbar
            open={copySuccess}
            autoHideDuration={3000}
            onClose={handleAlertClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert onClose={handleAlertClose} severity="success" variant="filled">
                Link copied to clipboard!
            </Alert>
        </Snackbar>
    </div>
    )
}