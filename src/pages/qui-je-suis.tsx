import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/qui-je-suis.module.scss';

export default function QuiJeSuisPage() {
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
                <div className="page-header">
                    <div className="grid-container my-5">
                        <div className="grid-item">
                            <h1>Présentation</h1>
                            <p>
                                Infirmière de métier depuis de nombreuses années, j’exerce encore aujourd’hui à
                                domicile.
                                <br />
                                <br /> Il y a plusieurs années j’ai décidé de me former dans le domaine du bien-être. En
                                effet le bien-être du corps et de l’esprit c’est le maintien en santé de notre corps.
                            </p>
                        </div>
                        <div className="grid-item center">
                            <Image
                                className={styles.image}
                                src="/portrait.JPG"
                                alt="next"
                                priority={false} // Priorité de chargement : false pour lazy loading
                                width={300}
                                height={200}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className="grid-container">
                        <div className="grid-item py-2">
                            <Image src="/cercle-jaune.png" alt="next" width={250} height={250} />
                        </div>
                        <div className="grid-item py-2">
                            <p>
                                Dans la société d’aujourd’hui, il est important de soulager les maux que notre organisme
                                développe avec le stress que nous apporte notre mode de vie.
                            </p>
                        </div>
                    </div>
                </div>
                <h2 className="my-3">Mon parcours</h2>
                <div className={`${styles['container-text']} bg-main`}>
                    <p>
                        Entrant en 2014 à l’école Hildegardien à Rennes pour y apprendre l’aromathérapie, l’utilisation
                        des huiles essentielles et leurs bien fait ; j’ai acquis un savoir-faire et une maitrise de la
                        bonne utilisation de ces huiles au quotidien, pour vos soins ou vos cosmétiques.
                    </p>
                </div>
                <div className={`${styles['container-text']}`}>
                    <p>
                        L’enseignement de la naturopathie en 2020 à l’école Institut de la Baie, m’a permis d’y
                        apprendre un ensemble de pratiques issues de la tradition occidentale, visant à préserver et
                        optimiser la santé globale de l’individu en utilisant entre-autre, les plantes et leurs
                        bienfaits.
                    </p>
                </div>
                <div className={`${styles['container-text']} bg-main`}>
                    <p>
                        En parallèle je commence chez afi35 l’apprentissage de protocole de massage détente et bien-être
                        et je poursuis chez Ananda Bien-Etre en me spécialisant dans les massages et soins ayurvédiques.
                    </p>
                </div>
                <div className="col ">
                    <Image src="/cercle-rouge.png" alt="next" width={250} height={250} />
                </div>
            </main>
        </div>
    );
}
