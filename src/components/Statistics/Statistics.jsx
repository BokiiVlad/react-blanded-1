import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import  StatisticsItem  from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const iconCard = [FaRegThumbsUp, MdPeople, MdOutlineProductionQuantityLimits, GiTreeDoor];

const Statistics = ({stats}) => {
  return (
    <div>
      <h3 className={style.title}>Main Statistics</h3>
      <ul className={style.list}>
        {stats.map((el, index) => (
          <li key={el.id} className={style.item}>
            <StatisticsItem title={el.title} total={el.total} icon={iconCard[index]} />
    </li>
        ))}
      </ul>
    </div>
  );
};
export default Statistics;
