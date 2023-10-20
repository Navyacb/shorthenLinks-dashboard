import { Box } from '@mui/material';
import style from './CardDesign.module.css'

interface ICard{
    title: string;
    description: string;
    icon: string
  }
export const CardDesign  = ({title, description, icon}:ICard) => {
   
    return (
        <Box className={style.boxPosition}>
        <div className={style.cardImg}>
          <img src={icon} width={32} height={32} alt="icon"/>
        </div>
        <Box className={style.cardBody}>
            <h3>{title}</h3>
            <p className={style.cardDescription}>{description}</p>
        </Box>
      </Box>
    )
}

