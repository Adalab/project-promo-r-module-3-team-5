import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../images/giphy.harry.gif';

function Profile(props) {
  const avatar = props.avatar === '' ? defaultAvatar : props.avatar;
  return (
    <div
      className="card__article--photo js__profile-image"
      style={{ backgroundImage: `url(${avatar})` }}
    ></div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;
