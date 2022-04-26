import React from 'react';






const SingleArticle1 = () => {
  return (
   <div>
  {/* Header */}
  
  <header className="header header-inverse h-fullscreen pb-80" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/dextest1.png)`}} >
    <div className="container text-center">
      <div className="row h-full">
        <div className="col-12 col-lg-8 offset-lg-2 align-self-center">
          <p className="opacity-70">News</p>
          <br />
          <h1 className="display-4 hidden-sm-down">What is the Revival DeFi Ecosystem</h1>
          <h1 className="hidden-md-up">What is the Revival DeFi Ecosystem</h1>
          <br />
          <br />

            <span className="opacity-70 mr-8">By</span>
            <a className="text-white" href="#">Revival DeFi</a>

        </div>
        <div className="col-12 align-self-end text-center">
        <a className="scroll-down-1 scroll-down-inverse" href="article1/what-is-revival-defi" target="_top"  data-scrollto="section-content">
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
            <p className="lead">REVIVAL is a community-based Binance smart chain project which strives to evolve and improve the current climate within the DeFi space. REVIVAL offers holders rewards in BEP-20 BNB which empowers our holders to diversify, expand and safeguard their cryptocurrency investments. Offering rewards in BNB also allows holders the option of compounding their interest by re-investing their rewards back into REVIVAL, or other tokens within the REVIVAL DeFi ecosystem, such as VIVAL.</p>
            <hr className="w-100" />
            <p><b>FAIR</b></p>
            <p>With the project being 100% community owned, Revival allows for community votes to determine community contribution for the future plans and development for the project.
            <br></br>
            <p></p>
            <p><b>SAFE</b></p>
            </p>
            <p>The Revival DeFi brand has also expanded their ecosystem by introducing their governance token VIVAL. VIVAL has created a platform for growing the brand and allowing for longevity within the centralized crypto-sphere. This allows for more passive income options within their decentralized application.</p>
            <p><b>SECURE</b></p>
            <p>            </p>
            <p>Revival is consistently exploring ways to ensure that your trading experience is as safe as possible and is a key reason as to why we partnered with our auditing partners Cetik and DessertSwap.Finance to ensure that our smart contracts are safe and secure for our holders.</p>
            <p></p>
            <p><b>TOKENOMICS</b></p>
            <p></p>
            <p>A total tax of 15% is taken from every REVIVAL transaction including buy, sells and transfers.</p>
            <p></p>
            11% - BNB Disctributed to holders
            <p>(You must be holding a minimum of 10B REVIVAL to receive rewards)</p>
            <p>2% - Liquidity Pool Injection</p>
            <p>2% - Marketing and Project Development</p>
            <p>The taxed tokens are pooled into the contract address. Hourly, and after each sale of RVL, the contract checks if the pool holds greater than 260B tokens, and, if so, triggers a sale of these tokens to swap into BNB for disbursement to eligible holders’ wallets. Manual Supply Burns are scheduled by the team regularly and systematically.</p>
          </div>
        </div>
        <br />
        <p>
          <div className='img-container'>
          <img src={`${process.env.PUBLIC_URL}/assets/img/rvlfinance.png`}  alt="..." 
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
              <p>Fortune favors the bold.</p>
              <footer>Virgil
                
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







export default SingleArticle1;