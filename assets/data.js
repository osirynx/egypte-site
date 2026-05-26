/* ============================================================
   DONNÉES — Site Voyage Égypte · MMXXVI
   ============================================================

   ============================================================

   ╔══════════════════════════════════════════════════════════╗
   ║  COMMENT AJOUTER VOS PROPRES PHOTOS ?                   ║
   ║                                                          ║
   ║  1. Déposez vos photos dans le dossier  photos/          ║
   ║     → nommez-les  01.jpg, 02.jpg, 03.webp …              ║
   ║                                                          ║
   ║  2. Dans le tableau PHOTOS ci-dessous, remplacez        ║
   ║     l'URL Unsplash par le chemin local :                ║
   ║     'photos/01.webp'                                      ║
   ║                                                          ║
   ║  Les photos Unsplash restent actives tant que            ║
   ║  vous ne les remplacez pas — rien ne casse.             ║
   ╚══════════════════════════════════════════════════════════╝
*/

window.PHOTOS = [
  /* LE CAIRE */
  /* 00 */ 'photos/20260412_181904.webp',    /* Nil au crépuscule — Le Caire       */
  /* 01 */ 'photos/IMG20260413163722.webp',  /* Masque d'or de Toutankhamon ★★★   */
  /* 02 */ 'photos/IMG20260413162709.webp',  /* Sarcophage doré — GEM ★★★         */
  /* 03 */ 'photos/IMG20260413171940.webp',  /* Ramsès II — statue GEM atrium ★★  */
  /* 04 */ 'photos/20260413_160935.webp',    /* Sarcophages peints — musée         */
  /* 05 */ 'photos/j2_01.webp',             /* Pyramides de Gizeh + calèche ★★   */
  /* 06 */ 'photos/20260413_112056.webp',    /* Couloir intérieur pyramide         */
  /* SAQQARA */
  /* 07 */ 'photos/j3_01.webp',             /* Pyramide à degrés de Djoser ★      */
  /* 08 */ 'photos/IMG20260414120536.webp',  /* Colonnes — Saqqara ★               */
  /* 09 */ 'photos/j3_02.webp',             /* Tombes des nobles — Saqqara        */
  /* ASSOUAN */
  /* 10 */ 'photos/IMG20260416184028.webp',  /* Île de Philæ de nuit ★★★          */
  /* 11 */ 'photos/IMG20260416185117.webp',  /* Kiosque de Trajan de nuit ★★       */
  /* 12 */ 'photos/j6_01.webp',             /* Felouque sur le Nil ★              */
  /* 13 */ 'photos/j4_01.webp',             /* Épices — souk d'Assouan            */
  /* ABOU SIMBEL */
  /* 14 */ 'photos/20260416_075847.webp',    /* Colosses Abou Simbel — ext. ★     */
  /* 15 */ 'photos/j5_01.webp',             /* Abou Simbel — vue générale ★       */
  /* 16 */ 'photos/20260416_080004.webp',     /* Statues — intérieur Abou Simbel ★ */
  /* 17 */ 'photos/20260416_080253.webp',    /* Sanctuaire — Abou Simbel           */
  /* 18 */ 'photos/20260416_081205.webp',    /* Couloir hiéroglyphes Abou Simbel   */
  /* CROISIÈRE */
  /* 19 */ 'photos/20260417_142643.webp',    /* Colonnes Kom Ombo — détail ★       */
  /* 20 */ 'photos/IMG20260417152913.webp',  /* Crocodiles momifiés Kom Ombo ★     */
  /* 21 */ 'photos/j7_01.webp',             /* Edfou — pylônes ★                  */
  /* 22 */ 'photos/j7_02.webp',             /* Edfou — hiéroglyphes               */
  /* 23 */ 'photos/20260417_122007.webp',    /* Pont du bateau + rives du Nil      */
  /* LOUXOR */
  /* 24 */ 'photos/20260421_182935.webp',    /* Temple de Louxor — coucher de soleil ★★ */
  /* 25 */ 'photos/j10_03.webp',            /* Louxor de nuit — coucher soleil    */
  /* 26 */ 'photos/j8_02.webp',             /* Obélisque — Karnak ★               */
  /* 27 */ 'photos/20260422_095721.webp',    /* Colosses de Memnon ★★             */
  /* 28 */ 'photos/j11_02.webp',            /* Vallée des Rois — paysage          */
  /* 29 */ 'photos/20260418_124834.webp',    /* Cartouches royaux — hiéroglyphes   */
  /* MER ROUGE */
  /* 30 */ 'photos/20260424_102838.webp',    /* Récif corallien — turquoise ★★    */
  /* 31 */ 'photos/20260424_122659.webp',    /* Mer Rouge — étendue bleue          */
  /* 32 */ 'photos/IMG20260425074047.webp',  /* Plage de Somabay ★                */
  /* 33 */ 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80', /* Hublot d'avion — décollage */
  /* 34 */ 'photos/karnak.webp',            /* Karnak — colonnes ★                */
  /* 35 */ 'photos/mythologie-gemini.webp', /* Mythologie — illustration Gemini   */
  /* 36 */ 'photos/infos-pratiques.webp',   /* Infos pratiques — guide            */
];

window.TIMELINE = [
  {n:'Jour 0',     date:'11 Avril',   place:'Nice → Le Caire',       sum:"Départ de Nice (Lufthansa via Francfort). Arrivée au Caire à 3h du matin. Le patron de l'hôtel nous accueille avec jus et chocolats.", target:'jour-0'},
  {n:'Jours 1–4',  date:'12–15 Avril',place:'Le Caire',              sum:"Quartier copte, souk Khân al-Khalili, Pyramides de Gizeh, Sphinx en chameau, Saqqara, Grand Musée Égyptien, Zamalek.", target:'jour-1'},
  {n:'Jour 4',     date:'15 Avril',   place:'Le Caire → Assouan',    sum:"Vol Air Cairo. Arrivée dans le « vrai Sud ». Arrivée dans un petit quartier authentique. Souk d'Assouan.", target:'jour-4'},
  {n:'Jour 5',     date:'16 Avril',   place:'Assouan · Abou Simbel', sum:"Réveil à 3h25. Minibus pour Abou Simbel. Temple de Ramsès II et Néfertari. Île de Philæ de nuit. Île Éléphantine, dîner nubien en rooftop.", target:'jour-5'},
  {n:'Jours 6–7',  date:'17–18 Avril',place:'Croisière sur le Nil',  sum:"Bateau magnifique avec mini-pont sur l'eau. Kom Ombo, carrières de grès, temple d'Horus à Edfou — le mieux conservé d'Égypte.", target:'jour-6'},
  {n:'Jours 8–11', date:'19–22 Avril',place:'Louxor',                sum:"Karnak, Temple d'Hatchepsout, Temple de Louxor de nuit, Vallée des Rois, Colosses de Memnon.", target:'jour-8'},
  {n:'Jours 12–14',date:'23–25 Avril',place:'Somabay · Mer Rouge',   sum:"Repos total. Snorkeling, baignade. Buffets. Récupération bien méritée avant le retour.", target:'jour-12'},
];

window.DAYS = [
  {id:'jour-0', no:'Jour 0', date:'11 Avril 2026', title:"Le Grand <b>Départ</b>", photos:[33],
   text:[
    "Départ de Nice à 19h10 avec Lufthansa. Escale à Francfort — un peu juste, on a couru dans l'aéroport comme des dératés pour finalement apprendre que le vol avait du retard. Evidemment. On s'assoit, on reprend notre souffle, on attend.",
    "Anecdote fondatrice du voyage : ma copine a commandé un plateau repas pendant que je dormais. Pour elle. Juste elle. Elle regardait droit devant elle en mangeant ses pâtes. Je l'ai découvert au réveil. La haine.",
    "Arrivée au Caire à 3h du matin. Petite particularité : le taxi de l'hôtel nous avait demandé une photo de nous en guise de reconnaissance. Et il nous avait spontanément envoyé la sienne — sans qu'on lui demande rien. Charmant, légèrement flippant, très égyptien. 40 minutes de trajet dans Le Caire désert et klaxonnant quand même. Le patron de l'hôtel nous attend à 3h du mat avec des jus frais et des chocolats. On se couche à 4h30, épuisés, souriants, un peu hagards.",
   ]},
  {id:'jour-1', no:'Jour 1', date:'12 Avril 2026', title:"Le Caire <b>s'éveille</b>", photos:[0],
   text:[
    "Réveil à 11h — on a survécu. Premier repas égyptien : Koshary Abou Tarek, institution locale absolue. 200 LE pour deux. Le koshary, c'est pâtes + riz + lentilles + sauce tomate + oignons frits — le genre de plat qui n'a aucun sens sur le papier et qui est absolument délicieux dans l'assiette. On comprend maintenant pourquoi les pharaons ont duré 3000 ans : ils mangeaient bien.",
    "Métro jusqu'au quartier copte (10 LE — moins cher qu'un café à Nice). On est les seuls touristes du wagon, les seuls Européens à des kilomètres à la ronde. Tout le monde nous observe avec curiosité bienveillante. Le quartier copte est beau, paisible, chargé d'histoire — IVe siècle, synagogue Ben Ezra, musée copte. On est bien. On respire.",
    "Puis vient le souk Khân al-Khalili. Et là, c'est une autre histoire. À peine l'entrée franchie : « Welcome my friend! Where are you from? » — France, on dit. — « PARIS! Ah, magnifique! Come, come, I show you real Egyptian shop, no tourist price! » On entre par politesse. Erreur. On ressort 40 minutes plus tard avec un papyrus qu'on ne voulait pas. Tentative de rejoindre les mosquées à pied : rues sombres, tuk-tuk bizarre qui nous colle. Uber jusqu'à Zamalek. Bar vue sur le Nil, trop cher, migraine. Fin de journée en mode survie.",
   ]},
  {id:'jour-2', no:'Jour 2', date:'13 Avril 2026', title:"Les Pyramides <b>de Gizeh</b>", photos:[5,6,1,2,3,4],
   text:[
    "9h30, entrée locale des pyramides (700 LE chacun — l'entrée « pour les touristes » coûte le double, on l'a évitée). La Grande Pyramide se dresse devant nous et, pour la première fois du voyage, on se tait vraiment. C'est l'effet pyramide : ça coupe toute envie de commenter. On entre dans la plus petite — couloir très bas, très étroit, 40° à l'intérieur, pas pour les claustrophobes. Fascinant et légèrement traumatisant.",
    "Sur le plateau : j'ai malencontreusement fait tomber un billet. Un Égyptien me le signale immédiatement. Belle humanité. Deux secondes plus tard, dix vendeurs de « souvenirs authentiques » surgissent de nulle part : « Camel ride? Very good price for you! Special today only! » — On dit non. — « Maybe tomorrow? » Descente en chameau jusqu'au Sphinx. Vues magnifiques. Le chameau sent mauvais mais il a un charisme indéniable. Taxi qui nous emmène au mauvais endroit. Décision définitive et irrévocable : plus jamais de taxi, uniquement Uber.",
    "Soirée au Grand Musée Égyptien — billets réservés en ligne (~51€ pour deux, la queue économisée valait de l'or). Architecture époustouflante, Toutankhamon en intégralité, masque d'or à deux mètres de nous. 2h30 de visite et on aurait pu rester 5h. Le Caire violent et bruyant dehors, et là-dedans, le silence des millénaires. Grand écart.",
   ]},
  {id:'jour-3', no:'Jour 3', date:'14 Avril 2026', title:"Saqqara, <b>la Révélation</b>", photos:[7,8,9],
   text:[
    "Uber commandé pour Saqqara, 45 km au sud. Le chauffeur accepte 360 LE à l'écran. À l'arrivée, grand moment de théâtre : « Non non, c'était 360 l'aller, le retour c'est 360 de plus, et il faut m'attendre donc c'est 2000 LE total. » Négociation tendue. On finit à 1500 LE. Il attendit. On alla visiter.",
    "Saqqara : coup de cœur absolu du séjour. La pyramide à degrés de Djoser — la plus vieille structure en pierre du monde — est là, dans le désert, sous le soleil. Puis un guide nous emmène seuls dans les tombes des nobles : hiéroglyphes peints encore vifs après 4500 ans, scènes de vie quotidienne, troupeaux de bœufs et pêches au filet. Le silence est total. On entend nos propres respirations. Frissons garantis. Meilleur moment du voyage, sans concurrence.",
    "Retour au Caire. Déjeuner avec vue directe sur les pyramides — l'une des vues de déjeuner les plus absurdes et magnifiques qu'on ait jamais eues. Shopping à Zamalek : j'ai cassé une petite pyramide en vitrine, j'ai donc dû en acheter une. Logique commerçante implacable. Un papyrus avec mon prénom en hiéroglyphes, un livre sur la mythologie. Dîner au Cooq. On dort comme des pierres — ironiquement.",
   ]},
  {id:'jour-4', no:'Jour 4', date:'15 Avril 2026', title:"Assouan, <b>la Porte de Nubie</b>", photos:[12,13],
   text:[
    "Vol Air Cairo pour Assouan — repas inclus, ce qu'on ne s'attendait pas du tout. Petite victoire. 1h de vol, on atterrit dans le Sud, le vrai, celui où il fait encore plus chaud et où les gens ont des sourires encore plus larges.",
    "Guest house Bacar House : légèrement délabrée, absolument charmante. Le quartier autour ressemble à un décor de film — rues en terre, ânes, échoppes colorées, enfants qui jouent. On pose les sacs. Dîner au restaurant Makini : 700 LE pour deux, cuisine nubienne maison, c'est délicieux.",
    "Souk d'Assouan le soir : incomparablement plus agréable que celui du Caire. On peut flâner sans se faire alpaguer toutes les 10 secondes. Enfin presque — « Take your time! Take your time! » dit le vendeur d'épices en nous tendant une cuillère de curcuma. On prend notre temps. On achète du curcuma. On rentre tôt. Réveil à 3h25 le lendemain.",
   ]},
  {id:'jour-5', no:'Jour 5', date:'16 Avril 2026', title:"Abou Simbel & <b>l'Île de Philæ</b>", photos:[14,15,16,17,18,10,11],
   text:[
    "3h25. Le réveil sonne dans le noir absolu d'Assouan. Minibus collectif pour Abou Simbel, 280 km de désert. Retard de 20 minutes. 6–7 passagers ensommeillés. Chauffeur qui double dans les virages sans visibilité. Deux enfants qui vomissent à l'arrière. J'ai dormi, ce qui était clairement la bonne stratégie.",
    "Arrivée à 7h30 à Abou Simbel au lever du soleil. Les quatre colosses de Ramsès II émergent de la falaise dans la lumière du matin. On reste là, muets, 5 minutes. L'intérieur est encore plus stupéfiant — salle hypostyle, scènes de la bataille de Qadesh, sanctuaire avec les quatre dieux. À la sortie : « Photo with camel? Good price! Mister, photo! » — Non merci. — « For your girlfriend? Beautiful photo! » — Toujours non. — « Maybe postcard? » — On file.",
    "Retour 3h de route. Déjeuner Makini (encore — parce que c'est bon). Le soir : île de Philæ, son et lumière sur le temple d'Isis. Le spectacle en lui-même est franchement kitsch — voix off dramatique, lumières colorées, narration qui se prend trop au sérieux. Mais le temple illuminé sur l'eau noire du Nil, dans la nuit du désert, est absolument magique. Puis île Éléphantine avec notre hôte nubien : dîner en rooftop, conversation passionnante sur la politique et l'impossibilité pour les Égyptiens de voyager librement. Rentrée à minuit.",
   ]},
  {id:'jour-6', no:'Jour 6', date:'17 Avril 2026', title:"Embarquement <b>sur le Nil</b>", photos:[23,19,20],
   text:[
    "Embarquement sur le bateau de croisière. Cabine avec terrasse privée sur l'eau — presque les pieds dans le Nil. On pose les sacs et on s'installe sur le pont. Le fleuve glisse, les rives verdissent, les palmiers-dattiers défilent. C'est la première fois depuis quatre jours qu'on n'a personne à négocier.",
    "Escale à Kom Ombo : temple du crocodile et d'Horus sous 44°C. À l'entrée du site : « Taxi pour le retour? Bonne prix! » — On est sur un bateau. — « Caleche? » — On est sur un bateau. — « Postcard? » — On avance. Le temple est splendide — double symétrie parfaite, dédiée à deux dieux simultanément. Musée adjacent avec des dizaines de crocodiles momifiés, parés de bijoux. On négocie un chat en céramique de 1500 à 750 LE — talent inexplicable pour ça.",
    "Soirée sur le pont supérieur. Coucher de soleil sur le Nil, le fleuve vire à l'or, un héron cendré s'envole lentement. 29 passagers de tous les pays. Le guide, intelligent et cultivé, parle de politique égyptienne — mais avec des pauses, des demi-phrases, des regards discrets. Comme s'il surveillait quelque chose. On ne pose pas trop de questions.",
   ]},
  {id:'jour-7', no:'Jour 7', date:'18 Avril 2026', title:"Edfou & <b>les Hiéroglyphes</b>", photos:[21,22],
   text:[
    "Arrêt matinal aux carrières de grès de Gebel El-Silsila : c'est d'ici que venaient les matériaux de la plupart des grands temples d'Égypte. On voit encore les marques d'outils dans la pierre, les inscriptions laissées par des ouvriers anonymes. Fascinant et complètement ignoré des touristes — ce qui en fait l'un des meilleurs spots du voyage.",
    "Temple d'Horus à Edfou : le mieux conservé d'Égypte, et probablement du monde antique. Enseveli sous le sable pendant des siècles, ce qui l'a protégé des pillages. Colonnes de 36 mètres, hiéroglyphes sur chaque centimètre carré du sol au plafond. Le guide nous explique la bataille mythologique entre Horus et Seth, gravée intégralement sur les murs. Soudainement, les symboles parlent. C'est une des plus grandes satisfactions intellectuelles du voyage.",
    "Retour sur le pont. Livre, soleil, rives qui défilent, thé à la menthe. Légère tourista en soirée — le fameux « sick boat », maladie officielle de la croisière nilotique. On mange léger. Le Nil, lui, continue de couler, totalement indifférent à nos estomacs.",
   ]},
  {id:'jour-8', no:'Jour 8', date:'19 Avril 2026', title:"Bienvenue <b>à Louxor</b>", photos:[26,29],
   text:[
    "Débarquement à Esna, navette jusqu'à Louxor, traversée du Nil en bac pour la rive Ouest. À chaque étape : « Taxi? Taxi? Mister, taxi! » — on finit par en prendre un pour aller à l'hôtel, et il nous demande le double du prix convenu à l'arrivée. On paie le prix convenu. Discussion animée. On s'en va. Casa Loco Hotel, rive Ouest : charmant, piscine, 27€ la nuit. On plonge immédiatement dans la piscine.",
    "Après-midi : Karnak. Le plus grand complexe religieux du monde antique — 2 km², construit sur 2000 ans par 30 pharaons. Salle hypostyle avec 134 colonnes de 23 mètres. Allée des sphinx criocéphales. Obélisques de 30 mètres. On lève la tête. On la baisse. On la relève. C'est écrasant dans le bon sens du terme.",
    "Retour hôtel. Baignade. Dîner au Wolf (tajine + moussaka). Dans la nuit, on tombe malades tous les deux, simultanément, de façon assez spectaculaire. L'Égypte vient de nous rappeler qu'elle est aussi un pays en développement. Message reçu cinq sur cinq.",
   ]},
  {id:'jour-9', no:'Jour 9', date:'20 Avril 2026', title:"Journée <b>off</b>", photos:[],
   text:[
    "Mauvaise nuit. On ne bouge pas. Probiotiques, Smecta, eau, eau, encore eau. Menu de la journée : riz blanc, bananes, quelques frites avalées en tremblant vers 15h. Les pyramides peuvent attendre.",
    "Décision sage et mature : on décale d'une journée, on prend une nuit supplémentaire au Casa Loco (27€ bien investis). La piscine est à 10 mètres — on n'ira pas non plus. On lit. On dort. On regarde le Nil par la fenêtre.",
    "Note philosophique gagnée à la dure : voyager, c'est aussi accepter que son corps décide parfois du programme. L'Égypte, c'est magnifique. Mais son eau du robinet, ses glaçons suspects et ses buffets à 40°C testent en permanence votre système immunitaire. Spoiler : le système immunitaire perd souvent.",
   ]},
  {id:'jour-10', no:'Jour 10', date:'21 Avril 2026', title:"Hatchepsout & <b>Louxor de Nuit</b>", photos:[24,25],
   text:[
    "Retour à la vie. Taxi de confiance pour la rive Ouest — il s'arrête spontanément acheter des bananes pour nous en chemin. Geste touchant, totalement inattendu. La rive Ouest de Louxor est un chantier archéologique permanent à ciel ouvert : des fouilles partout, des grilles, des panneaux « défense d'entrer », et des choses enfouies dans chaque colline.",
    "Temple d'Hatchepsout, sculpté directement dans la falaise de Deir el-Bahari : trois terrasses colonnées qui montent vers la montagne. De l'extérieur, c'est l'une des architectures les plus élégantes qu'on ait vues. À l'intérieur, sobre et mystérieux. Hatchepsout se représentait avec la barbe cérémonielle masculine — une femme qui régnait comme un pharaon, effacée de l'histoire par son successeur jaloux. On ressort un peu révoltés en son nom.",
    "Soir : temple de Louxor illuminé. On entre dans le souk adjacent — « Where are you from? » demande le premier vendeur. — France. — « Ah, Emmanuel Macron! Bonne nuit Monsieur Macron! Papyrus? » On achète. On rit. On rentre. Tentative de McDonald's local par curiosité malsaine : grosse erreur. On ne recommande pas.",
   ]},
  {id:'jour-11', no:'Jour 11', date:'22 Avril 2026', title:"La Vallée <b>des Rois</b>", photos:[27,28],
   text:[
    "Dernière matinée à Louxor. Arrêt aux Colosses de Memnon d'abord : deux statues de 18 mètres qui regardent l'horizon depuis 3400 ans, au milieu d'un champ. Entrée gratuite. Zéro vendeur. On prend notre temps. Personne ne dit « good price for you ». C'est reposant.",
    "Vallée des Rois : 63 tombes creusées dans la montagne calcaire pour les pharaons du Nouvel Empire. Le ticket de base = 3 tombes au choix. Sur conseil croisé du taxi local et de ChatGPT (duo inattendu mais efficace) : Ramsès III, Ramsès IV, Mérenptah. Aucun regret. Les couleurs sont stupéfiantes — bleu lapis, rouge ocre, or — après 3000 ans sous la montagne. Ramsès III est époustouflante. On aurait pu rester une semaine entière à Louxor. On en avait 3 jours. C'était trop juste.",
    "14h : taxi vers Somabay, 5h de route vers la Mer Rouge. Chauffeur taciturne qui nous fait baisser les stores à mi-chemin — il évite apparemment un poste de contrôle où les touristes paient une taxe informelle. On ne pose pas de questions. Le désert défile. On arrive épuisés, encore malades, des hiéroglyphes plein les yeux.",
   ]},
  {id:'jour-12', no:'Jours 12–14', date:'23–25 Avril 2026', title:"Mer Rouge & <b>Repos</b>", photos:[30,31,32],
   text:[
    "Somabay, bord de Mer Rouge. Détente totale. Snorkeling, faune marine généreuse, coraux. Eau à 22–23°C, un peu fraîche mais agréable. Beaucoup de vent un jour.",
    "Au buffet : riz et pâtes (on est toujours en convalescence). Le soleil, le silence, le sable. L'Égypte sait aussi se faire douce.",
    "Et puis il faut rentrer — avec des kilos de photos, des papyrus dans les valises, du sable dans les chaussures, et une certitude : on reviendra.",
   ]},
];

window.BESTOF = [
  {n:'01', t:"Masque d'or de Toutankhamon",    d:'Jour 2',  img:1},
  {n:'02', t:"Île de Philæ de nuit",           d:'Jour 5',  img:10},
  {n:'03', t:'Coucher de soleil — Temple de Louxor', d:'Jour 10', img:24},
  {n:'04', t:"Les colosses d'Abou Simbel",     d:'Jour 5',  img:14},
  {n:'05', t:'Pyramides de Gizeh',             d:'Jour 2',  img:5},
  {n:'06', t:'Sarcophage doré — GEM',          d:'Jour 2',  img:2},
  {n:'07', t:'Récif corallien — Mer Rouge',    d:'Jour 12', img:30},
  {n:'08', t:'Colosses de Memnon',             d:'Jour 11', img:27},
  {n:'09', t:'Felouque sur le Nil',            d:'Jour 4',  img:12},
];

window.PLACES = [
  {name:'Le Caire',     coords:[30.0444,31.2357], days:'Jours 0–4',  desc:"Pyramides, Sphinx, Saqqara, Grand Musée, Zamalek, souk Khân al-Khalili, quartier copte.",      cityPage:'le-caire.html',    journal:'journal.html#jour-1'},
  {name:'Abou Simbel',  coords:[22.3372,31.6258], days:'Jour 5',     desc:"Temples de Ramsès II et Néfertari. Réveil à 3h25, 3h de route, majestueux.",                  cityPage:'abou-simbel.html', journal:'journal.html#jour-5'},
  {name:'Assouan',      coords:[24.0889,32.8998], days:'Jours 4–5',  desc:"Île de Philæ, Île Éléphantine, souk.",                                                         cityPage:'assouan.html',     journal:'journal.html#jour-4'},
  {name:'Croisière Nil',coords:[24.9,32.87],      days:'Jours 6–7',  desc:"Kom Ombo → Edfou → Esna. Navigation paisible sur le Nil.",                                     cityPage:'croisiere.html',   journal:'journal.html#jour-6'},
  {name:'Louxor',       coords:[25.6872,32.6396], days:'Jours 8–11', desc:"Karnak, Vallée des Rois, Hatchepsout, temple de Louxor.",                                      cityPage:'louxor.html',      journal:'journal.html#jour-8'},
  {name:'Somabay',      coords:[26.85,33.93],     days:'Jours 12–14',desc:"Mer Rouge. Snorkeling, repos, soleil.",                                                         cityPage:'mer-rouge.html',   journal:'journal.html#jour-12'},
];
window.ROUTE_ORDER = ['Le Caire','Abou Simbel','Assouan','Croisière Nil','Louxor','Somabay'];

window.GODS = [
  {sym:'❂', name:'Ramsès II',      role:'Pharaon divinisé',      epoch:'1279–1213 av. J.-C.',
   img:'photos/20260416_075847.webp',
   text:"Le plus grand pharaon bâtisseur (1279–1213 av. J.-C.). Fils de Séthi Ier, règne 66 ans. Ses constructions couvrent toute l'Égypte. Les quatre statues d'Abou Simbel ont été déplacées de 65m en 1968 pour les sauver des eaux du lac Nasser.",
   detail:"Ramsès II, dit « Ramsès le Grand », règne 66 ans — l'un des plus longs de l'histoire égyptienne. Grand stratège militaire, il mène la bataille de Qadesh contre les Hittites, première bataille de l'histoire documentée par les deux camps, et en fait graver le récit triomphal sur tous ses temples, bien que l'issue ait été indécise.\n\nIl fait construire ou agrandir des dizaines de monuments : Abou Simbel, le Ramesseum, la salle hypostyle de Karnak. Il eut plus de 100 enfants reconnus. Sa momie porte encore les traces d'arthrite sévère et de maladies dentaires. Fait rarissime : lorsqu'elle voyage à Paris en 1976 pour soins de conservation, la momie est dotée d'un passeport officiel égyptien — profession : roi.",
   vu:"Vu à : Abou Simbel · Karnak · Louxor"},
  {sym:'𓂀', name:'Horus',          role:'Dieu faucon',            epoch:'Dieu primordial',
   img:'photos/horus.webp',
   text:"Dieu du ciel, de la royauté et de la protection. Fils d'Osiris et d'Isis. Son œil gauche est la Lune, son œil droit le Soleil. Sa victoire légendaire sur Seth, son oncle, symbolise le triomphe de l'ordre sur le chaos.",
   detail:"Horus est l'une des plus anciennes divinités du panthéon égyptien. Dieu du ciel et de la royauté, il est représenté sous la forme d'un faucon ou d'un homme à tête de faucon portant la double couronne d'Égypte. Fils d'Osiris et d'Isis, il est conçu après la mort de son père.\n\nSa lutte contre Seth — son oncle meurtrier d'Osiris — pour le trône d'Égypte constitue l'un des mythes fondateurs de la civilisation. Lors de ce combat, il perd son œil gauche, qui devient le symbole protecteur « Œil d'Horus » ou Oudjat — amulette portée encore aujourd'hui. Chaque pharaon vivant était considéré comme une incarnation d'Horus ; à sa mort, il devenait Osiris.",
   vu:"Vu à : Edfou · Kom Ombo"},
  {sym:'𓆋', name:'Sobek',          role:'Dieu crocodile',         epoch:'Ancien Empire',
   img:'photos/sobek.webp',
   text:"Dieu des eaux du Nil, de la fertilité et de la puissance. Redouté et vénéré, il contrôle les crues. Les crocodiles sacrés étaient nourris, parés de bijoux, et momifiés à leur mort.",
   detail:"Sobek, le dieu crocodile, est une divinité ancienne associée aux eaux du Nil et à sa puissance créatrice. Les Égyptiens redoutaient et vénéraient simultanément le crocodile : symbole de fertilité car il annonçait les crues, mais aussi de destruction imprévisible.\n\nÀ Kom Ombo, son temple est partagé avec Horus — symbole de la dualité égyptienne. Les crocodiles sacrés vivaient dans des bassins attenant aux temples, nourris par les prêtres, parés de bijoux et d'amulettes. À leur mort, ils étaient momifiés avec soin. Le musée de Kom Ombo expose des dizaines de crocodiles momifiés, certains encore couverts de leurs ornements. Sobek était aussi invoqué pour se protéger des attaques lors des traversées du Nil.",
   vu:"Vu à : Kom Ombo"},
  {sym:'𓊨', name:'Isis',           role:'Déesse de la magie',     epoch:'Dieu primordial',
   img:'photos/isis.webp',
   text:"Déesse de la magie, de la maternité et de la résurrection. Épouse d'Osiris, mère d'Horus. Après l'assassinat d'Osiris par Seth, elle rassemble les morceaux du corps de son mari et le ressuscite magiquement pour concevoir Horus.",
   detail:"Isis est l'une des déesses les plus puissantes du monde antique — son culte s'est étendu jusqu'à Rome et à tout le bassin méditerranéen. Épouse d'Osiris, sœur de Seth et Nephtys, mère d'Horus, elle incarne la maternité divine, la magie et la résurrection.\n\nAprès que Seth eut démembré Osiris et dispersé ses morceaux à travers l'Égypte, Isis les rassembla tous et reconstitua le corps de son époux, lui insufflant une vie suffisante pour concevoir Horus. Ce mythe fonde toute la croyance en la résurrection et le rituel funéraire égyptien. Son temple sur l'île de Philæ, partiellement inondé après la construction du barrage, a été entièrement déplacé bloc par bloc entre 1972 et 1980 — une prouesse archéologique mondiale.",
   vu:"Vu à : Île de Philæ"},
  {sym:'𓁹', name:'Osiris',         role:'Dieu des morts',         epoch:'Dieu primordial',
   img:'photos/osiris.webp',
   text:"Dieu de l'au-delà, du jugement des morts et de la renaissance. Premier pharaon mythique d'Égypte. Lors du jugement, le cœur du défunt est pesé contre la plume de Maât. S'il est plus lourd, il est dévoré par Ammout.",
   detail:"Osiris est le premier roi mythique d'Égypte, mort et ressuscité, dieu de l'au-delà et de la renaissance. Assassiné par son frère Seth qui jalouse son règne, il est ressuscité par Isis et devient le souverain du royaume des morts.\n\nDans le Jugement des Âmes, le défunt se présente devant Osiris : son cœur est pesé sur une balance contre la plume de Maât. Si le cœur est plus lourd — alourdi par les fautes —, la créature Ammout (tête de crocodile, corps de lion, arrière-train d'hippopotame) le dévore immédiatement et le défunt cesse d'exister. Si les poids sont égaux, il accède aux Champs d'Ialou, le paradis égyptien. Ce rituel est illustré en détail dans le Livre des Morts.",
   vu:"Vu à : Vallée des Rois · Saqqara"},
  {sym:'☥', name:'Toutankhamon',   role:'Pharaon mystérieux',     epoch:'XVIIIe dynastie, ~1332 av. J.-C.',
   img:'photos/IMG20260413163722.webp',
   text:"Pharaon de la XVIIIe dynastie, règne à 9 ans, meurt à 19 ans. Inconnu jusqu'à la découverte de sa tombe intacte par Howard Carter en 1922 — la seule non pillée de la Vallée des Rois. Plus de 5 000 objets y étaient enterrés.",
   detail:"Toutankhamon est le pharaon le plus célèbre du monde, non pour ses accomplissements — il règne à peine dix ans — mais pour son tombeau intact, découvert en 1922 par Howard Carter dans la Vallée des Rois. C'est la seule tombe royale jamais retrouvée non pillée. Plus de 5 000 objets y étaient scellés : le masque funéraire en or massif, quatre sarcophages emboîtés, le trône en bois doré, des chars, des vêtements, de la nourriture.\n\nIl monte sur le trône à 9 ans, probablement fils d'Akhénaton — le pharaon hérétique qui imposa le monothéisme autour du dieu Aton. Toutankhamon rétablit le culte traditionnel des dieux. Mort à 19 ans dans des circonstances encore débattues (chute de cheval, maladie, assassinat?), son nom fut effacé des registres royaux par ses successeurs.",
   vu:"Vu à : Grand Musée · Saqqara · Vallée des Rois"},
  {sym:'𓆄', name:'Maât',           role:'Déesse de la justice',   epoch:'Ancien Empire',
   img:'photos/maat.webp',
   text:"Déesse de la vérité, de la justice, de l'ordre cosmique — le « Maât ». Concept philosophique autant que divinité : tout pharaon se devait de faire régner le Maât, l'ordre contre le chaos (Isfet). La vie juste, l'harmonie universelle.",
   detail:"Maât est à la fois une déesse et le concept philosophique central de la civilisation égyptienne. Sa plume d'autruche symbolise la vérité, la justice et l'harmonie universelle. Le terme « maât » désigne un état d'ordre cosmique — l'opposé d'Isfet, le chaos.\n\nTout pharaon avait pour devoir sacré de maintenir le maât : rendre une justice équitable, nourrir son peuple, honorer les dieux, maintenir l'équilibre des forces naturelles. Dans le rituel funéraire, c'est sa plume qui sert d'étalon pour peser le cœur des défunts. Représentée comme une femme assise portant une plume sur la tête — parfois ailée — Maât est présente dans chaque temple. Sa simplicité visuelle contraste avec l'immensité de ce qu'elle représente : l'idée même que l'univers obéit à un ordre moral.",
   vu:"Vu à : tous les temples"},
  {sym:'♀', name:'Hatchepsout',    role:'Pharaonne',               epoch:'XVIIIe dynastie, 1479–1458 av. J.-C.',
   img:'photos/20260421_182935.webp',
   text:"L'une des rares femmes à avoir régné comme pharaon (1479–1458 av. J.-C.). Se représentait avec la barbe cérémonielle masculine. Son successeur Thoutmosis III fit effacer son nom et son image après sa mort. Redécouverte au XIXe siècle.",
   detail:"Hatchepsout est l'une des rares femmes de l'histoire égyptienne à avoir exercé le pouvoir suprême avec le titre de pharaon — pas régente, pharaon à part entière. Elle règne 21 ans, l'une des périodes les plus prospères du Nouvel Empire.\n\nElle lance d'ambitieuses expéditions commerciales vers le pays de Pount (actuelle Somalie ou Érythrée), fait construire son temple funéraire à Deir el-Bahari — l'une des architectures les plus élégantes de l'Antiquité — et ériger des obélisques à Karnak. Elle se fait représenter avec la barbe cérémonielle masculine et les insignes royaux, assumant pleinement les codes du pouvoir. Après sa mort, son successeur Thoutmosis III fit effacer méthodiquement son nom et son image de tous les monuments. Redécouverte seulement au XIXe siècle, elle est aujourd'hui reconnue comme l'un des grands souverains de l'histoire.",
   vu:"Vu à : Deir el-Bahari, Louxor"},
];

window.INFOS = [
  {ic:'✈️', t:'Vols & Arrivée', items:[
    'Aéroports principaux : Le Caire (CAI), Louxor (LXR), Assouan (ASW), Hurghada (HRG)',
    'Vols directs vers Le Caire depuis la plupart des grandes villes européennes (~4–6h)',
    'Vols charters directs vers Hurghada ou Sharm el-Sheikh depuis de nombreux aéroports européens',
    'Vols intérieurs EgyptAir / Air Cairo : Le Caire → Assouan ou Louxor (~1h, 40–80€)',
    'Depuis l\'aéroport du Caire : Uber recommandé (300–400 LE vers le centre) — <strong>le chauffeur peut tenter de renégocier à l\'arrivée, tenez-vous en au prix affiché</strong>',
  ]},
  {ic:'🛂', t:'Visa & Formalités', items:[
    '<strong>Visa obligatoire pour la quasi-totalité des nationalités</strong> — à obtenir avant le départ',
    'E-visa recommandé : <a href="https://visa2egypt.gov.eg/" target="_blank" rel="noopener"><strong>visa2egypt.gov.eg</strong></a> — ~25 USD',
    '<strong>Attention : la saisie en ligne est laborieuse</strong> — prenez le temps de bien remplir chaque champ, une erreur peut bloquer la demande',
    'Traitement généralement en 3–5 jours ouvrés — ne pas attendre la veille du départ',
    'Visa à l\'arrivée possible dans certains aéroports (30 USD) mais files d\'attente importantes',
    'Passeport valide au moins 6 mois après la date de retour requis',
  ]},
  {ic:'💷', t:'Budget & Monnaie', items:[
    'Monnaie : Livre Égyptienne (LE / EGP)',
    '<strong>Taux de change indicatif : 1 € ≈ 60 EGP · 1 USD ≈ 50 EGP</strong> (variable — vérifier avant départ)',
    'Budget journalier moyen : <strong>~50€ / ~40 USD par personne</strong> (hébergement + repas + entrées)',
    'Budget serré possible dès <strong>~30€ / ~25 USD par jour</strong> en guest house et restaurants locaux',
    'Retraits DAB : généralement limités à <strong>2 000–5 000 EGP par opération</strong> — prévoir plusieurs retraits',
    'Carte bancaire acceptée dans les grands hôtels et musées — espèces indispensables partout ailleurs',
    'Pourboires (<em>baksheesh</em>) : pratique culturelle normale — prévoir de la monnaie en petites coupures',
  ]},
  {ic:'🚖', t:'Transports', items:[
    '<strong>Uber</strong> : recommandé dans toutes les grandes villes — prix fixé à l\'écran <em>sauf pour les sites touristiques éloignés</em> (Saqqara, Gizeh…) où le chauffeur peut tenter de renégocier à l\'arrivée — soyez ferme',
    '<strong>Train</strong> : Louxor → Assouan en ~3h (~5–10€ en 1ère classe) — confortable et ponctuel',
    '<strong>Taxi Louxor → Hurghada</strong> : compter <strong>~4 000 EGP</strong> pour un taxi privé — à négocier à l\'avance avant de monter',
    '<strong>Vols intérieurs</strong> : Le Caire → Assouan ou Louxor (~1h) — EgyptAir ou Air Cairo',
    '<strong>Croisière Nil</strong> : la plus belle façon de relier Assouan et Louxor (3–4 nuits)',
    'Métro du Caire : propre, rapide, ~10 LE le ticket — idéal pour les quartiers centraux',
  ]},
  {ic:'🌡', t:'Météo & Saisons', items:[
    '<strong>Octobre–avril</strong> : meilleure période — 20–28°C, idéal pour les sites archéologiques',
    '<strong>Novembre–février</strong> : haute saison touristique, températures parfaites (18–25°C)',
    '<strong>Mars–avril</strong> : bon compromis, moins de monde, début de la chaleur',
    '<strong>Mai–septembre</strong> : chaleur extrême (40–48°C) — déconseillé sauf Mer Rouge avec A/C',
    'Louxor / Assouan : toujours plus chaud que Le Caire (jusqu\'à 44°C en avril)',
    'Mer Rouge : eau entre 22°C (hiver) et 28°C (automne) — idéal septembre–novembre',
  ]},
  {ic:'🏥', t:'Santé & Sécurité', items:[
    'Vaccins recommandés : hépatite A, typhoïde — consulter un médecin du voyage avant départ',
    '<strong>Eau du robinet : ne jamais boire</strong> — eau en bouteille uniquement (même pour se rincer les dents)',
    'Turista fréquente : emporter probiotiques, Smecta, Imodium',
    'SPF 50 indispensable — soleil intense même en hiver à Louxor et Assouan',
    'Égypte : destination sûre pour les touristes dans les zones visitées',
    'Assurance voyage avec couverture médicale et rapatriement obligatoire',
  ]},
  {ic:'📱', t:'Communication & SIM', items:[
    '<strong>Carte SIM locale recommandée</strong> : Vodafone ou Orange Égypte — ~10€ pour 10 Go · passeport requis à l\'achat',
    'S\'acheter à l\'aéroport ou en ville dès l\'arrivée',
    '<strong>eSIM : alternative pratique</strong> — configurable avant le départ depuis votre téléphone · Exemple : ~20€ pour 5 Go / 15 jours · compatible avec la plupart des téléphones récents · chercher "eSIM Égypte" sur Airalo ou Holafly',
    'Wi-Fi disponible dans la plupart des hôtels — qualité variable en dehors du Caire',
    'Réseau 4G dans les villes, couverture limitée dans le désert',
    'WhatsApp fonctionne normalement — aucun VPN requis',
  ]},
  {ic:'🕌', t:'Culture & Usages', items:[
    'Pays à majorité musulmane — respect des codes vestimentaires dans les lieux de culte',
    'Tenues couvrantes recommandées (épaules et genoux) pour les mosquées et certains sites',
    'Ramadan : ambiance différente, horaires des restaurants modifiés — anticiper si votre séjour coïncide',
    'Pourboires (<em>baksheesh</em>) : pratique culturelle normale — 20–50 LE suffisent',
    'Négociation : normale dans les souks et avec les taxis non-Uber',
    'Photographier militaires et bâtiments officiels : interdit',
  ]},
];

/* ============================================================
   GOOGLE ANALYTICS
   Remplacez 'G-XXXXXXXXXX' par votre vrai Measurement ID
   (récupéré sur analytics.google.com)
   Puis redéployez : vercel --prod
   ============================================================ */
window.GA_ID = 'G-DHZ4902E1E';
