import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { lyricConfig } from './lyricConfig';

class Lyric extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    const { 
        songKey, 
        onClick,
        isShowLyric
    } = this.props;

    const {
        title,
        body,
        author
    } = lyricConfig[songKey];

    const lyricClass = classNames('section-content', {
        'open': isShowLyric,
    });

    return (
      <div>
        <a href="#" onClick={onClick} >
            <h4>{title}</h4>
        </a>
        <div className={lyricClass}>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <p><span className="color-bg-1">{ author }</span></p>
        </div>
      </div>
    );
  }
}

Lyric.propTypes = {
  isShowLyric: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  songKey: PropTypes.string.isRequired,
};

Lyric.defaultProps = {
    isShowLyric: false,
}

export default Lyric;
