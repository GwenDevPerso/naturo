import CTAButton from '@/components/call-to-action/call-to-action.component';
import ActivityCard from '@/components/card/activity-card/activity-card.component';
import TextCard from '@/components/card/text-card/text-card.component';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/page.module.scss';

export default function Home() {
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
                <div className={`${styles['main-header']} mt-5 px-5`}>
                    <div className={styles['main-header-content']}>
                        <TextCard>
                            <p id={styles.citation}>"Prendre soin de sa santé, c'est prendre soin de soi."</p>
                            <p id={styles.auteur}>
                                <strong>Bouddha</strong>
                            </p>
                        </TextCard>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className="grid-container">
                        <div className="grid-item py-2">
                            <TextCard>
                                <h2>Le bien être au quotidien</h2>
                                <h3> Comment rétablir l'équilibre dans un monde stressant et sédentaire ?</h3>
                                <p>
                                    L’organisation mondiale de la santé souligne l’importance du bien-être comme élément
                                    fondamental des Droits de l’homme et comme indicateur clé d’une société saine et
                                    durable.
                                    <br />
                                    <br />
                                    Nous vivons aujourd’hui dans une société sédentaire, qui nous impose un
                                    rythme effréné, une charge mentale intense, engendrant un stress oxydatif important et conduisant
                                    nos organismes à développer de multiples maux.
                                </p>
                            </TextCard>
                        </div>
                        <div className="grid-item py-2 center">
                            <Image src="/fleurs-jaunes.png" alt="next" width={300} height={200} />
                            <CTAButton text="Qui je suis ?" href="/qui-je-suis" color="secondary" icon="🌸" />
                        </div>
                        <div className="grid-item py-2 center">
                            <Image src="/fleurs-jaunes.png" alt="next" width={300} height={200} />
                            <CTAButton
                                text="Visitez Google"
                                href="https://www.google.com"
                                color="secondary"
                                isExternal={true}
                            />
                        </div>
                        <div className="grid-item py-2">
                            <TextCard>
                                <h2>S'écouter c'est important</h2>
                                <h3>Est-il possible de savoir ce dont on a vraiment besoin ?</h3>
                                <p>
                                    De nos jours prendre soin de soi devient une nécessité. Les médecines Alternatives
                                    qui considèrent la personne dans toute son intégralité, identifient les besoins,
                                    apportent une réponse à ces déséquilibres, et contribuent ainsi à restaurer notre
                                    bien-être.
                                    <br />
                                    <br />
                                    Prendre soin de soi au quotidien, c’est prévenir beaucoup de maux.
                                </p>
                            </TextCard>
                        </div>
                    </div>
                    <div className="col mt-10">
                        <h2 className="mb-2">Je vous conseille dans différents domaines et je vous propose ...</h2>
                        <div className={styles.caroussel}>
                            <ActivityCard>
                                <Image src="/massages/pierres-chaudes.png" alt="next" width={100} height={100} />
                                <div className={styles['activity-card-content']}>
                                    <h3>Massages bien être</h3>
                                    <p>Offrez-vous un moment de détente absolue grâce à des massages personnalisés.</p>
                                    <CTAButton text="Découvrir les massages" href="/massages" color="secondary" />
                                </div>
                            </ActivityCard>
                            <ActivityCard>
                                <Image src="/naturo/helene.jpg" alt="next" width={100} height={100} />
                                <div className={styles['activity-card-content']}>
                                    <h3>Naturopathie</h3>
                                    <p>Prenez soin de votre santé naturellement avec mes conseils en naturopathie.</p>
                                    <CTAButton text="Explorer la naturopathie" href="/naturopathie" color="secondary" />
                                </div>
                            </ActivityCard>
                            <ActivityCard>
                                <Image src="/naturo/miel.jpg" alt="next" width={100} height={100} />
                                <div className={styles['activity-card-content']}>
                                    <h3>Et plus encore</h3>
                                    <p>Découvrez d'autres soins pour un bien-être total.</p>
                                    <CTAButton text="En savoir plus" href="/soins-naturels" color="secondary" />
                                </div>
                            </ActivityCard>
                            <ActivityCard>
                                <Image src="/naturo/valeriane.jpg" alt="next" width={100} height={100} />
                                <div className={styles['activity-card-content']}>
                                    <h3>Ateliers</h3>
                                    <p>Participez à nos ateliers pour enrichir votre bien-être et vos connaissances.</p>
                                    <CTAButton text="Voir les ateliers" href="/ateliers" color="secondary" />
                                </div>
                            </ActivityCard>
                        </div>
                    </div>
                    <div className="col my-10">
                        <p>
                            TOUS CES SOINS NE SE SUBSTITUENT PAS A UN TRAITEMENT MEDICAL PRESCRIT PAR VOTRE MEDECIN
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
