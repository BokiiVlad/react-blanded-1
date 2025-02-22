import style from './CryptoHistory.module.css';
import { formattedDateNew } from '../../helper';
const CryptoHistory = ({ transaction }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>
      <tbody>
        {transaction.map((el, index) => (
          <tr key={el.id} className={style.tr}>
            <td className={style.td}>{index + 1}</td>
            <td className={style.td}>{el.price}</td>
            <td className={style.td}>{el.amount}</td>
            <td className={style.td}>{formattedDateNew(el.date)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoHistory;
