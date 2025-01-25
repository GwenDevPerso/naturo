'use client';

import {usePathname} from 'next/navigation';
import {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import {Tab} from './tab.type';

export default function CircleTabs() {
    const [activeTab, setActiveTab] = useState<string | undefined>(); // activeTab peut être undefined
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const tabs1: Tab[] = [
        {
            title: 'Accueil',
            slug: '/',
        },
        {
            title: 'Qui je suis',
            slug: '/qui-je-suis',
        },
    ];
    const tabs2: Tab[] = [
        {
            title: 'Themes',
            slug: '/themes',
        },
        {
            title: 'Ateliers',
            slug: '/ateliers',
        },
        {
            title: 'Contact',
            slug: '/contact',
        },
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = (index) => {
        console.log('index', index);
        setSelectedIndex(index);
    };
    useEffect(() => {
        setActiveTab(pathname);
    });

    const handleEvent = () => {
        setActiveTab(undefined);
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 5']; // 5 éléments

    return (
        <div
            className={styles['circle-navbar']}
            style={{'--item-total': 6} as React.CSSProperties} // Indication explicite que c'est une propriété valide
        >
            {/* Afficher la div centrale quand un élément est sélectionné */}

            <div className={styles['selected-info']}>
                Élément sélectionné: {items[selectedIndex]} (Index: {selectedIndex + 1})
            </div>
            {items.map((_, index) => (
                <a
                    key={index}
                    className={`${styles['nav-item']} ${selectedIndex === index ? styles.selected : ''}`}
                    style={
                        {
                            '--item-index': index + 1, // Assignation dynamique de l'index à chaque item
                        } as React.CSSProperties
                    }
                    onClick={() => handleClick(index)}
                >
                    Item {index + 1}
                </a>
            ))}
        </div>
    );
}
