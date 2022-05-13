import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ data, title }) {
  data.flatMap(item => console.log(item));
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.statistics__title}>{title}</h2>}

      <ul className={styles.stat_list}>
        {data.map(item => (
          <li
            className={styles.item}
            key={item.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={styles.label}>{item.label}</span>
            <p className={styles.percentage}>{item.percentage} % </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
