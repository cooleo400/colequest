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

export default class Links extends PureComponent {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div style={{ paddingBottom: '20px' }}>
        <Header showVideo={false} />
        <Headline type={headlineTypes.SECONDARY} className="highlight">New Album - Homegrown - Available July 18</Headline>
        <Columns
          leftColumnChildren={(
            <Button link={linktreeHomegrownLink} className="text-center full-width-button" type={buttonTypes.SECONDARY}>Pre-save Homegrown</Button>
          )}
          rightColumnChildren={(
            <Button link={bandcampHomegrownLink} className="text-center full-width-button" type={buttonTypes.SECONDARY}>Pre-Order Vinyl</Button>
          )}
        />
        <Headline type={headlineTypes.SECONDARY}>Listen now</Headline>
        <Columns
          leftColumnChildren={(
            <Button link={linktreeHomegrownLink} className="text-center full-width-button" type={buttonTypes.SECONDARY}>Stream Where I'm From</Button>
          )}
          rightColumnChildren={null}
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
        <Headline type={headlineTypes.SECONDARY} >Reviews</Headline>
        <Columns
          leftColumnChildren={(
            <Button link="https://americansongwriter.com/cole-quest-and-the-city-pickers-led-by-woody-guthries-grandson-revisit-his-grandfathers-new-york-city-era-on-fourth-album-new-single-where-im-from-exclusive/" className="text-center full-width-button" type={buttonTypes.SECONDARY}>American Songwriter Premier</Button>
          )}
          rightColumnChildren={(
            <Button link="https://folkalley.com/song-premiere-cole-quest-the-city-pickers-tall-buildings/" className="text-center full-width-button" type={buttonTypes.SECONDARY}>Folk Alley Premier</Button>
          )}
        />
        <Columns
          leftColumnChildren={(
            <Button link="https://www.wideopencountry.com/cole-quest-and-the-city-pickers-drop-new-single/" className="text-center full-width-button" type={buttonTypes.SECONDARY}>Wide Open Country</Button>
          )}
          rightColumnChildren={(
            <Button link="https://glidemagazine.com/313138/listen-cole-quest-and-the-city-pickers-showcase-bluegrass-prowess-on-infectious-i-aint/" className="text-center full-width-button" type={buttonTypes.SECONDARY}>Glide Magazine</Button>
          )}
        />
        <Columns
          leftColumnChildren={(
            <Button link="https://www.gratefulweb.com/articles/sowing-tradition-reaping-innovation-cole-quest-city-pickers" className="text-center full-width-button" type={buttonTypes.SECONDARY}>Grateful Web</Button>
          )}
          rightColumnChildren={(
            <Button link="http://www.thealternateroot.com/topten04302025.html" className="text-center full-width-button" type={buttonTypes.SECONDARY}>The Alternate Root Top 10</Button>
          )}
        />        
{/*         
        <Columns
          leftColumnChildren={(
            <Button link="https://americansongwriter.com/review-cole-quest-makes-granddad-proud/" className="text-center full-width-button" type={buttonTypes.SECONDARY}>American Songwriter</Button>
          )}
          rightColumnChildren={(
            <Button link="https://americanahighways.org/2021/04/16/review-cole-quest-and-the-city-pickers-self-entitled-is-bright-stellar-performance/" className="text-center full-width-button" type={buttonTypes.SECONDARY}>Americana Highways</Button>
          )}
        />
        <Columns
          leftColumnChildren={(
            <Button link="https://thebluegrasssituation.com/read/watch-cole-quest-and-the-city-pickers-the-bitcoin-gambler/" className="text-center full-width-button" type={buttonTypes.SECONDARY}>The Bluegrass Situation</Button>
          )}
          rightColumnChildren={(
            <Button link="https://bluegrasstoday.com/cole-quest-the-city-pickers-remember-woody-guthrie/" className="text-center full-width-button" type={buttonTypes.SECONDARY}>Bluegrass Today</Button>
          )}
        />
        <Columns
          leftColumnChildren={(
            <Button link={sevenElevenGlideLink} className="text-center full-width-button" type={buttonTypes.SECONDARY}>Glide Magazine</Button>
          )}
          rightColumnChildren={(
            <Button link="http://www.themortonreport.com/celebrity/sports/music-reviews-six-little-known-artists-you-ought-to-hear/" className="text-center full-width-button" type={buttonTypes.SECONDARY}>Six artists you ought to know on The Morton Report</Button>
          )}
        />
        <Columns
          leftColumnChildren={(
            <Button link="http://www.thealternateroot.com/topten040721.html" className="text-center full-width-button" type={buttonTypes.SECONDARY}>Top 10 on The Alternate Root</Button>
          )}
          rightColumnChildren={null}
        /> */}
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
