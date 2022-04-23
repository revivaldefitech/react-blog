import React from 'react';
import { Link } from 'react-router-dom';


const Article = () => {
  return (
    <article className="mt-90">
  <header className="text-center mb-40">
    <h3>
      <a href="/article/revivalhistory">The History of the Revival dApp</a>
    </h3>
    <div className="link-color-default fs-5">
      <a href="#">News, </a>
      <time>April 23, 2022</time>
    </div>
  </header>
  <a href="/article/revivalhistory">
    <img className="rounded" src="assets/img/socialbanner.jpeg" target="article/revivalhistory"  alt="/article/revivalhistory" />
  </a>
  <div className="card-block">
    <p className="text-justify">Although not originally planned, staking in the Revival dApp has been wildly popular with our holders. Yes, you read that correctly, staking pools and even the dApp itself were not part of the original RevivalDeFi plan.</p>
    <p className="text-center mt-40">
      <Link className="btn btn-primary btn-round" to="/article/revivalhistory">Read more</Link>
    </p>
  </div>
</article>



  );
};

export default Article;