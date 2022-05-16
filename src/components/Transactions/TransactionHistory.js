import s from './Transactions.module.css';
import PropTypes from 'prop-types';

export default function TransactionHistory(props) {
  return (
    <table className={s.transaction_history}>
      <thead>
        <tr>
          <th className={s.transaction__history_thead}>Type</th>
          <th className={s.transaction__history_thead}>Amount</th>
          <th className={s.transaction__history_thead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {props.data.map(({ id, type, amount, currency }) => (
          <tr className={s.transactions__item_tr} key={id}>
            <td className={s.transactions__item_td}>{type}</td>
            <td className={s.transactions__item_td}>{amount}</td>
            <td className={s.transactions__item_td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
