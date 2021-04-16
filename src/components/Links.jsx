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
} from '../constants';

// <Columns
//   leftColumnChildren={(
//     <Button link={selfEntitledTidalLink} ctaLabel="Listen on Tidal" className="text-center full-width-button" type={buttonTypes.SECONDARY}/>
//   )}
//   rightColumnChildren={(
//     <Button link={selfEntitledAmazonLink} ctaLabel="Listen on Amazon" className="text-center full-width-button" type={buttonTypes.SECONDARY}/>
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
            <Button link={selfEntitledSpotifyLink} ctaLabel="Listen on Spotify" className="text-center full-width-button" type={buttonTypes.SECONDARY}/>
          )}
          rightColumnChildren={(
            <Button link={selfEntitledAppleLink} ctaLabel="Listen on Apple Music" className="text-center full-width-button" type={buttonTypes.SECONDARY}/>
          )}
        />
        <Headline type={headlineTypes.SECONDARY} className="highlight">Watch New Videos</Headline>
        <Columns
          leftColumnChildren={(
            <Button link={ostrichYouTubeLink} ctaLabel="Ostrich Therapy" className="text-center full-width-button" type={buttonTypes.SECONDARY}/>
          )}
          rightColumnChildren={(
            <Button link={bitcoinGamblerYoutTubeLink} ctaLabel="The Bitcoin Gambler" className="text-center full-width-button" type={buttonTypes.SECONDARY}/>
          )}
        />
        <Columns
          leftColumnChildren={(
            <Button link={wayOverYonderYouTubeLink} ctaLabel="Way Over Yonder in the Minor Key" className="text-center full-width-button" type={buttonTypes.SECONDARY}/>
          )}
          rightColumnChildren={null}
        />

        <Headline type={headlineTypes.SECONDARY} >Reviews</Headline>
        <Columns
          leftColumnChildren={(
            <Button link="https://americansongwriter.com/review-cole-quest-makes-granddad-proud/" ctaLabel="American Songwriter" className="text-center full-width-button" type={buttonTypes.SECONDARY}/>
          )}
          rightColumnChildren={(
            <Button link="https://americanahighways.org/2021/04/16/review-cole-quest-and-the-city-pickers-self-entitled-is-bright-stellar-performance/" ctaLabel="Americana Highways" className="text-center full-width-button" type={buttonTypes.SECONDARY}/>
          )}
        />
        <Columns
          leftColumnChildren={(
            <Button link="https://thebluegrasssituation.com/read/watch-cole-quest-and-the-city-pickers-the-bitcoin-gambler/" ctaLabel="The Bluegrass Situation" className="text-center full-width-button" type={buttonTypes.SECONDARY}/>
          )}
          rightColumnChildren={(
            <Button link="https://bluegrasstoday.com/cole-quest-the-city-pickers-remember-woody-guthrie/" ctaLabel="Bluegrass Today" className="text-center full-width-button" type={buttonTypes.SECONDARY}/>
          )}
        />
        <Columns
          leftColumnChildren={(
            <Button link="http://www.themortonreport.com/celebrity/sports/music-reviews-six-little-known-artists-you-ought-to-hear/" ctaLabel="Six artists you ought to know on The Morton Report" className="text-center full-width-button" type={buttonTypes.SECONDARY}/>
          )}
          rightColumnChildren={(
            <Button link="http://www.thealternateroot.com/topten040721.html" ctaLabel="Top 10 on The Alternate Root" className="text-center full-width-button" type={buttonTypes.SECONDARY}/>
          )}
        />
        <Headline type={headlineTypes.SECONDARY} >More Links...</Headline>

        <Columns
          leftColumnChildren={(
            <Button link="/" ctaLabel="ColeQuest.com" className="text-center full-width-button" type={buttonTypes.SECONDARY} />
          )}
          rightColumnChildren={(
            <Button link="http://eepurl.com/beYHvT" ctaLabel="Join mailing list" className="text-center full-width-button" type={buttonTypes.SECONDARY}/>
          )}
        />
      </div>
    );
  }
}
