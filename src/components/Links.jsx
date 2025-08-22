import React, { PureComponent } from 'react';
import Header from './Header';
import Columns from './Columns';
import Button, { buttonTypes } from './Button';
import Headline, { headlineTypes } from './Headline';
import {
  bandcampHomegrownLink,
  linktreeHomegrownLink,
  iAintYTId,
  inTallBuildingsAlbumYTId,
  whereImFromAlbumYTId,
  soPraVariarVideoYTId,
  sevenElevenGlideLink,
  getYouTubeLink,
  inTallBuildingsYTId,
  sheTalksYTId,
  youtubeChannelLink
} from '../constants';

const reviews = [
  {
    title: 'No Depression Review',
    link: 'https://nodepression.org/album-review-on-homegrown-cole-quest-and-the-city-pickers-deftly-move-the-legacy-of-woody-guthrie-along-in-all-the-right-ways/'
  },
  {
    title: 'Americana Highways Review',
    link: 'https://americanahighways.org/2025/07/14/review-cole-quest-the-city-pickers-homegrown/'
  },
  {
    title: 'American Songwriter Feature',
    link: 'https://americansongwriter.com/cole-quest-and-the-city-pickers-led-by-woody-guthries-grandson-revisit-his-grandfathers-new-york-city-era-on-fourth-album-new-single-where-im-from-exclusive/'
  },
  {
    title: 'Glide Magazine Review',
    link: 'https://glidemagazine.com/315052/cole-quest-woody-guthries-grandson-pays-debt-to-legendary-balladeer-commands-his-own-journey-feature/#google_vignette'
  },
  {
    title: 'Americana UK Feature',
    link: 'https://americana-uk.com/cole-quest-and-the-city-pickers-i-aint-no-way'
  },  
  {
    title: 'Folk Alley Premier',
    link: 'https://folkalley.com/song-premiere-cole-quest-the-city-pickers-tall-buildings/'
  },
  {
    title: 'Wide Open Country',
    link: 'https://www.wideopencountry.com/cole-quest-and-the-city-pickers-drop-new-single/'
  },
  // {
  //   link: 'https://glidemagazine.com/313138/listen-cole-quest-and-the-city-pickers-showcase-bluegrass-prowess-on-infectious-i-aint/',
  //   title: 'Glide Magazine'
  // },
  // {
  //   link: 'https://www.gratefulweb.com/articles/sowing-tradition-reaping-innovation-cole-quest-city-pickers',
  //   title: 'Grateful Web'
  // },
  // {
  //   link: 'http://www.thealternateroot.com/topten04302025.html',
  //   title: 'The Alternate Root Top 10'
  // }
]



export default class Links extends PureComponent {
  constructor(props){
    super(props);
  }
  renderReviews(reviewOptions) {
    const pairs = [];
    for (let i = 0; i < reviewOptions.length; i += 2) {
      pairs.push({
        left: reviewOptions[i],
        right: reviewOptions[i + 1] || null
      });
    }

    return pairs.map((pair, index) => (
      <Columns
        key={index}
        leftColumnChildren={
          pair.left ? (
            <Button link={pair.left.link} className="text-center full-width-button" type={buttonTypes.SECONDARY}>
              {pair.left.title}
            </Button>
          ) : null
        }
        rightColumnChildren={
          pair.right ? (
            <Button link={pair.right.link} className="text-center full-width-button" type={buttonTypes.SECONDARY}>
              {pair.right.title}
            </Button>
          ) : null
        }
      />
    ));
  }
  render() {
    return (
      <div style={{ paddingBottom: '20px' }}>
        <Header showVideo={false} />
        <Headline type={headlineTypes.SECONDARY} className="highlight">New Album - Homegrown - Out Now!</Headline>    
        <Columns
          leftColumnChildren={(
            <Button link={linktreeHomegrownLink} className="text-center full-width-button" type={buttonTypes.SECONDARY}>Stream Homegrown</Button>
          )}
          rightColumnChildren={(
            <Button link={bandcampHomegrownLink} className="text-center full-width-button" type={buttonTypes.SECONDARY}>Purchase Homegrown</Button>
          )}
        />
        <Headline type={headlineTypes.SECONDARY}>Music Videos</Headline>
        <Columns
          leftColumnChildren={(
            <Button link={getYouTubeLink(whereImFromAlbumYTId)} className="text-center full-width-button" type={buttonTypes.SECONDARY}>Watch Where I'm From Video</Button>
          )}
          rightColumnChildren={(
            <Button link={getYouTubeLink(inTallBuildingsAlbumYTId)} className="text-center full-width-button" type={buttonTypes.SECONDARY}>Watch In Tall Buildings Video</Button>
          )}
        />
        <Columns
          leftColumnChildren={(
            <Button link={getYouTubeLink(iAintYTId)} className="text-center full-width-button" type={buttonTypes.SECONDARY}>Watch I Ain't Video</Button>
          )}
          rightColumnChildren={null}
        />
        {/* <Headline type={headlineTypes.SECONDARY}>Live Videos</Headline>
        <Columns
          leftColumnChildren={(
            <Button link={getYouTubeLink(sheTalksYTId)} className="text-center full-width-button" type={buttonTypes.SECONDARY}>She Talks A Lot (and I Like It)</Button>
          )}
          rightColumnChildren={(
            <Button link={getYouTubeLink(inTallBuildingsYTId)} className="text-center full-width-button" type={buttonTypes.SECONDARY}>In Tall Buildings</Button>
          )}
        /> */}
        <Headline type={headlineTypes.SECONDARY} >Reviews and Features</Headline>
        {this.renderReviews(reviews)}
        <Headline type={headlineTypes.SECONDARY} >More Links...</Headline>
        <Columns
          leftColumnChildren={(
            <Button link="/" className="text-center full-width-button" type={buttonTypes.SECONDARY}>ColeQuest.com</Button>
          )}
          rightColumnChildren={(
            <Button link={youtubeChannelLink} className="text-center full-width-button" type={buttonTypes.SECONDARY}>YouTube Channel</Button>
          )}
        />
        <Columns
          leftColumnChildren={(
            <Button link="http://eepurl.com/beYHvT" className="text-center full-width-button" type={buttonTypes.SECONDARY}>Join mailing list</Button>
          )}
          rightColumnChildren={null}
        />
      </div>
    );
  }
}
