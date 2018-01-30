import React from 'react';
import Columns from './Columns';
import SocialIcon from './SocialIcon';
import coverImage from '../images/cover.jpg';

const Merchandise = () => {
  const leftColumnChildren = (
    <div>
      <img src={coverImage} alt="Cole Quest and The City Pickers" />
    </div>
  );
  const rightColumnChildren = (
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
  return (
    <Columns leftColumnChildren={leftColumnChildren} rightColumnChildren={rightColumnChildren} />
  );
};

export default Merchandise;
