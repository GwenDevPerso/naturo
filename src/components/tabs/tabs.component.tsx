'use client';

import {Bars3Icon} from '@heroicons/react/16/solid';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect, useState} from 'react';
import DropdownButton from '../dropdown/dropdown-button.component';
import styles from './styles.module.scss';
import {Tab} from './tab.type';

export default function Tabs() {
    const [activeTab, setActiveTab] = useState<string | undefined>(); // activeTab peut être undefined
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const tabs1: Tab[] = [
        {
            title: 'Accueil',
            slug: '/',
        },
    ];
    const tabs2: Tab[] = [
        {
            title: 'Saisons',
            slug: '/themes',
        },
        {
            title: 'Ateliers',
            slug: '/ateliers',
        },
        {
            title: 'Qui je suis',
            slug: '/qui-je-suis',
        },
        {
            title: 'Contact',
            slug: '/contact',
        },
    ];

    useEffect(() => {
        setActiveTab(pathname);
    });

    const handleEvent = () => {
        setActiveTab(undefined);
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles['tabs-container']}>
            <div className={styles['only-phone']}>
                <button
                    className={`${styles['burger-button']} ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <Bars3Icon className="size-6 text-blue-500" />
                </button>
            </div>

            <div
                className={`${styles.tabs} ${isMenuOpen ? styles['only-phone-display'] : styles['only-phone-hidden']}`}
            >
                {tabs1.map((tab, index) => (
                    <div
                        key={index}
                        className={`${styles.tab} ${activeTab === pathname && activeTab === tab.slug ? styles.active : ''
                            }`}
                    >
                        <Link
                            key={index}
                            className={styles['tab-button']}
                            href={tab.slug}
                            onClick={() => setActiveTab(tab.slug)}
                        >
                            {tab.title}
                        </Link>
                    </div>
                ))}
                <DropdownButton onEvent={handleEvent} />
                {tabs2.map((tab, index) => {
                    return (
                        <div
                            key={index}
                            className={`${styles.tab} ${activeTab === pathname && activeTab === tab.slug ? styles.active : ''
                                }`}
                        >
                            <Link
                                href={tab.slug}
                                className={styles['tab-button']}
                                onClick={() => setActiveTab(tab.slug)}
                            >
                                {tab.title}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
