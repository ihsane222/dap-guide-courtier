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
    "Assistance",
    "Tous Risques Chantier"
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
      id: "legal-village",
      name: "Legal Village",
      contacts: [],
      inspector: { name: "Mathilde Hiblot", email: "mathilde.hiblot@legalvillage.be", phone: "+32475293504", zone: "" },
      limits: { minPremium: "", minCA: "", minPersons: "", notes: "Activités acceptées sous réserve d'analyse : construction générale, transport, agriculture... Pour les garagistes, sont exclus les litiges contractuels avec des clients, des fournisseurs de produits et des prestataires de services, en relation avec la livraison, la vente, l'achat, la réparation, l'entretien, la location ou la fabrication des véhicules, d'accessoires, ainsi que tout matériel destiné à être placé sur ou dans le véhicule." },
      sectorAppetite: "Secteur (para)-médical, Horeca.",
      globalRefused: "",
      documents: [],
      additionalNotes: "",
      submittedAt: "2026-05-05T06:58:00.000Z",
      productSheets: {
        "Protection Juridique": {
          appetite: "green",
          process: { method: "Mixte", portalUrl: "", email: "mathilde.hiblot@legalvillage.be", notes: "" },
          requiredInfo: "Activité. Nombre de travailleurs (administrateurs compris). Nombre de sièges d'exploitation. Véhicules : nombre, type et usage. Si biens à couvrir en plus des sièges d'exploitation : prime incendie nette et abex + nombre de baux commerciaux et/ou privés si les litiges contractuels de location doivent être couverts.",
          documents: [],
          refusedActivities: []
        }
      }
    },


    {
      id: "bcoh",
      name: "BCOH SA",
      contacts: [
        { name: "Philippe Nothomb", role: "Tous risques événements", email: "philippe@bcoh.be", phone: "+32477650136" },
      ],
      inspector: { name: "Didier Van Wassenhove", email: "didier@bcoh.be", phone: "+3225430250", zone: "" },
      limits: { minPremium: "715 EUR", minCA: "1.000.000 EUR", minPersons: "3", notes: "" },
      sectorAppetite: "Secteur événementiel et industrie du cinéma.",
      globalRefused: "Pandémie, guerre, cyberattaques.",
      documents: [],
      additionalNotes: "www.bcoh.be",
      submittedAt: "2026-04-29T07:51:00.000Z",
      productSheets: {
        "RC Exploitation": {
          appetite: "yellow",
          process: { method: "Email", portalUrl: "", email: "info@bcoh.be", notes: "Uniquement pour le secteur événementiel et film." },
          requiredInfo: "Chiffre d'affaires, sinistralité, nombre d'employés.",
          documents: [],
          refusedActivities: []
        }
      }
    },


    {
      id: "axa",
      name: "AXA Belgium",
      contacts: [],
      inspector: { name: "Thierry DEHON", email: "thierry.dehon@axa.be", phone: "+32 492 84 63 29", zone: "" },
      limits: { minPremium: "Variable selon branche/département/produit", minCA: "Néant", minPersons: "0", notes: "Information impossible à synthétiser. Variable en fonction de la branche, du département, du produit, etc." },
      sectorAppetite: "Etant un assureur généraliste, pas d'appétence sectorielle prépondérante.",
      globalRefused: "Ci-après les exclusions des affaires pouvant être souscrites via \"BIZZLINK\". Pour les autres branches/produits, impossible à synthétiser car pouvant être variable d'un département à l'autre.\n\nExclusions BIZZLINK :\nExtraction de houille — Extraction de lignite — Fabrication de produits à base de tabac — Fabrication de produits explosifs (y compris pyrotechnie) — Fabrication d'ouvrages en fibre-ciment — Fabrication d'autres produits minéraux non métalliques (avec amiante) — Élaboration et transformation de matières nucléaires — Fabrication de réacteurs nucléaires — Fabrication d'armes et de munitions — Fabrication de détecteurs et de moniteurs de radiation — Fabrication d'équipements d'irradiation médicale, d'équipements électromédicaux et électrothérapeutiques — Fabrication d'accélérateurs de particules — Construction de bateaux et navires militaires — Construction d'aéronefs et d'engins spatiaux militaires et machines connexes — Construction de véhicules militaires de combat — Fabrication d'articles divers en ivoire, en corne et en os — Réparation et entretien d'aéronefs et d'engins spatiaux civils — Réparation et entretien de véhicules de combat, de navires, de bateaux, d'aéronefs et d'engins spatiaux militaires — Collecte de déchets nucléaires — Mise en décharge ou stockage permanent de déchets nucléaires — Dépollution d'usines et sites nucléaires — Désamiantage — Night-shop — Hôtel de jour — Wagons-lits — Discothèques, dancings et similaires — Production et négoce de cryptomonnaie — Laboratoires médicaux avec expérience sur animaux vivants — Guérisseurs, rebouteux, etc.\n\nExclusions RC Professionnelle :\nExtraction de houille — Extraction de lignite — Extraction de pétrole brut — Extraction de gaz naturel — Extraction de minerais d'uranium et de thorium — Fabrication de produits à base de tabac — Fabrication de produits explosifs (y compris pyrotechnie) — Fabrication d'ouvrages en fibre-ciment — Fabrication d'autres produits minéraux non métalliques (avec amiante) — Élaboration et transformation de matières nucléaires — Fabrication d'armes et de munitions — Construction d'aéronefs et d'engins spatiaux civils et machines connexes — Construction d'aéronefs et d'engins spatiaux militaires et machines connexes — Construction de véhicules militaires de combat — Réparation et entretien d'aéronefs et d'engins spatiaux civils — Commerce de détail d'armes et de munitions — Commerce de détail d'articles de pêche et de chasse (avec armes et munitions) — Transports spatiaux — Défense — Organisation de jeux de hasard et d'argent — Agence de paris sportifs — Activités des sportifs indépendants — Autres services personnels — Activités des graphologues, des astrologues, des voyants, des radiesthésistes, des spirites et similaires — Services de recherche généalogique — Exploitation de machines de services personnels fonctionnant avec des pièces de monnaie (photomatons, consignes à pièces, etc).",
      documents: [
        { name: "Répertoire gestionnaires AXA P&C Corpo 03.2026.xlsx", url: "#", type: "contacts" },
      ],
      additionalNotes: "- Les informations reprises dans les onglets précédents ne sont qu'indicatives.\n- Vous trouverez toutes les propositions d'assurances et fiches produits via le Portail d'AXA.\n- De nombreuses offres \"PME\" peuvent être tarifées en ligne au travers de notre outil digital \"Bizzlink\".",
      submittedAt: "2026-04-28T13:05:00.000Z",
      productSheets: {
        "Incendie Entreprise": {
          appetite: "green",
          process: { method: "Mixte", portalUrl: "", email: "newbizz.corporate@axa.be", notes: "Pour certaines activités, tarification en ligne également possible via \"Bizzlink\". Questionnaire uniquement valable pour les PME." },
          requiredInfo: "Statistique sinistre officielle si reprise d'un contrat existant. Proposition dûment complétée et signée.",
          documents: [
            { name: "Talensia - easy questionnaire - proposition d'assurance - 20260201 1.pdf", url: "#", type: "questionnaire" },
          ],
          refusedActivities: ["Cf. activités refusées au niveau Compagnie (toutes branches confondues)"]
        },
        "RC Exploitation": {
          appetite: "green",
          process: { method: "Mixte", portalUrl: "", email: "newbizz.corporate@axa.be", notes: "Pour certaines activités, tarification en ligne également possible via \"Bizzlink\". Questionnaire uniquement valable pour les PME." },
          requiredInfo: "Statistique sinistre officielle si reprise d'un contrat existant. Proposition dûment complétée et signée.",
          documents: [
            { name: "Talensia - easy questionnaire - proposition d'assurance - 20260201 1.pdf", url: "#", type: "questionnaire" },
          ],
          refusedActivities: ["Cf. activités refusées au niveau Compagnie (toutes branches confondues)"]
        },
        "Protection Juridique": {
          appetite: "green",
          process: { method: "Mixte", portalUrl: "", email: "", notes: "A voir avec les collaborateurs de \"Legal Village\"" },
          requiredInfo: "A voir avec les collaborateurs de \"Legal Village\"",
          documents: [],
          refusedActivities: []
        },
        "RC Professionnelle": {
          appetite: "green",
          process: { method: "Mixte", portalUrl: "https://distributorportal.axa.be/axalogin", email: "newbizz.corporate@axa.be", notes: "Vu le nombre de questionnaires (plusieurs possibles en fonction du secteur d'activités) les questionnaires sont accessibles via le portail distributeur. Pour certaines activités, tarification en ligne également possible via \"Bizzlink\"." },
          requiredInfo: "Statistique sinistre officielle si reprise d'un contrat existant. Proposition dûment complétée et signée.",
          documents: [],
          refusedActivities: ["Cf. activités refusées au niveau Compagnie (toutes branches confondues)"]
        },
        "RC Mandataires Sociaux": {
          appetite: "green",
          process: { method: "Email", portalUrl: "", email: "newbizz.corporate@axa.be", notes: "Solvabilité prépondérante pour l'acceptation du risque." },
          requiredInfo: "Statistique sinistre officielle si reprise d'un contrat existant. Bilan des 3 dernières années. Proposition dûment complétée et signée (voir annexe).",
          documents: [
            { name: "QuestionnaireD&O.pdf", url: "#", type: "questionnaire" },
          ],
          refusedActivities: ["Interroger la compagnie au cas par cas."]
        },
        "Assistance": {
          appetite: "yellow",
          process: { method: "Mixte", portalUrl: "", email: "", notes: "A voir avec les collaborateurs de \"AXA Assistance\"" },
          requiredInfo: "A voir avec les collaborateurs de \"AXA Assistance\"",
          documents: [],
          refusedActivities: []
        },
        "RC Organisateurs": {
          appetite: "yellow",
          process: { method: "Mixte", portalUrl: "", email: "newbizz.iard.charleroi@axa.be", notes: "Spécificités à voir avec votre \"Business Manager\"." },
          requiredInfo: "Date, durée et nature de l'événement organisé. Nombre de participants (estimation).",
          documents: [],
          refusedActivities: ["Interroger la compagnie au cas par cas."]
        },
        "Bris de Machine": {
          appetite: "green",
          process: { method: "Email", portalUrl: "", email: "newbizz.corporate@axa.be", notes: "Age maximum de la machine au moment de la souscription = 10 ans." },
          requiredInfo: "Statistique sinistres officielle. Marque, type, numéro de série, année de construction, valeur à neuf de la machine et usage exact de la machine.",
          documents: [],
          refusedActivities: ["Interroger la compagnie au cas par cas."]
        },
        "Tous Risques Electronique": {
          appetite: "green",
          process: { method: "Mixte", portalUrl: "", email: "newbizz.corporate@axa.be", notes: "" },
          requiredInfo: "Statistique sinistres officielle. Catégorie de matériel à couvrir (matériel fixe et/ou portable). Valeur à neuf à couvrir ventilée entre les catégories. Étendue territoriale pour le matériel portable (Belgique, Europe, Monde entier ?).",
          documents: [
            { name: "Talensia - easy questionnaire - proposition d'assurance - 20260201 1.pdf", url: "#", type: "questionnaire" },
          ],
          refusedActivities: ["Interroger la compagnie au cas par cas."]
        },
        "Accidents du Travail": {
          appetite: "green",
          process: { method: "Mixte", portalUrl: "", email: "newbizz.corporate@axa.be", notes: "Proposition ci-annexée uniquement valable pour les PME." },
          requiredInfo: "Statistique sinistres officielle si reprise d'un contrat existant. Activités exactes. Catégorie de personnel à couvrir (Employés / Ouvriers). Masse salariale brute hors charges patronales ventilée par catégorie de personnel. Faut-il prévoir la couverture de l'Excédent-Loi ?",
          documents: [
            { name: "Talensia - easy questionnaire - proposition d'assurance - 20260201 1.pdf", url: "#", type: "questionnaire" },
          ],
          refusedActivities: ["Interroger la compagnie au cas par cas."]
        },
        "Tous Risques Chantier": {
          appetite: "yellow",
          process: { method: "Email", portalUrl: "", email: "newbizz.corporate@axa.be", notes: "Il existe un formulaire simplifié permettant de remettre tarif sous certaines conditions pour des chantiers d'une valeur maximale de 1.500.000,00 EUR. Impossible de couvrir un chantier qui a déjà commencé !" },
          requiredInfo: "Nature des travaux. Date de début des travaux. Durée estimée des travaux. Valeur des travaux. Si possible cahier des charges et plans. Proposition dûment complétée et signée.",
          documents: [],
          refusedActivities: ["Interroger la compagnie au cas par cas."]
        },
        "Cyber": {
          appetite: "yellow",
          process: { method: "Mixte", portalUrl: "", email: "newbizz.corporate@axa.be", notes: "Produit valable uniquement pour des sociétés de maximum 50 personnes !" },
          requiredInfo: "Proposition dûment complétée et signée. Statistique sinistre officielle si reprise d'un contrat existant.",
          documents: [
            { name: "267 - Questionnaire Cyber 012019.pdf", url: "#", type: "questionnaire" },
          ],
          refusedActivities: ["Interroger la compagnie au cas par cas."]
        },
        "Responsabilité Décennale": {
          appetite: "yellow",
          process: { method: "Mixte", portalUrl: "", email: "newbizz.corporate@axa.be", notes: "" },
          requiredInfo: "Proposition dûment complétée et signée. Statistique sinistre officielle si reprise d'un contrat \"Abonnement\" existant.",
          documents: [],
          refusedActivities: ["Interroger la compagnie au cas par cas."]
        },
        "Transport / Marine": {
          appetite: "green",
          process: { method: "Email", portalUrl: "", email: "marine@verheyen.be", notes: "A voir avec les collaborateurs de \"VERHEYEN\"." },
          requiredInfo: "A voir avec les collaborateurs de \"VERHEYEN\".",
          documents: [],
          refusedActivities: []
        }
      }
    },

    {
      id: "ag-insurance",
      name: "AG Insurance",
      contacts: [],
      inspector: { name: "Coirazza", email: "laurent.coirazza@aginsurance.be", phone: "+10491969565", zone: "" },
      limits: { minPremium: "", minCA: "", minPersons: "10", notes: "Critères de segmentation pour rentrer en entreprises : minimum 10 ETP au sein d'une entitée ou d'un groupement avec même actionnaire (>=75%) ou risque spécial ou bureau d'intérim, ou LPS ==> incendie, rc (France, Allemagne, Pays-Bas, Luxembourg)." },
      sectorAppetite: "Nous analysons toutes les demandes. Certains secteurs peuvent être compliqués dans une branche mais pas dans une autre. Très dépendant des statistiques.",
      globalRefused: "",
      documents: [
        { name: "guide cie 2026 E.pdf", url: "#", type: "contacts" },
      ],
      additionalNotes: "",
      submittedAt: "2026-04-27T13:34:00.000Z",
      productSheets: {
        "Incendie Entreprise": {
          appetite: "green",
          process: { method: "Email", portalUrl: "", email: "souscription.entreprises@aginsurance.be", notes: "Données correctes et suffisantes : Description détaillée des activités. Garanties souhaitées, (sous-)limites, franchises. Numéro BCE correct. Motif de la demande : Quote-part de coassurance / rang supérieur, Révision / extension d'un client AG existant, Transfert par courtier, Prospection / consultation du marché / mise en blocage / assainissement, Marchés publics. Statistiques de sinistres sur les 5 dernières années (émanant de l'assureur, pas de statistiques du courtier). Copie récente de la police actuelle, y compris la prime payée. Rapports d'inspection récents (incendie)." },
          requiredInfo: "",
          documents: [],
          refusedActivities: []
        },
        "RC Exploitation": {
          appetite: "green",
          process: { method: "Email", portalUrl: "", email: "souscription.entreprises@aginsurance.be", notes: "" },
          requiredInfo: "Données correctes et suffisantes : Description détaillée des activités. Garanties souhaitées, (sous-)limites, franchises. Numéro BCE correct. Chiffre d'affaires récent, masse salariale ouvriers/employés. Motif de la demande : Quote-part de coassurance / rang supérieur en RC / CAR, Révision / extension d'un client AG existant, Transfert par courtier, Prospection / consultation du marché / mise en blocage / assainissement, Marchés publics. Statistiques de sinistres sur les 5 dernières années (données financières + détails des sinistres individuels, émanant de l'assureur). Copie récente de la police actuelle + Questionnaire pour recall (par ex).",
          documents: [],
          refusedActivities: []
        },
        "RC Organisateurs": {
          appetite: "green",
          process: { method: "Portail", portalUrl: "AG online", email: "souscription.entreprises@aginsurance.be", notes: "" },
          requiredInfo: "",
          documents: [],
          refusedActivities: []
        },
        "Assistance": {
          appetite: "green",
          process: { method: "Mixte", portalUrl: "", email: "souscription.entreprises@aginsurance.be", notes: "" },
          requiredInfo: "",
          documents: [],
          refusedActivities: []
        },
        "Tous Risques Electronique": {
          appetite: "green",
          process: { method: "Questionnaire", portalUrl: "", email: "souscription.entreprises@aginsurance.be", notes: "" },
          requiredInfo: "",
          documents: [
            { name: "Top Electronique.pdf", url: "#", type: "questionnaire" },
          ],
          refusedActivities: []
        },
        "Accidents du Travail": {
          appetite: "green",
          process: { method: "Email", portalUrl: "", email: "souscription.entreprises@aginsurance.be", notes: "" },
          requiredInfo: "Données correctes et suffisantes : Description détaillée des activités. Garanties souhaitées. Numéro BCE correct. Motif de la demande (idem RC). Statistiques de sinistres sur les 5 dernières années (données financières + détails des sinistres individuels, émanant de l'assureur). Copie récente de la police actuelle, y compris la prime payée.",
          documents: [],
          refusedActivities: []
        },
        "Responsabilité Décennale": {
          appetite: "green",
          process: { method: "Questionnaire", portalUrl: "", email: "souscription.entreprises@aginsurance.be", notes: "" },
          requiredInfo: "Questionnaire spécifique RC10 + TRC",
          documents: [
            { name: "Questionnaire TRC_00792067233_F (1).pdf", url: "#", type: "questionnaire" },
          ],
          refusedActivities: []
        },
        "Transport / Marine": {
          appetite: "yellow",
          process: { method: "Questionnaire", portalUrl: "", email: "souscription.entreprises@aginsurance.be", notes: "" },
          requiredInfo: "",
          documents: [
            { name: "assurances marchandises et matériels transportés.pdf", url: "#", type: "questionnaire" },
          ],
          refusedActivities: []
        },
        "Tous Risques Chantier": {
          appetite: "green",
          process: { method: "Questionnaire", portalUrl: "", email: "souscription.entreprises@aginsurance.be", notes: "" },
          requiredInfo: "",
          documents: [
            { name: "Questionnaire TRC_00792067233_F (5).pdf", url: "#", type: "questionnaire" },
          ],
          refusedActivities: []
        },
        "Bris de Machine": {
          appetite: "green",
          process: { method: "Questionnaire", portalUrl: "", email: "souscription.entreprises@aginsurance.be", notes: "" },
          requiredInfo: "",
          documents: [
            { name: "bris de machine.pdf", url: "#", type: "questionnaire" },
          ],
          refusedActivities: []
        },
        "RC Mandataires Sociaux": {
          appetite: "green",
          process: { method: "Questionnaire", portalUrl: "", email: "souscription.entreprises@aginsurance.be", notes: "" },
          requiredInfo: "Données correctes et suffisantes : Description détaillée des activités. Garanties souhaitées, (sous-)limites, franchises. Numéro BCE correct. Questionnaire D&O. Données financières.",
          documents: [
            { name: "D&O.pdf", url: "#", type: "questionnaire" },
          ],
          refusedActivities: []
        },
        "RC Professionnelle": {
          appetite: "green",
          process: { method: "Mixte", portalUrl: "", email: "", notes: "" },
          requiredInfo: "Données correctes et suffisantes : Description détaillée des activités. Garanties souhaitées, (sous-)limites, franchises. Numéro BCE correct. Questionnaire D&O. Données financières.",
          documents: [
            { name: "Liab_RCEntreprise_PropositionAssurance_Consultant_FR.pdf", url: "#", type: "questionnaire" },
          ],
          refusedActivities: []
        },
        "Protection Juridique": {
          appetite: "yellow",
          process: { method: "", portalUrl: "", email: "", notes: "" },
          requiredInfo: "",
          documents: [],
          refusedActivities: []
        }
      }
    },


    {
      id: "federale",
      name: "Fédérale Assurance",
      contacts: [],
      inspector: { name: "Johan Claerbout", email: "johan.claerbout@federale.be", phone: "0490585114", zone: "" },
      limits: { minPremium: "20.000 EUR", minCA: "", minPersons: "", notes: "Prime minimum 20.000€ pour la branche principale (non-clients). Capacités : +/- 20.000.000€ en Incendie, +/- 30.000.000€ en TRC." },
      sectorAppetite: "Construction.\nPar branche :\n- AT: tous les secteurs\n- Flotte: pas de transport pour compte de tiers, autocars, taxis...\n- RC: construction\n- Incendie: construction, logistique",
      globalRefused: "Risques nucléaires.",
      documents: [
        { name: "Liste des données de contact pour courtier.xlsx", url: "#", type: "contacts" },
      ],
      additionalNotes: "",
      submittedAt: "2026-04-28T07:18:00.000Z",
      productSheets: {
        "Incendie Entreprise": {
          appetite: "yellow",
          process: { method: "Email", portalUrl: "", email: "incendie.brand@federale.be", notes: "" },
          requiredInfo: "",
          documents: [],
          refusedActivities: []
        },
        "RC Exploitation": {
          appetite: "yellow",
          process: { method: "Email", portalUrl: "", email: "accidents.ongevallen@federale.be", notes: "" },
          requiredInfo: "",
          documents: [],
          refusedActivities: []
        },
        "Bris de Machine": {
          appetite: "green",
          process: { method: "Email", portalUrl: "", email: "engineering@federale.be", notes: "" },
          requiredInfo: "",
          documents: [],
          refusedActivities: []
        },
        "Tous Risques Electronique": {
          appetite: "yellow",
          process: { method: "Email", portalUrl: "", email: "engineering@federale.be", notes: "" },
          requiredInfo: "",
          documents: [],
          refusedActivities: []
        },
        "Accidents du Travail": {
          appetite: "green",
          process: { method: "Email", portalUrl: "", email: "accidents.ongevallen@federale.be", notes: "" },
          requiredInfo: "",
          documents: [],
          refusedActivities: []
        },
        "Responsabilité Décennale": {
          appetite: "green",
          process: { method: "Email", portalUrl: "", email: "engineering@federale.be", notes: "" },
          requiredInfo: "",
          documents: [],
          refusedActivities: []
        },
        "Tous Risques Chantier": {
          appetite: "green",
          process: { method: "Email", portalUrl: "", email: "engineering@federale.be", notes: "" },
          requiredInfo: "",
          documents: [],
          refusedActivities: []
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
      name: "Verheyen",
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
      name: "Vivium",
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
