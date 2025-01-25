import {ReactNode} from 'react';
import styles from './styles.module.scss';

const ImageCard = ({children}: {children: ReactNode;}) => {
    return <div className={styles['card-container']}>{children}</div>;
};

export default ImageCard;
