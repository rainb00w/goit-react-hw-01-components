import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={styles.avatar} className={styles.avatar} />
        <p className={styles.profile__name}>{username}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.profile__stats}>
        <li className={styles.profile__stats_li}>
          <span className={styles.label}>Followers</span>
          <br />
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.profile__stats_li}>
          <span className={styles.label}>Views</span>
          <br />
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.profile__stats_li}>
          <span className={styles.label}>Likes</span>
          <br />
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
