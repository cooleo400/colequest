import React, { PureComponent } from 'react';
import Header from './Header';
import Columns from './Columns';
import Button, { buttonTypes } from './Button';
import Headline, { headlineTypes } from './Headline';
import {
  wayOverYonderSpotifyLink,
  wayOverYonderYouTubeLink,
  bitcoinGamblerSpotifyLink,
  bitcoinGamblerYoutTubeLink,
  ostrichYouTubeLink
} from '../constants';

export default class Links extends PureComponent {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <Header showVideo={false} />
        <Headline type={headlineTypes.SECONDARY} className="highlight">Ostrich Therapy</Headline>
        <Button link={ostrichYouTubeLink} ctaLabel="Watch on YouTube" className="text-center full-width-button" type={buttonTypes.SECONDARY}/>
        <Headline type={headlineTypes.SECONDARY} className="highlight">Way Over Yonder in the Minor Key</Headline>
        <Columns
          leftColumnChildren={(
            <Button link={wayOverYonderYouTubeLink} ctaLabel="Watch on YouTube" className="text-center full-width-button" type={buttonTypes.SECONDARY}/>
          )}
          rightColumnChildren={(
            <Button link={wayOverYonderSpotifyLink} ctaLabel="Listen on Spotify" className="text-center full-width-button" type={buttonTypes.SECONDARY}/>
          )}
        />
        <Headline type={headlineTypes.SECONDARY} className="highlight">The Bitcoin Gambler</Headline>
        <Columns
          leftColumnChildren={(
            <Button link={bitcoinGamblerYoutTubeLink} ctaLabel="Watch on YouTube" className="text-center full-width-button" type={buttonTypes.SECONDARY}/>
          )}
          rightColumnChildren={(
            <Button link={bitcoinGamblerSpotifyLink} ctaLabel="Listen on Spotify" className="text-center full-width-button" type={buttonTypes.SECONDARY}/>
          )}
        />
        <Headline type={headlineTypes.SECONDARY} >Reviews</Headline>
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
