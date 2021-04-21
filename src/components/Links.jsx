import React, { PureComponent } from 'react';
import Header from './Header';
import Columns from './Columns';
import Button, { buttonTypes } from './Button';
import Headline, { headlineTypes } from './Headline';
import {
  wayOverYonderYouTubeLink,
  bitcoinGamblerYoutTubeLink,
  ostrichYouTubeLink,
  selfEntitledAppleLink,
  selfEntitledSpotifyLink,
  // selfEntitledTidalLink,
  // selfEntitledAmazonLink,
  selfEntitledPurchaseLink
} from '../constants';

// <Columns
//   leftColumnChildren={(
//     <Button link={selfEntitledTidalLink} ctaLabel="Listen on Tidal" className="text-center full-width-button" type={buttonTypes.SECONDARY}></Button>
//   )}
//   rightColumnChildren={(
//     <Button link={selfEntitledAmazonLink} ctaLabel="Listen on Amazon" className="text-center full-width-button" type={buttonTypes.SECONDARY}></Button>
//   )}
// />

export default class Links extends PureComponent {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <Header showVideo={false} />
        <Headline type={headlineTypes.SECONDARY} className="highlight">Self [En]Titled EP</Headline>
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
        <Headline type={headlineTypes.SECONDARY} className="highlight">Watch New Videos</Headline>
        <Columns
          leftColumnChildren={(
            <Button link={ostrichYouTubeLink} className="text-center full-width-button" type={buttonTypes.SECONDARY}>Ostrich Therapy</Button>
          )}
          rightColumnChildren={(
            <Button link={bitcoinGamblerYoutTubeLink} className="text-center full-width-button" type={buttonTypes.SECONDARY}>The Bitcoin Gambler</Button>
          )}
        />
        <Columns
          leftColumnChildren={(
            <Button link={wayOverYonderYouTubeLink} className="text-center full-width-button" type={buttonTypes.SECONDARY}>Way Over Yonder in the Minor Key</Button>
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
            <Button link="http://www.themortonreport.com/celebrity/sports/music-reviews-six-little-known-artists-you-ought-to-hear/" className="text-center full-width-button" type={buttonTypes.SECONDARY}>Six artists you ought to know on The Morton Report</Button>
          )}
          rightColumnChildren={(
            <Button link="http://www.thealternateroot.com/topten040721.html" className="text-center full-width-button" type={buttonTypes.SECONDARY}>Top 10 on The Alternate Root</Button>
          )}
        />
        <Headline type={headlineTypes.SECONDARY} >More Links...</Headline>

        <Columns
          leftColumnChildren={(
            <Button link="/" className="text-center full-width-button" type={buttonTypes.SECONDARY}>ColeQuest.com</Button>
          )}
          rightColumnChildren={(
            <Button link="http://eepurl.com/beYHvT" className="text-center full-width-button" type={buttonTypes.SECONDARY}>Join mailing list</Button>
          )}
        />
      </div>
    );
  }
}
