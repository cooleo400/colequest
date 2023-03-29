import React, { PureComponent } from 'react';
import Headline, { headlineTypes } from './Headline';
import Bio from './Bio';
import Link from './Link';
import Columns from './Columns';
import Loader from './Loader';
import Quote from './Quote';

const epkLink = 'https://drive.google.com/open?id=1Af2V_dZbPYB8LN78R_gUQdoXeZ0Ihn0-';

import pressPhotoOne from '../images/conveyor-shirts.jpg';

class PressKit extends PureComponent {
  constructor(props) {
    super(props);
  }

  renderPhotoLink(src, alt = ''){
    return (
      <a href={src} target="_blank" >
        <img src={src} alt={alt} className="display-block" />
      </a>
    );
  }

  render() {

    return (
      <div>
        <Bio />

        // Links to various press photos
        <Columns leftColumnChildren={this.renderPhotoLink(pressPhotoOne)} />

        // Stage Plot
        <Link href={epkLink}>EPK</Link>

        // Tech Rider

        // Videos

        // Contact
      </div>
    );
  }
}

export default PressKit;
