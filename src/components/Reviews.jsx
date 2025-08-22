import React, { PureComponent } from 'react';
import Headline, { headlineTypes } from './Headline';
import Columns from './Columns';
import Quote from './Quote';

const reviews = [
  {
    title: 'No Depression Review',
    link: 'https://nodepression.org/album-review-on-homegrown-cole-quest-and-the-city-pickers-deftly-move-the-legacy-of-woody-guthrie-along-in-all-the-right-ways/',
    quote: "You start to realize how fully Quest has made his ancestral musical lineage a part of his own place in folk music history circa 2025. And lord knows we need it.",
  },
  {
    title: 'Americana Highways Review',
    link: 'https://americanahighways.org/2025/07/14/review-cole-quest-the-city-pickers-homegrown/',
    quote: "",
  },
  {
    title: 'American Songwriter Feature',
    link: 'https://americansongwriter.com/cole-quest-and-the-city-pickers-led-by-woody-guthries-grandson-revisit-his-grandfathers-new-york-city-era-on-fourth-album-new-single-where-im-from-exclusive/',
    quote: "",
  },
  {
    title: 'Glide Magazine Review',
    link: 'https://glidemagazine.com/315052/cole-quest-woody-guthries-grandson-pays-debt-to-legendary-balladeer-commands-his-own-journey-feature/#google_vignette',
    quote: "Bluegrass-anchored energy, blues-stirred restlessness, and folk-infused introspection… Among the new recordings, there is a country, heartbreak song, there are overt avowals of bluegrass, and there are keystones of gospel and bluesy hymnals. There is discreet humor. There is the sound of poetry in the words.",
  },
  {
    title: 'Americana UK Feature',
    link: 'https://americana-uk.com/cole-quest-and-the-city-pickers-i-aint-no-way',
    quote: "",
  },  
  {
    title: 'Folk Alley Premier',
    link: 'https://folkalley.com/song-premiere-cole-quest-the-city-pickers-tall-buildings/',
    quote: "",
  },
  {
    title: 'Wide Open Country',
    link: 'https://www.wideopencountry.com/cole-quest-and-the-city-pickers-drop-new-single/',
    quote: "",
  },
]

class Reviews extends PureComponent {
  constructor(props) {
    super(props);
  }

  renderReviews(reviewQuotes) {
    const pairs = [];
    for (let i = 0; i < reviewQuotes.length; i += 2) {
      pairs.push({
        left: reviewQuotes[i],
        right: reviewQuotes[i + 1] || null
      });
    }

    return pairs.map((pair, index) => (
        // <div className="text-center">
        <Columns
            key={index}
            leftColumnChildren={
            pair.left ? (
                <Quote 
                    attribution={pair.left.attribution} 
                    attributionLink={pair.left.attributionLink}
                >
                    {pair.left.quote}
                </Quote>
            ) : null
            }
            rightColumnChildren={
            pair.right ? (
                <Quote 
                    attribution={pair.right.attribution} 
                    attributionLink={pair.right.attributionLink}
                >
                    {pair.right.quote}
                </Quote>
            ) : null
            }
        />
        // </div>
    ));
  }

  render() {
    return (
      <div>
        <Headline type={headlineTypes.PRIMARY}>Reviews</Headline>
        {this.renderReviews(reviews)}
      </div>
    );
  }
}

export default Reviews;
