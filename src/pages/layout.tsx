import Tabs from '@/components/tabs/tabs.component';
import {Geist, Geist_Mono} from 'next/font/google';
import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/globals.scss';
import styles from '../styles/layout.module.scss';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],

});

const oreganoMono = localFont({
    src: '../fonts/Oregano-Regular.ttf',
    variable: '--font-oregano-regular',
    weight: '100 900',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable} ${oreganoMono.variable} ${styles.layout}`}>
            <header className={styles.header}>
                <div className={styles.row}>
                    <Image src="/logo.png" alt="next" width={250} height={250} />
                </div>
                <Tabs />
            </header>
            {children}
            <footer className={styles.footer}>
                <div className={styles.links}>
                    <Link href="/informations/mentions-legales" className={styles.link}>
                        Mentions légales
                    </Link>
                    |
                    <Link href="/contact" className={styles.link}>
                        Contact
                    </Link>
                    |
                    <Link href="/informations/politique-de-confidentialite" className={styles.link}>
                        Politique de confidentialité
                    </Link>
                </div>
                <p>&copy; 2024 VotreSite. Tous droits réservés.</p>
            </footer>
        </div>
    );
}
