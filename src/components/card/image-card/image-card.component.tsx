import styles from './styles.module.scss';

const ImageCard = ({children}) => {
    return <div className={styles['card-container']}>{children}</div>;
};

export default ImageCard;
