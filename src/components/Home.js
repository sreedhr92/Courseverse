import React from 'react';
const Home = () => {
  return ( <main>
    <div className="lp">

      <nav className="lp__nav">
        <img src="https://cdn.pixabay.com/photo/2016/12/19/03/14/computer-1917230__480.png" alt ="pic" className="lp__nav__logo"/>
        <p className="lp__nav__text">Courseverse</p>
      </nav>
     
  
      <section className="lp__body">

      <div className="lp__text">
        <h1 className="lp__text__title"><span className="lp__text__title-first">An E-learning platform for the students</span>
          </h1>
        <p className="lp__text__subtext">Upgrade your skills with absolute fun.</p>
      </div>
  
      
      <div className="lp__mainImg">
        <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/experience_design_eq3j.svg" alt ="pic" className="lp__mainImg__img"/>
      </div>
     
      </section>
    </div>
  </main>);
}
 
export default Home;