import styles from './styles.module.scss';

const ActivityCard = ({children}) => {
    return <div className={styles['card-container']}>{children}</div>;
};

export default ActivityCard;
