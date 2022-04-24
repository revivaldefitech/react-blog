import React from 'react';
import { Link } from 'react-router-dom';


const Article1 = () => {
  return (
    <article1 className="mt-90">
  <header className="text-center mb-40">
    <h3>
    What is the Revival DeFi Ecosystem
    </h3>
    <div className="link-color-default fs-5">
      <a>News, </a>
      <time>April 24, 2022</time>
    </div>
  </header>

    <img className="rounded" src="assets/img/whatisrevival.png"  />
  
  <div className="card-block">
    <p className="text-justify">REVIVAL is a community-based Binance smart chain project which strives to evolve and improve the current climate within the DeFi space.</p>
    <p className="text-center mt-40">
      <Link className="btn btn-primary btn-round" to="/article1/what-is-revival-defi">Read more</Link>
    </p>
  </div>
</article1>
  )

}
export default Article1;
