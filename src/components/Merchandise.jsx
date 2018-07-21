import React from 'react';
import Columns from './Columns';
import SocialIcon from './SocialIcon';
import coverImage from '../images/cover.jpg';
import wearableCoverImage from '../images/merch.jpg';

const Merchandise = () => {
  const cdLeftCol = (
    <div>
      <img src={coverImage} alt="Cole Quest and The City Pickers CD" />
    </div>
  );
  const cdRightCol = (
    <div>
      <a href="https://store.woodyguthrie.org/products/cole-quest-and-the-city-pickers" target="_blank">
        <h4 className="margin-top-none">Cole Quest and The City Pickers CD</h4>
      </a>
      <p>A handful of original tunes as well as a few of our favorite traditional tunes, recorded live at The Magic Shop studio. Click the Order button below to purchase a CD, or your other favorite vendor for digital downloads.</p>
      <p>$10.00</p>
      <div>
        <a href="https://store.woodyguthrie.org/products/cole-quest-and-the-city-pickers" target="_blank" className="button order-link">Order</a>
      </div>
      <div className="social-container-md">
        <SocialIcon type="apple" />
        <SocialIcon type="spotify" />
        <SocialIcon type="bandcamp" />
        <SocialIcon type="googlePlay" />
      </div>
    </div>
  );

  const wearableLeftCol = (
    <div>
      <img src={wearableCoverImage} alt="Pocket Tee's, Hats and Koozies!" />
    </div>
  );
  const wearableRightCol = (
    <div>
      <a href="mailto:info@colequest.com" className="highlight" >
        <h4 className="margin-top-none">Pocket tee's, trucker hats and koozies!</h4>
      </a>
      <p>Various color and size combinations of wearable gear with our logo smacked on it. To get your own, catch one of our live shows or reach out and we'll do our best to ship it when we can.</p>
      <p>$15 Shirts<br/>$10 Hats<br/>$3 Koozies</p>
      <div>
        <a href="mailto:info@colequest.com" className="order-link">Email us</a>
      </div>
    </div>
  );

  return (
    <div>
      <div className="margin-bottom-md">
        <Columns leftColumnChildren={cdLeftCol} rightColumnChildren={cdRightCol} />
      </div>
      <div>
        <Columns leftColumnChildren={wearableLeftCol} rightColumnChildren={wearableRightCol} />
      </div>
    </div>
  );
};

export default Merchandise;
