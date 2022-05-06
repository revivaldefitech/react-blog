import React from 'react';
import { Link } from 'react-router-dom';
import './article3.css'

const Article3 = () => {
  return (
    <article1 className="mt-90">
  <header className="text-center mb-40">
    <h3>
    New and Updated Whitepaper has Been Released by RevivalDeFi
    </h3>
    <div className="link-color-default fs-5">
      <a>News, </a>
      <time>May 6, 2022</time>
    </div>
  </header>

    <div className='img-container'>
      <img className="rounded article-img" src="assets/img/whitepaper.png"  />
    </div>
  
  <div className="card-block">
    <p className="text-justify">Upon inception, a new crypto project will typically release what is known as a Litepaper. A Litepaper will consist of a short history about the project and the team involved.</p>
    <p className="text-center mt-40">
      <Link className="btn btn-primary btn-round" to="article3/whitepaper">Read more</Link>
    </p>
  </div>
</article1>
  )

}
export default Article3;
