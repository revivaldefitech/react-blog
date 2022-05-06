import React from 'react';
import { Link } from 'react-router-dom';
import './article2.css'

const Article2 = () => {
  return (
    <article1 className="mt-90">
  <header className="text-center mb-40">
    <h3>
    RevivalDeFi Project Announces Locked Staking Pools
    </h3>
    <div className="link-color-default fs-5">
      <a>News, </a>
      <time>April 28, 2022</time>
    </div>
  </header>

    <div className='img-container'>
      <img className="rounded article-img" src="assets/img/stakeviv.jpeg"  />
    </div>
  
  <div className="card-block">
    <p className="text-justify">The RevivalDeFi Project is pleased to announce our first 12 month, locked staking pool on UniCrypt. As the team unrolls plans for the future, keep in mind that community involvement is key.</p>
    <p className="text-center mt-40">
      <Link className="btn btn-primary btn-round" to="article2/locked-staking">Read more</Link>
    </p>
  </div>
</article1>
  )

}
export default Article2;
