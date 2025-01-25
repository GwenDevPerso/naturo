import Head from 'next/head';
import styles from '../styles/luminotherapie.module.scss';

export default function LuminotherapiePage() {
    return (
        <div className="page">
            <Head>
                <title>Accueil - Mon Site SEO</title>
                <meta name="description" content="Bienvenue sur mon site optimisé pour le SEO avec Next.js" />
                <meta name="keywords" content="Next.js, SEO, Site statique" />
                <meta property="og:title" content="Accueil - Mon Site SEO" />
                <meta property="og:description" content="Bienvenue sur mon site optimisé pour le SEO avec Next.js" />
                <meta property="og:url" content="https://www.mon-site.com" />
                <meta property="og:type" content="website" />
            </Head>
            <main>
                <h1>Des soins de la nature</h1>
                <div className={styles.header}>
                    <h1>Luminothérapie</h1>
                </div>
                <div className="content mb-5">
                    <div className="grid-container">
                        <div className="grid-ite py-2m">
                            <h2>Les bienfaits de la luminothérapie</h2>
                            Durant l'automne et à l’entrée dans l'hiver, le taux d'ensoleillement en journée diminue.
                            Notre taux de <strong>sérotonine</strong>, appelée aussi hormone du bonheur, baisse et la 
                            <strong>mélatonine</strong>, hormone participant au rythme jour/nuit, augmente, entrainant
                            une baisse d’énergie, de la fatigue, jusqu’à l’installation de la dépression et le moral
                            baisse.
                            <br />
                            <br />
                            La luminothérapie, en simulant l'exposition à la lumière solaire, vous aideras à combattre
                            la dépression hivernale.
                            <br />
                            <br />
                            La luminothérapie de part les effets similaires à l’exposition de la lumière solaire va
                            augmenter la sérotonine.
                            <br />
                            <br />
                            Des séances régulières permettent l’amélioration de notre quotidien si mouvementé !
                        </div>
                        <div className="grid-item py-2">
                            <h2>Tarifs des soins</h2>
                            45 min • 70 € 1h10 • 85 € 1h30 • 105 € 2h • 130 €
                        </div>
                    </div>
                </div>
                <div className={styles.header2}>
                    <h1>Soin sérum marin</h1>
                </div>
                <div className="content">
                    <div className="grid-container">
                        <div className="grid-ite py-2m">
                            <h2>
                                L’eau de mer riche en sels minéraux et oligo-éléments peut aider pour de nombreuses
                                utilisations.
                            </h2>
                            <p>
                                De par ses propriétés, l’<strong>eau de mer</strong> peut être utile en cas de fatigue,
                                en cas de problème cutané ou contre les inflammations articulaires.
                            </p>
                        </div>
                        <div className="grid-item py-2">
                            <h2>Tarifs des soins</h2>
                            <p>Le tarif des soins dépend de votre demande, à partir de 15 euros.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
