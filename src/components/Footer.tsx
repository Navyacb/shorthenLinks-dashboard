import { AppBar, Toolbar, Typography, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Pinterest, Instagram } from '@mui/icons-material';
import logoFooter from '../images/logoFooter.svg'
import { Container } from '@mui/system';
import style from './Footer.module.css'

type IFooterContent = {
  [x:string]: string[],
  Features : string[],
  Resources : string[],
  Company : string[],
}

export const Footer = ()=>{

  //Hard coding the card content , we can get this data from backend
  const footerContent:IFooterContent = {
    Features : ['Link Shortening', 'Branded Links','Analytics' ],
    Resources : ['Blog', 'Developers' ,'Support' ],
    Company: ['About','Our Team','Careers','Contact'],
  }

    return (
      <AppBar position="static" className={`${style.footer} ${style.footerBackground}`}>
        <Container className={style.footerContainer}>
          <Grid container spacing={2} alignItems="center" className={`${style.footer} ${style.textContent}`}>
            <Grid item xs={12} sm={4} className={`${style.footer} ${style.topAlignment}`}>
              <Typography variant="h6" component="div" className={style.paddingLeft}>
                <img src={logoFooter} alt="Logo" />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5} className={`${style.footer} ${style.verticalALignFooter}`}>
              {
                Object.keys(footerContent).map((data,i)=>{
                  return (
                    <Grid item xs={12} sm={4} key={i}>
                      <Typography component="div">{data}</Typography>
                      <ul className={style.listContent}>
                        {
                          footerContent[data].map(link=>{
                            return <li>{link}</li>
                          })
                        }
                      </ul>
                    </Grid>
                  )
                })
              }
            </Grid>
            <Grid item xs={12} sm={3} className={`${style.footer} ${style.topAlignment}`}>
              <IconButton color="inherit">
                <Facebook />
              </IconButton>
              <IconButton color="inherit">
                <Twitter />
              </IconButton>
              <IconButton color="inherit">
                <Pinterest />
              </IconButton>
              <IconButton color="inherit">
                <Instagram />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    )
}