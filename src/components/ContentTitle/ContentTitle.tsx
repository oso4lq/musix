import classNames from "classnames";
import styles from "./ContentTitle.module.css";

export default function ContentTitle() {
    return (
        <div className={styles.contentTitle}>
            <div className={styles.playlistTitleCol}>
                Track
            </div>
            <div className={styles.playlistTitleCol}>
                Artist
            </div>
            <div className={styles.playlistTitleCol}>
                Album
            </div>
            <div className={classNames(styles.playlistTitleCol, styles.col04)}>
                <svg className={styles.playlistTitleSvg}>
                    <use href="img/icon/sprite.svg#icon-watch"></use>
                </svg>
            </div>
        </div>
    )
}
