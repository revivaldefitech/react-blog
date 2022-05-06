import React from 'react';






const SingleArticle3 = () => {
  return (
   <div>
  {/* Header */}
  
  <header className="header header-inverse h-fullscreen pb-80" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/dextest1.png)`}} >
    <div className="container text-center">
      <div className="row h-full">
        <div className="col-12 col-lg-8 offset-lg-2 align-self-center">
          <p className="opacity-70">News</p>
          <br />
          <h1 className="display-4 hidden-sm-down">New and Updated Whitepaper has Been Released by RevivalDeFi</h1>
          <h1 className="hidden-md-up">New and Updated Whitepaper has Been Released by RevivalDeFi</h1>
          <br />
          <br />

            <span className="opacity-70 mr-8">By</span>
            <a className="text-white" href="#">Revival DeFi</a>

        </div>
        <div className="col-12 align-self-end text-center">
        <a className="scroll-down-1 scroll-down-inverse" href="article3/whitepaper" target="_top"  data-scrollto="section-content">
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
            <p className="lead">Upon inception, a new crypto project will typically release what is known as a Litepaper. A Litepaper will consist of a short history about the project and the team involved. It will also contain some technical information such as wallet addresses and usually sums up the future plans of the project. Once a project has grown some legs and investors seek more detailed information, a Project will release what is known as a White Paper.</p>
            <hr className="w-100" />
            <p>A White Paper explains the technology and plans for the project in more detail. It expands on the history and explains the purpose behind the development. A project White Paper will sometimes include charts and graphs, statistics and diagrams and other forms of visual information concerning the project. The White Paper will also update the Roadmap and plans for the future.
            <p></p>
            <p>RevivalDeFi Project is pleased to announce that the team has recently upgraded their Litepaper to a White Paper. The White Paper contains updated details and plans for the future of the RevivalDeFi Project.</p>
            </p>

            <p>            </p>
           
            </div>
        </div>
        <br />
        <p>
          <div className='img-container'>
          <img src={`${process.env.PUBLIC_URL}/assets/img/whitepaper.png`}  alt="..." href="https://revivaldefi.com/static/media/Whitepaper.9da971895b25bc210585.pdf" 
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
              <p>When you have a dream, you’ve got to grab it and never let go.</p>
              <footer>Carol Burnett
                
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







export default SingleArticle3;