// ============================================================
// GUIDE COURTIER DAP — FICHIER DE DONNÉES
// ============================================================
// Ce fichier contient TOUTES les données affichées dans le guide.
// Pour mettre à jour le guide, modifiez uniquement ce fichier.
//
// VALEURS D'APPÉTENCE :
//   "green"  → Appétence forte (vert)
//   "yellow" → Possible mais sélectif (jaune)
//   "red"    → Refus quasi systématique (rouge)
//   Ne pas inclure le produit = Non proposé (gris)
//
// MÉTHODES DE DEMANDE :
//   "Portail"       → Via plateforme en ligne
//   "Email"         → Par email
//   "Questionnaire" → Questionnaire à remplir
//   "Mixte"         → Combinaison de méthodes
// ============================================================

window.DAP_DATA = {

  // ── Liste des produits d'assurance (colonnes de la matrice) ──
  products: [
    "RC Exploitation",
    "RC Professionnelle",
    "Incendie Entreprise",
    "Auto Flotte",
    "Accidents du Travail",
    "Hospitalisation",
    "RC Mandataires Sociaux",
    "Protection Juridique",
    "Cyber",
    "Transport / Marine",
    "RC Organisateurs",
    "Tous Risques Electronique",
    "Bris de Machine",
    "Responsabilité Décennale",
    "Assistance"
  ],

  // ── Informations nécessaires par type de produit (Vue 3) ──
  requiredInfo: {
    "RC Exploitation": [
      "Activité détaillée (description précise)",
      "Chiffre d'affaires (3 dernières années)",
      "Nombre de travailleurs",
      "Sinistralité (5 dernières années)",
      "Copie de la police actuelle",
      "Sous-traitance éventuelle"
    ],
    "RC Professionnelle": [
      "Activité détaillée",
      "Chiffre d'affaires (3 dernières années)",
      "Description des missions types",
      "Sinistralité (5 dernières années)",
      "Copie de la police actuelle"
    ],
    "Incendie Entreprise": [
      "Adresse du risque",
      "Description du bâtiment (construction, superficie, année)",
      "Activité exercée dans les locaux",
      "Valeur du bâtiment et du contenu",
      "Mesures de prévention incendie",
      "Sinistralité (5 dernières années)"
    ],
    "Auto Flotte": [
      "Liste des véhicules (marque, modèle, année, valeur)",
      "Usage des véhicules",
      "Nombre de conducteurs",
      "Sinistralité (3-5 ans)",
      "Kilométrage annuel estimé"
    ],
    "Accidents du Travail": [
      "Masse salariale brute annuelle",
      "Nombre de travailleurs par catégorie (ouvriers/employés)",
      "Code NACE / description activité",
      "Sinistralité (5 dernières années)",
      "Pourcentage de travail manuel"
    ],
    "Hospitalisation": [
      "Nombre d'affiliés",
      "Répartition par âge",
      "Plan souhaité (chambre individuelle/double/commune)",
      "Couverture souhaitée (ambulatoire, dentaire, optique)",
      "Affiliation existante éventuelle"
    ],
    "RC Mandataires Sociaux": [
      "Forme juridique de la société",
      "Chiffre d'affaires et bilan",
      "Nombre d'administrateurs/gérants",
      "Secteur d'activité",
      "Cotation en bourse (oui/non)",
      "Sinistralité éventuelle"
    ],
    "Protection Juridique": [
      "Activité de l'entreprise",
      "Nombre de travailleurs",
      "Chiffre d'affaires",
      "Couverture souhaitée (contrats, fiscal, social, pénal)"
    ],
    "Cyber": [
      "Chiffre d'affaires",
      "Nombre d'employés",
      "Type de données traitées (personnelles, financières, santé)",
      "Mesures de cybersécurité en place",
      "Sous-traitance IT",
      "Historique d'incidents cyber"
    ],
    "Transport / Marine": [
      "Type de marchandises transportées",
      "Valeur moyenne par transport",
      "Zones géographiques",
      "Modes de transport (route, mer, air)",
      "Volume annuel de transports",
      "Sinistralité (5 ans)"
    ]
  },

  // ── Compagnies d'assurance ──
  companies: [
    {
      id: "axa",
      name: "AXA Belgium",
      contacts: [
        { name: "Jean Dupont", role: "Souscripteur Entreprises", email: "jean.dupont@axa.be", phone: "+32 2 678 31 11" }
      ],
      inspector: { name: "Marie Martin", email: "marie.martin@axa.be", phone: "+32 2 678 32 00", zone: "Bruxelles & Brabant" },
      limits: { minPremium: "750 EUR", minCA: "", notes: "Pas d'acceptation sous 750 EUR de prime annuelle pour les risques entreprise" },
      productSheets: {
        "RC Exploitation": {
          appetite: "green",
          process: { method: "Portail", portalUrl: "https://broker.axa.be", email: "", notes: "Connexion avec login courtier AXA" },
          documents: [
            { name: "Questionnaire RC Exploitation AXA", url: "#", type: "questionnaire" },
            { name: "Conditions générales RC AXA", url: "#", type: "conditions" }
          ],
          refusedActivities: ["Discothèques / Boîtes de nuit", "Fabrication de feux d'artifice", "Travaux de démolition"]
        },
        "RC Professionnelle": {
          appetite: "green",
          process: { method: "Portail", portalUrl: "https://broker.axa.be", email: "", notes: "" },
          documents: [
            { name: "Questionnaire RC Pro AXA", url: "#", type: "questionnaire" }
          ],
          refusedActivities: []
        },
        "Incendie Entreprise": {
          appetite: "green",
          process: { method: "Email", portalUrl: "", email: "souscription.incendie@axa.be", notes: "Joindre photos + plan du bâtiment" },
          documents: [
            { name: "Questionnaire Incendie Entreprise", url: "#", type: "questionnaire" }
          ],
          refusedActivities: ["Stockage de matières explosives"]
        },
        "Auto Flotte": {
          appetite: "green",
          process: { method: "Portail", portalUrl: "https://broker.axa.be", email: "", notes: "Minimum 3 véhicules" },
          documents: [],
          refusedActivities: []
        },
        "Accidents du Travail": {
          appetite: "green",
          process: { method: "Portail", portalUrl: "https://broker.axa.be", email: "", notes: "" },
          documents: [
            { name: "Formulaire AT AXA", url: "#", type: "formulaire" }
          ],
          refusedActivities: ["Travail intérimaire > 80% de la masse salariale"]
        },
        "Hospitalisation": {
          appetite: "yellow",
          process: { method: "Email", portalUrl: "", email: "employee.benefits@axa.be", notes: "Minimum 5 affiliés" },
          documents: [],
          refusedActivities: []
        },
        "Cyber": {
          appetite: "yellow",
          process: { method: "Questionnaire", portalUrl: "", email: "cyber@axa.be", notes: "Questionnaire obligatoire" },
          documents: [
            { name: "Questionnaire Cyber AXA", url: "#", type: "questionnaire" }
          ],
          refusedActivities: ["Crypto-monnaies", "Jeux en ligne"]
        }
      }
    },

    {
      id: "ag-insurance",
      name: "AG Insurance",
      contacts: [
        { name: "Pierre Leroy", role: "Account Manager", email: "pierre.leroy@aginsurance.be", phone: "+32 2 664 81 11" },
        { name: "Sophie Janssen", role: "Souscriptrice Entreprises", email: "sophie.janssen@aginsurance.be", phone: "+32 2 664 82 00" }
      ],
      inspector: { name: "Luc Peeters", email: "luc.peeters@aginsurance.be", phone: "+32 2 664 83 00", zone: "National" },
      limits: { minPremium: "500 EUR", minCA: "250.000 EUR", notes: "CA minimum de 250.000 EUR pour les risques entreprise" },
      productSheets: {
        "RC Exploitation": {
          appetite: "green",
          process: { method: "Mixte", portalUrl: "https://portail.aginsurance.be", email: "souscription@aginsurance.be", notes: "Portail pour risques standards, email pour risques spéciaux" },
          documents: [
            { name: "Questionnaire RC Exploitation AG", url: "#", type: "questionnaire" }
          ],
          refusedActivities: ["Discothèques", "Parcs d'attractions"]
        },
        "RC Professionnelle": {
          appetite: "yellow",
          process: { method: "Email", portalUrl: "", email: "souscription@aginsurance.be", notes: "Joindre questionnaire rempli" },
          documents: [
            { name: "Questionnaire RC Pro AG", url: "#", type: "questionnaire" }
          ],
          refusedActivities: ["Activités financières non réglementées"]
        },
        "Incendie Entreprise": {
          appetite: "green",
          process: { method: "Portail", portalUrl: "https://portail.aginsurance.be", email: "", notes: "" },
          documents: [],
          refusedActivities: []
        },
        "Accidents du Travail": {
          appetite: "green",
          process: { method: "Portail", portalUrl: "https://portail.aginsurance.be", email: "", notes: "Tarification automatique pour PME < 20 travailleurs" },
          documents: [
            { name: "Formulaire AT AG", url: "#", type: "formulaire" }
          ],
          refusedActivities: ["Construction > 50% de la masse salariale", "Travail en hauteur exclusif"]
        },
        "Auto Flotte": {
          appetite: "green",
          process: { method: "Portail", portalUrl: "https://portail.aginsurance.be", email: "", notes: "" },
          documents: [],
          refusedActivities: []
        },
        "Protection Juridique": {
          appetite: "green",
          process: { method: "Portail", portalUrl: "https://portail.aginsurance.be", email: "", notes: "" },
          documents: [],
          refusedActivities: []
        },
        "RC Mandataires Sociaux": {
          appetite: "yellow",
          process: { method: "Email", portalUrl: "", email: "speciallines@aginsurance.be", notes: "Sur mesure uniquement" },
          documents: [
            { name: "Questionnaire D&O AG", url: "#", type: "questionnaire" }
          ],
          refusedActivities: ["Sociétés cotées en bourse"]
        }
      }
    },

    {
      id: "allianz",
      name: "Allianz Benelux",
      contacts: [
        { name: "Thomas Vermeer", role: "Souscripteur Senior", email: "thomas.vermeer@allianz.be", phone: "+32 2 214 61 11" }
      ],
      inspector: { name: "Koen De Smet", email: "koen.desmet@allianz.be", phone: "+32 2 214 62 00", zone: "Flandre" },
      limits: { minPremium: "1.000 EUR", minCA: "500.000 EUR", notes: "Focus grandes entreprises et risques industriels" },
      productSheets: {
        "RC Exploitation": {
          appetite: "yellow",
          process: { method: "Email", portalUrl: "", email: "underwriting@allianz.be", notes: "Dossier complet requis" },
          documents: [
            { name: "Questionnaire RC Allianz", url: "#", type: "questionnaire" },
            { name: "Guide souscription Allianz", url: "#", type: "guide" }
          ],
          refusedActivities: ["Discothèques", "Activités pyrotechniques", "Amiante"]
        },
        "Incendie Entreprise": {
          appetite: "green",
          process: { method: "Email", portalUrl: "", email: "property@allianz.be", notes: "Rapport de prévention pour risques > 5M EUR" },
          documents: [
            { name: "Questionnaire Incendie Allianz", url: "#", type: "questionnaire" }
          ],
          refusedActivities: ["Bâtiments vétustes sans mise aux normes"]
        },
        "Accidents du Travail": {
          appetite: "red",
          process: { method: "Email", portalUrl: "", email: "underwriting@allianz.be", notes: "Très sélectif, uniquement gros portefeuilles" },
          documents: [],
          refusedActivities: ["Construction > 50%", "Intérim", "Nettoyage industriel"]
        },
        "RC Mandataires Sociaux": {
          appetite: "green",
          process: { method: "Email", portalUrl: "", email: "financiallines@allianz.be", notes: "" },
          documents: [
            { name: "Questionnaire D&O Allianz", url: "#", type: "questionnaire" }
          ],
          refusedActivities: []
        },
        "Cyber": {
          appetite: "green",
          process: { method: "Questionnaire", portalUrl: "", email: "cyber@allianz.be", notes: "Questionnaire cyber obligatoire + scan externe" },
          documents: [
            { name: "Questionnaire Cyber Allianz", url: "#", type: "questionnaire" },
            { name: "Checklist Cybersécurité", url: "#", type: "guide" }
          ],
          refusedActivities: ["Absence totale de mesures cyber", "Pas de backup"]
        },
        "Transport / Marine": {
          appetite: "green",
          process: { method: "Email", portalUrl: "", email: "marine@allianz.be", notes: "" },
          documents: [
            { name: "Questionnaire Transport Allianz", url: "#", type: "questionnaire" }
          ],
          refusedActivities: ["Zones de guerre"]
        }
      }
    },

    {
      id: "stoik",
      name: "Stoïk",
      contacts: [
        { name: "Christophe Lambert", role: "Cyber", email: "christophe.lambert@stoik.io", phone: "+32476583482" },
      ],
      inspector: { name: "Christophe Lambert", email: "christophe.lambert@stoik.io", phone: "+32476583482", zone: "" },
      limits: { minPremium: "500 EUR", minCA: "0 EUR", minPersons: "1", notes: "Nous assurons les entreprises réalisant jusqu'à 1 milliard € de Chiffre d'affaires. \nNotre capacité maximale est de 10 millions €. \nSous réserve d'une analyse approfondie, nous pouvons couvrir les entreprises présentes dans le monde entier à l'exception des pays faisant l'objet de sanctions ou assimilés. Les USA / Canada sont également couverts sous réserve du chiffre d'affaire réalisé par le(s) entité(s) sur place." },
      sectorAppetite: "Toujours ouverts à tout à l'exception des activités refusées.",
      globalRefused: "Nous assurons exclusivement le risque cyber. Les activités refusées sont:\n● La vente d’armes, de drogue, de vente de substances et produits illicites ;\n● La communication et diffusion d'informations ou images à caractère érotique ou\npornographique ;\n● Le site internet à caractère religieux, politique et idéologique ;\n● L’ activité de jeux et paris ;\n● Les réseaux sociaux ;\n● Les activités liées aux crypto-monnaies ;\n● Les compagnies aériennes, aéroports ;\n● Les organismes d’intérêt public et établissements publics de toute nature sous la\ntutelle d’un Ministre disposant de la Santé, de la Défense, des Affaires étrangères\net/ou de l’Intérieur dans ses compétences ;\n● Les hôpitaux publics, hôpitaux privés (cliniques), hôpitaux universitaires (CHU),\nhôpitaux spécialisés (à l’exception des maisons de retraite et maisons de retraite\nmédicalisées et centres de rééducations qui peuvent être couverts).",
      documents: [],
      additionalNotes: "",
      submittedAt: "2026-05-26T14:12:22.219Z",
      productSheets: {
        "Cyber": {
          appetite: "green",
          process: { method: "Portail", portalUrl: "https://www.stoik.com/", email: "", notes: "De 0 à 50 millions € de Chiffre d'affaires, 7 critères d'éligibilité sont à respecter (4 non techniques et 3 techniques). \nDe 50 millions € à 150 millions de Chiffre d'affaires, +/- 10 critères sont à respecter (4 non techniques et 6 techniques). \nAu delà de 150 millions, souscription sur mesure avec questionnaire complet ou entretien avec un de nos ingénieurs et un souscripteur pour faire une évaluation des risques. " },
          requiredInfo: "Numéro d'entreprise, Site internet (facultatif), Activité principale (en termes de chiffre d'affaire), Chiffre d'affaire consolidé, nombre de collaborateurs (ETP). ",
          documents: [],
          refusedActivities: ["Voir activités refusées dans l'onglet précédent. "]
        },
      }
    },

    {
      id: "verheyen",
      name: "Jean Verheyen",
      contacts: [
        { name: "Patricia Dillen", role: "Art & Patrimoine - souscription", email: "pdi@verheyen.be", phone: "022506390" },
        { name: "Caroline Ghekiere", role: "Transport Marchandises", email: "c.ghekiere@verheyen.be", phone: "022506334" },
      ],
      inspector: { name: "Laurent Verheyen", email: "lv@verheyen.be", phone: "0477362682", zone: "" },
      limits: { minPremium: "", minCA: "", minPersons: "", notes: "" },
      sectorAppetite: "Transport de marchandises\nArt\nPatrimoines privés exclusifs\nBiens de passion\nBateaux de Plaisance",
      globalRefused: "",
      documents: [],
      additionalNotes: "",
      submittedAt: "2026-05-26T07:57:28.080Z",
      productSheets: {
        "Incendie Entreprise": {
          appetite: "yellow",
          process: { method: "Mixte", portalUrl: "https://www.verheyen.be/fr/solutions/habitations-dexception", email: "", notes: "" },
          requiredInfo: "",
          documents: [],
          refusedActivities: []
        },
        "Tous Risques Electronique": {
          appetite: "",
          process: { method: "", portalUrl: "", email: "", notes: "" },
          requiredInfo: "",
          documents: [],
          refusedActivities: []
        },
        "Transport / Marine": {
          appetite: "green",
          process: { method: "Mixte", portalUrl: "https://www.verheyen.be/fr/solutions", email: "", notes: "" },
          requiredInfo: "",
          documents: [],
          refusedActivities: []
        },
      }
    },

    {
      id: "vivium",
      name: "vivium",
      contacts: [
        { name: "henri marroy", role: "incendie", email: "henri.marroy@vivium.be", phone: "" },
        { name: "ludovic nicolas", role: "RC", email: "Ludovic.Nicolas@pvgroup.be", phone: "" },
      ],
      inspector: { name: "nicolas dejace", email: "nicolas.dejace@vivium.be", phone: "+32498121752", zone: "" },
      limits: { minPremium: "", minCA: "1500000 EUR", minPersons: "10", notes: "Entreprise divisée en 2 services : \n- MGO : moyennes et grandes entreprises = Corpo : 10 FTE, capitaux incendie/contenu > 2K, CA (RC) 1.5M\n- KO : petites entreprises\n- service field / souscription dédiée : Henri Marroy pour DAP, Capitaux incendie/contenu : 1M" },
      sectorAppetite: "approche généraliste, pas de secteurs spécifiques",
      globalRefused: "",
      documents: [],
      additionalNotes: "",
      submittedAt: "2026-05-13T17:27:54.664Z",
      productSheets: {
        "Incendie Entreprise": {
          appetite: "green",
          process: { method: "Email", portalUrl: "", email: "offre-pme-bru@vivium.be ou contact dédié corpo", notes: "Team leader : jan.schoonbaert@vivium.be\nExpert dossiers techniques : philippe.vandewiele@vivium.be" },
          requiredInfo: "capitaux, CA (PEX)",
          documents: [],
          refusedActivities: []
        },
        "RC Exploitation": {
          appetite: "green",
          process: { method: "Mixte", portalUrl: "", email: "", notes: "" },
          requiredInfo: "",
          documents: [],
          refusedActivities: []
        },
        "RC Professionnelle": {
          appetite: "yellow",
          process: { method: "", portalUrl: "", email: "", notes: "" },
          requiredInfo: "",
          documents: [],
          refusedActivities: []
        },
        "RC Mandataires Sociaux": {
          appetite: "yellow",
          process: { method: "Questionnaire", portalUrl: "", email: "", notes: "on évite actuellement en police stand alone" },
          requiredInfo: "",
          documents: [
            { name: "Responsabilité des administrateurs - Sociétés - Proposition 2025.pdf", url: "./files/vivium/Responsabilité des administrateurs - Sociétés - Proposition 2025.pdf", type: "questionnaire" },
          ],
          refusedActivities: []
        },
        "RC Organisateurs": {
          appetite: "",
          process: { method: "", portalUrl: "", email: "", notes: "" },
          requiredInfo: "",
          documents: [],
          refusedActivities: []
        },
        "Bris de Machine": {
          appetite: "",
          process: { method: "", portalUrl: "", email: "", notes: "" },
          requiredInfo: "",
          documents: [],
          refusedActivities: []
        },
        "Responsabilité Décennale": {
          appetite: "",
          process: { method: "Mixte", portalUrl: "", email: "", notes: "" },
          requiredInfo: "",
          documents: [
            { name: "RC Décennale - Proposition.pdf", url: "./files/vivium/RC Décennale - Proposition.pdf", type: "questionnaire" },
          ],
          refusedActivities: []
        },
        "Accidents du Travail": {
          appetite: "green",
          process: { method: "Email", portalUrl: "", email: "offre-pme-bru@vivium.be", notes: "Teamleader AT corpo : peter.waegemans@pvgroup.be (utile pour gros dossier)\nmettre inspecteur en cc également" },
          requiredInfo: "MS",
          documents: [],
          refusedActivities: []
        },
        "Tous Risques Electronique": {
          appetite: "",
          process: { method: "", portalUrl: "", email: "", notes: "" },
          requiredInfo: "",
          documents: [],
          refusedActivities: []
        },
      }
    },

    {
      id: "zurich",
      name: "Zurich",
      contacts: [
        { name: "Philippe Cousin ", role: "Accident & Health", email: "philippe.cousin@zurich.com", phone: "+32475751494 " },
      ],
      inspector: { name: "Philippe Cousin", email: "philippe.cousin@zurich.com", phone: "+32475751494", zone: "" },
      limits: { minPremium: "250 EUR", minCA: "", minPersons: "", notes: "" },
      sectorAppetite: "",
      globalRefused: "",
      documents: [],
      additionalNotes: "",
      submittedAt: "2026-05-22T09:57:38.223Z",
      productSheets: {
        "Assistance": {
          appetite: "green",
          process: { method: "Email", portalUrl: "", email: "philippe.cousin@zurich.com", notes: "Prime minimum 250 EUR." },
          requiredInfo: "Nombre de jours de voyage ou nombre de voyageurs fréquents. Nom et adresse du preneur. Preneur avec entités hors de Belgique: pays de ces entités.",
          documents: [],
          refusedActivities: []
        },
        "RC Organisateurs": {
          appetite: "yellow",
          process: { method: "Mixte", portalUrl: "", email: "philippe.cousin@zurich.com", notes: "Uniquement pour les events en Belgique." },
          requiredInfo: "La RC organisateur est disponible en option de notre couverture Events Insurance.",
          documents: [
            { name: "Zurich Events Insurance rating tool guide.pdf", url: "./files/zurich/Zurich Events Insurance rating tool guide.pdf", type: "questionnaire" },
          ],
          refusedActivities: []
        },
      }
    }
  ]
};

// ============================================================
// TEMPLATE — COPIER/COLLER POUR AJOUTER UNE NOUVELLE COMPAGNIE
// ============================================================
//
// {
//   id: "nom-compagnie",          // identifiant unique (minuscules, tirets)
//   name: "Nom Compagnie",        // nom affiché
//   contacts: [
//     { name: "Prénom Nom", role: "Fonction", email: "email@compagnie.be", phone: "+32 X XXX XX XX" }
//   ],
//   inspector: { name: "Prénom Nom", email: "email@compagnie.be", phone: "+32 X XXX XX XX", zone: "Zone géographique" },
//   limits: { minPremium: "", minCA: "", notes: "" },
//   productSheets: {
//     "Nom du Produit": {
//       appetite: "green",        // "green", "yellow", "red"
//       process: { method: "Portail", portalUrl: "", email: "", notes: "" },
//       documents: [
//         { name: "Nom du document", url: "https://...", type: "questionnaire" }
//       ],
//       refusedActivities: ["Activité refusée 1", "Activité refusée 2"]
//     }
//   }
// }
//
