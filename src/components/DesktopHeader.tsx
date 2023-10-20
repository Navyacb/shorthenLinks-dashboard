import {Typography,Box} from '@mui/material';
import Button from '@mui/material-next/Button';
import logoHeader from '../images/logoHeader.svg'
import style from './Header.module.css';

export const DesktopHeader = ()=>{

    return(
        <div className={style.desktopHeader}>
            <Box>
                <Typography variant="h6">
                    <img src={logoHeader} alt="Logo" />
                </Typography>
            </Box>
            <Box flexGrow={1}>
                <Button variant="text" className={`${style.customButton} ${style.textProperty}`}>Features</Button>
                <Button variant="text" className={`${style.customButton} ${style.textProperty}`}>Pricing</Button>
                <Button variant="text" className={`${style.customButton} ${style.textProperty}`}>Resources</Button>
            </Box>
            <Button variant="text" className={`${style.customButton} ${style.textProperty}`}>Login</Button>
            <Button variant="filled" className={`${style.customButton} ${style.buttonSign}`}>Sign Up</Button>
        </div>
    )
}