import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendsList.module.css';

export default function FriendListItem({ isOnline, avatar, name, id }) {
  return (
    <li className={s.friend__list_item} key={id}>
      <span className={isOnline ? `${s.green}` : `${s.red}`}></span>
      <img
        src={avatar}
        className={s.avatars}
        alt="User avatar"
        width="48"
      ></img>
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
