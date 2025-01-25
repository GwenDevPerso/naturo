import CTAButton from '@/components/call-to-action/call-to-action.component';
import ListCard from '@/components/card/list-card/list-card.component';
import styles from '@/styles/massages.module.scss';
import Head from 'next/head';
import Image from 'next/image';

export default function MassageBienEtrePage() {
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
                <div className="content">
                    <h1>Le massage, du bien être au quotidien</h1>
                    <div className="grid-container">
                        <div className="grid-item p-2">
                            <h2 className='mb-2'>Ici vous trouverez douceur et réconfort</h2>
                            <p>
                                Formée aux différentes pratiques de massage détente et bien-être je vous propose des massages adaptés à vos besoins.
                                <br />
                                <br />
                                Avec le flot de stress dans notre société, je peux diminuer vos tensions nerveuses, votre anxiété afin d'atteindre une détente corporelle optimale.
                                <br />
                                <br />
                                Vous trouverez entre mes mains un massage personnalisé et pour cela je vous propose un échange lors de votre première séance afin de définir vos attentes, vos besoins, vos envies.
                            </p>
                        </div>
                        <div className="grid-item p-2">
                            <p>
                                Les massages sont pratiqués avec des huiles chaudes dans un lieu réconfortant.
                                <br />
                                <br />
                                Mes préstations sont uniques et j'étudie vos demandes selon vos besoins.
                                <br />
                                <br />
                                C'est au sein d'un chalet, que nous pouvons travailler ensemble dans l'amélioration de votre sommeil, réduire vos tensions, apaiser vos douleurs, apporter détente, relaxation et lâcher prise.
                                <br />
                                <br />
                                Je me déplace aussi à domicile et en entreprise.
                            </p>
                        </div>
                    </div>
                    <div className={styles.separator}></div>
                    <Image src="/femme-long.png" alt="next" width={500} height={200} />
                    <h2 className='mb-2'>Je continue à me former dans ce domaine afin d'élargir mes compétences et de vous proposer une gamme plus large de massages.</h2>
                    <ListCard color="primary" size="normal">
                        <Image src="/massages/m1.jpg" alt="next" width={200} height={200} />

                        <div className={styles['card-content']}>
                            <div className={styles['card-content-header']}>
                                <h3>Massage Californien</h3>
                                <p>1h - 1h30</p>
                            </div>
                            <p>
                                C'est LE massage de relaxation idéal, tout en douceur pour décontracter le corps.
                                <br />
                                Son objectif est de vous offrir un moment de détente et de lâcher prise dont les bienfaits ont un effet bénéfiaue sur tout le système nerveux.
                            </p>
                        </div>
                        <div className={styles['card-footer']}>
                            <p>50€</p>
                            <CTAButton color="secondary" size="small" text="Contact" href="/contact"></CTAButton>
                        </div>
                    </ListCard>
                    <ListCard color="tertiary" size="normal">
                        <Image src="/massages/m2.jpg" alt="next" width={200} height={200} />

                        <div className={styles['card-content']}>
                            <div className={styles['card-content-header']}>
                                <h3>Massage ayurvédique</h3>
                                <p>1h - 1h30</p>
                            </div>
                            <p>
                                Appelé aussi Abhyanga, pratique traditionnelle indienne qui vise à établir un équilibre entre le corps et l'esprit afin de conserver la globalité de notre être en bonne santé.
                                <br />
                                Je travaille en profondeur en massant des points particuliers sur les trajets d'énergie pour dénouer les tensions et apporter équilibre physique et émotionnel.
                                ce massage améliore le sommeil, la circulation sanguine et lymphatique et favorise ainsi l'élimination des toxines. C'est également un massage tonifiant.
                            </p>
                        </div>
                        <div className={styles['card-footer']}>
                            <p>50€</p>
                            <CTAButton color="secondary" size="small" text="Contact" href="/contact"></CTAButton>
                        </div>
                    </ListCard>
                    <ListCard color="primary" size="normal">
                        <Image src="/massages/m8.jpg" alt="next" width={200} height={200} />

                        <div className={styles['card-content']}>
                            <div className={styles['card-content-header']}>
                                <h3>Massage shirochampi</h3>
                                <p>30 à 45 min</p>
                            </div>
                            <p>
                                C'est un des massages spécifique en ayurvéda qui stimule différentes parties du haut du corps: crâne, cou, épaule, haut et bas du dos.
                                Massage de 30 à 45 minutes, il apaise rapidement l'esprit, vous aide à diminuer votre fatigue et favorise votre sommeil.
                            </p>
                        </div>
                        <div className={styles['card-footer']}>
                            <p>40€</p>
                            <CTAButton color="secondary" size="small" text="Contact" href="/contact"></CTAButton>
                        </div>
                    </ListCard>
                    <ListCard color="tertiary" size="normal">
                        <Image src="/massages/femme-enceinte.png" alt="next" width={200} height={200} />

                        <div className={styles['card-content']}>
                            <div className={styles['card-content-header']}>
                                <h3>Massage prénatal et la détente bébé</h3>
                                <p>1h - 1h30</p>
                            </div>
                            <p>
                                Un massage adapté au besoin du corps de la futur maman, relaxant et non thérapeutique, il apportera réconfort et sérénité grâce à des mouvements lents et tout en douceur par des étirements doux ciblés sur des zones de tensions (dos, hanches, jambes).
                                <br />
                                Le massage est adapté à partir du 3eme mois et jusqu'à l'accouchement.
                                Il permet de travailler en profondeur pour dénouer les tensions et réduire les douleurs du corps, stimuler les énergies, entretenir la mobilité et favoriser la circulation sanguin et lymphatique.
                                <br />
                                Dès la naissance je vous accompagne dans les gestes afin de masser votre enfant en toute sérénité et sécurité.
                            </p>
                        </div>
                        <div className={styles['card-footer']}>
                            <p>50€</p>
                            <CTAButton color="secondary" size="small" text="Contact" href="/contact"></CTAButton>
                        </div>
                    </ListCard>
                    <ListCard color="primary" size="normal">
                        <Image src="/massages/m8.jpg" alt="next" width={200} height={200} />

                        <div className={styles['card-content']}>
                            <div className={styles['card-content-header']}>
                                <h3>Massage du dos</h3>
                                <p>30 à 45 min</p>
                            </div>
                            <p>
                                Ce massage dénoue les tensions et contractures du dos, détend les muscles.
                                <br />
                                Il se pratique ne insistant sur el bas du dos, les lombaires, el haut du dos et les trapèzes.
                                <br /> C'est un massage en profondeur afin d'obtenir une détente complète et dénouer les noeuds
                                de tension.
                            </p>
                        </div>
                        <div className={styles['card-footer']}>
                            <p>40€</p>
                            <CTAButton color="secondary" size="small" text="Contact" href="/contact"></CTAButton>
                        </div>
                    </ListCard>
                    <div className={styles.separator}></div>

                    <h3 className='my-5'>Tout comme nous devons garder l'ésprit clair, nous devons prendre soin de notre corps physique de la même manière</h3>
                </div>
            </main>
        </div>
    );
}
