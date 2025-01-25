import Head from 'next/head';
import Image from 'next/image';

export default function ThemesPage() {
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
                            <h1>Thèmes</h1>
                            <h2>En projet, des thèmes différents en fonction des saisons</h2>
                        </div>
                        <div className="grid-item center">
                            <Image
                                className="round-image"
                                src="/fond-automne.jpg"
                                alt="next"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
