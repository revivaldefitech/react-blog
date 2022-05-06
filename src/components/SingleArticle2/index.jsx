import React from 'react';






const SingleArticle2 = () => {
  return (
   <div>
  {/* Header */}
  
  <header className="header header-inverse h-fullscreen pb-80" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/dextest1.png)`}} >
    <div className="container text-center">
      <div className="row h-full">
        <div className="col-12 col-lg-8 offset-lg-2 align-self-center">
          <p className="opacity-70">News</p>
          <br />
          <h1 className="display-4 hidden-sm-down">RevivalDeFi Project Announces Locked Staking Pools</h1>
          <h1 className="hidden-md-up">RevivalDeFi Project Announces Locked Staking Pools</h1>
          <br />
          <br />

            <span className="opacity-70 mr-8">By</span>
            <a className="text-white" href="#">Revival DeFi</a>

        </div>
        <div className="col-12 align-self-end text-center">
        <a className="scroll-down-1 scroll-down-inverse" href="article2/locked-staking" target="_top"  data-scrollto="section-content">
            <span />
          </a>
        
        </div>
      </div>
    </div>
  </header>
  {/* END Header */}
  {/* Main container */}
  <main className="main-content">
    {/*
|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
| Blog content
|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
!*/}
    <div className="section" id="section-content">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <p className="lead">The RevivalDeFi Project is pleased to announce our first 12 month, locked staking pool on UniCrypt.</p>
            <hr className="w-100" />
            <p>As the team unrolls plans for the future, keep in mind that community involvement is key.
            <p></p>
            <p>Sometimes in a period of lull it is hard for developers to come up with something new for the project. Mostly because the time just isn’t right. Any holders that have been with Revival for some time have seen the team pivot and switch things up. The team always has the long term holders investment on their minds.</p>
            </p>
            <p>The Revival Dev Team has experimented over the last few months with staking pools of different lengths. Pools have alternated between 7-day and 30-days. Although beneficial and popular with the community, some members suggested longer pools to incentivize long term holding.</p>
            <p>            </p>
            <p>The team recently implemented 2 new 30-day pools on their dApp and have followed that up with the first 12 Month locked staking pool on UniCrypt for the Vival token.</p>
            <p></p>
            <p></p>
            <p>The future continues to be bright for the RevivalDeFi Project and Community.</p>
            <p></p>
            </div>
        </div>
        <br />
        <p>
          <div className='img-container'>
          <img src={`${process.env.PUBLIC_URL}/assets/img/stakeviv.jpeg`}  alt="..." 
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          />
          </div>

        </p>
        <br />
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">

            <blockquote className="blockquote">
              <div className="quote-sign" />
              <p>When the going gets tough, the tough get going.</p>
              <footer>Joe Kennedy
                
              </footer>
</blockquote>


          </div>
        </div>
        </div>
        </div>

    {/*
|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
| Comments
|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
!*/}


  </main>
  {/* END Main container */}
</div>

  );
};







export default SingleArticle2;