import styles from "./FilterBlockItem.module.css";
import classNames from "classnames";

type FilterItemProps = {
    children: string;
    onClick: () => void;
    isOpened: boolean;
    list: Array<string>;
};

export default function FilterBlockItem({
    children,
    onClick,
    isOpened,
    list,
}: FilterItemProps) {
    return (
        <div>
            {list.length > 0 && isOpened && (
                <div className={styles.CountPopUp}>
                    {list.length}
                </div>
            )}
            <button
                type="button"
                className={classNames(styles.filterButton,
                    {
                        [styles.active]: isOpened,
                    })}
                onClick={() => onClick()}
            >
                {children}
            </button>
            {
                isOpened && (
                    <div className={styles.filterBy}>
                        {list.length > 0 ? (
                            <ul>
                                {list.map((e, index) => (
                                    <li
                                        key={index}
                                        className={styles.filterByP}>
                                        {e}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className={styles.playlistTitleCol}>No data...</p>
                        )}
                    </div>
                )
            }
        </div>
    );
}