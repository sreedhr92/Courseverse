import React from 'react';
import "./Home.css";
const Home = () => {
  return ( <main>
    <div class="lp">

      <nav class="lp__nav">
        <img src="https://cdn.pixabay.com/photo/2016/12/19/03/14/computer-1917230__480.png" class="lp__nav__logo"/>
        <p class="lp__nav__text">Courseverse</p>
      </nav>
     
  
      <section class="lp__body">

      <div class="lp__text">
        <h1 class="lp__text__title"><span class="lp__text__title-first">An E-learning platform for the students</span>
          Designers</h1>
        <p class="lp__text__subtext">Upgrade your skills with absolute fun.</p>
      </div>
  
      
      <div class="lp__mainImg">
        <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/experience_design_eq3j.svg" class="lp__mainImg__img"/>
      </div>
     
      </section>
    </div>
  </main>);
}
 
export default Home;