'use client';
// import emailjs from '@emailjs/browser';
import {HomeModernIcon, PhoneIcon} from '@heroicons/react/16/solid';
import React, {useRef, useState} from 'react';
import styles from './styles.module.scss';

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        // emailjs
        //     .sendForm(
        //         'your_service_id', // Remplace par ton Service ID EmailJS
        //         'your_template_id', // Remplace par ton Template ID EmailJS
        //         form.current,
        //         'your_user_id', // Remplace par ton User ID EmailJS
        //     )
        //     .then(
        //         () => {
        //             setSuccess('Votre message a été envoyé avec succès !');
        //             form.current?.reset();
        //         },
        //         () => {
        //             setError('Une erreur est survenue. Veuillez réessayer.');
        //         },
        //     );
    };

    return (
        <div className={styles['contact-form-container']}>
            <div className="col">
                <form ref={form} className={styles['contact-form']} onSubmit={sendEmail}>
                    <label htmlFor="email">Adresse e-mail :</label>
                    <input
                        type="email"
                        id="email"
                        name="user_email"
                        className={styles['contact-input']}
                        placeholder="Votre e-mail"
                        required
                    />

                    <label htmlFor="subject">Objet :</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        className={styles['contact-input']}
                        placeholder="Objet de votre message"
                        required
                    />

                    <label htmlFor="message">Message :</label>
                    <textarea
                        id="message"
                        name="message"
                        className={styles['contact-input']}
                        rows={5}
                        placeholder="Votre message"
                        required
                    ></textarea>

                    <div className={styles['form-footer']}>
                        <button type="submit" className={styles['contact-button']}>
                            Envoyer
                        </button>
                    </div>
                    {success && <p className={styles['success-message']}>{success}</p>}
                    {error && <p className={styles['error-message']}>{error}</p>}
                </form>
            </div>
            <div className={`col ${styles.text}`}>
                <div className={styles['contact-info']}>
                    <h3>Autres informations :</h3>
                    <p>
                        <HomeModernIcon className={styles.icon} />
                        123 rue de la République, 75001 Paris
                    </p>
                    <p>
                        <PhoneIcon className={styles.icon} />
                        01 23 45 67 89
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
