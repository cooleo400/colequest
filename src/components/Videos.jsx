import React, { PureComponent } from 'react';
import Columns from './Columns';
import Video from './Video';
import Link from './Link';
import SocialIcon from './SocialIcon';
import Button, { buttonTypes } from './Button';
import {
  linktreeHomegrownLink,
  bandcampHomegrownLink,
  iAintYTId,
  inTallBuildingsYTId,
  instrumentMedleyYTId,
  sheTalksYTId
} from '../constants';

class Videos extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const instrumentMedleyVideo = <Video youtubeId={instrumentMedleyYTId} />;
    const doReMiVideo = <Video youtubeId="SPPbG1u4lvU" />;
    const inTallBuildingsVideo = <Video youtubeId={inTallBuildingsYTId} />;
    const sheTalksVideo = <Video youtubeId={sheTalksYTId} />;

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
        <h4 className="text-center highlight">HOMEGROWN LP</h4>
        <p>Our new album - Homegrown - will be released on <Link href="http://jalopyrecords.org">Jalopy Records</Link> on July 18! In the mean time you can stream and watch music videos for our singles. You can also <Link href={bandcampHomegrownLink}>pre-order the vinyl here</Link>!</p>
        <p>
          <Button link={linktreeHomegrownLink} external className="text-center full-width-button" >Stream I Ain't</Button>
        </p>
        <Video youtubeId={iAintYTId} />;
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
