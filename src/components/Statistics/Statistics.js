import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ data, title }) {
  return (
    <section className={styles.statistics}>
      {title.length > 0 && (
        <h2 className={styles.statistics__title}>{title}</h2>
      )}

      <ul className={styles.stat_list} style={hStyle}>
        {data.map(item => (
          <li className={styles.item} key={item.id}>
            <span className={styles.label}>{item.label}</span>
            <p className={styles.percentage}>{item.percentage} % </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

let hStyle = { backgroundColor: getRandomHexColor() };

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
};
