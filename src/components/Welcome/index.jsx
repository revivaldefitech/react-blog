import React from 'react';
import Banner from './../Banner';
import Article from './../Article';
import Article1 from './../Article1';
import Article2 from './../Article2';
import Article3 from './../Article3';



const Welcome = () => {
  return (
    <div>
      <Banner 
      backgroundImage="url(assets/img/dextest1.png)"
      title="Latest Revival DeFi Blog Posts"
      subtitle="Thoughts, Stories & News"/>


    
  



       
    
    <main className="main-content bg-gray">
      <div className="row">
        <div className="col-12 col-lg-6 offset-lg-3">
        <Article3/>
          <hr/>
          <Article2/>
          <hr/>
          <Article1/>
          <hr/>
          <Article/>
          <hr/>

        </div>
      </div>
    </main>

    </div>
  );
};

export default  Welcome;
  
  {
}
