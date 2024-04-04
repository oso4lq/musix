import classNames from "classnames";
import styles from "./FilterBlockItem.module.css";
import React, { useEffect, useRef, useState } from "react";
import { trackType, userType } from "@/types/types";

type FilterItemProps = {
    children: string;
    onClick: () => void;
    isOpened: boolean;
    filterKey: keyof trackType | null;
    // list: Array<string>;
    list: (string | number | userType[] | null)[];
    applyFilter: (filterKey: keyof trackType | null, value: string | number | userType[] | null) => void;
};

const FilterBlockItem = ({
    children,
    onClick,
    isOpened,
    filterKey,
    list,
    applyFilter,
}: FilterItemProps) => {

    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    // close the pop-up window when clicking outside the button
    const buttonRef = useRef<HTMLButtonElement>(null);
    // useEffect(() => {
    //     const handleClickOutside = (event: MouseEvent) => {
    //         if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
    //             applyFilter(selectedValue); // Apply filter when clicking outside
    //         }
    //     };
    //     if (isOpened) {
    //         document.addEventListener("mousedown", handleClickOutside);
    //     } else {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     }
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, [isOpened, applyFilter, selectedValue]);

    // Handle click on filter item
    const handleItemClick = (filterKey: keyof trackType | null, value: string | number | userType[] | null) => {
        setSelectedValue(value);
        applyFilter(filterKey, value);
    };

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
                onClick={onClick}
            >
                {children}
            </button>
            {isOpened && (
                <div className={styles.filterBy}>
                    {list.length > 0 ? (
                        <ul>
                            {list.map((value, index) => (
                                <li
                                    key={index}
                                    className={classNames(styles.filterByP, {
                                        [styles.active]: value === selectedValue,
                                    })}
                                    onClick={() => handleItemClick(filterKey, value)}
                                >
                                    {value}
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
};

export default FilterBlockItem;

// // import classNames from "classnames";
// // import styles from "./FilterBlockItem.module.css";
// // import { useEffect, useRef } from "react";

// // type FilterItemProps = {
// //     children: string;
// //     onClick: () => void;
// //     isOpened: boolean;
// //     list: Array<string>;
// // };

// // export default function FilterBlockItem({
// //     children,
// //     onClick,
// //     isOpened,
// //     list,
// // }: FilterItemProps) {

// //     // close the pop-up window when clicking outside the button
// //     const buttonRef = useRef<HTMLButtonElement>(null);
// //     useEffect(() => {
// //         const handleClickOutside = (event: MouseEvent) => {
// //             if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
// //                 onClick();
// //             }
// //         };
// //         if (isOpened) {
// //             document.addEventListener("mousedown", handleClickOutside);
// //         } else {
// //             document.removeEventListener("mousedown", handleClickOutside);
// //         }
// //         return () => {
// //             document.removeEventListener("mousedown", handleClickOutside);
// //         };
// //     }, [isOpened, onClick]);

// //     return (
// //         <div>
// //             {list.length > 0 && isOpened && (
// //                 <div className={styles.CountPopUp}>
// //                     {list.length}
// //                 </div>
// //             )}
// //             <button
// //                 ref={buttonRef}
// //                 type="button"
// //                 className={classNames(styles.filterButton, {
// //                     [styles.active]: isOpened,
// //                 })}
// //                 onClick={() => onClick()}
// //             >
// //                 {children}
// //             </button>
// //             {isOpened && (
// //                 <div className={styles.filterBy}>
// //                     {list.length > 0 ? (
// //                         <ul>
// //                             {list.map((e, index) => (
// //                                 <li
// //                                     key={index}
// //                                     className={styles.filterByP}
// //                                 >
// //                                     {e}
// //                                 </li>
// //                             ))}
// //                         </ul>
// //                     ) : (
// //                         <p className={styles.filterByP}>No data...</p>
// //                     )}
// //                 </div>
// //             )}
// //         </div>
// //     );
// // }
