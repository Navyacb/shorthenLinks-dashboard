import { Paper, Typography } from '@mui/material'
import Button from '@mui/material-next/Button';
import style from './BoostLink.module.css'

export const BoostLink =()=>{
    return(
        <Paper elevation={0} className={`${style.paper} ${style.backgroundImg}`}>
            <Typography variant="h5" className={`${style.h5} ${style.fontBold}`} >Boost your links today</Typography>
            <Button variant="filled" className={`${style.customButton} ${style.button}`}>Get Started</Button>
        </Paper>
    )
}