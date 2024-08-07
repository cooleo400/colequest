import React from 'react';
import WithNew from './WithNew';
import Link from './Link';
import coverImage from '../images/cover.jpg';
import selfEntitledCover from '../images/front-cover.jpg';
import patchesImage from '../images/patches.jpg';
// import wearableCoverImage from '../images/merch.jpg';
// import vinylCoverImage from '../images/vinyl.jpg';
// import bandanaCoverImage from '../images/bandana.jpg';
import shirtToteImage from '../images/shirt-totes.jpg';
import louvinNYImage from '../images/i_louvin_ny.jpg';
import tourneePoster from '../images/Tour-Poster-signed-web.jpg';

const merchData = [
  {
    image: shirtToteImage,
    title: 'Shirts N Totes',
    description: (<span>Including illustrations by our friend <Link href="https://www.instagram.com/george_and_corey/">Corey Cavangolo</Link>, take home this rootsy raccoon ringer tee, or the two steppin' elephant tote as a great way to show your support for the band and look good doing it. Both are screen printed by hand in Brooklyn, NY by <Link  href="https://funhousehouse.fun/">Funhouse Screen Printing</Link>. Sizes and Colors available upon request.</span>),
    link: 'mailto:info@colequest.com',
    price: '$25 Shirt / $15 Tote',
    ctaLabel: 'Email us',
    isNew: true,
  },
  {
    image: tourneePoster,
    title: 'Deutschland Tournee 2023 Poster (Signed)',
    description: (<span>This beautiful piece of art, dedicated to our 2023 Germany tour, is a mixed media - collage (Westways & LIFE magazines from 50s-70s), watercolor and pen/ink on canvas includes hand lettering to give it that hand crafted look and feel. Signed by Cole Quest, Christian Apuzzo, Matheus Verardino, Mike Mulhollan and Craig Akin. Designed and created by <a href="http://www.danamanon.com/" target="_blank" rel="noopener noreferrer">Dana Manon</a>.</span>),
    link: 'mailto:info@colequest.com',
    price: '$5',
    ctaLabel: 'Email us',
    isNew: false,
  },
  {
    image: louvinNYImage,
    title: 'I Louvin NY Sticker',
    description: 'How do you feel about NY? Do you heart Ira and Charlie Louvin? Well, now you can tell the world with a proud sticker created by some of us who feel strongly about them both.',
    link: 'https://forms.gle/WLadHmPQCsmUXSBq7',
    price: '$3',
    ctaLabel: 'Order',
    isNew: false,
  },
  {
    image: selfEntitledCover,
    title: 'Self [En]Titled EP',
    description: 'Released April 16, 2021 on Omnivore Records, this debut EP contains witty originals and crucial covers for the modern listener, including a cover of Woody Guthrie\'s Way Over Yonder in the Minor Key. As Tony Trischka says, "Cole and his cohorts have put together a savory, poignant, hard-driving album with a rainbow of warm musical colors." Click the button below to purchase a CD or to digitally download.',
    link: 'http://omnivorerecordings.com/shop/cole-quest-and-the-city-pickers-self-entitled/',
    price: '$11.98 CD / $7.99 MP3',
    ctaLabel: 'Order',
    isNew: false,
  },
  {
    image: patchesImage,
    title: 'Patches',
    description: 'Designed and made specifically for the release of our EP Self [En]Titled, these patches are the front and back covers of the album art and made from a wonderfully reflective thread to add a little extra glimer to your clothes! The patches are iron on patches, no sewing required!',
    link: 'mailto:info@colequest.com',
    price: '$3 Per Patch / $5 for 1 of each',
    ctaLabel: 'Email us',
    isNew: false,
  },

  // {
  //   image: bandanaCoverImage,
  //   title: 'Brooklyn Bandanas',
  //   description: (<span>Made by our friend Katherine Slinghuff at <a href="https://www.brooklynbandanas.com/" target="_blank" rel="noopener noreferrer" >Brooklyn Bandanas</a>, these nifty little hand dryers are great for keeping you cool when the band turns up the heat or for those touching quiter moments to dry your eyes (product tested and approved).</span>),
  //   link: 'mailto:info@colequest.com',
  //   price: (<span className="strike">$15</span>),
  //   ctaLabel: 'Email us',
  //   isNew: false,
  // },
  // {
  //   image: wearableCoverImage,
  //   title: 'Pocket tee\'s, trucker hats and koozies!',
  //   description: 'Various color and size combinations of wearable gear with our logo smacked on it. To get your own, catch one of our live shows or reach out and we\'ll do our best to ship it when we can.',
  //   link: 'mailto:info@colequest.com',
  //   price: (<span><span className="strike">$15 Shirts</span> / <span className="strike">$10 Hats</span> / $3 Koozies</span>),
  //   ctaLabel: 'Email us',
  //   isNew: false,
  // },
  // {
  //   image: vinylCoverImage,
  //   title: 'Limited Edition Lath Cut Records',
  //   description: 'Recorded live at LeestaVall Record Studios, these limited edition lathe cut record releases are made on a modified antique record cutting lathe from the 1950\'s. Each record is handmade, one at a time, in real time, by a real person.',
  //   link: 'mailto:info@colequest.com',
  //   price: (<span className="strike">$20</span>),
  //   ctaLabel: 'Email us',
  //   isNew: false,
  // },
  {
    image: coverImage,
    title: 'Cole Quest and The City Pickers CD',
    description: 'Released in 2016, our debut CD contains a handful of originals as well as a few of our favorite traditional tunes, recorded live at The Magic Shop studio. Click the Order button below to purchase a CD, or your other favorite vendor for digital downloads.',
    link: 'https://store.woodyguthrie.org/products/cole-quest-and-the-city-pickers',
    price: '$10',
    ctaLabel: 'Order',
    isNew: false,
  },
];

const MerchItem = ({
  image,
  title,
  description,
  link,
  price,
  ctaLabel,
  isNew
 }) => {
  const gridDescription = (
    <div className="grid-item-description">
      <div>
        <a href={link} target="_blank">
          <h4 className="margin-top-none">{title}</h4>
        </a>
        <p>{description}</p>
        <p>{price}</p>
      </div>
      <div className="grid-item-link">
        <a href={link} target="_blank" className="button order-link">{ctaLabel}</a>
      </div>
    </div>
  );
  const gridImage = (
    <div>
      <img src={image} alt={title} />
    </div>
  );

  return (
    <WithNew isNew={isNew} className="grid-column">
      <GridCard image={gridImage} description={gridDescription} />
    </WithNew>
  );
};

const GridCard = ({ image, description }) => (
  <div className="grid-item margin-bottom-md">
    <div className="grid-item-image">
      {image}
    </div>
    {description}
  </div>
);

const Grid = ({ children }) => (
  <div className="grid-container">
    {children}
  </div>
);

const Merchandise = () => {

  const gridItems = merchData.map((props) => <MerchItem key={props.title} {...props} />);

  return (
    <Grid>
      {gridItems}
    </Grid>
  );
};

export default Merchandise;
