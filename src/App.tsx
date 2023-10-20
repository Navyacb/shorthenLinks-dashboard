import React from 'react';
import style from './App.module.css';
import { Header } from './components/Header';
import {GlobalStyles} from './styles/GlobalStyles';
import { Footer } from './components/Footer';
import { DashboardLinks } from './components/DashboardLinks';
import { BoostLink } from './components/BoostLink';
import { AdvancedStatistics } from './components/AdvancedStatistics';

const App = ()=>{
  return (
    <div className={style.horizontalScroll}>
      <GlobalStyles />
      <Header />
      <DashboardLinks />
      <AdvancedStatistics/>
      <BoostLink />
      <Footer/>
    </div>
  );
}

export default App;
