export const languages = {
  it: 'Italiano',
  en: 'English',
} as const;

export const defaultLang = 'it';

export const ui = {
  it: {
    // --- Meta / SEO ---
    'meta.title': 'BrixiaTech — Vetri che pensano. Edifici che si adattano.',
    'meta.description':
      'Adaptive architecture: vetri PDLC switchable, hardware embedded e piattaforma cloud predittiva. Un solo stack, dalla pellicola al dashboard. Dal 2019 — focus Milano, Brescia, Bergamo.',
    'meta.ogLocale': 'it_IT',

    // --- Nav ---
    'nav.tech': 'Tecnologie',
    'nav.work': 'Realizzazioni',
    'nav.insights': 'Insights',
    'nav.quote': 'Preventivo',

    // --- Hero ---
    'hero.eyebrow': 'ADAPTIVE ARCHITECTURE',
    'hero.headline1': 'Vetri che pensano.',
    'hero.headline2': 'Edifici che si adattano.',
    'hero.subtitle':
      "Building intelligence applicata al primo strato dell'architettura — il vetro. PDLC switchable, hardware embedded, piattaforma cloud predittiva.",
    'hero.subtitleEmphasis': 'Un solo stack, dalla pellicola al dashboard.',
    'hero.ctaPrimary': 'Configura un progetto',
    'hero.ctaSecondary': 'Scopri B-LOGIC',

    // --- Ticker ---
    'ticker.warranty': 'GARANZIA',
    'ticker.warrantyValue': 'FINO A 7 ANNI',
    'ticker.since': 'DAL',
    'ticker.cities': 'MILANO · BRESCIA · BERGAMO',

    // --- Clients ---
    'clients.eyebrow': 'HANNO SCELTO BRIXIATECH',

    // --- Problem ---
    'problem.eyebrow': 'PRIVACY E LUCE',
    'problem.title': 'Vetri che diventano opachi a comando. E tornano trasparenti quando vuoi.',
    'problem.lead':
      "Una parete vetrata che non protegge dagli sguardi. Il sole che acceca e surriscalda un ufficio per mezza giornata. Tende che ingialliscono, raccolgono polvere e non bastano mai. Problemi diversi, una radice comune: il vetro è fisso, l'ambiente cambia. La risposta non è coprire il vetro, è renderlo regolabile. Esistono superfici vetrate che passano da trasparenti a opache, o si oscurano per schermare luce e calore, con un comando elettrico — a interruttore, da telecomando, da app o in automatico.",
    'problem.privacy.title': 'Privacy a comando',
    'problem.privacy.body':
      "Un open space senza separazioni, un ambulatorio, un'abitazione a piano strada: spazi che a volte servono aperti alla vista, a volte protetti. Un vetro che diventa opaco in un istante copre entrambi i momenti, senza rinunciare alla luce naturale quando non serve schermarsi.",
    'problem.solar.title': 'Sole, luce e calore',
    'problem.solar.body':
      "Vetrate esposte a sud, lucernari, verande: dove il sole entra troppo, oggi si rimedia con tende o pellicole fisse che tolgono luce tutto l'anno. Un vetro che si scherma solo quando il sole lo richiede mantiene la vista e modula abbagliamento e calore.",
    'problem.static.title': "L'alternativa a tende e vetri smerigliati",
    'problem.static.body':
      "Tende, veneziane, pellicole adesive permanenti, vetri sabbiati: soluzioni statiche per un'esigenza che statica non è. Una superficie vetrata switchable fa entrambe le cose — trasparente o opaca — e si comanda elettricamente.",
    'problem.bridge': 'Come fa un vetro a cambiare stato, e quali tecnologie esistono, lo vediamo qui sotto.',

    // --- How ---
    'how.eyebrow': 'COME FUNZIONA',
    'how.title': 'Cristalli liquidi e un impulso elettrico. Nessuna parte in movimento.',
    'how.lead':
      "Dietro un vetro che diventa opaco a comando non c'è un meccanismo, ma un materiale che reagisce all'elettricità — nel caso più diffuso, il PDLC. Capire come funziona aiuta a valutare dove conviene e cosa aspettarsi.",
    'how.mechanism.title': 'Come fa il vetro a diventare opaco e poi di nuovo trasparente?',
    'how.mechanism.body':
      "Tra due lastre, o dentro una pellicola, c'è uno strato di cristalli liquidi. Senza alimentazione i cristalli sono disordinati e diffondono la luce: il vetro appare opaco, bianco-lattiginoso. Con un impulso elettrico si allineano e lasciano passare la luce: il vetro diventa trasparente. È un cambiamento di stato del materiale, non un oscuramento meccanico — niente tende, lamelle o parti in movimento. Il passaggio tra i due stati è immediato.",
    'how.power.title': 'Serve alimentazione per tenerlo trasparente?',
    'how.power.body':
      'Nella tecnologia più diffusa sì: il vetro resta trasparente finché è alimentato e torna opaco quando la tensione viene a mancare. Ha un lato pratico — senza alimentazione lo stato di riposo è la privacy. Esistono anche tecnologie a logica inversa, trasparenti da spente: le confrontiamo tra i prodotti.',
    'how.control.title': 'Come si comanda?',
    'how.control.body':
      "Con un segnale elettrico, e qui c'è ampia scelta: interruttore a parete, telecomando, app, oppure in automatico tramite sensori e domotica — in base a luce, presenza o orari. È il livello dove la superficie vetrata smette di essere un componente passivo e diventa governabile.",
    'how.form.title': "Pellicola o vetro: che differenza c'è?",
    'how.form.body':
      "La stessa tecnologia esiste in due forme: una pellicola adesiva applicata su un vetro esistente, e un vetro con il film già integrato tra le lastre in produzione. La pellicola interviene su ciò che c'è già; il vetro stratificato è la via per nuove forniture.",
    'how.bridge': 'Quale tecnologia conviene per un certo progetto dipende da prestazioni, estetica e budget: le mettiamo a confronto qui sotto.',

    // --- Tech ---
    'tech.eyebrow': 'TECNOLOGIE',
    'tech.title': 'Sei tecnologie switchable. Quella giusta dipende dal progetto.',
    'tech.lead':
      "Non esiste un'unica tecnologia per i vetri intelligenti, ma una famiglia di soluzioni con principi diversi. Alcune servono la privacy, altre governano luce e calore. Scegliamo — e forniamo — quella giusta per ogni progetto, dalla pellicola al vetro stratificato.",
    'tech.family1.label': 'Privacy a comando',
    'tech.pdlc.title': 'PDLC',
    'tech.pdlc.body':
      'Lo standard più diffuso dello switchable: opaco a riposo, trasparente quando alimentato. La scelta per privacy istantanea e pareti divisorie, disponibile come pellicola o come vetro.',
    'tech.pnlc.title': 'PNLC (reverse)',
    'tech.pnlc.body':
      'La logica inversa del PDLC: trasparente da spento, opaco sotto alimentazione. Pensato per chi resta trasparente la maggior parte del tempo e per i contesti fail-safe, dove in un blackout il vetro deve tornare visibile — vie di fuga, mezzi di soccorso.',
    'tech.family2.label': 'Controllo di luce e calore',
    'tech.spd.title': 'SPD',
    'tech.spd.body':
      "Oscuramento variabile e continuo, regolabile come un reostato in pochi secondi, da una tinta scura profonda alla trasparenza. Eccelle nel controllo dell'abbagliamento mantenendo la vista verso l'esterno.",
    'tech.ec.title': 'Elettrocromico',
    'tech.ec.body':
      'Viraggio graduale a bassissimo voltaggio tramite reazione elettrochimica: il vetro si colora e si schiarisce, e mantiene lo stato senza consumare energia. La scelta per il controllo termico e solare passivo di facciate ed edifici ad alta efficienza.',
    'tech.dlc.title': 'DLC',
    'tech.dlc.body':
      'Cristalli liquidi dicroici che assorbono la luce invece di diffonderla: il vetro vira a una tinta fumé anziché diventare lattiginoso. Riduce abbagliamento e calore solare, con rese estetiche in più colorazioni.',
    'tech.clc.title': 'CLC',
    'tech.clc.body':
      "Cristalli liquidi colesterici a riflessione selettiva, bistabili: mantengono lo stato senza alimentazione continua, consumando solo allo switch. Agiscono come scudo termico dinamico, riflettendo l'energia solare invece di assorbirla.",
    'tech.channel':
      'Tutte queste tecnologie sono disponibili anche come sola pellicola da stratificare, fornite a vetrai e serramentisti che le integrano nei propri manufatti.',

    // --- Apps ---
    'apps.eyebrow': 'APPLICAZIONI',
    'apps.title':
      'Vetrate che cambiano stato a comando. Trasparenti, opache o schermate quando serve.',
    'apps.intro':
      'Smart glass, switchable film, vetri PDLC ed elettrocromici: tecnologie diverse, un solo risultato — superfici vetrate che regoli elettricamente, dalla privacy istantanea al controllo della luce solare. Ecco dove fanno la differenza.',
    'apps.office.title': 'Uffici e spazi di lavoro',
    'apps.office.body':
      "Pareti divisorie e sale riunioni che diventano opache premendo un interruttore: riservatezza quando l'incontro è sensibile, luce e apertura quando non serve. Niente tende, niente veneziane, nessuno sguardo indesiderato dall'esterno.",
    'apps.architecture.title': 'Architettura e grandi vetrate',
    'apps.architecture.body':
      'Facciate continue, atrii e vetrate a tutta altezza che modulano luce e calore del sole senza schermature meccaniche. Il vetro passa da trasparente a schermato, riducendo abbagliamento e carico termico mantenendo la vista.',
    'apps.institutional.title': 'Ambienti sensibili e istituzionali',
    'apps.institutional.body':
      'Reparti ospedalieri, musei, stazioni, spazi pubblici: dove privacy, controllo della luce e igiene sono una funzione, non una finitura. Superfici che si puliscono come un vetro e si comandano come un impianto.',
    'apps.hospitality.title': 'Ospitalità e residenze di pregio',
    'apps.hospitality.body':
      "Suite d'albergo, ville e attici dove il vetro che si oscura con un comando — o automaticamente, integrato nella domotica — diventa parte dell'esperienza. Dalla camera che si vela per la notte alla vetrata che oscura la vista sulla piscina.",

    // --- B-LOGIC ---
    'blogic.eyebrow': 'B-LOGIC',
    'blogic.title': 'Il vetro cambia stato. B-LOGIC decide quando.',
    'blogic.lead': 'B-LOGIC è la piattaforma che trasforma i vetri switchable da superfici a comando in superfici che si regolano da sole e dialogano con l’edificio.',
    'blogic.i1.title': 'Si regola da solo',
    'blogic.i1.body': 'L’opacità segue la luce e il sole nell’arco della giornata, senza toccare un interruttore. Quando qualcuno interviene a mano, B-LOGIC tiene conto di quella scelta.',
    'blogic.i2.title': 'Dialoga con l’edificio',
    'blogic.i2.body': 'Si integra con i sistemi di gestione dell’edificio (BMS) e coordina intere facciate come un’unica superficie, non come vetri isolati.',
    'blogic.i3.title': 'Efficienza che si misura',
    'blogic.i3.body': 'Ogni nodo registra come il vetro lavora nel tempo. Il risparmio non resta una promessa: è un dato verificabile, utile per certificazioni energetiche e report ESG.',
    'blogic.i4.title': 'Nato per la scala',
    'blogic.i4.body': 'Un solo livello di controllo governa molti vetri, su più edifici, con aggiornamenti distribuiti da remoto. Piattaforma italiana, sviluppata internamente.',
    'blogic.bridge': 'È il livello che porta i vetri switchable dentro la logica dell’edificio. Per vederlo in funzione, parliamone.',

    // --- Affidabilità (#9) ---
    'trust.eyebrow': 'PERCHÉ BRIXIATECH',
    'trust.title': 'Dal 2019 progettiamo, forniamo e installiamo smart glass.',
    'trust.lead': 'Non rivendiamo soltanto pellicole switchable: selezioniamo i materiali, li forniamo a vetrai e serramentisti e li installiamo. Una sola filiera, dal vetro al cantiere, nel centro-nord Italia.',
    'trust.bridge': 'Le domande che riceviamo più spesso — costi, tempi, garanzia — trovano risposta qui sotto.',
    'trust.i1.title': 'Filiera completa',
    'trust.i1.body': 'Fornitura, posa e canale wholesale di pellicole switchable, vetri smart ed elettrocromici. Un solo interlocutore, dal materiale all’installazione.',
    'trust.i2.title': 'Materiali certificati',
    'trust.i2.body': 'Installiamo film e vetri di grado ottico, con protezione UV fino al 99% e certificazioni internazionali sui materiali impiegati.',
    'trust.i3.title': 'Garanzia e assistenza',
    'trust.i3.body': 'Garanzia fino a 7 anni e assistenza post-vendita diretta. Un riferimento stabile nel tempo, non un fornitore occasionale.',
    'trust.i4.title': 'Sul territorio',
    'trust.i4.body': 'Operativi soprattutto su Milano, Brescia e Bergamo e in tutto il nord Italia. Seguiamo progetti anche nel resto d’Italia, in Svizzera e in Europa, in base al progetto.',

    // --- FAQ (#10) ---
    'faq.eyebrow': 'DOMANDE FREQUENTI',
    'faq.title': 'Tutto quello che serve sapere, prima di chiedere un preventivo.',
    'faq.lead': 'Vetri e pellicole switchable: costi, controllo, durata e installazione, spiegati in breve.',
    'faq.q1': 'Quanto costa un vetro o una pellicola che si oscura?',
    'faq.a1': "Non lavoriamo a listino: ogni fornitura è un progetto a sé. Il costo dipende dalla tecnologia scelta, dalle dimensioni e dalla geometria delle superfici, dagli accessori e dall'eventuale automazione. Per questo preferiamo studiare il caso reale: scrivici una mail o un messaggio con qualche dettaglio e ti prepariamo un preventivo su misura.",
    'faq.q2': 'In quali zone installate vetri e pellicole oscuranti?',
    'faq.a2': "Operiamo in tutto il centro-nord Italia, con base in provincia di Brescia. Le nostre aree principali sono Milano, Brescia e Bergamo, ma seguiamo progetti sull'intero territorio. Per sedi fuori area valutiamo caso per caso in fase di sopralluogo.",
    'faq.q3': 'Quanto dura e che garanzia offre lo smart glass?',
    'faq.a3': 'Offriamo una garanzia fino a 7 anni sui prodotti switchable. Installiamo vetri e pellicole intelligenti dal 2019 e selezioniamo materiali pensati per durare nel tempo in contesti professionali. La durata effettiva dipende da esposizione, uso e tecnologia.',
    'faq.q4': 'Si può controllare da telecomando, app o impianto domotico?',
    'faq.a4': 'Sì. Le superfici si comandano con interruttore, telecomando, app e integrazione domotica tramite la nostra piattaforma B-LOGIC. Puoi gestire un singolo vetro o coordinare intere vetrate e scenari su più ambienti.',
    'faq.q5': 'Il vetro resta trasparente se manca la corrente?',
    'faq.a5': "Dipende dalla tecnologia. Nella versione più diffusa (PDLC standard) il vetro torna opaco in assenza di alimentazione; nella versione “reverse” torna invece trasparente. Quest'ultima si sceglie dove la trasparenza serve per sicurezza, come vie di fuga e ambienti che devono restare leggibili in caso di blackout.",
    'faq.q6': 'Smart glass, smart film, PDLC e switchable sono la stessa cosa?',
    'faq.a6': "Sono termini che ruotano intorno alla stessa idea: una superficie che passa da trasparente a opaca con un comando elettrico. “Smart glass” è il vetro intelligente già pronto; “smart film” o pellicola è lo strato da applicare su un vetro esistente; “PDLC” e “switchable” indicano la tecnologia che rende possibile il passaggio. Scegliamo l'una o l'altra in base al progetto.",
    'faq.q7': 'Si applica sui vetri esistenti o serve cambiare il serramento?',
    'faq.a7': 'Entrambe le strade sono possibili. La pellicola switchable si applica sul vetro già installato, senza sostituire il serramento; in alternativa forniamo vetrocamera intelligente completa per nuove installazioni o ristrutturazioni. La scelta dipende dallo stato del vetro esistente e dal risultato estetico desiderato.',

    // --- Contatti (#11) ---
    'contact.eyebrow': 'PARLIAMO DEL TUO PROGETTO',
    'contact.title': 'Richiedi un preventivo su misura.',
    'contact.lead': 'Ogni intervento parte dal progetto: superfici, tecnologia, integrazione. Raccontaci cosa ti serve e ti rispondiamo con una proposta dedicata.',
    'contact.c1.title': 'Progetti e preventivi',
    'contact.c1.body': 'Per uffici, architettura, hospitality e residenziale di pregio. Scrivici o chiamaci, valutiamo insieme la soluzione.',
    'contact.c2.title': 'Partner e wholesale',
    'contact.c2.body': 'Sei un serramentista, un vetraio o un posatore? Forniamo pellicole e vetro switchable, con supporto tecnico per integrare le PDLC nel tuo catalogo.',
    'contact.c3.title': 'WhatsApp diretto',
    'contact.c3.body': 'Per un primo contatto rapido, scrivici su WhatsApp.',

    // --- Footer (#12) ---
    'footer.blurb': 'Vetri che pensano. Edifici che si adattano.',
    'footer.sub': 'Marchio di SAL-FER Srl',
    'footer.contactHeading': 'Contatti',
    'footer.areasHeading': 'Sede e aree',
    'footer.areas': 'Milano · Brescia · Bergamo e nord Italia. Progetti in tutta Italia, Svizzera ed Europa.',
    'footer.vatLabel': 'P.IVA',
    'footer.rights': 'Tutti i diritti riservati',

    // --- GlassDemo ---
    'glass.ariaLabel': 'Attiva/disattiva il vetro PDLC',
    'glass.transmittance': 'TRANSMITTANCE',
    'glass.hint': 'CLICCA SUL VETRO',

    // --- Language switcher ---
    'lang.switch': 'Cambia lingua',
  },
  en: {
    // --- Meta / SEO ---
    'meta.title': 'BrixiaTech — Glass that thinks. Buildings that adapt.',
    'meta.description':
      'Adaptive architecture: PDLC switchable glass, embedded hardware and a predictive cloud platform. One stack, from film to dashboard. Since 2019 — focused on Milan, Brescia, Bergamo.',
    'meta.ogLocale': 'en_US',

    // --- Nav ---
    'nav.tech': 'Technologies',
    'nav.work': 'Projects',
    'nav.insights': 'Insights',
    'nav.quote': 'Get a quote',

    // --- Hero ---
    'hero.eyebrow': 'ADAPTIVE ARCHITECTURE',
    'hero.headline1': 'Glass that thinks.',
    'hero.headline2': 'Buildings that adapt.',
    'hero.subtitle':
      "Building intelligence applied to the first layer of architecture — glass. PDLC switchable, embedded hardware, predictive cloud platform.",
    'hero.subtitleEmphasis': 'One stack, from film to dashboard.',
    'hero.ctaPrimary': 'Configure a project',
    'hero.ctaSecondary': 'Discover B-LOGIC',

    // --- Ticker ---
    'ticker.warranty': 'WARRANTY',
    'ticker.warrantyValue': 'UP TO 7 YEARS',
    'ticker.since': 'SINCE',
    'ticker.cities': 'MILAN · BRESCIA · BERGAMO',

    // --- Clients ---
    'clients.eyebrow': 'TRUSTED BY',

    // --- Problem ---
    'problem.eyebrow': 'THE PROBLEM',
    'problem.title': 'One glazing surface. Clear, private or tinted — on command.',
    'problem.lead':
      "A glass façade that offers no privacy. Solar gain that overheats a south-facing office for half the day. Blinds that age, gather dust and never quite work. Different problems, one root cause: the glass is fixed, the building isn't. Electrochromic and switchable glass — smart film included — turn a static pane into a surface you control electrically: by switch, remote, app or automatically.",
    'problem.privacy.title': 'Privacy on demand',
    'problem.privacy.body':
      "Open-plan floors, clinics, street-level homes — spaces that need to be open to view at times, screened at others. Glass that turns opaque in an instant covers both, without giving up daylight when privacy isn't needed.",
    'problem.solar.title': 'Solar and glare control',
    'problem.solar.body':
      'South-facing glazing, skylights, atriums where too much sun gets in — today the fix is blinds or fixed film that cut light all year round. Glass that tints only when the sun calls for it keeps the view and modulates glare and heat.',
    'problem.static.title': 'The alternative to blinds and frosted glass',
    'problem.static.body':
      "Blinds, permanent adhesive film, sandblasted glass — static answers to a need that isn't static. One switchable surface does both, clear or opaque, controlled electrically.",
    'problem.bridge': 'How the glass changes state, and which technology fits which project, is just below.',

    // --- How ---
    'how.eyebrow': 'HOW IT WORKS',
    'how.title': 'Liquid crystals and an electric signal. No moving parts.',
    'how.lead':
      "Behind glass that turns opaque on command there's no mechanism — just a material that responds to current, most commonly PDLC. Understanding it helps you judge where it fits and what to expect.",
    'how.mechanism.title': 'How does the glass switch from opaque to clear?',
    'how.mechanism.body':
      "Between two panes — or inside an adhesive film — sits a layer of liquid crystals. With no power the crystals are disordered and scatter light, so the glass looks opaque and milky. An electric signal aligns them and lets light through, turning the glass clear. It's a change of state in the material, not a mechanical blind — no curtains, slats or moving parts. The switch is instant.",
    'how.power.title': 'Does it need power to stay clear?',
    'how.power.body':
      'In the most common technology, yes: the glass stays clear while powered and returns to opaque when the current is off. That has a practical upside — privacy is the default resting state if power is lost. Reverse-logic technologies, clear when off, also exist; we compare them under products.',
    'how.control.title': 'How is it controlled?',
    'how.control.body':
      'By an electrical signal, with plenty of options: wall switch, remote, app, or automatically through sensors and building automation — driven by light, occupancy or schedules. This is where the glazing stops being a passive component and becomes something you govern.',
    'how.form.title': "Film or glass — what's the difference?",
    'how.form.body':
      "The same technology comes in two forms: an adhesive film applied to existing glass, and glass with the film laminated between the panes in production. Film retrofits what's already there; laminated glass is the route for new supply.",
    'how.bridge': 'Which technology suits a given project depends on performance, look and budget — we compare them just below.',

    // --- Tech ---
    'tech.eyebrow': 'TECHNOLOGIES',
    'tech.title': 'Six switchable technologies. The right one depends on the project.',
    'tech.lead':
      "There isn't one smart-glass technology but a family of solutions built on different principles. Some deliver privacy, others manage light and solar heat. We select — and supply — the right one for each project, from film to laminated glass.",
    'tech.family1.label': 'Privacy on demand',
    'tech.pdlc.title': 'PDLC',
    'tech.pdlc.body':
      'The most common switchable standard: opaque at rest, clear when powered. The go-to for instant privacy and partition walls, available as film or glass.',
    'tech.pnlc.title': 'PNLC (reverse)',
    'tech.pnlc.body':
      "PDLC's reverse logic: clear when off, opaque when powered. Built for surfaces that stay clear most of the time, and for fail-safe contexts where a power loss must leave the glass transparent — escape routes, vehicles.",
    'tech.family2.label': 'Light and heat control',
    'tech.spd.title': 'SPD',
    'tech.spd.body':
      'Variable, continuous dimming you adjust like a dial in seconds — from deep tint to clear. Excels at glare control while keeping the view outward.',
    'tech.ec.title': 'Electrochromic',
    'tech.ec.body':
      'Electrochromic glass shifts its tint through a low-voltage electrochemical reaction, then holds that state with virtually no power. The choice for passive solar and thermal control on façades, curtain walls and high-efficiency buildings.',
    'tech.dlc.title': 'DLC',
    'tech.dlc.body':
      'Dichroic liquid crystals that absorb light rather than scatter it: the glass tints to a smoked finish instead of turning milky. Cuts glare and solar heat, with finishes in several tones.',
    'tech.clc.title': 'CLC',
    'tech.clc.body':
      'Cholesteric liquid crystals with selective reflection, bistable: they hold their state without continuous power, drawing energy only when switching. A dynamic thermal shield that reflects solar energy rather than absorbing it.',
    'tech.channel':
      "All of these are also available as film for lamination, supplied to glaziers and window fabricators who build them into their own units.",

    // --- Apps ---
    'apps.eyebrow': 'APPLICATIONS',
    'apps.title':
      'Glass that switches on command. Clear, opaque or tinted — exactly when you need it.',
    'apps.intro':
      "Smart glass, switchable film, PDLC and electrochromic glazing: different technologies, one outcome — glazed surfaces you control electrically, from instant privacy to solar shading. Here's where they earn their place.",
    'apps.office.title': 'Offices & workspaces',
    'apps.office.body':
      "Partition walls and meeting rooms that turn opaque at the touch of a switch: confidentiality when it matters, daylight and openness when it doesn't. No blinds, no curtains, no line of sight from outside.",
    'apps.architecture.title': 'Architecture & large glazing',
    'apps.architecture.body':
      'Curtain walls, atriums and full-height glazing that modulate daylight and solar heat without mechanical shading. Glass shifts from clear to tinted, cutting glare and thermal load while keeping the view.',
    'apps.institutional.title': 'Sensitive & institutional spaces',
    'apps.institutional.body':
      'Hospital wards, museums, transport hubs, public buildings — where privacy, light control and hygiene are a function, not a finish. Surfaces that clean like glass and switch like a building system.',
    'apps.hospitality.title': 'Hospitality & high-end residences',
    'apps.hospitality.body':
      "Hotel suites, villas and penthouses where glass that dims on command — or automatically, tied into the building's automation — becomes part of the experience. From a bedroom that veils for the night to a glazed wall that screens the view over the pool.",

    // --- B-LOGIC ---
    'blogic.eyebrow': 'B-LOGIC',
    'blogic.title': 'The glass changes state. B-LOGIC decides when.',
    'blogic.lead': 'B-LOGIC is the platform that turns switchable glazing from surfaces you operate into surfaces that regulate themselves and talk to the building.',
    'blogic.i1.title': 'It regulates itself',
    'blogic.i1.body': 'Opacity follows daylight and sun through the day, with no switch to touch. When someone overrides it by hand, B-LOGIC takes that choice into account.',
    'blogic.i2.title': 'It talks to the building',
    'blogic.i2.body': 'It integrates with building management systems (BMS) and coordinates entire façades as a single surface, not as isolated panes.',
    'blogic.i3.title': 'Efficiency you can measure',
    'blogic.i3.body': 'Every node records how the glass performs over time. The saving stays verifiable rather than promised — useful for energy certifications and ESG reporting.',
    'blogic.i4.title': 'Built to scale',
    'blogic.i4.body': 'A single control layer governs many panes, across multiple buildings, with updates pushed remotely. An Italian platform, developed in-house.',
    'blogic.bridge': 'It is the layer that brings switchable glazing into the logic of the building. To see it running, let’s talk.',

    // --- Trust (#9) ---
    'trust.eyebrow': 'WHY BRIXIATECH',
    'trust.title': 'Designing, supplying and installing smart glass since 2019.',
    'trust.lead': 'We don’t just resell switchable film: we select the materials, supply the trade, and install. One supply chain, from glass to site, across northern Italy — with projects open to Switzerland and Europe.',
    'trust.bridge': 'The questions we hear most — cost, timing, warranty — are answered just below.',
    'trust.i1.title': 'End-to-end supply chain',
    'trust.i1.body': 'Supply, installation and a wholesale channel for switchable film, smart glass and electrochromic glazing. One partner, from material to fitting.',
    'trust.i2.title': 'Certified materials',
    'trust.i2.body': 'We install optical-grade film and glass, with up to 99% UV blocking and international certifications on the materials we use.',
    'trust.i3.title': 'Warranty and support',
    'trust.i3.body': 'Up to 7 years’ warranty and direct after-sales support. A stable reference over time, not a one-off supplier.',
    'trust.i4.title': 'Where we work',
    'trust.i4.body': 'Working mainly across northern Italy — Milan, Brescia, Bergamo — with projects elsewhere in Italy, Switzerland and Europe, depending on scope.',

    // --- FAQ (#10) ---
    'faq.eyebrow': 'FAQ',
    'faq.title': 'What to know before requesting a quote.',
    'faq.lead': 'Switchable glass and film: cost, control, lifespan and installation, explained briefly.',
    'faq.q1': 'How much does switchable glass or film cost?',
    'faq.a1': "We don't work from a price list: every supply is its own project. Cost depends on the technology, the size and geometry of the surfaces, the accessories and any automation. That's why we prefer to study the actual case — send us an email or a message with a few details and we'll prepare a tailored quote.",
    'faq.q2': 'Which areas do you cover?',
    'faq.a2': 'We operate across northern Italy, based near Brescia, and follow cross-border projects in reachable European markets. Any location outside our core area is assessed individually at the survey stage.',
    'faq.q3': 'How long does it last, and what warranty do you offer?',
    'faq.a3': "We offer a warranty of up to 7 years on switchable products. We've been installing smart glass and film since 2019 and select materials built to last in professional settings. Actual lifespan depends on exposure, use and technology.",
    'faq.q4': 'Can it be controlled by remote, app or building automation?',
    'faq.a4': 'Yes. Surfaces can be operated by switch, remote, app and building-automation integration through our B-LOGIC platform. You can control a single pane or coordinate entire glazed areas and scenes across multiple rooms.',
    'faq.q5': 'Does the glass stay clear if the power fails?',
    'faq.a5': 'It depends on the technology. In the most common version (standard PDLC) the glass turns opaque without power; in the “reverse” version it stays clear instead. The latter is chosen where transparency is required for safety, such as escape routes and spaces that must stay legible during a blackout.',
    'faq.q6': 'Are smart glass, smart film, switchable and electrochromic the same thing?',
    'faq.a6': 'They orbit the same idea: a surface that switches between clear and opaque — or light and dark — on electrical command. “Smart glass” is the finished intelligent pane; “smart film” is the layer applied to existing glass; “switchable”, “PDLC” and “electrochromic” name the technologies that make it possible, each suited to different needs.',
    'faq.q7': 'Can it be applied to existing glass, or do I need to replace the window?',
    'faq.a7': 'Both routes are possible. Switchable film is applied to the existing glass without replacing the frame; alternatively we supply complete smart insulated glazing for new installations or renovations. The choice depends on the condition of the existing glass and the desired aesthetic result.',

    // --- Contact (#11) ---
    'contact.eyebrow': "LET'S TALK ABOUT YOUR PROJECT",
    'contact.title': 'Request a tailored quote.',
    'contact.lead': "Every project starts from the brief: surfaces, technology, integration. Tell us what you need and we'll come back with a dedicated proposal.",
    'contact.c1.title': 'Projects and quotes',
    'contact.c1.body': 'For offices, architecture, hospitality and high-end residential. Write or call us to assess the right solution.',
    'contact.c2.title': 'Partners and wholesale',
    'contact.c2.body': 'Glazier, window specialist or installer? We supply switchable film and glass, with technical support to add PDLC to your catalogue.',
    'contact.c3.title': 'Direct WhatsApp',
    'contact.c3.body': 'For a quick first contact, message us on WhatsApp.',

    // --- Footer (#12) ---
    'footer.blurb': 'Glass that thinks. Buildings that adapt.',
    'footer.sub': 'A brand of SAL-FER Srl',
    'footer.contactHeading': 'Contact',
    'footer.areasHeading': 'Office & areas',
    'footer.areas': 'Milan · Brescia · Bergamo and northern Italy. Projects across Italy, Switzerland and Europe.',
    'footer.vatLabel': 'VAT',
    'footer.rights': 'All rights reserved',

    // --- GlassDemo ---
    'glass.ariaLabel': 'Toggle PDLC glass',
    'glass.transmittance': 'TRANSMITTANCE',
    'glass.hint': 'CLICK GLASS TO ACTIVATE',

    // --- Language switcher ---
    'lang.switch': 'Switch language',
  },
} as const;
