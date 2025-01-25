import CTAButton from '@/components/call-to-action/call-to-action.component';
import TextCard from '@/components/card/text-card/text-card.component';
import {HomeModernIcon} from '@heroicons/react/16/solid';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/naturo.module.scss';

export default function NaturopathiePage() {
    const items = [
        {
            text: 'Découvrir le POUVOIR de notre esprit sur le corps',
            icon: HomeModernIcon,
        },
        {
            text: 'Retrouver sa sérénité',
            icon: '/fleur-rouge.png',
        },
        {
            text: 'Comprendre la maladie pour aider son corps a retrouver la santé',
            icon: '/fleur-rouge.png',
        },
        {
            text: 'Détoxifier son corps',
            icon: '/fleur-rouge.png',
        },
        {
            text: "Refaire le plein d’'énergie",
            icon: '/fleur-rouge.png',
        },
        {
            text: "Découvrir l'alimentation vivante physiologique",
            icon: '/fleur-rouge.png',
        },

        {
            text: "Retrouver ses capacités d'auto-guérison",
            icon: '/fleur-rouge.png',
        },
    ]; // Contenu dynamique des cercles

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
                <div
                    className="content"
                >
                    <h1>Que ton aliment soit ta seule médecine</h1>
                    <h2 style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        width: '100%',
                    }}>Hyppocrate</h2>
                    <div className="grid-container my-5">
                        <div className="grid-item p-2 center">
                            <h2 className='mb-2'>Equilibrer votre organisme</h2>
                            <p>
                                Selon l'<strong>Organisation Mondiale de la Santé</strong>, la naturopathie est «un ensemble de méthodes de soins visant à renforcer les défenses de L'organisme par ses moyens considérés comme naturels et biologianes "
                            </p>
                        </div>
                        <div className="grid-item p-2 center">
                            <Image className={styles['image-circle']} src="/naturo/calendula.jpg" alt="next" width={300} height={200} />
                        </div>
                        <div className="grid-item p-2 center">
                            <Image className={styles['image-circle']} src="/naturo/miel.jpg" alt="next" width={300} height={200} />
                        </div>
                        <div className="grid-item p-2 center">
                            <p>
                                Grâce à différentes techniques ainsi que la mise en place d'un mode de vie équilibré, il est possible d'atteindre une certaine harmonie de l'organisme.
                            </p>
                        </div>
                    </div>
                    <div className={styles.separator}></div>
                    <div style={{
                        gap: '50px',
                    }} className="grid-container">
                        <div className="grid-item py-2">
                            <TextCard>
                                <h2>Rétablir et maintenir une bonne santé</h2>
                                <p>
                                    Mon approche de la naturopathie est <strong>une approche holistique et complémentaire</strong> de la médecine traditionnelle.
                                    <br />
                                    C'est-à-dire que je prends la personne en charge dans sa globalité, dans un but préventif afin de procurer ou de retrouver le meileur équilibre pour son organisme.
                                </p>
                            </TextCard>
                        </div>
                        <div className="grid-item py-2 center">
                            <Image className={styles['image-card']} src="/naturo/miel.jpg" alt="next" width={300} height={200} />
                        </div>
                        <div className="grid-item py-2 center">
                            <Image className={styles['image-card']} src="/naturo/menthe.jpg" alt="next" width={300} height={200} />
                        </div>
                        <div className="grid-item py-2">
                            <TextCard>
                                <h2>Nous sommes ce que nous mangeons</h2>
                                <h3 style={
                                    {
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }
                                }>Jane Goodall</h3>
                                <p>
                                    Cette approche se déroule en plusieurs étapes :
                                    <br />
                                    Lors d'une première consultation, mon travail avec vous consistera à aborder différents aspects de votre <strong>vie quotidienne</strong> afin de définir ensemble vos besoins.
                                    <br />
                                    <br />
                                    Cet entretien permet d'évaluer vos habitudes de vie, vos antécédents, votre alimentation, ainsi que l'observation de vos <strong>bilans biologiques</strong>.
                                    <br />
                                    <br />
                                    Tout ceci dans le but de définir la cause du ou des problèmes, pour agir sur celui-ci.
                                </p>
                            </TextCard>
                        </div>
                        <div className="grid-item py-2">
                            <TextCard>
                                <p>
                                    La base du travail en naturopathie passe bien souvent par un <strong>rééquilibrage alimentaire</strong>:
                                    <br /> Nous adopterons ensemble vos besoins réels sans régime particulier.
                                    <br />
                                    Afin que l'organisme soit plus réceptif au travail que nous ferons avec les plantes.
                                </p>
                            </TextCard>
                        </div>
                        <div className="grid-item py-2 center">
                        </div>
                        <div className="grid-item py-2 center">
                            <Image className={styles['image-card']} src="/naturo/paquerette.jpg" alt="next" width={300} height={200} />
                        </div>
                        <div className="grid-item py-2">
                            <TextCard>
                                <p>
                                    En complément, je peux m'aider de l'<strong>aromathérapie</strong>, branche de la phytothéraple obtenue après distillation de la plante.
                                    <br />
                                    <br />
                                    Ainsi je peux utiliser l'eau florale ou l'huite essentielle. En diffusion, fumigation ou inhalation, en massage ou par
                                    voie orale, chacune a ses propriétés et l'association de plusieurs engendre de belles énergies.
                                    <br />
                                    <br />
                                    L'<strong>huile essentielle</strong> est une exellente alliée pour un complément de soin.
                                </p>
                            </TextCard>
                        </div>
                        <div className="grid-item py-2">
                            <TextCard>
                                <p>
                                    Les consultations suivantes permettent un travail plus en profondeur en fonction de votre ressenti.
                                    <br />
                                    Il sera possible de compléter la prise en charge par des soins complementaires: Nutrition, relaxation, massage...
                                </p>
                                <div className={styles['grid-items-cta']}>
                                    <CTAButton text="Découvrir les massages" href="/massages" color="secondary" />
                                    <CTAButton text="Voir les autres soins disponibles" href="/soins-naturels" color="secondary" />
                                </div>
                            </TextCard>
                        </div>
                        <div className="grid-item py-2 center">
                            <Image className={styles['image-card']} src="/naturo/valeriane.jpg" alt="next" width={300} height={200} />
                        </div>
                        <div className='grid-item py-2'></div>
                        <div className="grid-item py-2">
                            <TextCard>
                                <p>
                                    Pour une sécurité optimale dans la prise
                                    Des plantes, je travaille avec des <strong>laboratoires</strong> de confiance: HERBOLISTIQUE,
                                    COPMED, NUTERGIA
                                </p>
                            </TextCard>
                        </div>
                    </div>
                    <h2 style={{
                        width: '80%',
                    }}>EN PRENANT EN MAIN VOTRE SANTE DE FACON PREVENTIVE, VOUS METTEZ TOUTES LES CHANCES DE VOTRE COTE POUR RENFORCER VOTRE CAPACITE AVIVRE EN PLEINE SANTE.</h2>
                    <h3 className='mt-5'>RAPPEL: la naturopathie est une approche complémentaire, elle ne remplace en aucun cas votre suivi médical par votre médecin traitant ou un spécialiste.</h3>
                    <Image src="/naturo/photo fleurs.png" alt="next" width={400} height={400} />

                    {/* <div className={styles.separator}></div>
                    <div className={`${styles['grid-container']}`}>
                        <div className={`${styles.row} ${styles['row-1']}`}>
                            <div className={styles.item}>
                                <div className={styles['item-text']}>{items[1].text}
                                    <HeartIcon className={`${styles.icon} red`} />
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.row} ${styles['row-2']}`}>
                            <div className={styles.col}>
                                <div className={styles.item}>
                                    <div className={styles['item-text']}>{items[0].text}
                                        <BeakerIcon className={`${styles.icon} orange`} />
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles['item-text']}>{items[3].text}
                                        <HomeModernIcon className={`${styles.icon} red`} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles['image-container']}>
                                <Image src="/cercle-rouge.png" alt="next" width={550} height={500} />
                                <h3 className={styles['image-text']}>La naturopathie c'est ...</h3>
                            </div>
                            <div className={styles.col}>
                                <div className={styles.item}>
                                    <div className={styles['item-text']}>
                                        <HomeModernIcon className={`${styles.icon} yellow`} />
                                        {items[2].text}
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles['item-text']}>
                                        <HomeModernIcon className={`${styles.icon} orange`} />
                                        {items[4].text}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.row} ${styles['row-3']}`}>
                            <div className={styles.item}>
                                <div className={styles['item-text']}>
                                    {items[5].text}
                                    <HomeModernIcon className={`${styles.icon} yellow`} />
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles['item-text']}>
                                    <HomeModernIcon className={`${styles.icon} red`} />
                                    {items[6].text}
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>
            </main>
        </div>
    );
}
