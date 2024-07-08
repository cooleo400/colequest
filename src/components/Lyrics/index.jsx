import React, { PureComponent } from 'react';
import { songKeys } from './lyricConfig';
import Lyric from './Lyric';

const songs = [
  songKeys.BITCOIN,
  songKeys.BUY_ME_BACK,
  songKeys.I_AINT,
  songKeys.IF_I_STILL,
  songKeys.OSTRICH,
  songKeys.ONE_FINE_DAY,
  songKeys.SHE_TALKS,
  songKeys.SWEET_LITTLE_GIRL,
  songKeys.WHERE_IM_FROM,
]

class About extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    songs.forEach(key => {
      this.state[key] = false;
    });
    
    this.onClick = this.onClick.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  resetState() {
    const newState = {};
    songs.forEach(key => {
      newState[key] = false;
    });

    this.setState(newState);
  }

  onClick(e, key) {
    e.preventDefault();
    this.resetState();
    this.setState({ [key]: !this.state[key] });
  }

  render() {
    return (
      <div>
        {songs.map(key => (
          <Lyric 
            key={key}
            songKey={key}
            onClick={(e) => this.onClick(e, key)}
            isShowLyric={this.state[key]}
          /> 
        ))}
      </div>
    );
  }
}

export default About;
