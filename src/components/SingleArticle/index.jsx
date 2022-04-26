import React from 'react';






const SingleArticle = () => {
  return (
   <div>
  {/* Header */}
  
  <header className="header header-inverse h-fullscreen pb-80" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/dextest1.png)`}} >
    <div className="container text-center">
      <div className="row h-full">
        <div className="col-12 col-lg-8 offset-lg-2 align-self-center">
          <p className="opacity-70">News</p>
          <br />
          <h1 className="display-4 hidden-sm-down">Revival DeFi dApp History</h1>
          <h1 className="hidden-md-up">Revival DeFi dApp History</h1>
          <br />
          <br />

            <span className="opacity-70 mr-8">By</span>
            <a className="text-white" href="#">Revival DeFi</a>

        </div>
        <div className="col-12 align-self-end text-center">
        <a className="scroll-down-1 scroll-down-inverse" href="article/revivalhistory" target="_blank" data-scrollto="section-content">
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
            <p className="lead">Although not originally planned, staking in the Revival dApp has been wildly popular with our holders. Yes, you read that correctly, staking pools and even the dApp itself were not part of the original RevivalDeFi plan.</p>
            <hr className="w-100" />
            <p>The original plan and Roadmap for the RevivalDeFi project consisted of the initial launching of the Revival token, security audits, CMC Listing and an eventual launch of the governance token, Vival. Revival holders became very vocal about wanting a dApp and staking pools added to the benefits of holding Revival.</p>
            <p>The Revival team heard their call and listened.</p>
          </div>
        </div>
        <br />
        
        <div className='img-container'>
        <img className="rounded article-img" src="/assets/img/whatisrevival.png"  />
    </div>

        
        <br />
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <p>Development began on a dApp and staking pools to enhance the RevivalDeFi holder experience by not only continuing the 11% BNB reflections, but also adding staking pools. Time and funds were also spent seeking out other projects to partner with in these pools. All of this was wildly successful and very beneficial to our holders. They were, and still continue to be able to add to their holdings through staking.</p>
            <p>As a consequence of these changes, the Revival Roadmap has drifted slightly off course.</p>
            <p>All of the items listed, CEX listings, Mobile App, NFTs etc. are all still on the table and are actively being pursued and are in development. However, the timelines are in the process of being adjusted to a more realistic goal.</p>
            <p>Thank you all again for your continued support. Please do not hesitate to ask questions, even the tough ones, and hold the team accountable. We are here for you and because of you. Here are a few nuggets to chew on while you stake!</p>
            <ul>
              <li>A new, re-designed website is in development and is in the final stages of auditing before release.</li>
              <li>Revival and Vival mascots are in development and will open up many avenues for NFT development.</li>
              <li>30 day RVL-VIV and VIV-VIV staking pools will be opening in the next few days.</li>
              <li>Once the LP unlocks, it opens up the possibilities for a reverse split.</li>
              <li>White Paper currently going through the final edits and release is imminent.</li>
            </ul>
            <p>Quickly innovate high-quality catalysts for change via resource-leveling innovation. Seamlessly expedite just
              in time infomediaries vis-a-vis viral manufactured products. Rapidiously network synergistic leadership whereas
              emerging data. Professionally synergize compelling partnerships vis-a-vis leading-edge e-business. Efficiently
              develop fully researched experiences and integrated. Phosfluorescently simplify ubiquitous bandwidth without
              client-centered information. Professionally recaptiualize flexible relationships via performance based synergy.
              Monotonectally mesh interoperable processes through high-quality e-commerce. Dynamically build team building
              models without 24/7 internal or "organic" sources. Compellingly incentivize e-business methods of empowerment
              with.
            </p>
            <blockquote className="blockquote">
              <div className="quote-sign" />
              <p>Objectively grow out-of-the-box results with go forward methodologies. Progressively exploit dynamic functionalities
                without ethical portals. Competently facilitate timely total linkage with.</p>
              {/*<footer>Someone famous in
                <cite title="Source Title">Source Title</cite>
              </footer>*/}
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







export default SingleArticle;