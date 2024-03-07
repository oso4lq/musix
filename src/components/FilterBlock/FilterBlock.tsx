import styles from "@components/FilterBlock/FilterBlock.module.css";
import classNames from "classnames";

export default function FilterBlock() {
  return (
    <div className={classNames(styles.centerBlockFilter, styles.filter)}>
      <div className={styles.filterTitle}>Search for:</div>
      <div
        className={classNames(
          styles.filterButton,
          styles.buttonAuthor,
          styles.btnText
        )}
      >
        artist
      </div>
      <div
        className={classNames(
          styles.filterButton,
          styles.buttonYear,
          styles.btnText
        )}
      >
        year
      </div>
      <div
        className={classNames(
          styles.filterButton,

          styles.buttonGenre,

          styles.btnText
        )}
      >
        genre
      </div>
    </div>
  );
}
