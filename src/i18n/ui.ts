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
      'Adaptive architecture: vetri PDLC switchable, hardware embedded e piattaforma cloud predittiva. Un solo stack, dalla pellicola al dashboard. Dal 2017 — focus Milano, Brescia, Bergamo.',
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
      'Adaptive architecture: PDLC switchable glass, embedded hardware and a predictive cloud platform. One stack, from film to dashboard. Since 2017 — focused on Milan, Brescia, Bergamo.',
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

    // --- GlassDemo ---
    'glass.ariaLabel': 'Toggle PDLC glass',
    'glass.transmittance': 'TRANSMITTANCE',
    'glass.hint': 'CLICK GLASS TO ACTIVATE',

    // --- Language switcher ---
    'lang.switch': 'Switch language',
  },
} as const;
