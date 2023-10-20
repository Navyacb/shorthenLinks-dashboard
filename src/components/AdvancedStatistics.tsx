import {Box} from '@mui/material'
import style from './AdvancedStatistics.module.css'
import {CardDesign} from './CardDesign'
import { ShortenLinkBar } from './ShortenLinkBar'
import brandRecognition from '../images/icon-brand-recognition.svg'
import detailedRecord from '../images/icon-detailed-records.svg'
import customization from '../images/icon-fully-customizable.svg'
import { useMediaQuery } from '@mui/material';

export const AdvancedStatistics = ()=>{
  const isMobile = useMediaQuery('(max-width:480px)'); // Check for screens up to 480px wide

  //Hard coding the card content , we can get this data from backend
  const cardDetails = [
    {
      title: 'Brand Recognition',
      description: "Boost your brand recognition with each link. Generic links don't mean a thing.Branded links help instil confidence in your content.",
      align: 'start',
      icon: brandRecognition
    },
    {
      title: 'Detailed Records',
      description: "Gain Insights into who is clicking your links.Knowing when and where people engage with your content helps inform better decisions.",
      align: 'center',
      icon: detailedRecord
    
    },
    {
      title: 'Fully Customizable',
      description: "Improve brand awareness and content discoverability through customizable links.supercharging audience engagement.",
      align: 'end',
      icon: customization
    
    }
  ]

    return (
    <Box className={style.boxBackground}>
        <ShortenLinkBar />
        <Box className={style.boxWidth}>
            <h1>Advanced Statistics</h1>
            <h4 className={style.description}>Track how your links are performing across the web with our advanced statistics dashboard</h4>
        </Box>
        <Box className={style.cardBlock}>
            <div className={style.stepperAlign}>
                <hr className={style.stepper}/>
            </div>
            {cardDetails.map((card)=>{
                return(
                    <div style={{
                      alignItems:card.align, 
                      display:'flex', 
                      margin:(card.align==='center') ? ((!isMobile)? '0 20px':'15px 0px') : 0
                      }}>
                        <CardDesign icon={card.icon} title={card.title} description={card.description}/>
                    </div>
                )
            })}
        </Box>
    </Box>
    )
}