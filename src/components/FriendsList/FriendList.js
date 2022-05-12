import s from './FriendsList.module.css';
import PropTypes from 'prop-types';

export default function FriendList(data) {
  return (
    <div className={s.friend_list}>
      <ul>
        {data.data.map(item => (
          <li className={s.friend__list_item} key={item.id}>
            {item.isOnline ? (
              <span className={`${s.green}`}></span>
            ) : (
              <span className={`${s.red}`}></span>
            )}
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
  data: PropTypes.array,
};
