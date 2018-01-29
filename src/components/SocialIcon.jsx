import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const typeLinkMap = {
  // amazon : '',
  apple : 'https://geo.itunes.apple.com/us/album/cole-quest-city-pickers/id1126888774?mt=1&app=music',
  bandcamp : 'https://colequest.bandcamp.com/releases',
  email : 'mailto:info@colequest.com',
  facebook : 'https://www.facebook.com/citypickers',
  googlePlay : 'https://play.google.com/store/music/album?id=Bmnfkklrohzcljqfdymrcmfu3ty&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
  instagram : 'https://www.instagram.com/citypickers/',
  soundcloud : 'https://soundcloud.com/citypickers',
  spotify : 'https://open.spotify.com/album/518LdQOgCX5YuAGyXFL3bN',
  twitter : 'https://twitter.com/colequestcp',
  // wgp : '',
  youtube : 'https://www.youtube.com/channel/UCRvFa90dbwytdK75cpxbfmg',
}

const SocialIcon = (props) => {
  return (
    <a href={typeLinkMap[props.type]} target="_blank">
      <div className={`icon ${props.type}`} />
    </a>
  );
}

SocialIcon.propTypes = {
  type : PropTypes.oneOf(Object.keys(typeLinkMap)).isRequired
}

export default SocialIcon;
