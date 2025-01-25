import {ReactNode} from 'react';
import styles from './styles.module.scss';

const ActivityCard = ({children}: {children: ReactNode;}) => {
    return <div className={styles['card-container']}>{children}</div>;
};

export default ActivityCard;
