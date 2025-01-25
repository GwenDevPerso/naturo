// import MentionsLegales from '@/markdown/mentions-legales.mdx';

export default function MentionsLegalesPage() {
    return (
        <div className="page">
            <main>
                <div className="info-content"><br />
                    <h1>Mentions légales</h1>
                    <div className="info-content-item">
                        <h2>
                            Propriétaire du site
                        </h2>
                        <p>
                            Nom : [Votre nom ou raison sociale]
                            <br />
                            Adresse : [Votre adresse postale]
                            <br />
                            Téléphone : [Votre numéro de téléphone]
                            <br />
                            E-mail : [Votre adresse e-mail]
                            <br />
                            Numéro SIRET : [Votre numéro SIRET si applicable]
                            <br />
                            Responsable de la publication : [Votre nom]
                        </p>
                    </div>
                    <div className="info-content-item">
                        <h2>Hébergement</h2>
                        <p>
                            Nom de l’hébergeur : [Nom de l’hébergeur]
                            <br />
                            Adresse : [Adresse de l’hébergeur]
                            <br />
                            Téléphone : [Numéro de téléphone de l’hébergeur]
                            <br />
                            Site web : [URL du site de l’hébergeur]
                        </p>
                    </div>
                    <div className="info-content-item">
                        <h2>Propriété intellectuelle</h2>
                        <p>
                            Tous les contenus présents sur ce site (textes, images, graphismes, logos, vidéos, etc.) sont la propriété exclusive de [Votre nom ou raison sociale], sauf mention contraire. Toute reproduction, représentation, modification ou exploitation totale ou partielle des contenus de ce site, par quelque procédé que ce soit, sans autorisation préalable, est strictement interdite.
                        </p>
                    </div>
                    <div className="info-content-item">
                        <h2>Données personnelles</h2>
                        <p>
                            Aucune donnée personnelle n’est collectée via ce site.
                        </p>
                    </div>
                    <div className="info-content-item">
                        <h2>Responsabilité</h2>
                        <p>
                            Les informations fournies sur ce site ont un but informatif et ne remplacent en aucun cas une consultation médicale ou un suivi par un professionnel de santé. En cas de problème de santé, il est recommandé de consulter un médecin ou un spécialiste.\
                            [Votre nom ou raison sociale] décline toute responsabilité quant à l’utilisation des informations présentes sur ce site.
                        </p>
                    </div>
                    <div className="info-content-item">
                        <h2>Liens hypertextes</h2>
                        <p>
                            Ce site peut contenir des liens vers d’autres sites web.
                            <br />
                            [Votre nom ou raison sociale] n’est pas responsable du contenu de ces sites tiers et décline toute responsabilité en cas de dommages résultant de leur consultation.
                        </p>
                    </div>
                    <div className="info-content-item">
                        <h2>Contact</h2>
                        <p>
                            Pour toute question ou demande d’information, vous pouvez contacter le responsable du site à l’adresse suivante : [Votre adresse e-mail].
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
