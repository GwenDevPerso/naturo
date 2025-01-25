import React from 'react';
import styles from './styles.module.scss';

interface TextCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    position?: string; // Ajoute la propriété `position` facultative
}

const TextCard: React.FC<TextCardProps> = ({children, position, ...props}) => {
    return (
        <div
            className={`${styles['card-container']} ${position ? styles[position] : ''}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default TextCard;
