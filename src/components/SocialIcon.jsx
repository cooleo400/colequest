import React from 'react';
import PropTypes from 'prop-types';
import {
  selfEntitledAppleLink,
  selfEntitledSpotifyLink,
  youtubeChannelLink
} from '../constants';

const socialTypes = {
  // amazon : '',
  apple: 'https://music.apple.com/us/artist/cole-quest-and-the-city-pickers/1126888910',
  'apple-se': selfEntitledAppleLink,
  bandcamp: 'https://colequest.bandcamp.com/releases',
  email: 'mailto:info@colequest.com',
  facebook: 'https://www.facebook.com/citypickers',
  googlePlay: 'https://play.google.com/store/music/album?id=Bmnfkklrohzcljqfdymrcmfu3ty&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
  'googlePlay-se': 'https://play.google.com/store/music/album?id=Bmnfkklrohzcljqfdymrcmfu3ty&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
  instagram: 'https://www.instagram.com/citypickers/',
  soundcloud: 'https://soundcloud.com/citypickers',
  spotify: 'https://open.spotify.com/artist/1SIMdfmZi6TCoYaBU7AMeM?si=0QfWefErRX2lBLkUGhse6A',
  'spotify-se': selfEntitledSpotifyLink,
  twitter: 'https://twitter.com/colequestcp',
  youtube: youtubeChannelLink,
}

const SocialIcon = ({ type }) => {
  const seperator = type.indexOf('-');
  const icon = (seperator > -1) ? type.substring(0, seperator) : type;
  return (
    <a href={socialTypes[type]} target="_blank">
      <div className={`icon ${icon}`} />
    </a>
  );
}

SocialIcon.propTypes = {
  type: PropTypes.oneOf(Object.keys(socialTypes)).isRequired
}

export default SocialIcon;
