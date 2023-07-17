import React, { PureComponent } from 'react';
import Columns from './Columns';
import Video from './Video';
import SocialIcon from './SocialIcon';
import {
  ostrichYouTubeId,
  bitcoinVideoYouTubeId,
  wayOverYonderVideoYouTubeId,
  sevenElevenVideoYouTubeId,
  sweetLittleGirlVideoYouTubeId,
  ifIStillVideoYouTubeId
} from '../constants';

class Videos extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const sevenElevenVideo = <Video youtubeId={sevenElevenVideoYouTubeId} />;
    const ostrichTherapyLiveVideo = <Video youtubeId="WjJSC8v5bAg" />;
    const waxCyclinderVideo = <Video youtubeId="OCCV3hsgSyM" />;
    const themeTimeVideo = <Video youtubeId="B6bVcKoctL4" />;
    const doReMiVideo = <Video youtubeId="SPPbG1u4lvU" />;
    const wayOverYonderVideo = <Video youtubeId={wayOverYonderVideoYouTubeId} />;
    const bitcoinVideo = <Video youtubeId={bitcoinVideoYouTubeId} />;
    const ostrichVideo = <Video youtubeId={ostrichYouTubeId} />;
    const sweetVideo = <Video youtubeId={sweetLittleGirlVideoYouTubeId} />;
    const ifIStillVideo = <Video youtubeId={ifIStillVideoYouTubeId} />;

    return (
      <div>
        <h4 className="text-center">STREAMING MUSIC</h4>
        <div className="social-container">
          <div className="social-container-sm">
            <SocialIcon type="spotify-se" />
            <SocialIcon type="apple-se" />
            <SocialIcon type="youtube" />
          </div>
        </div>
        <h4 className="text-center">SELF [EN]TITLED EP</h4>
        <Columns leftColumnChildren={ostrichVideo} rightColumnChildren={bitcoinVideo} marginBottom="small" />
        <Columns leftColumnChildren={wayOverYonderVideo} rightColumnChildren={sevenElevenVideo} marginBottom="small" />
        <Columns leftColumnChildren={sweetVideo} rightColumnChildren={ifIStillVideo} marginBottom="small" />
        <h4 className="text-center">LIVE PERFORMANCES</h4>
        <Columns leftColumnChildren={doReMiVideo} rightColumnChildren={themeTimeVideo} marginBottom="small" />
        <Columns leftColumnChildren={ostrichTherapyLiveVideo} rightColumnChildren={waxCyclinderVideo} marginBottom="small" />
      </div>
    );
  }
}

export default Videos;
