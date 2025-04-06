import React, { PureComponent } from 'react';
import Columns from './Columns';
import Video from './Video';
import Link from './Link';
import SocialIcon from './SocialIcon';
import {
  inTallBuildingsYouTubeId,
  instrumentMedleyId,
  sheTalksYouTubeId
} from '../constants';

class Videos extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const instrumentMedleyVideo = <Video youtubeId={instrumentMedleyId} />;
    const doReMiVideo = <Video youtubeId="SPPbG1u4lvU" />;
    const inTallBuildingsVideo = <Video youtubeId={inTallBuildingsYouTubeId} />;
    const sheTalksVideo = <Video youtubeId={sheTalksYouTubeId} />;

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
        <p>For the release of our album, Self [En]Titled,  we teamed up with the amazingly talented <Link href="https://www.doingfunstuff.com/">Megan O'Neill</Link> to create <strong>SIX(!!)</strong> unique animated music videos—one for each track on the EP! Each of the hand crafted characters and animated story lines help to bring a visual identity to each of our unique tracks. <Link href="https://www.doingfunstuff.com/projects/city-pickers-music-videos">Read more on Megan's website</Link>.</p>
        <Video url={'https://www.youtube.com/embed/videoseries?si=b_AAvHHBc86Ku9Zk&amp;list=PL_6w4fkYvQtDwB3-Brz6VKob9e1jBhEaz'} />
        <h4 className="text-center">LIVE PERFORMANCES</h4>
        <Columns leftColumnChildren={doReMiVideo} rightColumnChildren={sheTalksVideo} marginBottom="small" />
        <Columns leftColumnChildren={inTallBuildingsVideo} rightColumnChildren={instrumentMedleyVideo} marginBottom="small" />
      </div>
    );
  }
}

export default Videos;
