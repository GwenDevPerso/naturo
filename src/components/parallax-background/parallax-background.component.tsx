'use client';
import {useEffect, useState} from 'react';
import styles from './styles.module.scss';

const ParallaxBackground = () => {
    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const containerTop = window.scrollY; // Position de défilement de la page
            const viewportHeight = window.innerHeight;

            // Calcule un décalage proportionnel entre 0 et 1
            const progress = Math.min(Math.max(1 - containerTop / viewportHeight, 0), 1);

            // Ajuste le décalage pour l'image
            setScrollOffset(progress * 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.parallaxContainer}>
            <div
                className={styles.parallaxImage}
                style={{
                    transform: `translateY(${scrollOffset * 0.5}%)`, // Parallaxe au défilement
                }}
            />
        </div>
    );
};

export default ParallaxBackground;
