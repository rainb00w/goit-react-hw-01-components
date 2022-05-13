import styles from './Transactions.module.css';
import PropTypes from 'prop-types';

export default function TransactionHistory(data) {
  // console.log('Transactions', data.data);
  return (
    <table className={styles.transaction_history}>
      <thead>
        <tr>
          <th className={styles.transaction__history_thead}>Type</th>
          <th className={styles.transaction__history_thead}>Amount</th>
          <th className={styles.transaction__history_thead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {data.data.map(item => (
          <tr className={styles.transactions__item_tr} key={item.id}>
            <td className={styles.transactions__item_td}>{item.type}</td>
            <td className={styles.transactions__item_td}>{item.amount}</td>
            <td className={styles.transactions__item_td}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
