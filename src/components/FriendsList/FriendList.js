import s from './FriendsList.module.css';
import PropTypes from 'prop-types';

export default function FriendList(props) {
  return (
    <div className={s.friend_list}>
      <ul>
        {props.data.map(item => (
          <li className={s.friend__list_item} key={item.id}>
            <span className={item.isOnline ? `${s.green}` : `${s.red}`}></span>

            <img
              src={item.avatar}
              className={s.avatars}
              alt="User avatar"
              width="48"
            ></img>
            <p className={s.name}>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
