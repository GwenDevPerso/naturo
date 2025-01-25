import React, {ReactNode} from 'react';
import styles from './styles.module.scss';

const Header2Col = ({children}: {children: ReactNode;}) => {
    const array = React.Children.toArray(children);
    return (
        <div className={styles['header-container']}>
            {array.map((child, index) => (
                <div key={index} className={styles['header-item']}>
                    {child}
                </div>
            ))}
        </div>
    );
};

export default Header2Col;
