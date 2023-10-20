import {Typography,Box,Tooltip,IconButton,Menu,MenuItem,Divider,} from '@mui/material';
import Button from '@mui/material-next/Button';
import logoHeader from '../images/logoHeader.svg'
import useStyles from './Header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import style from './Header.module.css'

export const MobileHeader = ()=>{
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return (
        <div className={style.desktopHeader}>
            <Box flexGrow={1}>
                <Typography variant="h6">
                    <img src={logoHeader} alt="Logo" />
                </Typography>
            </Box>
            <Box className={useStyles.menuMargin}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="medium"
                        aria-controls={open ? 'menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                    <MenuIcon className={`${useStyles.menuIcon} ${useStyles.iconFont}`}/>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="menu"
                onClose={handleClose}
                onClick={handleClose}
                open={open}
                PaperProps={{
                elevation: 0,
                className:`${useStyles.customMenu} ${useStyles.menuDropDown}`
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <Button variant="text" className={`${useStyles.customButton} ${useStyles.textMobile}`}>Features</Button>
                </MenuItem>
                <MenuItem>
                    <Button variant="text" className={`${useStyles.customButton} ${useStyles.textMobile}`}>Pricing</Button>
                </MenuItem>
                <MenuItem>
                <Button variant="text" className={`${useStyles.customButton} ${useStyles.textMobile}`}>Resources</Button>
                </MenuItem>
                <Divider className={`${useStyles.customDivider} ${useStyles.hr}`} />
                <MenuItem>
                    <Button variant="text" className={`${useStyles.customButton} ${useStyles.textMobile}`}>Login</Button>
                </MenuItem>
                <MenuItem>
                    <Button variant="filled" className={`${useStyles.customButton} ${useStyles.buttonMobile}`}>Sign Up</Button>
                </MenuItem>
            </Menu>
        </div>
    )
}