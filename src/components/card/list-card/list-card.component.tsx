import styles from './styles.module.scss';

const ListCard = ({color, size, children}: {color: string; size: string; children: any}) => {
    return <div className={`${styles['card-container']} ${styles[color]} ${styles[size]}`}>{children}</div>;
};

export default ListCard;
