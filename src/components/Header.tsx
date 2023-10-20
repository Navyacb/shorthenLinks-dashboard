import { useMediaQuery } from '@mui/material';
import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';
import style from './Header.module.css';

export const Header = ()=>{
    const isMobile = useMediaQuery('(max-width:480px)'); // Check for screens up to 480px wide
    
    return (
        <div className={style.header}>
            {
                (isMobile)?
                (
                    <MobileHeader/>
                ) :
                (
                    <DesktopHeader/>
                )
            }
        </div>
    )
}