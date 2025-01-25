'use client';
import Link from 'next/link';
import {useEffect, useRef, useState} from 'react';
import {Tab} from '../tabs/tab.type';
import styles from './styles.module.scss';

const DropdownButton = ({onEvent}: {onEvent: any;}) => {
    const [isOpen, setIsOpen] = useState(false);

    const tabs: Tab[] = [
        {
            title: 'Massage bien-être',
            slug: '/massages',
        },
        {
            title: 'Naturopathie',
            slug: '/naturopathie',
        },
        {
            title: 'Soin naturels',
            slug: '/soins-naturels',
        },
    ];

    const collapseRef = useRef<HTMLDivElement>(null); // Référence au collapse
    const buttonRef = useRef<HTMLButtonElement>(null); // Référence au bouton

    // Gestion du clic extérieur
    const handleClickOutside = (event: MouseEvent) => {
        // Vérifie si le clic a eu lieu à l'extérieur du collapse et du bouton
        if (
            collapseRef.current &&
            !collapseRef.current.contains(event.target as Node) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false); // Ferme le collapse si on clique en dehors
        }
    };

    // Ajout et nettoyage de l'écouteur d'événement
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside); // Détecte les clics
        return () => {
            document.removeEventListener('mousedown', handleClickOutside); // Nettoyage
        };
    }, []);

    const handleClick = () => {
        // Émettre l'événement au parent
        onEvent();
        setIsOpen(false);
    };

    return (
        <div className={styles['dropdown-container']}>
            <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className={`${styles['dropdown-button']} ${isOpen ? 'active' : ''}`}
            >
                Prendre soin de soi
            </button>
            {isOpen && (
                <div ref={collapseRef} className={styles['list-container']}>
                    <ul>
                        {tabs.map((tab, index) => (
                            <li key={index} className={`${styles['dropdown-button']} ${isOpen ? 'active' : ''}`}>
                                <Link href={tab.slug} className={styles.link} onClick={handleClick}>
                                    {tab.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownButton;
