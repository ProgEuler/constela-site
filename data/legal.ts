// Privacy Policy & Terms of Service for Constela
// Source: "Constela privacy policy _ terms of use.pdf" (AtypiConnect, Aug 15 2026)
// Content adapted for web rendering.

export type LegalParagraph = string
export type LegalBlock =
  | { kind: "p"; text: LegalParagraph }
  | { kind: "list"; items: LegalParagraph[] }
  | { kind: "table"; columns: string[]; rows: string[][] }
  | { kind: "callout"; text: LegalParagraph }

export type LegalSection = {
  id: string
  title: string
  blocks: LegalBlock[]
}

export type LegalDoc = {
  meta: {
    title: string
    lastUpdated: string
    controller: string
    registered: string
    address: string
    email: string
    euRep: string
  }
  intro: LegalBlock[]
  sections: LegalSection[]
}

// =====================================================================
// ENGLISH — Privacy Policy
// =====================================================================

export const PRIVACY_EN: LegalDoc = {
  meta: {
    title: "Privacy Policy",
    lastUpdated: "August 15, 2026",
    controller: "AtypiConnect",
    registered: "Company ID: KXXX00XX (to be completed later)",
    address: "Place Fernand Texier, 38400 Saint-Martin-d'Hères, France",
    email: "AtypiConnect@gmail.com",
    euRep: "AtypiConnect@gmail.com",
  },
  intro: [
    {
      kind: "p",
      text: 'This Privacy Policy explains how AtypiConnect collects, uses, processes, and protects your personal data when you use the Constela mobile application (the "Service").',
    },
    {
      kind: "p",
      text: "Constela is a dating and friendship mobile application designed for neurodivergent individuals, focusing on emotional, sensory, and lifestyle compatibility.",
    },
  ],
  sections: [
    {
      id: "controller",
      title: "1. Data Controller and Contact Information",
      blocks: [
        { kind: "p", text: "Data Controller: AtypiConnect" },
        {
          kind: "p",
          text: "Registration / Company ID: KXXX00XX (to be completed later)",
        },
        {
          kind: "p",
          text: "Registered Address: Place Fernand Texier, 38400 Saint-Martin-d'Hères, France",
        },
        { kind: "p", text: "Privacy & DPO Email: AtypiConnect@gmail.com" },
        {
          kind: "p",
          text: "EU Representative (Art. 27 GDPR): AtypiConnect@gmail.com",
        },
      ],
    },
    {
      id: "data-collected",
      title: "2. Information We Collect",
      blocks: [
        {
          kind: "p",
          text: "2.1 Account Information",
        },
        {
          kind: "list",
          items: [
            "Authentication: email address and hashed password (never stored in plain text).",
            "Profile identity: first name / display name, username.",
            "Third-party sign-in: if you use Apple Sign-In or Google Sign-In, we receive your OAuth token and the basic profile / email from the provider.",
          ],
        },
        {
          kind: "p",
          text: "2.2 Profile Information (voluntarily provided)",
        },
        {
          kind: "list",
          items: [
            "Visuals & demographics: up to 3 profile photos, age, gender identity, city, country, height, weight.",
            "Background & lifestyle: relationship status, languages spoken, education level, smoking / alcohol habits, pets, activity level, dietary habits.",
            "Personality & preferences: self-descriptive qualities, interest tags, relationship intention (Friendship / Long-term / Casual / Exploring).",
          ],
        },
        {
          kind: "p",
          text: "2.3 Sensitive Data & Biometric Verification",
        },
        {
          kind: "list",
          items: [
            "Emotional & sensory data: neurodivergence tags, sensory preferences, recharge / exhaustion triggers, soothing methods, communication style.",
            "Biometric verification data: 3-angle facial captures (front, left, right) and pose metrics (yaw / roll) taken solely to verify account authenticity.",
          ],
        },
        {
          kind: "p",
          text: "2.4 Usage, Interactions & Technical Data",
        },
        {
          kind: "list",
          items: [
            "In-app activity: swipes (likes, passes, super-likes), mutual matches, friend requests, room messages, direct messages, media attachments, emoji reactions.",
            "Safety & moderation: user reports, blocks, reason logs.",
            "Technical logs: device identifiers (FCM / APNs push tokens), OS version, app version, connection timestamps, IP address, crash logs.",
          ],
        },
        {
          kind: "p",
          text: "2.5 Subscription & Purchase Records",
        },
        {
          kind: "p",
          text: "Subscription tier (Freemium, Premium Light, Premium Plus), transaction IDs, and plan expiration dates. Payment details (credit card numbers) are handled directly by the Apple App Store and Google Play via RevenueCat; we never store your payment card numbers.",
        },
      ],
    },
    {
      id: "legal-bases",
      title: "3. Legal Bases and Purposes of Processing",
      blocks: [
        {
          kind: "p",
          text: "In accordance with Articles 6 and 9 of the GDPR, we only process your personal data under a valid legal basis:",
        },
        {
          kind: "table",
          columns: ["Purpose of Processing", "Data Categories Involved", "Legal Basis (GDPR)"],
          rows: [
            [
              "Account creation & service delivery",
              "Email, username, profile details, match history, chats",
              "Performance of a contract (Art. 6.1.b)",
            ],
            [
              "Matching algorithm",
              "Profile details, interests, lifestyle parameters",
              "Performance of a contract (Art. 6.1.b)",
            ],
            [
              "Sensory & neurotype matching",
              "Sensory triggers, neurodiversity tags, emotional needs",
              "Explicit consent (Art. 9.2.a)",
            ],
            [
              "Facial authenticity verification",
              "3-angle verification photos, facial geometry metrics",
              "Explicit consent (Art. 9.2.a)",
            ],
            [
              "Safety, fraud prevention & moderation",
              "Reports, blocks, usage logs, chat reports",
              "Legitimate interests (Art. 6.1.f)",
            ],
            [
              "Subscription & billing management",
              "Transaction history, tier status, transaction IDs",
              "Legal obligation (Art. 6.1.c) & contract (Art. 6.1.b)",
            ],
            [
              "Push notifications",
              "Device push tokens, activity triggers",
              "Consent (Art. 6.1.a)",
            ],
            [
              "App maintenance & error debugging",
              "Crash logs, technical diagnostics",
              "Legitimate interests (Art. 6.1.f)",
            ],
          ],
        },
      ],
    },
    {
      id: "special-category",
      title: "4. Special Category Data & Biometrics",
      blocks: [
        {
          kind: "list",
          items: [
            "Explicit consent required: data concerning your neurotype, emotional profile, and sensory triggers, as well as facial verification data, are processed strictly upon your explicit, separate opt-in consent during onboarding.",
            "Biometric handling: the facial images collected during verification are evaluated automatically to detect real human presence and photo matching. Verification frames are permanently deleted immediately after the verification status is confirmed; only the verification confirmation badge (boolean true / false) is retained.",
            "Consent withdrawal: you can remove sensitive tags or withdraw consent at any time via your profile settings without closing your account.",
          ],
        },
      ],
    },
    {
      id: "permissions",
      title: "5. Device Permissions",
      blocks: [
        {
          kind: "p",
          text: "You can manage or revoke permissions at any time in your device settings:",
        },
        {
          kind: "list",
          items: [
            "Camera: used strictly to take profile pictures or complete the facial verification check.",
            "Photo library: to upload existing pictures for your profile or in-chat attachments.",
            "Push notifications: to receive alerts about matches and messages (opt-in).",
          ],
        },
      ],
    },
    {
      id: "sharing",
      title: "6. Data Sharing and Third-Party Sub-Processors",
      blocks: [
        {
          kind: "p",
          text: "We do not sell your personal data. Data is shared only with vetted third-party service providers acting as processors:",
        },
        {
          kind: "table",
          columns: ["Provider", "Role / Purpose", "Data Shared", "Location / Safeguards"],
          rows: [
            [
              "Firebase / Google Cloud",
              "Push notifications (FCM), cloud database",
              "Push tokens, encrypted user data",
              "USA / EU (EU-US DPF / SCCs)",
            ],
            [
              "RevenueCat",
              "Subscription & receipt validation",
              "App user ID, transaction event IDs",
              "USA (SCCs)",
            ],
            [
              "Apple / Google",
              "In-app purchases, authentication, receipt validation",
              "Authentication tokens, receipts",
              "USA / EU (DPF)",
            ],
          ],
        },
        {
          kind: "p",
          text: "In exceptional cases, data may also be disclosed to law-enforcement authorities where strictly mandated by statutory provisions or court orders.",
        },
      ],
    },
    {
      id: "transfers",
      title: "7. International Data Transfers",
      blocks: [
        {
          kind: "p",
          text: "When personal data is transferred outside the European Economic Area (EEA), the UK, or Switzerland, we ensure adequate protection through approved legal transfer mechanisms:",
        },
        {
          kind: "list",
          items: [
            "EU–U.S. Data Privacy Framework (DPF) (and Swiss / UK extensions) for certified US recipients.",
            "Standard Contractual Clauses (SCCs) adopted by the European Commission (Art. 46.2.c GDPR), supplemented by risk assessments and technical safeguards (encryption in transit and at rest).",
          ],
        },
      ],
    },
    {
      id: "retention",
      title: "8. Data Retention",
      blocks: [
        {
          kind: "list",
          items: [
            "Active accounts: profile data and interactions are maintained for as long as your account remains active.",
            "Biometric verification images: deleted immediately after processing and verification completion.",
            "Chat logs: retained for up to 12 months for community safety, abuse investigations, and moderation purposes, after which they are routinely purged.",
            "Account deletion: when you request account deletion, all personal data is permanently deleted or irreversibly anonymized within 30 days, with the exception of transaction records retained up to statutory commercial / tax retention limits (e.g., 5 to 10 years depending on jurisdiction).",
          ],
        },
      ],
    },
    {
      id: "rights",
      title: "9. Your Data Subject Rights (GDPR)",
      blocks: [
        {
          kind: "p",
          text: "If you reside in the EEA, the UK, or Switzerland, you hold the following rights:",
        },
        {
          kind: "list",
          items: [
            "Right of access (Art. 15): request a copy of your processed personal data.",
            "Right to rectification (Art. 16): update or correct inaccurate profile details.",
            "Right to erasure (Art. 17): request the deletion of your account and related data.",
            "Right to restriction of processing (Art. 18): limit the processing of your data under specific legal grounds.",
            "Right to data portability (Art. 20): receive your personal data in a structured, machine-readable format (JSON / CSV).",
            "Right to object (Art. 21): object to processing based on legitimate interests.",
            "Right to withdraw consent (Art. 7.3): revoke consent previously given (e.g., sensitive profile traits, notifications) at any time.",
            "Right to lodge a complaint (Art. 77): you have the right to file a complaint with your local Data Protection Authority (e.g., CNIL in France, APD in Belgium, DPC in Ireland, or ICO in the UK).",
          ],
        },
        {
          kind: "p",
          text: "To exercise any of these rights, contact us at AtypiConnect@gmail.com. We will respond to your request within 30 days.",
        },
      ],
    },
    {
      id: "security",
      title: "10. Data Security",
      blocks: [
        {
          kind: "p",
          text: "All data transmissions use TLS / HTTPS encryption. Sensitive fields and database records are encrypted at rest using industry-standard protocols (AES-256). Strict role-based access control (RBAC) restricts internal access to user data.",
        },
      ],
    },
    {
      id: "age",
      title: "11. Age Limitation (Children's Privacy)",
      blocks: [
        {
          kind: "p",
          text: "Constela is strictly intended for individuals aged 18 and older. We do not knowingly register minors. If we detect that an account belongs to a user under 18, the account and associated data are purged immediately.",
        },
      ],
    },
    {
      id: "updates",
      title: "12. Updates to This Policy",
      blocks: [
        {
          kind: "p",
          text: "We may update this Privacy Policy to reflect operational or legal changes. When significant modifications occur, we will notify you through an in-app notice or by email prior to the changes taking effect. If changes involve new processing activities requiring consent, your explicit consent will be requested.",
        },
      ],
    },
  ],
}

// =====================================================================
// ENGLISH — Terms of Service
// =====================================================================

export const TERMS_EN: LegalDoc = {
  meta: {
    title: "Terms of Service",
    lastUpdated: "August 15, 2026",
    controller: "AtypiConnect",
    registered: "Company ID: KXXX00XX (to be completed later)",
    address: "Place Fernand Texier, 38400 Saint-Martin-d'Hères, France",
    email: "AtypiConnect@gmail.com",
    euRep: "AtypiConnect@gmail.com",
  },
  intro: [
    {
      kind: "p",
      text: 'These Terms of Service ("Terms") govern your access to and use of the Constela mobile application (the "Service"), operated by AtypiConnect.',
    },
    {
      kind: "p",
      text: "Constela is a friendship, dating, and community platform thoughtfully designed for neurodivergent individuals, focusing on emotional, sensory, and communication compatibility.",
    },
  ],
  sections: [
    {
      id: "tos-overview",
      title: "1. Overview and Purpose",
      blocks: [
        {
          kind: "p",
          text: "These Terms govern your access to and use of the Constela mobile application operated by AtypiConnect.",
        },
      ],
    },
    {
      id: "tos-eligibility",
      title: "2. Eligibility & Account Registration",
      blocks: [
        {
          kind: "list",
          items: [
            "Age requirement: you must be at least 18 years of age to create an account and access the Service.",
            "Accuracy: you agree to provide accurate information and refrain from creating impersonating or misleading profiles.",
            "Account security: you are solely responsible for maintaining the confidentiality of your login credentials.",
          ],
        },
      ],
    },
    {
      id: "tos-conduct",
      title: "3. Community Standards & Code of Conduct",
      blocks: [
        {
          kind: "p",
          text: "Constela is an inclusive, respectful, and safe space. You strictly agree not to:",
        },
        {
          kind: "list",
          items: [
            "Engage in hate speech, harassment, bullying, ableism, or discrimination of any kind.",
            "Send unsolicited sexually explicit, graphic, or violent content.",
            "Solicit money, spam, promote commercial goods, or engage in fraudulent schemes.",
            "Share or disclose private information belonging to another user without their explicit consent (doxxing).",
          ],
        },
      ],
    },
    {
      id: "tos-moderation",
      title: "4. Moderation & Safety",
      blocks: [
        {
          kind: "list",
          items: [
            "Reporting & blocking: in-app features are provided to immediately block users and report abusive behaviors.",
            "Enforcement: we reserve the right to suspend or permanently terminate any account that violates these Terms or jeopardizes user safety.",
            "Face verification: a non-intrusive selfie verification check may be required to protect our community against impersonation and bot profiles.",
          ],
        },
      ],
    },
    {
      id: "tos-privacy",
      title: "5. Privacy and GDPR Compliance",
      blocks: [
        {
          kind: "p",
          text: "Your privacy is paramount. Our collection and processing of personal data (including profile details, sensory preferences, and optional biometric verification data) are detailed in our Privacy Policy.",
        },
        {
          kind: "p",
          text: "The processing of sensitive neurotype and emotional profile data relies strictly on your explicit opt-in consent, which you may withdraw at any time in your account settings.",
        },
      ],
    },
    {
      id: "tos-billing",
      title: "6. In-App Purchases & Subscriptions",
      blocks: [
        {
          kind: "list",
          items: [
            "Subscriptions (Premium tiers) and in-app purchases are billed and processed directly through the Apple App Store or Google Play Store.",
            "Auto-renewal management, billing, and cancellations are handled through your Apple or Google account settings according to their applicable terms.",
            "Refund requests must be directed to Apple or Google pursuant to their respective platform store policies.",
          ],
        },
      ],
    },
    {
      id: "tos-ip",
      title: "7. Intellectual Property",
      blocks: [
        {
          kind: "p",
          text: "All software, trademarks, visual interfaces, graphics, and algorithms associated with Constela are the exclusive property of AtypiConnect. You retain ownership of the content (photos, text) you upload, while granting Constela a non-exclusive, royalty-free license to host and display it solely for operating the Service.",
        },
      ],
    },
    {
      id: "tos-termination",
      title: "8. Termination & Account Deletion",
      blocks: [
        {
          kind: "list",
          items: [
            "You may delete your account at any time via the application settings. Deletion triggers the permanent erasure or irreversible anonymization of your data within 30 days.",
            "We may terminate or restrict your access immediately if you commit a material breach of these Terms.",
          ],
        },
      ],
    },
    {
      id: "tos-law",
      title: "9. Governing Law & Dispute Resolution",
      blocks: [
        {
          kind: "p",
          text: "These Terms are governed by and construed in accordance with the laws of France (or applicable EU consumer protection regulations).",
        },
        { kind: "p", text: "Contact / legal inquiries: AtypiConnect@gmail.com" },
      ],
    },
  ],
}

// =====================================================================
// FRENCH — Politique de confidentialité
// =====================================================================

export const PRIVACY_FR: LegalDoc = {
  meta: {
    title: "Politique de confidentialité",
    lastUpdated: "15 août 2026",
    controller: "AtypiConnect",
    registered: "Numéro d'entreprise : XX000000 (à compléter ultérieurement)",
    address: "Place Fernand Texier, 38400 Saint-Martin-d'Hères, France",
    email: "AtypiConnect@gmail.com",
    euRep: "AtypiConnect@gmail.com",
  },
  intro: [
    {
      kind: "p",
      text: "La présente politique de confidentialité explique comment AtypiConnect collecte, utilise, traite et protège vos données personnelles lorsque vous utilisez l'application mobile Constela (le « Service »).",
    },
    {
      kind: "p",
      text: "Constela est une application mobile de rencontres et d'amitié conçue pour les personnes neurodivergentes, axée sur la compatibilité émotionnelle, sensorielle et le mode de vie.",
    },
  ],
  sections: [
    {
      id: "controller-fr",
      title: "1. Responsable du traitement et coordonnées",
      blocks: [
        { kind: "p", text: "Responsable du traitement : AtypiConnect" },
        {
          kind: "p",
          text: "Immatriculation / Numéro d'entreprise : XX000000 (à compléter ultérieurement)",
        },
        {
          kind: "p",
          text: "Adresse du siège social : Place Fernand Texier, 38400 Saint-Martin-d'Hères, France",
        },
        { kind: "p", text: "E-mail confidentialité & DPO : AtypiConnect@gmail.com" },
        {
          kind: "p",
          text: "Représentant dans l'UE (Art. 27 RGPD) : AtypiConnect@gmail.com",
        },
      ],
    },
    {
      id: "data-collected-fr",
      title: "2. Données que nous collectons",
      blocks: [
        { kind: "p", text: "2.1 Informations de compte" },
        {
          kind: "list",
          items: [
            "Authentification : adresse e-mail et mot de passe haché (jamais stocké en texte clair).",
            "Identité du profil : prénom / nom d'affichage, nom d'utilisateur.",
            "Connexion via un tiers : si vous utilisez la connexion avec Apple ou Google, nous recevons votre jeton OAuth ainsi que votre profil de base / e-mail transmis par le fournisseur.",
          ],
        },
        { kind: "p", text: "2.2 Informations de profil (fournies volontairement)" },
        {
          kind: "list",
          items: [
            "Visuels & données démographiques : jusqu'à 3 photos de profil, âge, identité de genre, ville, pays, taille, poids.",
            "Parcours & mode de vie : situation relationnelle, langues parlées, niveau d'études, consommation de tabac / alcool, animaux de compagnie, niveau d'activité physique, habitudes alimentaires.",
            "Personnalité & préférences : traits auto-descriptifs, centres d'intérêt, type de relation recherchée (Amitié / Relation sérieuse / Sans prise de tête / Sorties).",
          ],
        },
        { kind: "p", text: "2.3 Données sensibles & vérification biométrique" },
        {
          kind: "list",
          items: [
            "Données émotionnelles & sensorielles : étiquettes de neurodivergence, préférences sensorielles, déclencheurs de recharge / d'épuisement, méthodes d'apaisement, style de communication.",
            "Données de vérification biométrique : 3 photos faciales sous différents angles (face, gauche, droite) et mesures de pose associées (lacet / roulis) collectées uniquement pour vérifier l'authenticité du compte.",
          ],
        },
        { kind: "p", text: "2.4 Données d'utilisation, interactions & données techniques" },
        {
          kind: "list",
          items: [
            "Activité dans l'application : actions de swipe (likes, passes, super-likes), matchs mutuels, demandes d'amis, messages de salons, messages directs, pièces jointes, réactions emoji.",
            "Sécurité & modération : signalements d'utilisateurs, blocages, motifs enregistrés.",
            "Journaux techniques : identifiants d'appareils (jetons de notifications push FCM / APNs), version du système d'exploitation, version de l'application, horodatages de connexion, adresse IP, rapports de plantage.",
          ],
        },
        { kind: "p", text: "2.5 Données d'abonnement & historique d'achat" },
        {
          kind: "p",
          text: "Formule d'abonnement (Freemium, Premium Light, Premium Plus), identifiants de transaction, dates d'expiration de l'offre. Les données de paiement (numéros de carte bancaire) sont traitées directement par l'App Store d'Apple et Google Play via RevenueCat ; nous ne stockons jamais vos coordonnées bancaires.",
        },
      ],
    },
    {
      id: "legal-bases-fr",
      title: "3. Bases légales et finalités du traitement",
      blocks: [
        {
          kind: "p",
          text: "Conformément aux articles 6 et 9 du RGPD, nous traitons vos données personnelles uniquement sur la base d'un fondement juridique valable :",
        },
        {
          kind: "table",
          columns: ["Finalité du traitement", "Catégories de données concernées", "Base légale (RGPD)"],
          rows: [
            [
              "Création de compte & fourniture du service",
              "E-mail, nom d'utilisateur, détails du profil, historique de matchs, messages",
              "Exécution d'un contrat (Art. 6.1.b)",
            ],
            [
              "Algorithme de mise en relation",
              "Détails du profil, centres d'intérêt, mode de vie",
              "Exécution d'un contrat (Art. 6.1.b)",
            ],
            [
              "Mise en relation sensorielle & neurotypique",
              "Déclencheurs sensoriels, étiquettes de neurodivergence, besoins émotionnels",
              "Consentement explicite (Art. 9.2.a)",
            ],
            [
              "Vérification faciale d'authenticité",
              "Photos de vérification sous 3 angles, métriques de géométrie faciale",
              "Consentement explicite (Art. 9.2.a)",
            ],
            [
              "Sécurité, prévention des fraudes & modération",
              "Signalements, blocages, journaux d'activité, signalements de messages",
              "Intérêt légitime (Art. 6.1.f)",
            ],
            [
              "Gestion de la facturation & des abonnements",
              "Historique des transactions, statut de l'offre, identifiants de transaction",
              "Obligation légale (Art. 6.1.c) & contrat (Art. 6.1.b)",
            ],
            [
              "Notifications push",
              "Jetons push de l'appareil, déclencheurs d'activité",
              "Consentement (Art. 6.1.a)",
            ],
            [
              "Maintenance de l'application & débogage",
              "Rapports de plantage, diagnostics techniques",
              "Intérêt légitime (Art. 6.1.f)",
            ],
          ],
        },
      ],
    },
    {
      id: "special-category-fr",
      title: "4. Données de catégories particulières et biométrie",
      blocks: [
        {
          kind: "list",
          items: [
            "Consentement explicite requis : les données relatives à votre neurotype, votre profil émotionnel et vos déclencheurs sensoriels, ainsi que les données de vérification faciale, sont traitées strictement sur la base de votre consentement explicite et distinct recueilli lors de votre inscription.",
            "Traitement des données biométriques : les images faciales collectées lors de la vérification sont analysées automatiquement pour confirmer la présence humaine réelle et la correspondance avec les photos du profil. Les clichés de vérification sont définitivement supprimés immédiatement après la confirmation du statut de vérification ; seul le badge confirmant la vérification (valeur booléenne vrai / faux) est conservé.",
            "Retrait du consentement : vous pouvez supprimer vos badges sensibles ou retirer votre consentement à tout moment depuis les paramètres de votre profil, sans avoir à fermer votre compte.",
          ],
        },
      ],
    },
    {
      id: "permissions-fr",
      title: "5. Autorisations de l'appareil",
      blocks: [
        {
          kind: "p",
          text: "Vous pouvez gérer ou révoquer ces autorisations à tout moment dans les réglages de votre appareil :",
        },
        {
          kind: "list",
          items: [
            "Appareil photo : utilisé strictement pour prendre des photos de profil ou effectuer le contrôle de vérification faciale.",
            "Galerie photo : pour importer des photos existantes sur votre profil ou envoyer des images par message.",
            "Notifications push : pour recevoir des alertes concernant vos matchs et vos messages (sur adhésion volontaire).",
          ],
        },
      ],
    },
    {
      id: "sharing-fr",
      title: "6. Partage de données et sous-traitants tiers",
      blocks: [
        {
          kind: "p",
          text: "Nous ne vendons pas vos données personnelles. Les données sont partagées uniquement avec des prestataires de services tiers vérifiés agissant en qualité de sous-traitants :",
        },
        {
          kind: "table",
          columns: ["Prestataire", "Rôle / Finalité", "Données partagées", "Localisation / Garanties"],
          rows: [
            [
              "Firebase / Google Cloud",
              "Notifications push (FCM), base de données cloud",
              "Jetons push, données utilisateur chiffrées",
              "USA / UE (Cadre DPF UE-USA / CCT)",
            ],
            [
              "RevenueCat",
              "Validation des abonnements & reçus in-app",
              "Identifiant utilisateur, identifiants d'événements de transaction",
              "USA (CCT)",
            ],
            [
              "Apple / Google",
              "Achats intégrés, authentification, validation des reçus",
              "Jetons d'authentification, reçus",
              "USA / UE (DPF)",
            ],
          ],
        },
        {
          kind: "p",
          text: "Dans des cas exceptionnels, les données peuvent également être transmises aux autorités judiciaires ou policières lorsque la loi ou une décision de justice l'exige strictement.",
        },
      ],
    },
    {
      id: "transfers-fr",
      title: "7. Transferts internationaux de données",
      blocks: [
        {
          kind: "p",
          text: "Lorsque des données personnelles sont transférées hors de l'Espace économique européen (EEE), du Royaume-Uni ou de la Suisse, nous garantissons un niveau de protection adéquat grâce à des mécanismes de transfert légaux reconnus :",
        },
        {
          kind: "list",
          items: [
            "Le cadre de protection des données UE–États-Unis (Data Privacy Framework — DPF) (ainsi que ses extensions suisse et britannique) pour les destinataires américains certifiés.",
            "Les clauses contractuelles types (CCT / SCCs) adoptées par la Commission européenne (Art. 46.2.c du RGPD), assorties d'évaluations des risques et de mesures de sécurité techniques (chiffrement en transit et au repos).",
          ],
        },
      ],
    },
    {
      id: "retention-fr",
      title: "8. Conservation des données",
      blocks: [
        {
          kind: "list",
          items: [
            "Comptes actifs : les données de profil et les interactions sont conservées tant que votre compte reste actif.",
            "Images de vérification biométrique : supprimées immédiatement après le traitement et la validation du compte.",
            "Historique des messages : conservé pendant une durée maximale de 12 mois à des fins de sécurité de la communauté, d'enquête sur les abus et de modération, après quoi il est purgé automatiquement.",
            "Suppression de compte : lorsque vous demandez la suppression de votre compte, l'ensemble de vos données personnelles est définitivement supprimé ou rendu anonyme de façon irréversible sous 30 jours, à l'exception des données de transaction conservées selon les délais légaux obligatoires (ex. 5 à 10 ans selon les obligations fiscales et comptables applicables).",
          ],
        },
      ],
    },
    {
      id: "rights-fr",
      title: "9. Vos droits en tant que personne concernée (RGPD)",
      blocks: [
        {
          kind: "p",
          text: "Si vous résidez dans l'EEE, au Royaume-Uni ou en Suisse, vous disposez des droits suivants :",
        },
        {
          kind: "list",
          items: [
            "Droit d'accès (Art. 15) : demander une copie de vos données personnelles traitées.",
            "Droit de rectification (Art. 16) : mettre à jour ou corriger des informations de profil inexactes.",
            "Droit à l'effacement (Art. 17) : demander la suppression de votre compte et des données associées.",
            "Droit à la limitation du traitement (Art. 18) : demander la limitation du traitement de vos données dans certains cas prévus par la loi.",
            "Droit à la portabilité des données (Art. 20) : recevoir vos données personnelles dans un format structuré et lisible par machine (JSON / CSV).",
            "Droit d'opposition (Art. 21) : vous opposer aux traitements fondés sur notre intérêt légitime.",
            "Droit de retirer votre consentement (Art. 7.3) : retirer à tout moment un consentement préalablement donné (ex. badges de profil sensibles, notifications).",
            "Droit d'introduire une réclamation (Art. 77) : vous avez le droit d'introduire une réclamation auprès de votre autorité locale de protection des données (ex. la CNIL en France, l'APD en Belgique, la CPVP en Suisse ou l'ICO au Royaume-Uni).",
          ],
        },
        {
          kind: "p",
          text: "Pour exercer l'un de ces droits, contactez-nous à l'adresse : AtypiConnect@gmail.com. Nous répondrons à votre demande dans un délai de 30 jours.",
        },
      ],
    },
    {
      id: "security-fr",
      title: "10. Sécurité des données",
      blocks: [
        {
          kind: "p",
          text: "Toutes les transmissions de données sont sécurisées par un chiffrement TLS / HTTPS. Les champs sensibles et les bases de données sont chiffrés au repos selon les standards industriels (AES-256). Un contrôle d'accès strict basé sur les rôles (RBAC) limite l'accès interne aux données des utilisateurs.",
        },
      ],
    },
    {
      id: "age-fr",
      title: "11. Limite d'âge (protection des mineurs)",
      blocks: [
        {
          kind: "p",
          text: "Constela est strictement réservée aux personnes âgées de 18 ans et plus. Nous n'enregistrons pas sciemment de personnes mineures. Si nous découvrons qu'un compte appartient à un utilisateur de moins de 18 ans, le compte et toutes les données associées sont immédiatement supprimés.",
        },
      ],
    },
    {
      id: "updates-fr",
      title: "12. Modifications de cette politique",
      blocks: [
        {
          kind: "p",
          text: "Nous pouvons mettre à jour cette politique de confidentialité afin de refléter des évolutions opérationnelles ou réglementaires. En cas de modification importante, nous vous en informerons par le biais d'une notification dans l'application ou par e-mail avant l'entrée en vigueur des changements. Si ces modifications impliquent de nouveaux traitements nécessitant votre consentement, votre accord explicite vous sera à nouveau demandé.",
        },
      ],
    },
  ],
}

// =====================================================================
// FRENCH — Conditions générales d'utilisation (CGU)
// =====================================================================

export const TERMS_FR: LegalDoc = {
  meta: {
    title: "Conditions générales d'utilisation",
    lastUpdated: "15 août 2026",
    controller: "AtypiConnect",
    registered: "Numéro d'entreprise : XX000000 (à compléter ultérieurement)",
    address: "Place Fernand Texier, 38400 Saint-Martin-d'Hères, France",
    email: "AtypiConnect@gmail.com",
    euRep: "AtypiConnect@gmail.com",
  },
  intro: [
    {
      kind: "p",
      text: "Les présentes conditions générales d'utilisation (les « CGU ») régissent votre accès et votre utilisation de l'application mobile Constela (le « Service »), éditée par AtypiConnect.",
    },
    {
      kind: "p",
      text: "Constela est une plateforme d'amitié, de rencontres et de communauté pensée et conçue pour les personnes neurodivergentes, mettant l'accent sur la compatibilité émotionnelle, sensorielle et les modes de communication.",
    },
  ],
  sections: [
    {
      id: "cgu-overview",
      title: "1. Présentation et objet",
      blocks: [
        {
          kind: "p",
          text: "Les présentes CGU régissent votre accès et votre utilisation de l'application mobile Constela éditée par AtypiConnect.",
        },
      ],
    },
    {
      id: "cgu-eligibility",
      title: "2. Éligibilité et création de compte",
      blocks: [
        {
          kind: "list",
          items: [
            "Âge requis : vous devez obligatoirement être âgé d'au moins 18 ans pour créer un compte et accéder au Service.",
            "Exactitude des informations : vous vous engagez à fournir des informations véridiques et à ne pas créer de profils trompeurs ou usurpant l'identité d'un tiers.",
            "Sécurité du compte : vous êtes seul responsable du maintien de la confidentialité de vos identifiants de connexion.",
          ],
        },
      ],
    },
    {
      id: "cgu-conduct",
      title: "3. Règles de conduite et normes communautaires",
      blocks: [
        {
          kind: "p",
          text: "Constela est un espace inclusif, respectueux et sécurisé. Vous vous engagez formellement à ne pas :",
        },
        {
          kind: "list",
          items: [
            "Tenir de propos haineux, pratiquer le harcèlement, l'intimidation, le validisme (ableism) ou toute autre forme de discrimination.",
            "Envoyer des contenus non sollicités à caractère sexuellement explicite, violent ou graphique.",
            "Solliciter de l'argent, envoyer des spams, promouvoir des produits commerciaux ou participer à des activités frauduleuses.",
            "Partager ou divulguer des informations privées appartenant à un autre utilisateur sans son accord explicite (doxxing).",
          ],
        },
      ],
    },
    {
      id: "cgu-moderation",
      title: "4. Modération et sécurité",
      blocks: [
        {
          kind: "list",
          items: [
            "Signalement et blocage : des fonctionnalités intégrées à l'application permettent de bloquer immédiatement des utilisateurs et de signaler les comportements abusifs.",
            "Application des règles : nous nous réservons le droit de suspendre ou de supprimer définitivement tout compte qui enfreint les présentes CGU ou compromet la sécurité des utilisateurs.",
            "Vérification faciale : une vérification non intrusive par selfie peut être requise afin de protéger notre communauté contre l'usurpation d'identité et les faux comptes (bots).",
          ],
        },
      ],
    },
    {
      id: "cgu-privacy",
      title: "5. Confidentialité et conformité RGPD",
      blocks: [
        {
          kind: "p",
          text: "La protection de votre vie privée est essentielle. La collecte et le traitement de vos données personnelles (incluant les détails de profil, préférences sensorielles et éventuelles données biométriques de vérification) sont détaillés dans notre Politique de confidentialité.",
        },
        {
          kind: "p",
          text: "Le traitement des données sensibles relatives au neurotype et au profil émotionnel repose strictement sur votre consentement explicite, que vous pouvez retirer à tout moment dans les paramètres de votre compte.",
        },
      ],
    },
    {
      id: "cgu-billing",
      title: "6. Achats intégrés et abonnements",
      blocks: [
        {
          kind: "list",
          items: [
            "Les abonnements (formules Premium) et achats intégrés sont facturés et gérés directement via l'Apple App Store ou le Google Play Store.",
            "La gestion du renouvellement automatique, la facturation et les résiliations s'effectuent depuis les paramètres de votre compte Apple ou Google, conformément à leurs conditions applicables.",
            "Les demandes de remboursement doivent être adressées directement à Apple ou Google, conformément aux politiques en vigueur sur leurs plateformes respectives.",
          ],
        },
      ],
    },
    {
      id: "cgu-ip",
      title: "7. Propriété intellectuelle",
      blocks: [
        {
          kind: "p",
          text: "L'ensemble des logiciels, marques, interfaces visuelles, éléments graphiques et algorithmes associés à Constela sont la propriété exclusive d'AtypiConnect. Vous conservez la propriété des contenus (photos, textes) que vous publiez, tout en accordant à Constela une licence non exclusive, gratuite et mondiale pour les héberger et les afficher dans le seul but d'assurer le fonctionnement du Service.",
        },
      ],
    },
    {
      id: "cgu-termination",
      title: "8. Résiliation et suppression de compte",
      blocks: [
        {
          kind: "list",
          items: [
            "Vous pouvez supprimer votre compte à tout moment depuis les paramètres de l'application. La suppression entraîne l'effacement permanent ou l'anonymisation irréversible de vos données dans un délai de 30 jours.",
            "Nous pouvons résilier ou restreindre votre accès immédiatement en cas de manquement grave aux présentes CGU.",
          ],
        },
      ],
    },
    {
      id: "cgu-law",
      title: "9. Droit applicable et règlement des litiges",
      blocks: [
        {
          kind: "p",
          text: "Les présentes CGU sont régies et interprétées conformément au droit français (ou aux réglementations applicables en matière de protection des consommateurs au sein de l'Union européenne).",
        },
        { kind: "p", text: "Contact / demandes juridiques : AtypiConnect@gmail.com" },
      ],
    },
  ],
}