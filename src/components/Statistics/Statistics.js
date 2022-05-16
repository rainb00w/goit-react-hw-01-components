import s from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ data, title }) {
  // data.map(item => console.log(item));
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.statistics__title}>{title}</h2>}

      <ul className={s.stat_list}>
        {data.map(({ id, label, percentage }) => (
          <li
            className={s.item}
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={s.label}>{label}</span>
            <p className={s.percentage}>{percentage} % </p>
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
