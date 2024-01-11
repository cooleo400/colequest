import React, { PureComponent } from 'react';
import Header from './Header';
import Columns from './Columns';
import Button, { buttonTypes } from './Button';
import Headline, { headlineTypes } from './Headline';
import {
  sevenElevenGlideLink,
  getYouTubeLink,
  // ostrichYouTubeId,
  // bitcoinVideoYouTubeId,
  // wayOverYonderVideoYouTubeId,
  // sevenElevenVideoYouTubeId,
  // sweetLittleGirlVideoYouTubeId,
  // ifIStillVideoYouTubeId,
  inTallBuildingsYouTubeId,
  sheTalksYouTubeId,
  selfEntitledAppleLink,
  selfEntitledSpotifyLink,
  // selfEntitledTidalLink,
  // selfEntitledAmazonLink,
  selfEntitledPurchaseLink,
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
        <Headline type={headlineTypes.SECONDARY}>Watch Videos</Headline>
        <Columns
          leftColumnChildren={(
            <Button link={getYouTubeLink(sheTalksYouTubeId)} className="text-center full-width-button" type={buttonTypes.SECONDARY}>She Talks A Lot (and I Like It)</Button>
          )}
          rightColumnChildren={(
            <Button link={getYouTubeLink(inTallBuildingsYouTubeId)} className="text-center full-width-button" type={buttonTypes.SECONDARY}>In Tall Buildings</Button>
          )}
        />
        <Headline type={headlineTypes.SECONDARY}>Self [En]Titled EP</Headline>
        <Columns
          leftColumnChildren={(
            <Button link={selfEntitledSpotifyLink} className="text-center full-width-button" type={buttonTypes.SECONDARY}>Listen on Spotify</Button>
          )}
          rightColumnChildren={(
            <Button link={selfEntitledAppleLink} className="text-center full-width-button" type={buttonTypes.SECONDARY}>Listen on Apple Music</Button>
          )}
        />
        <Columns
          leftColumnChildren={(
            <Button link={selfEntitledPurchaseLink} className="text-center full-width-button" type={buttonTypes.SECONDARY}>Purchase</Button>
          )}
          rightColumnChildren={null}
        />
        <Headline type={headlineTypes.SECONDARY} >Reviews</Headline>
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
        />
        <Headline type={headlineTypes.SECONDARY} >More Links...</Headline>
        <Columns
          leftColumnChildren={(
            <Button link="/" className="text-center full-width-button" type={buttonTypes.SECONDARY}>ColeQuest.com</Button>
          )}
          rightColumnChildren={(
            <Button link={youtubeChannelLink} className="text-center full-width-button" type={buttonTypes.SECONDARY}>Youtube Channel</Button>
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
