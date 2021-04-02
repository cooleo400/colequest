import React from 'react';
import PropTypes from 'prop-types';

const SpotifyEmbed = ({ spotifyId }) => <iframe src={"https://open.spotify.com/embed/track/" + spotifyId} width="100%" height="80" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>;

SpotifyEmbed.propsTypes = {
  spotifyId: PropTypes.string.isRequired,
}

export default SpotifyEmbed;
