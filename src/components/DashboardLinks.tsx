import { Grid, Typography } from '@mui/material'
import Button from '@mui/material-next/Button';
import illustrationWorkingImg from '../images/illustration-working.svg'
import style from './DashboardLinks.module.css'

export const DashboardLinks = ()=>{

    return (
        <div className={`${style.dashboard} ${style.width}`}>
            <div className={style.paper}>
                <Grid container className={`${style.mobileDirection} ${style.flex}`}>
                    <Grid item xs={12} sm={6} className={`${style.gridPadding} ${style.alignContainer}`}>
                        <Typography variant="h2" className={`${style.heading} ${style.fontWeight}`}>More than just shorter links</Typography>
                        <h4 className={style.descriptionPadding}>Build Your brand's recognition and get detailed insights on how your links are performing.</h4>
                        <Button variant="filled" className={`${style.customButton} ${style.button}`}>Get Started</Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={illustrationWorkingImg} alt="working Image" className={`${style.workingImg} ${style.image}`}/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}