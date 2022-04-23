import React from 'react';
import Banner from './../Banner';
import Article from './../Article';




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
