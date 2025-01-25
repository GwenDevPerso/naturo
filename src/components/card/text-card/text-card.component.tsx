import styles from './styles.module.scss';

const TextCard = ({children, ...props}) => {
    return (
        <div className={`${styles['card-container']} ${styles[props.position]}`} {...props}>
            {children}
        </div>
    );
};

export default TextCard;
