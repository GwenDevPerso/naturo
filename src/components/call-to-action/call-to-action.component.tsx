import Link from 'next/link'; // Utilisation de Next.js pour les liens
import styles from './styles.module.scss';

const CTAButton = ({
    text,
    href,
    color = 'primary',
    size = 'medium',
    icon,
    isExternal = false, // Pour ouvrir dans un nouvel onglet si externe
}: {
    text: string;
    href: string;
    color: 'primary' | 'secondary';
    size?: 'small' | 'medium';
    icon?: string;
    isExternal?: boolean;
}) => {
    return (
        <Link
            href={href}
            passHref // Nécessaire pour certains cas
            className={`${styles.ctaButton} ${styles[color]} ${styles[size]}`}
            target={isExternal ? '_blank' : '_self'}
            rel={isExternal ? 'noopener noreferrer' : undefined} // Bonne pratique pour les liens externes
        >
            {icon && <span className={styles.icon}>{icon}</span>}
            {text}
        </Link>
    );
};

export default CTAButton;
