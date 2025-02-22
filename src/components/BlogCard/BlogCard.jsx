import styles from "./BlogCard.module.css"
import {formattedDate} from "../../helper"

const BlogCard = ({ card: { _id, name, postedAt, poster, tag, title, description, avatar } }) => {
  return <div key={_id}className={styles.card}>
  <div className={styles.cardHeader}>
    <img
      className={styles.cardPoster}
      src={poster}
      alt="card__image"
    />
  </div>
  <div className={styles.cardBody}>
    <span className={styles.tag}>{tag}</span>
    <h2 className={styles.cardTitle}>{title}</h2>
    <p className={styles.cardText}>
      {description}
    </p>
  </div>
  <div className={styles.cardFooter}>
    <div className={styles.userBox}>
      <img
        className={styles.avatar}
        src={avatar}
        alt={name}
      />
      <div>
        <h3 className={styles.userName}>{name}</h3>
        <small className={styles.date}>{formattedDate( postedAt)}</small>
      </div>
    </div>
  </div>
</div>;
};
export default BlogCard;
