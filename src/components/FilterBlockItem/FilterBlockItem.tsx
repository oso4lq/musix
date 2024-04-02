import classNames from "classnames";
import styles from "./FilterBlockItem.module.css";
import { useEffect, useRef } from "react";

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

    // close the pop-up window when clicking outside the button
    const buttonRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                onClick();
            }
        };
        if (isOpened) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpened, onClick]);

    return (
        <div>
            {list.length > 0 && isOpened && (
                <div className={styles.CountPopUp}>
                    {list.length}
                </div>
            )}
            <button
                ref={buttonRef}
                type="button"
                className={classNames(styles.filterButton, {
                    [styles.active]: isOpened,
                })}
                onClick={() => onClick()}
            >
                {children}
            </button>
            {isOpened && (
                <div className={styles.filterBy}>
                    {list.length > 0 ? (
                        <ul>
                            {list.map((e, index) => (
                                <li
                                    key={index}
                                    className={styles.filterByP}
                                >
                                    {e}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className={styles.filterByP}>No data...</p>
                    )}
                </div>
            )}
        </div>
    );
}
