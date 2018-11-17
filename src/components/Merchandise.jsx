import React from 'react';
import Columns from './Columns';
import SocialIcon from './SocialIcon';
import coverImage from '../images/cover.jpg';
import wearableCoverImage from '../images/merch.jpg';
import vinylCoverImage from '../images/vinyl.jpg';

const Merchandise = () => {
  const cdImage = (
    <div>
      <img src={coverImage} alt="Cole Quest and The City Pickers CD" />
    </div>
  );
  const cdDescription = (
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

  const wearableImage = (
    <div>
      <img src={wearableCoverImage} alt="Pocket Tees, Hats and Koozies!" />
    </div>
  );
  const wearableDescription = (
    <div>
      <a href="mailto:info@colequest.com">
        <h4 className="margin-top-none">Pocket tee's, trucker hats and koozies!</h4>
      </a>
      <p>Various color and size combinations of wearable gear with our logo smacked on it. To get your own, catch one of our live shows or reach out and we'll do our best to ship it when we can.</p>
      <p>$15 Shirts<br/>$10 Hats<br/>$3 Koozies</p>
      <div>
        <a href="mailto:info@colequest.com" className="order-link">Email us</a>
      </div>
    </div>
  );

  const vinylImage = (
    <div>
      <img src={vinylCoverImage} alt="Limited Edition Lath Cut Records" />
    </div>
  );
  const vinylDescription = (
    <div>
      <a href="mailto:info@colequest.com" className="highlight" >
        <h4 className="margin-top-none">Limited Edition Lathe Cut Records</h4>
      </a>
      <p>Recorded live at <a href="https://leestavall.com/collections/livesessions/products/lvls524?variant=12441059360812" target="_blank">LeestaVall Record Studios</a>, these limited edition lathe cut record releases are made on a modified antique record cutting lathe from the 1950's. Each record is handmade, one at a time, in real time, by a real person.</p>
      <p>$20</p>
      <div>
        <a href="mailto:info@colequest.com" className="order-link">Email us</a>
      </div>
    </div>
  );

  return (
    <div>
      <div className="margin-bottom-md">
        <Columns leftColumnChildren={vinylImage} rightColumnChildren={vinylDescription} />
      </div>
      <div>
        <Columns leftColumnChildren={wearableImage} rightColumnChildren={wearableDescription} />
      </div>
      <div>
        <Columns leftColumnChildren={cdImage} rightColumnChildren={cdDescription} />
      </div>
    </div>
  );
};

export default Merchandise;
