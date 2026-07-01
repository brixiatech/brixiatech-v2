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
    'nav.home': 'BrixiaTech, torna alla home',

    // --- Hero ---
    'hero.eyebrow': 'VETRO INTELLIGENTE A CONTROLLO ELETTRICO',
    'hero.headline1': 'Vetri che pensano.',
    'hero.headline2': 'Edifici che si adattano.',
    'hero.subtitle':
      "Building intelligence applicata al primo strato dell'architettura — il vetro. PDLC switchable, hardware embedded, piattaforma cloud predittiva.",
    'hero.subtitleEmphasis': 'Un solo stack, dalla pellicola al dashboard.',
    'hero.ctaPrimary': 'Configura un progetto',
    'hero.ctaSecondary': 'Scopri B-LOGIC',
    'hero.hudLabel': 'MODALITÀ',
    'hero.hudState0': 'TRASPARENZA',
    'hero.hudState1': 'OFFUSCAMENTO',
    'hero.hudState2': 'SEMI-OPACITÀ',
    'hero.hudState3': 'OPACITÀ',
    'hero.hudTickStart': 'VISTA',
    'hero.hudTickEnd': 'PRIVACY',
    'hero.imgAltTransparent': 'Lounge con parete vetrata trasparente, skyline visibile',
    'hero.imgAltOpaque': 'Stessa parete vetrata commutata in vetro opaco, privacy totale',

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
      "Una parete vetrata che non protegge dagli sguardi. Il sole che acceca e surriscalda un ufficio per mezza giornata. Tende che ingialliscono, raccolgono polvere e non bastano mai. Problemi diversi, una radice comune: il vetro è fisso, l'ambiente cambia. La risposta non è coprire il vetro, è renderlo regolabile. Esistono superfici vetrate che passano da trasparenti a opache, o si oscurano per schermare luce e calore, con un comando elettrico — da interruttore, telecomando, app o in automatico.",
    'problem.privacy.title': 'Privacy a comando',
    'problem.privacy.body':
      "Un open space senza separazioni, un ambulatorio, un'abitazione a piano strada: spazi che a volte servono aperti alla vista, a volte protetti. Un vetro che diventa opaco in un istante copre entrambi i momenti, senza rinunciare alla luce naturale quando non serve schermarsi.",
    'problem.solar.title': 'Sole, luce e calore',
    'problem.solar.body':
      "Vetrate esposte a sud, lucernari, verande: dove il sole entra troppo, oggi si rimedia con tende o pellicole fisse che tolgono luce tutto l'anno. Un vetro che si scherma solo quando il sole lo richiede mantiene la vista e modula abbagliamento e calore.",
    'problem.static.title': "L'alternativa a tende e vetri smerigliati",
    'problem.static.body':
      "Tende, veneziane, pellicole adesive permanenti, vetri sabbiati: soluzioni statiche per qualcosa che statico non è. Una superficie vetrata switchable fa entrambe le cose — trasparente o opaca — e si comanda elettricamente.",
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
    'tech.title': 'Cinque tecnologie switchable. Quella giusta dipende dal progetto.',
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
      "Oscuramento variabile e continuo, regolabile come un dimmer in pochi secondi, da una tinta scura profonda alla trasparenza. Eccelle nel controllo dell'abbagliamento mantenendo la vista verso l'esterno.",
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
    // --- Tecnologie (pagina indice) ---
    'techindex.eyebrow': 'TECNOLOGIE',
    'techindex.title': 'Cinque tecnologie. Ognuna risolve un problema diverso.',
    'techindex.lead':
      "Vetro intelligente non è una sola cosa. Privacy a comando, controllo dell’abbagliamento, schermatura solare passiva: esigenze diverse, principi fisici diversi. Questa pagina mette in fila le cinque tecnologie che forniamo e a cosa serve ciascuna — per arrivare alla scelta giusta, non alla più pubblicizzata.",
    'techindex.family1.label': 'Privacy a comando',
    'techindex.pdlc.body':
      'Privacy istantanea, acceso/spento. Opaco quando non alimentato, trasparente quando lo è. Lo standard più maturo: la scelta quando serve nascondere o rivelare uno spazio in un istante.',
    'techindex.pdlc.cta': 'Scopri Smart Film PDLC',
    'techindex.pnlc.body':
      "La logica inversa. Trasparente di default, opaco solo quando serve. Per chi resta trasparente la maggior parte del tempo e per i contesti dove, mancando corrente, il vetro deve restare visibile.",
    'techindex.pnlc.cta': 'Scopri Smart Film PNLC',
    'techindex.family2.label': 'Controllo di luce e calore',
    'techindex.spd.body':
      "Oscuramento regolabile in continuo, come un dimmer. Dalla tinta profonda alla trasparenza in pochi secondi, mantenendo la vista. Per governare l’abbagliamento senza chiudere la visuale.",
    'techindex.spd.cta': 'Scopri Smart Glass SPD',
    'techindex.ec.cta': 'Scopri Smart Glass EC',
    'techindex.ec.body':
      'Viraggio graduale a bassissimo consumo: il vetro si colora, si schiarisce e mantiene lo stato senza energia. Per il controllo solare e termico passivo di facciate ed edifici ad alta efficienza.',
    'techindex.dlc.body':
      'Assorbe la luce invece di diffonderla: vira a una tinta fumé anziché farsi lattiginoso. Controllo solare ad alte prestazioni, con rese estetiche in più colorazioni. È la tecnologia di Blackout Hyper Glass.',
    'techindex.dlc.cta': 'Scopri Blackout Hyper Glass',
    'techindex.clc.body':
      "Riflette l’energia solare invece di assorbirla. Bistabile: mantiene lo stato senza alimentazione continua, consuma solo allo switch. Uno scudo termico dinamico per il contenimento del calore.",
    'techindex.channel':
      'Ogni tecnologia è disponibile come vetro finito o come sola pellicola da stratificare, fornita a vetrai e serramentisti. La scelta tra le sei dipende dal progetto: ne parliamo prima di proporre una soluzione.',
    'techindex.cta': 'Parliamo del tuo progetto',

    // --- Insights ---
    'insights.eyebrow': 'INSIGHTS',
    'insights.title': 'Come scegliere e usare il vetro switchable',
    'insights.lead':
      'Guide pratiche, caso per caso: coprire una teca, oscurare una vetrina, rendere privato un ambiente. Ogni approfondimento parte dalla situazione concreta e arriva alla tecnologia giusta.',
    'insights.cta': 'Parliamo del tuo progetto',

    'insights.teche.card.title': 'Teche, espositori e vetrine espositive',
    'insights.teche.card.summary':
      'Il vetro che mostra il pezzo nella luce migliore e lo protegge — o lo sottrae allo sguardo — a comando. Per musei, gioiellerie e retail premium, senza tende né pannelli a rovinare l’allestimento.',
    'insights.teche.card.cta': 'Leggi l’articolo',

    'insights.teche.meta.title': 'Coprire teche, espositori e vetrine espositive — vetro switchable | BrixiaTech',
    'insights.teche.meta.description': 'Il vetro switchable che copre e protegge teche, espositori e vetrine: trasparente quando il pezzo va visto, opaco a comando, con blocco UV contro lo scolorimento. Per musei, gioiellerie e retail premium.',

    'insights.teche.eyebrow': 'INSIGHTS · TECHE ED ESPOSITORI',
    'insights.teche.h1': 'Coprire e proteggere teche, espositori e vetrine espositive',
    'insights.teche.lead':
      'Esporre dietro vetro significa gestire due esigenze opposte: mostrare il pezzo nella luce migliore e, quando serve, sottrarlo allo sguardo. Una teca da museo tra due allestimenti, un espositore di gioielleria a negozio chiuso, una vetrina interna prima di un lancio: in tutti questi casi il vetro fisso non basta, e tende o pannelli rovinano la linea dell’allestimento.',

    'insights.teche.show.title': 'Il vetro che mostra o nasconde a comando',
    'insights.teche.show.body':
      'Il vetro switchable passa da trasparente a opaco con un comando. La teca resta limpida quando il pezzo va visto, diventa una superficie satinata quando va protetto o riservato — senza meccanismi a vista, senza nulla da montare e smontare. È la stessa superficie che cambia funzione su decisione, non un accessorio aggiunto sopra il vetro.',

    'insights.teche.where.title': 'Dove ha senso',
    'insights.teche.where.body':
      'Nel museo, su teche e vetrine espositive: si controlla l’esposizione di un pezzo allestimento per allestimento. Nel retail premium e nella gioielleria, su espositori e vetrine interne: si svela un prodotto al momento giusto e lo si cela fuori orario. In entrambi i contesti il vetro lavora come parte dell’allestimento, non contro di esso.',

    'insights.teche.protect.title': 'Proteggere ciò che si espone',
    'insights.teche.protect.body':
      'La luce che valorizza un pezzo è anche la luce che lo fa sbiadire nel tempo. I film switchable di BrixiaTech bloccano i raggi ultravioletti, la componente che scolorisce tessuti, stampe, pigmenti e materiali sensibili. Per teche museali e merce esposta è una protezione che agisce in continuo, indipendente dallo stato — trasparente o opaco che sia il vetro.',

    'insights.teche.dark.title': 'Quando serve il buio, non la privacy',
    'insights.teche.dark.body':
      'In stato opaco PDLC e PNLC restituiscono un vetro smerigliato e luminoso: nascondono lo sguardo, non spengono la teca. Se l’esigenza è l’oscuramento reale — la vetrina che diventa scura, il pezzo nel buio completo — la tecnologia è il DLC, ossia Blackout Hyper Glass. Scegliere bene dipende da cosa deve fare la teca, non da quale prodotto è “il migliore”.',
    'insights.teche.dark.pdlc': 'Scopri Smart Film PDLC',
    'insights.teche.dark.pnlc': 'Scopri Smart Film PNLC',
    'insights.teche.dark.blackout': 'Scopri Blackout Hyper Glass',

    'insights.teche.orchestrate.title': 'Orchestrare più vetri',
    'insights.teche.orchestrate.body':
      'Quando le teche sono molte, il controllo può essere gestito in modalità manuale, oppure centralizzato con il nostro sistema B-LOGIC: in ambito espositivo diventa uno strumento di facility management, che programma accensione e spegnimento per orari di apertura e allestimenti e coordina più teche insieme.',
    'insights.teche.orchestrate.blogic': 'Scopri B-LOGIC',

    'insights.teche.cta.title': 'Parliamo del tuo progetto.',
    'insights.teche.cta.body':
      'Ogni allestimento ha vincoli propri: dimensioni delle teche, esposizione, esigenze di conservazione. Raccontaci il progetto e definiamo insieme la soluzione di vetro switchable adatta.',
    'insights.teche.cta.button': 'Richiedi un preventivo',
    'insights.teche.cta.explore': 'Esplora le tecnologie',

    // Insights · articolo telecomando
    'insights.telecomando.card.title': 'Oscurare i vetri con il telecomando',
    'insights.telecomando.card.summary':
      'Il telecomando è uno dei modi per comandare un vetro switchable. Quale tecnologia si oscura a comando, e come scalare dal telecomando al controllo centralizzato.',
    'insights.telecomando.card.cta': 'Leggi l’articolo',

    'insights.telecomando.meta.title': 'Vetri che si oscurano con telecomando — come funziona il comando | BrixiaTech',
    'insights.telecomando.meta.description':
      'Come si comanda un vetro switchable: dal telecomando all’interruttore, dall’app al controllo centralizzato. Quale tecnologia si oscura a comando, e come gestirla.',

    'insights.telecomando.eyebrow': 'INSIGHTS · TELECOMANDO E CONTROLLO',
    'insights.telecomando.h1': 'Vetri che si oscurano con un comando: dal telecomando al controllo centralizzato',
    'insights.telecomando.lead':
      'Oscurare un vetro con il telecomando è una delle domande più frequenti su questa tecnologia. Il telecomando è uno dei modi per inviare il comando di opacizzazione: qui vediamo come funziona il controllo del vetro switchable e quale tecnologia si comanda così.',

    'insights.telecomando.comando.title': 'Il telecomando è solo uno dei modi',
    'insights.telecomando.comando.body':
      'Un vetro switchable cambia stato — da trasparente a opaco — quando riceve un input elettrico. Il telecomando è solo uno dei modi per inviare quell’input: si preme un pulsante e il vetro risponde. Detto così, la domanda giusta non è «c’è il telecomando?», ma «come voglio comandare il vetro?» — ed è lì che si decide davvero.',

    'insights.telecomando.modi.title': 'Dal pulsante a parete all’automazione',
    'insights.telecomando.modi.body':
      'L’input può partire da un interruttore a parete, da un telecomando senza fili, da un’app sullo smartphone o da un sensore che reagisce alla luce o alla presenza. Sono tutte strade verso lo stesso vetro: si scelgono in base a chi usa la superficie e a quante superfici ci sono da gestire. Un telecomando basta per una stanza; più ambienti chiedono un comando più strutturato.',

    'insights.telecomando.quale.title': 'Quale tecnologia si oscura a comando',
    'insights.telecomando.quale.body':
      'Per rendere privata una superficie a comando — trasparente quando serve, opaca quando si preme — la pellicola PDLC è la scelta naturale. Dove invece il vetro deve restare trasparente senza alimentazione e diventare opaco solo quando comandato, la logica inversa della PNLC è più adatta. Se l’obiettivo non è la privacy ma schermare il sole e l’abbagliamento, il Blackout Hyper Glass oscura a comando la radiazione solare. Sono tecnologie diverse: la scelta parte dall’obiettivo.',
    'insights.telecomando.quale.pdlc': 'Smart Film PDLC',
    'insights.telecomando.quale.pnlc': 'Smart Film PNLC',
    'insights.telecomando.quale.blackout': 'Blackout Hyper Glass',

    'insights.telecomando.centralizza.title': 'Quando il telecomando non basta più',
    'insights.telecomando.centralizza.body':
      'Su una singola superficie il controllo può essere gestito in modalità manuale — interruttore o telecomando. Quando le superfici si moltiplicano, o si vogliono programmare gli stati per fascia oraria, lo stesso controllo può essere centralizzato con il nostro sistema B-LOGIC: scenari, comando coordinato o gestione da un unico punto.',
    'insights.telecomando.centralizza.blogic': 'Scopri B-LOGIC',

    'insights.telecomando.cta.title': 'Parliamo del tuo progetto',
    'insights.telecomando.cta.body':
      'Ogni superficie è un caso a sé: il modo di comando giusto dipende da ambiente, uso e numero di vetri. Raccontaci cosa vuoi comandare e troviamo la configurazione adatta.',
    'insights.telecomando.cta.button': 'Richiedi un preventivo',
    'insights.telecomando.cta.explore': 'Esplora le tecnologie',
    // --- Insights: privacy su comando (articolo #3) ---
    'insights.privacy.card.title': 'Vetri privacy su comando',
    'insights.privacy.card.summary': 'Superfici che passano da trasparenti a opache quando serve: come scegliere tra PDLC e PNLC quando l’obiettivo è non far vedere dentro.',
    'insights.privacy.card.cta': 'Leggi l’articolo',
    'insights.privacy.meta.title': 'Vetri privacy su comando | BrixiaTech',
    'insights.privacy.meta.description': 'Vetri e pellicole che passano da trasparenti a opachi a comando: privacy quando serve, trasparenza quando vuoi. Come scegliere tra PDLC e PNLC.',
    'insights.privacy.eyebrow': 'INSIGHTS · PRIVACY SU COMANDO',
    'insights.privacy.h1': 'Vetri privacy su comando: quando non vuoi che si veda dentro',
    'insights.privacy.lead': 'Stai cercando una superficie in cui, da fuori, non si vede dentro. La via più flessibile non è un trattamento fisso applicato una volta per tutte, ma un vetro — o una pellicola sul vetro esistente — che porti da trasparente a opaco quando vuoi tu. La privacy diventa uno stato che accendi e spegni, non una condizione permanente.',
    'insights.privacy.privacy.title': 'La privacy come stato, non come trattamento fisso',
    'insights.privacy.privacy.body': 'La superficie cambia: da trasparente diventa opaca, e torna trasparente quando serve. Allo stato opaco non è una velatura leggera — diffonde la luce, così passa la luminosità ma non l’immagine nitida di ciò che sta dietro. Vale in entrambe le direzioni: quando è attiva, non si distingue dentro né fuori. È privacy che decidi momento per momento, non un vetro smerigliato che resta uguale per sempre.',
    'insights.privacy.stato.title': 'Il punto che decide tutto: quale stato è quello a riposo',
    'insights.privacy.stato.body': 'Due tecnologie risolvono la stessa cosa partendo da estremi opposti. La PDLC è opaca a riposo: senza alimentazione resta privata, e si schiarisce solo quando arriva l’input elettrico — la privacy è la condizione predefinita e tiene anche a corrente staccata. La PNLC fa l’inverso: trasparente a riposo, diventa opaca quando dai l’input. La domanda giusta non è "quale è meglio", ma "cosa voglio quando il sistema è spento".',
    'insights.privacy.quale.title': 'Quale tecnologia per la privacy',
    'insights.privacy.quale.body': 'Se vuoi che lo stato di riposo sia già privato — una sala riunioni, un ambulatorio, un bagno con vetrata — la PDLC è la scelta naturale: parte opaca e la apri solo quando serve. Se invece l’ambiente deve restare trasparente per la maggior parte del tempo e diventare privato solo in momenti scelti, la logica inversa della PNLC è più adatta. Una precisazione che evita un equivoco comune: nessuna delle due è il vetro "unidirezionale" da cui vedi fuori senza farti vedere — quello è un’altra famiglia, la pellicola a specchio. Lo smart glass, da opaco, scherma lo sguardo da entrambi i lati; da trasparente, è vetro normale.',
    'insights.privacy.quale.pdlc': 'Smart Film PDLC',
    'insights.privacy.quale.pnlc': 'Smart Film PNLC',
    'insights.privacy.centralizza.title': 'Da una superficie a molte',
    'insights.privacy.centralizza.body': 'Finché la superficie è una, un interruttore basta. Quando diventano più d’una — più finestre, più stanze, una parete divisoria intera — il comando può restare manuale, oppure essere centralizzato con il nostro sistema B-LOGIC: scenari, comando coordinato, gestione da un unico punto.',
    'insights.privacy.centralizza.blogic': 'Scopri B-LOGIC',
    'insights.privacy.cta.title': 'Parliamo del tuo progetto',
    'insights.privacy.cta.body': 'Ogni ambiente ha la sua soluzione di privacy: descrivici lo spazio e ti indichiamo la tecnologia giusta, con un preventivo dedicato.',
    'insights.privacy.cta.button': 'Richiedi un preventivo',
    'insights.privacy.cta.explore': 'Esplora le tecnologie',

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
    'blogic.i4.title': 'Nato per scalare',
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
    'trust.i2.body': 'Installiamo film e vetri di grado ottico, con protezione dai raggi ultravioletti e certificazioni internazionali sui materiali impiegati.',
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

    // --- Prodotto: Blackout Hyper Glass ---
    'prod.bhg.meta.title': 'Blackout Hyper Glass — PDLC switchable per il controllo solare | BrixiaTech',
    'prod.bhg.meta.description': 'Blackout Hyper Glass: il vetro switchable più scuro della gamma BrixiaTech. Un PDLC a cristalli liquidi colorati che assorbe luce e calore — controllo solare dinamico, in pellicola adesiva o vetro laminato.',
    'prod.bhg.eyebrow': 'PDLC · CONTROLLO SOLARE AD ALTE PRESTAZIONI',
    'prod.bhg.name': 'Blackout Hyper Glass',
    'prod.bhg.tagline': 'Il vetro switchable più scuro della nostra gamma. Nato per schermare il sole, non solo per la privacy.',
    'prod.bhg.what.title': 'Un PDLC che si scurisce invece di farsi lattiginoso.',
    'prod.bhg.what.body': 'La maggior parte dei vetri switchable, da spenta, diventa bianco-opaca. Blackout Hyper Glass no: a riposo vira a una tinta scura e profonda che assorbe la luce invece di diffonderla. È un cristallo liquido colorato — la variante pensata per chi cerca schermatura solare, non solo riservatezza. Acceso torna trasparente come un normale PDLC; spento è la superficie più scura che forniamo.',
    'prod.bhg.edge.title': 'Assorbe luce e calore. È qui che fa la differenza.',
    'prod.bhg.edge.body': 'Un vetro che diffonde la luce taglia la vista ma lascia passare gran parte dell’energia. Uno che la assorbe lavora sul calore e sull’abbagliamento. Blackout Hyper Glass appartiene alla seconda famiglia: davanti a una vetrata esposta al sole riduce l’irraggiamento e il riverbero molto più di un PDLC tradizionale, mantenendo la possibilità di tornare trasparente a comando. Una nota onesta: con il sole pieno alle spalle la tinta non è nero assoluto — vira a un bruno intenso. Non è una schermatura meccanica da oscuramento totale, è un controllo solare dinamico, ed è in quello che eccelle.',
    'prod.bhg.how.title': 'Stessa logica del PDLC. Nessuna parte in movimento.',
    'prod.bhg.how.body': 'Sotto resta un vetro switchable: uno strato di cristalli liquidi che cambia stato con un impulso elettrico. Spento, i cristalli colorati assorbono la luce; acceso, si allineano e lasciano passare la vista. Si comanda da interruttore, telecomando, app o in automatico — come ogni nostra superficie switchable.',
    'prod.bhg.how.link': 'Come funziona lo switchable',
    'prod.bhg.scale.title': 'Indipendente per natura. Connesso quando serve.',
    'prod.bhg.scale.body': 'Comandare Blackout Hyper Glass richiede un solo gesto — un interruttore a parete, un telecomando, un’app — ed è disponibile in due forme: pellicola adesiva switchable, applicata in retrofit su un vetro esistente, oppure vetro laminato con il film già integrato tra le lastre per nuove forniture. Dove le superfici si moltiplicano, intere facciate o ambienti che devono seguire il sole senza un intervento manuale, si può integrare B-LOGIC, la piattaforma di controllo che abbiamo sviluppato. È il prodotto con cui mostriamo il controllo solare dinamico nella nostra simulazione. Un’estensione possibile, mai un prerequisito.',
    'prod.bhg.scale.link': 'Scopri B-LOGIC',
    'prod.bhg.cta.title': 'Valutiamo il tuo progetto.',
    'prod.bhg.cta.body': 'Esposizione, superfici, integrazione: ogni intervento è diverso. Raccontaci cosa ti serve e prepariamo una proposta dedicata.',
    'prod.bhg.cta.button': 'Richiedi un preventivo',

    // --- Prodotto: Smart Film PDLC ---
    'prod.pdlc.meta.title': 'Smart film PDLC: il vetro che si oscura a comando | BrixiaTech',
    'prod.pdlc.meta.description': 'Smart film PDLC, la tecnologia switchable più diffusa: il vetro passa da trasparente a opaco a comando. Privacy e controllo della luce, in pellicola adesiva o vetro laminato.',
    'prod.pdlc.eyebrow': 'SMART FILM PDLC · PRIVACY A COMANDO',
    'prod.pdlc.name': 'Smart film PDLC: trasparente o opaco, a comando',
    'prod.pdlc.tagline': 'La tecnologia switchable più diffusa. Un impulso elettrico e il vetro passa da limpido a privato — niente tende, nessuna parte in movimento.',
    'prod.pdlc.what.title': 'Privacy quando serve, luce sempre.',
    'prod.pdlc.what.body': 'Lo smart film PDLC è una pellicola a cristalli liquidi che si applica a un vetro esistente o si integra in un vetro laminato. Alimentato, il vetro è limpido e trasparente; a riposo diventa opaco e scherma la vista. È privacy a comando: una sola superficie fa il lavoro del vetro e della tenda, lascia entrare la luce e protegge la riservatezza. È la forma di vetro switchable che la maggior parte delle persone immagina quando pensa a un vetro che si oscura.',
    'prod.pdlc.what.link': 'Per schermare il sole e il calore esiste una variante scura della stessa famiglia: Blackout Hyper Glass',
    'prod.pdlc.how.title': 'Un impulso elettrico. Nessuna parte in movimento.',
    'prod.pdlc.how.body': 'Tra due strati conduttivi corre un sottile film di cristalli liquidi. Senza tensione i cristalli restano disordinati e diffondono la luce: il vetro appare opaco. Con la tensione si allineano e il vetro torna trasparente. Il passaggio è istantaneo e si comanda da interruttore, telecomando, app o in automatico — come ogni nostra superficie switchable.',
    'prod.pdlc.how.link': 'Come funziona lo switchable',
    'prod.pdlc.tiers.title': 'Due versioni, una sola tecnologia.',
    'prod.pdlc.premium.label': 'Premium',
    'prod.pdlc.premium.body': 'La nostra versione più raffinata. Punto di bianco più neutro per la resa più limpida e cristallina, materiali selezionati ai massimi livelli e rifinitura in Italia da laboratorio specializzato. Garanzia 7 anni.',
    'prod.pdlc.essential.label': 'Essential',
    'prod.pdlc.essential.body': 'La stessa tecnologia switchable, con materiali di qualità e una resa che non scende a compromessi. La scelta diretta per portare il PDLC nel progetto. Garanzia 2 anni, estendibile fino a 5.',
    'prod.pdlc.tiers.note': 'Entrambe disponibili come pellicola adesiva, applicata su un vetro esistente, o come vetro laminato per nuove forniture. Entrambe progettate per durare nel tempo.',
    'prod.pdlc.scale.title': 'Indipendente per natura. Connesso quando serve.',
    'prod.pdlc.scale.body': 'Una singola superficie si comanda con un gesto — interruttore, telecomando, app. Dove le superfici si moltiplicano, su interi ambienti o facciate che devono seguire la luce senza intervento manuale, si può integrare B-LOGIC, la piattaforma di controllo che coordina più superfici attraverso una logica unificata.',
    'prod.pdlc.scale.link': 'Scopri B-LOGIC',
    'prod.pdlc.cta.title': 'Parliamo del tuo progetto.',
    'prod.pdlc.cta.body': 'Privacy, luce, superfici, integrazione: ogni intervento ha le sue variabili. Raccontaci cosa ti serve e prepariamo una proposta su misura.',
    'prod.pdlc.cta.button': 'Richiedi un preventivo',

    // --- Prodotto: Smart Film PNLC ---
    'prod.pnlc.meta.title': 'Smart Film PNLC — vetro switchable reverse, trasparente da spento | BrixiaTech',
    'prod.pnlc.meta.description': 'Smart Film PNLC: il vetro switchable a logica inversa. Trasparente senza alimentazione, opaco a comando — ideale dove la trasparenza è lo stato abituale e nei contesti fail-safe. In pellicola adesiva o vetro laminato.',
    'prod.pnlc.eyebrow': 'SMART FILM PNLC · LOGICA INVERSA',
    'prod.pnlc.name': 'Smart Film PNLC: trasparente da spento, opaco a comando',
    'prod.pnlc.tagline': 'La logica inversa del vetro switchable. Senza alimentazione resta limpido; un impulso elettrico e diventa opaco — il contrario del PDLC tradizionale.',
    'prod.pnlc.what.title': 'Trasparente quando è spento. Opaco solo quando lo accendi.',
    'prod.pnlc.what.body': 'Lo Smart Film PNLC è una pellicola a cristalli liquidi con la logica ribaltata rispetto al PDLC comune. A riposo, senza alimentazione, il vetro è limpido e trasparente; sotto tensione diventa opaco e scherma la vista. È pensato per le superfici che restano trasparenti la maggior parte del tempo e si oscurano solo quando serve: alimenti il vetro per la privacy, non per la trasparenza.',
    'prod.pnlc.what.link': 'Se invece la privacy è lo stato che ti serve più spesso, esiste la logica diretta: Smart Film PDLC',
    'prod.pnlc.edge.title': 'Manca l’alimentazione, il vetro resta trasparente. È qui che conta.',
    'prod.pnlc.edge.body': 'C’è un contesto in cui la logica inversa non è una preferenza ma un requisito: la sicurezza. Un vetro che senza tensione resta trasparente non blocca mai una via di fuga, non oscura un ambiente durante un blackout, non isola chi sta dentro un mezzo di soccorso. Dove un’interruzione di alimentazione deve lasciare la superficie visibile — uscite di emergenza, veicoli, ambienti normati — la PNLC è la scelta naturale, perché il suo stato di riposo coincide con lo stato sicuro. Una nota onesta: l’altra faccia di questa logica è che l’oscuramento richiede alimentazione costante. Per superfici che devono restare opache a lungo è meno efficiente di un PDLC tradizionale; la PNLC dà il meglio dove la trasparenza è lo stato abituale e l’oscuramento è occasionale.',
    'prod.pnlc.how.title': 'Stessa logica switchable. Nessuna parte in movimento.',
    'prod.pnlc.how.body': 'Sotto resta un vetro switchable: un sottile film di cristalli liquidi tra due strati conduttivi. La differenza è nella formulazione, che inverte la risposta alla tensione — senza alimentazione i cristalli lasciano passare la vista, sotto tensione diffondono la luce e il vetro si fa opaco. Si comanda da interruttore, telecomando, app o in automatico — come ogni nostra superficie switchable.',
    'prod.pnlc.how.link': 'Come funziona lo switchable',
    'prod.pnlc.scale.title': 'Indipendente per natura. Connesso quando serve.',
    'prod.pnlc.scale.body': 'Una singola superficie si comanda con un gesto — interruttore, telecomando, app — ed è disponibile in due forme: pellicola adesiva switchable, applicata in retrofit su un vetro esistente, oppure vetro laminato con il film già integrato per nuove forniture, entrambe coperte da garanzia di 2 anni. Dove le superfici si moltiplicano, su interi ambienti o facciate che devono rispondere insieme senza intervento manuale, si può integrare B-LOGIC, la piattaforma di controllo che coordina più superfici attraverso una logica unificata.',
    'prod.pnlc.scale.link': 'Scopri B-LOGIC',
    'prod.pnlc.cta.title': 'Parliamo del tuo progetto.',
    'prod.pnlc.cta.body': 'Destinazione d’uso, requisiti di sicurezza, superfici, integrazione: ogni intervento è diverso. Raccontaci cosa ti serve e prepariamo una proposta dedicata.',
    'prod.pnlc.cta.button': 'Richiedi un preventivo',

    // --- Prodotto: Smart Glass SPD ---
    'prod.spd.meta.title': 'Smart Glass SPD — vetro a oscuramento variabile e continuo | BrixiaTech',
    'prod.spd.meta.description': 'Smart Glass SPD: il vetro a oscuramento variabile e continuo, regolabile come un dimmer dalla tinta scura alla trasparenza in pochi secondi. Controlla l’abbagliamento mantenendo la vista verso l’esterno.',
    'prod.spd.eyebrow': 'SMART GLASS SPD · DIMMING CONTINUO',
    'prod.spd.name': 'Smart Glass SPD: oscuramento variabile, dalla tinta scura alla trasparenza',
    'prod.spd.tagline': 'Il vetro che si regola in continuo, come un dimmer: sposti la tinta dal chiaro allo scuro in pochi secondi e scegli qualsiasi gradazione intermedia — senza mai chiudere la vista verso l’esterno.',
    'prod.spd.what.title': 'Non acceso o spento. Qualsiasi gradazione, a piacere.',
    'prod.spd.what.body': 'Lo Smart Glass SPD non commuta tra due stati: modula. La sua tinta scorre in continuo dal trasparente allo scuro profondo, e si ferma dove vuoi — un velo leggero contro il sole di mezzogiorno, una schermatura intensa nelle ore di abbagliamento, la piena trasparenza quando la luce cala. Il controllo è immediato, in pochi secondi, e a ogni gradazione si continua a vedere attraverso il vetro: regoli la luce e il calore senza mai rinunciare alla vista verso l’esterno.',
    'prod.spd.what.link': 'Se invece ti serve oscurare del tutto la vista, per la privacy, esiste la logica a stati: Smart Film PDLC',
    'prod.spd.edge.title': 'Un dimmer per la luce naturale. Nessun altro vetro lo fa.',
    'prod.spd.edge.body': 'Tutte le altre tecnologie della nostra gamma commutano tra stati definiti: trasparente o opaco, chiaro o schermato. Lo Smart Glass SPD è l’unico che si comporta come un dimmer — la gradazione è continua, e la imposti al valore esatto che serve in quel momento. È ciò che lo rende la scelta naturale dove la luce va governata con precisione e in tempo reale: vetrate esposte che cambiano abbagliamento nell’arco della giornata, lucernari, facciate e ambienti dove il comfort visivo conta quanto la vista. Una nota onesta: anche al massimo dell’oscuramento lo Smart Glass SPD resta una tinta scura attraverso cui si vede — è progettato per gestire luce e calore, non per la privacy. Dove serve chiudere completamente la visuale, la scelta giusta è un’altra tecnologia.',
    'prod.spd.how.title': 'Microparticelle che si orientano. Luce che passa, a comando.',
    'prod.spd.how.body': 'Dentro il vetro, un sottile film racchiude microscopiche particelle sospese tra due strati conduttivi. Senza alimentazione le particelle sono disposte in modo casuale e bloccano gran parte della luce: il vetro appare scuro. Quando riceve tensione, le particelle si allineano e lasciano passare la luce; e poiché il loro orientamento segue l’intensità dell’alimentazione, regolando la tensione si ottiene qualsiasi tinta intermedia, in continuo. Si comanda da interruttore, telecomando, app o in automatico — come ogni nostra superficie a controllo elettrico.',
    'prod.spd.scale.title': 'Una superficie, o un intero edificio.',
    'prod.spd.scale.body': 'Una singola vetrata si comanda con un gesto — interruttore, telecomando, app — ed è disponibile in due forme: pellicola adesiva, applicata in retrofit su un vetro esistente, oppure vetro laminato di sicurezza con il film SPD già integrato tra le lastre per nuove forniture, entrambe coperte da garanzia di 2 anni. Dove le superfici si moltiplicano, su intere facciate o ambienti che devono rispondere insieme all’andamento della luce senza intervento manuale, si può integrare B-LOGIC, la piattaforma di controllo che coordina più superfici attraverso una logica unificata.',
    'prod.spd.scale.link': 'Scopri B-LOGIC',
    'prod.spd.cta.title': 'Parliamo del tuo progetto.',
    'prod.spd.cta.body': 'Esposizione, superfici, livello di controllo della luce, integrazione: ogni intervento è diverso. Raccontaci cosa ti serve e prepariamo una proposta dedicata.',
    'prod.spd.cta.button': 'Richiedi un preventivo',
    // --- Prodotto: Smart Glass EC ---
    'prod.ec.meta.title': 'Smart Glass EC — vetro elettrocromico a controllo solare passivo | BrixiaTech',
    'prod.ec.meta.description': 'Smart Glass EC: il vetro elettrocromico che vira la tinta a comando e mantiene lo stato senza consumare energia. Controllo solare e termico passivo per facciate ed edifici ad alta efficienza.',
    'prod.ec.eyebrow': 'SMART GLASS EC · CONTROLLO SOLARE PASSIVO',
    'prod.ec.name': 'Smart Glass EC: vira a comando e mantiene lo stato senza energia',
    'prod.ec.tagline': 'Vira la propria tinta a comando, dal chiaro al colorato, e mantiene lo stato senza consumare energia. Il controllo solare e termico per le facciate e gli edifici ad alta efficienza.',
    'prod.ec.what.title': 'Controllo solare, non oscuramento.',
    'prod.ec.what.body': 'L’elettrocromico nasce per gestire l’energia del sole, non per nascondere ciò che sta dietro al vetro. Anche alla tinta più intensa la lastra resta trasparente: si continua a vedere attraverso, mentre luce diretta e calore vengono attenuati. È la differenza tra schermare l’irraggiamento e creare privacy.',
    'prod.ec.what.link': 'Se invece ti serve regolare l’abbagliamento in modo rapido e continuo, la scelta è il dimming: Smart Glass SPD',
    'prod.ec.edge.title': 'Lo stato resta, l’energia no.',
    'prod.ec.edge.body': 'La caratteristica che distingue l’elettrocromico da ogni altro vetro della gamma è la bistabilità: l’alimentazione serve a cambiare tinta, non a mantenerla. Raggiunta la gradazione voluta, il vetro la conserva da solo, senza consumo continuo. Su una facciata di centinaia di metri quadri significa governare l’irraggiamento per l’intera giornata con un dispendio di energia trascurabile — il motivo per cui l’elettrocromico è la scelta degli edifici progettati attorno all’efficienza.',
    'prod.ec.how.title': 'Come vira il vetro.',
    'prod.ec.how.body': 'Una tensione bassissima innesca una reazione elettrochimica negli strati del vetro: gli ioni migrano e la lastra si colora in modo graduale e uniforme; invertendo la polarità si schiarisce. La transizione è progressiva e avviene nell’arco di alcuni minuti, non è istantanea. È un cambiamento di stato pensato per seguire l’andamento del sole nella giornata, non per commutare a ripetizione.',
    'prod.ec.scale.title': 'Una superficie, o un intero edificio.',
    'prod.ec.scale.body': 'Lo Smart Glass EC è una fornitura su misura, in due forme: vetro laminato di sicurezza, con lo strato elettrocromico integrato tra le lastre, oppure vetrocamera isolante per l’involucro dell’edificio. Garanzia di 2 anni. Su grandi superfici — intere facciate che devono rispondere insieme all’andamento del sole — si può integrare B-LOGIC, la piattaforma di controllo che coordina più superfici attraverso una logica unificata.',
    'prod.ec.scale.link': 'Scopri B-LOGIC',
    'prod.ec.cta.title': 'Parliamo del tuo progetto.',
    'prod.ec.cta.body': 'Ogni facciata ha vincoli propri: esposizione, dimensioni, stratigrafia del vetro. Raccontaci il progetto e definiamo insieme la configurazione elettrocromica adatta.',
    'prod.ec.cta.button': 'Richiedi un preventivo',
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
    'nav.home': 'BrixiaTech, back to home',

    // --- Hero ---
    'hero.eyebrow': 'SWITCHABLE SMART GLASS',
    'hero.headline1': 'Glass that thinks.',
    'hero.headline2': 'Buildings that adapt.',
    'hero.subtitle':
      "Building intelligence applied to the first layer of architecture — glass. PDLC switchable, embedded hardware, predictive cloud platform.",
    'hero.subtitleEmphasis': 'One stack, from film to dashboard.',
    'hero.ctaPrimary': 'Configure a project',
    'hero.ctaSecondary': 'Discover B-LOGIC',
    'hero.hudLabel': 'MODE',
    'hero.hudState0': 'TRANSPARENT',
    'hero.hudState1': 'FROSTED',
    'hero.hudState2': 'SEMI-OPAQUE',
    'hero.hudState3': 'OPAQUE',
    'hero.hudTickStart': 'VIEW',
    'hero.hudTickEnd': 'PRIVACY',
    'hero.imgAltTransparent': 'Lounge with transparent glass wall, skyline visible',
    'hero.imgAltOpaque': 'Same glass wall switched to opaque, full privacy',

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
    'tech.title': 'Five switchable technologies. The right one depends on the project.',
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
    // --- Technologies (index page) ---
    'techindex.eyebrow': 'TECHNOLOGIES',
    'techindex.title': 'Five technologies. Each solves a different problem.',
    'techindex.lead':
      "Smart glass isn’t one thing. Privacy on demand, glare control, passive solar shielding: different needs, different physics. This page lays out the five technologies we supply and what each is for — so the choice is the right one, not the most marketed.",
    'techindex.family1.label': 'Privacy on demand',
    'techindex.pdlc.body':
      'Instant privacy, on or off. Opaque unpowered, clear when powered. The most mature standard: the choice when a space needs to hide or reveal in an instant.',
    'techindex.pdlc.cta': 'Discover Smart Film PDLC',
    'techindex.pnlc.body':
      "The inverse logic. Clear by default, opaque only when needed. For surfaces that stay clear most of the time, and for contexts where a power loss must leave the glass visible.",
    'techindex.pnlc.cta': 'Discover Smart Film PNLC',
    'techindex.family2.label': 'Light and heat control',
    'techindex.spd.body':
      'Continuously adjustable dimming, like a dial. From deep tint to clear in seconds, view intact. For managing glare without closing off the outside.',
    'techindex.spd.cta': 'Discover Smart Glass SPD',
    'techindex.ec.cta': 'Discover Smart Glass EC',
    'techindex.ec.body':
      'Gradual shift at very low power: the glass tints, clears and holds its state with no energy draw. For passive solar and thermal control on façades and high-efficiency buildings.',
    'techindex.dlc.body':
      'Absorbs light rather than scattering it: tints to a smoked finish instead of turning milky. High-performance solar control, with finishes in several tones. The technology behind Blackout Hyper Glass.',
    'techindex.dlc.cta': 'Explore Blackout Hyper Glass',
    'techindex.clc.body':
      "Reflects solar energy rather than absorbing it. Bistable: holds its state without continuous power, drawing energy only when switching. A dynamic thermal shield for heat containment.",
    'techindex.channel':
      "Every technology is available as finished glass or as film for lamination, supplied to glaziers and fabricators. Which of the six fits depends on the project: we discuss it before proposing anything.",
    'techindex.cta': "Let’s talk about your project",

    // --- Insights ---
    'insights.eyebrow': 'INSIGHTS',
    'insights.title': 'Choosing and using switchable glass',
    'insights.lead':
      'Practical guides by use case: covering a display case, blacking out a shopfront, making a room private. Each piece starts from the real situation and arrives at the right technology.',
    'insights.cta': 'Let’s talk about your project',

    'insights.teche.card.title': 'Display cases, showcases and museum vitrines',
    'insights.teche.card.summary':
      'Glass that shows a piece in its best light and protects it — or takes it out of sight — on command. For museums, jewellers and premium retail, with no curtains or panels to spoil the display.',
    'insights.teche.card.cta': 'Read the article',

    'insights.teche.meta.title': 'Covering and protecting display cases and showcases — switchable glass | BrixiaTech',
    'insights.teche.meta.description': 'Switchable glass that covers and protects display cases, showcases and vitrines: transparent when the piece should be seen, opaque on command, with UV blocking against fading. For museums, jewellers and premium retail.',

    'insights.teche.eyebrow': 'INSIGHTS · DISPLAY CASES & SHOWCASES',
    'insights.teche.h1': 'Covering and protecting display cases, showcases and museum vitrines',
    'insights.teche.lead':
      'Displaying behind glass means balancing two opposing needs: showing a piece in its best light and, when required, taking it out of sight. A museum case between two installations, a jewellery display after hours, an internal vitrine ahead of a launch — fixed glass cannot do both, and curtains or panels break the line of the display.',

    'insights.teche.show.title': 'Glass that reveals or conceals on command',
    'insights.teche.show.body':
      'Switchable glass turns from clear to opaque at the touch of a control. The case stays transparent when the piece should be seen and becomes a frosted surface when it needs to be protected or kept private — with no visible mechanism and nothing to fit or remove. It is the same surface changing role on demand, not an accessory laid over the glass.',

    'insights.teche.where.title': 'Where it makes sense',
    'insights.teche.where.body':
      'In museums, on display cases and exhibition vitrines, exposure can be managed installation by installation. In premium retail and jewellery, on displays and internal vitrines, a product is revealed at the right moment and concealed outside opening hours. In both settings the glass works as part of the display, not against it.',

    'insights.teche.protect.title': 'Protecting what you display',
    'insights.teche.protect.body':
      'The light that shows a piece at its best is also the light that fades it over time. BrixiaTech switchable films block ultraviolet light, the component that fades textiles, prints, pigments and sensitive materials. For museum cases and displayed goods this protection works continuously, regardless of state — whether the glass is clear or opaque.',

    'insights.teche.dark.title': 'When you need darkness, not privacy',
    'insights.teche.dark.body':
      'In their opaque state, PDLC and PNLC return a frosted, luminous glass: they screen the view, they do not black out the case. When the need is true darkness — the display going dark, the piece in full shade — the technology is DLC, namely Blackout Hyper Glass. The right choice depends on what the case has to do, not on which product is “best”.',
    'insights.teche.dark.pdlc': 'Discover Smart Film PDLC',
    'insights.teche.dark.pnlc': 'Discover Smart Film PNLC',
    'insights.teche.dark.blackout': 'Explore Blackout Hyper Glass',

    'insights.teche.orchestrate.title': 'Orchestrating multiple panes',
    'insights.teche.orchestrate.body':
      'Where cases are numerous, control can be handled manually or centralised through our B-LOGIC system: in an exhibition context it becomes a facility-management tool, scheduling on and off by opening hours and installations and coordinating multiple cases together.',
    'insights.teche.orchestrate.blogic': 'Discover B-LOGIC',

    'insights.teche.cta.title': 'Let’s talk about your project.',
    'insights.teche.cta.body':
      'Every installation has its own constraints: case dimensions, exposure, conservation needs. Tell us about the project and we’ll define the right switchable-glass solution together.',
    'insights.teche.cta.button': 'Request a quote',
    'insights.teche.cta.explore': 'Explore the technologies',

    // Insights · telecomando article
    'insights.telecomando.card.title': 'Switching glass with a remote',
    'insights.telecomando.card.summary':
      'A remote is one of several ways to control switchable glass. Which technology turns opaque on command, and how to scale from a remote to centralised control.',
    'insights.telecomando.card.cta': 'Read the article',

    'insights.telecomando.meta.title': 'Switchable glass with remote control — how the command works | BrixiaTech',
    'insights.telecomando.meta.description':
      'How to control switchable glass: from a remote or wall switch to an app or centralised control. Which technology turns opaque on command, and how to manage it.',

    'insights.telecomando.eyebrow': 'INSIGHTS · REMOTE & CONTROL',
    'insights.telecomando.h1': 'Glass that turns opaque on command: from remote control to centralised control',
    'insights.telecomando.lead':
      'Controlling switchable glass with a remote is one of the most common questions about this technology. The remote is one of several ways to send the switching command — here we look at how the control works and which technology responds to it.',

    'insights.telecomando.comando.title': 'The remote is only one of the options',
    'insights.telecomando.comando.body':
      'Switchable glass changes state — from clear to opaque — when it receives an electrical input. A remote is only one way to send that input: press a button, and the glass responds. Framed this way, the real question is not whether a remote is available, but how you want to control the glass — and that is where the decision is actually made.',

    'insights.telecomando.modi.title': 'From a wall switch to automation',
    'insights.telecomando.modi.body':
      'The input can come from a wall switch, a wireless remote, a smartphone app, or a sensor that reacts to light or presence. Each is a route to the same glass, chosen according to who uses the surface and how many surfaces there are to manage. A remote is enough for a single room; multiple spaces call for more structured control.',

    'insights.telecomando.quale.title': 'Which technology switches on command',
    'insights.telecomando.quale.body':
      'To make a surface private on command — clear when needed, opaque at the press of a button — PDLC film is the natural choice. Where the glass must stay clear without power and turn opaque only when commanded, the reverse logic of PNLC fits better. Where the goal is not privacy but shading sunlight and glare, Blackout Hyper Glass darkens solar radiation on command. These are different technologies: the choice starts from the objective.',
    'insights.telecomando.quale.pdlc': 'Smart Film PDLC',
    'insights.telecomando.quale.pnlc': 'Smart Film PNLC',
    'insights.telecomando.quale.blackout': 'Blackout Hyper Glass',

    'insights.telecomando.centralizza.title': 'When a remote is no longer enough',
    'insights.telecomando.centralizza.body':
      'On a single surface, control can be handled manually — a switch or a remote. As surfaces multiply, or states need to be scheduled by time of day, that same control can be centralised with our B-LOGIC system: scenes, coordinated switching, or management from a single point.',
    'insights.telecomando.centralizza.blogic': 'Discover B-LOGIC',

    'insights.telecomando.cta.title': 'Let’s talk about your project',
    'insights.telecomando.cta.body':
      'Every surface is its own case: the right control method depends on the space, the use, and the number of panes. Tell us what you want to control and we’ll find the right configuration.',
    'insights.telecomando.cta.button': 'Request a quote',
    'insights.telecomando.cta.explore': 'Explore the technologies',
    // --- Insights: privacy on demand (article #3) ---
    'insights.privacy.card.title': 'Switchable Privacy Glass',
    'insights.privacy.card.summary': 'Surfaces that switch from clear to opaque when you need them: how to choose between PDLC and PNLC when the goal is keeping the inside private.',
    'insights.privacy.card.cta': 'Read the article',
    'insights.privacy.meta.title': 'Switchable Privacy Glass | BrixiaTech',
    'insights.privacy.meta.description': 'Glass and film that switch from clear to opaque on demand: privacy when you need it, transparency when you don’t. How to choose between PDLC and PNLC.',
    'insights.privacy.eyebrow': 'INSIGHTS · PRIVACY ON DEMAND',
    'insights.privacy.h1': 'Privacy on demand: glass that turns opaque when you need it',
    'insights.privacy.lead': 'You’re looking for a surface no one can see through from the outside. The most flexible answer isn’t a permanent treatment applied once and for all — it’s glass, or a film on existing glass, that switches from clear to opaque whenever you choose. Privacy becomes a state you turn on and off, not a fixed condition.',
    'insights.privacy.privacy.title': 'Privacy as a state, not a fixed treatment',
    'insights.privacy.privacy.body': 'The surface changes: from clear it turns opaque, and back again when you want it. In its opaque state it isn’t a light veil — it scatters light, so brightness still comes through but the sharp image behind it doesn’t. This holds in both directions: when it’s active, you can’t make out what’s inside or outside. It’s privacy you decide moment by moment, not frosted glass that stays the same forever.',
    'insights.privacy.stato.title': 'The deciding factor: which state is the resting one',
    'insights.privacy.stato.body': 'Two technologies solve the same thing from opposite ends. PDLC is opaque at rest: with no power it stays private, and clears only when the electric input arrives — privacy is the default, and it holds even with the power off. PNLC works the other way: clear at rest, opaque when you send the input. The real question isn’t "which is better", but "what do I want when the system is off".',
    'insights.privacy.quale.title': 'Which technology for privacy',
    'insights.privacy.quale.body': 'If you want the resting state to already be private — a meeting room, a clinic, a glazed bathroom — PDLC is the natural choice: it starts opaque, and you clear it only when needed. If the space should stay transparent most of the time and turn private only at chosen moments, PNLC’s reverse logic fits better. One clarification that avoids a common mix-up: neither is the "one-way" glass you can see out of without being seen — that’s a different family, mirror film. Switchable glass, when opaque, blocks the view from both sides; when clear, it’s ordinary glass.',
    'insights.privacy.quale.pdlc': 'Smart Film PDLC',
    'insights.privacy.quale.pnlc': 'Smart Film PNLC',
    'insights.privacy.centralizza.title': 'From one surface to many',
    'insights.privacy.centralizza.body': 'As long as there’s a single surface, a switch is enough. When there are several — multiple windows, several rooms, an entire glass partition — control can stay manual, or be centralized with our B-LOGIC system: scenes, coordinated switching, management from a single point.',
    'insights.privacy.centralizza.blogic': 'Discover B-LOGIC',
    'insights.privacy.cta.title': 'Let’s talk about your project',
    'insights.privacy.cta.body': 'Every space has its own privacy solution: tell us about yours and we’ll point you to the right technology, with a tailored quote.',
    'insights.privacy.cta.button': 'Request a quote',
    'insights.privacy.cta.explore': 'Explore the technologies',

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
    'trust.i2.body': 'We install optical-grade film and glass with ultraviolet protection, backed by international certifications on the materials we use.',
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

    // --- Product: Blackout Hyper Glass ---
    'prod.bhg.meta.title': 'Blackout Hyper Glass — switchable PDLC for solar control | BrixiaTech',
    'prod.bhg.meta.description': 'Blackout Hyper Glass: the darkest switchable glass in the BrixiaTech range. A dyed liquid-crystal PDLC that absorbs light and heat — dynamic solar control, as adhesive film or laminated glass.',
    'prod.bhg.eyebrow': 'PDLC · HIGH-PERFORMANCE SOLAR CONTROL',
    'prod.bhg.name': 'Blackout Hyper Glass',
    'prod.bhg.tagline': 'The darkest switchable glass in our range. Built to screen the sun, not just for privacy.',
    'prod.bhg.what.title': 'A PDLC that darkens instead of turning milky.',
    'prod.bhg.what.body': 'Most switchable glass turns opaque white when off. Blackout Hyper Glass does not: at rest it shifts to a deep, dark tint that absorbs light rather than scattering it. It is a dyed liquid crystal — the variant built for solar shading, not privacy alone. Powered on it returns clear like any PDLC; powered off it is the darkest surface we supply.',
    'prod.bhg.edge.title': 'It absorbs light and heat. That is where it earns its place.',
    'prod.bhg.edge.body': 'Glass that scatters light cuts the view but lets most of the energy through. Glass that absorbs it works on heat and glare. Blackout Hyper Glass belongs to the second family: on sun-exposed glazing it reduces solar gain and reflection far more than a conventional PDLC, while keeping the option to switch clear on command. An honest note: in full direct sun the tint is not absolute black — it shifts to a deep brown. It is not a mechanical full-blackout shade; it is dynamic solar control, and that is what it does best.',
    'prod.bhg.how.title': 'Same logic as PDLC. No moving parts.',
    'prod.bhg.how.body': 'Underneath it is still switchable glass: a layer of liquid crystals that changes state with an electric signal. Off, the dyed crystals absorb light; on, they align and let the view through. Controlled by switch, remote, app or automatically — like every switchable surface we supply.',
    'prod.bhg.how.link': 'How switchable glass works',
    'prod.bhg.scale.title': 'Independent by design. Connected when it counts.',
    'prod.bhg.scale.body': 'Operating Blackout Hyper Glass takes a single gesture — a wall switch, a remote, an app — and it comes in two forms: switchable adhesive film, retrofitted onto existing glass, or laminated glass with the film already set between the panes for new supply. Where surfaces multiply, across whole façades or rooms meant to follow the sun without a hand on the switch, B-LOGIC can be integrated — the control platform we developed. It is the product we use to show dynamic solar control in our simulation. A possible extension, never a prerequisite.',
    'prod.bhg.scale.link': 'Discover B-LOGIC',
    'prod.bhg.cta.title': 'Let’s assess your project.',
    'prod.bhg.cta.body': 'Exposure, surfaces, integration: every job is different. Tell us what you need and we’ll prepare a dedicated proposal.',
    'prod.bhg.cta.button': 'Request a quote',

    // --- Product: Smart Film PDLC ---
    'prod.pdlc.meta.title': 'PDLC smart film: glass that switches from clear to private | BrixiaTech',
    'prod.pdlc.meta.description': 'PDLC smart film, the most widely used switchable technology: glass turns from clear to opaque on demand. Privacy and light control, as adhesive film or laminated glass.',
    'prod.pdlc.eyebrow': 'PDLC SMART FILM · PRIVACY ON DEMAND',
    'prod.pdlc.name': 'PDLC smart film: clear or opaque, on demand',
    'prod.pdlc.tagline': 'The most widely used switchable technology. One electrical signal and the glass turns from clear to private — no blinds, no moving parts.',
    'prod.pdlc.what.title': 'Privacy when you need it, light all the time.',
    'prod.pdlc.what.body': 'PDLC smart film is a liquid-crystal film applied to existing glass or set inside laminated glass. Powered on, the glass is clear and transparent; at rest it turns opaque and screens the view. This is privacy on demand: a single surface does the work of both glass and blind, lets daylight in and keeps the space private. It is the form of switchable glass most people picture when they imagine glass that turns dark.',
    'prod.pdlc.what.link': 'For screening sun and heat there is a darker variant in the same family: Blackout Hyper Glass',
    'prod.pdlc.how.title': 'One electrical signal. No moving parts.',
    'prod.pdlc.how.body': 'A thin liquid-crystal film runs between two conductive layers. With no voltage the crystals stay disordered and scatter light, so the glass looks opaque. Apply voltage and they align, and the glass turns clear. The switch is instant and can be controlled by switch, remote, app or automatically — like every switchable surface we supply.',
    'prod.pdlc.how.link': 'How switchable glass works',
    'prod.pdlc.tiers.title': 'Two versions, one technology.',
    'prod.pdlc.premium.label': 'Premium',
    'prod.pdlc.premium.body': 'Our most refined version. A more neutral white point for the clearest, most crystalline result, top-grade materials and finishing in Italy by a specialist workshop. Seven-year warranty.',
    'prod.pdlc.essential.label': 'Essential',
    'prod.pdlc.essential.body': 'The same switchable technology, with quality materials and a result that makes no compromise on how it performs. The direct way to bring PDLC into the project. Two-year warranty, extendable up to five.',
    'prod.pdlc.tiers.note': 'Both available as adhesive film, applied to existing glass, or as laminated glass for new supply. Both built to last.',
    'prod.pdlc.scale.title': 'Independent by design. Connected when it counts.',
    'prod.pdlc.scale.body': 'A single surface is controlled with one gesture — switch, remote, app. Where surfaces multiply, across whole rooms or façades meant to follow the light without a hand on the switch, B-LOGIC can be integrated — the control platform that coordinates multiple surfaces through unified logic.',
    'prod.pdlc.scale.link': 'Discover B-LOGIC',
    'prod.pdlc.cta.title': 'Let’s talk about your project.',
    'prod.pdlc.cta.body': 'Privacy, light, surfaces, integration: every job has its own variables. Tell us what you need and we’ll prepare a tailored proposal.',
    'prod.pdlc.cta.button': 'Request a quote',

    // --- Product: Smart Film PNLC ---
    'prod.pnlc.meta.title': 'Smart Film PNLC — reverse switchable glass, clear when off | BrixiaTech',
    'prod.pnlc.meta.description': 'Smart Film PNLC: switchable glass with inverted logic. Clear without power, opaque on command — built for surfaces that stay clear most of the time and for fail-safe contexts. As adhesive film or laminated glass.',
    'prod.pnlc.eyebrow': 'SMART FILM PNLC · REVERSE LOGIC',
    'prod.pnlc.name': 'Smart Film PNLC: clear when off, opaque on command',
    'prod.pnlc.tagline': 'Switchable glass with the logic reversed. With no power it stays clear; one electrical pulse and it turns opaque — the opposite of standard PDLC.',
    'prod.pnlc.what.title': 'Clear when it’s off. Opaque only when you switch it on.',
    'prod.pnlc.what.body': 'Smart Film PNLC is a liquid-crystal film with the logic of standard PDLC reversed. At rest, with no power, the glass is clear and transparent; under voltage it turns opaque and blocks the view. It’s built for surfaces that stay clear most of the time and darken only when needed: you power the glass for privacy, not for transparency.',
    'prod.pnlc.what.link': 'If privacy is the state you need more often, there’s the direct logic: Smart Film PDLC',
    'prod.pnlc.edge.title': 'Lose power and the glass stays clear. That’s where it counts.',
    'prod.pnlc.edge.body': 'There’s one setting where reverse logic isn’t a preference but a requirement: safety. Glass that stays clear without voltage never blocks an escape route, never darkens a room during a blackout, never isolates the people inside an emergency vehicle. Wherever a power loss has to leave the surface visible — emergency exits, vehicles, regulated environments — PNLC is the natural choice, because its resting state is the safe state. One honest note: the flip side of this logic is that staying opaque draws power continuously. For surfaces that need to stay dark for long stretches it’s less efficient than standard PDLC; PNLC is at its best where clear is the usual state and opacity is occasional.',
    'prod.pnlc.how.title': 'The same switchable logic. No moving parts.',
    'prod.pnlc.how.body': 'Underneath it’s still switchable glass: a thin liquid-crystal film between two conductive layers. The difference is in the formulation, which inverts the response to voltage — with no power the crystals let the view through, under voltage they scatter light and the glass turns opaque. It’s controlled by switch, remote, app or automatically — like every switchable surface we make.',
    'prod.pnlc.how.link': 'How switchable glass works',
    'prod.pnlc.scale.title': 'Independent by nature. Connected when it matters.',
    'prod.pnlc.scale.body': 'A single surface is controlled with one gesture — switch, remote, app — and comes in two forms: switchable adhesive film, retrofitted onto existing glass, or laminated glass with the film already integrated for new builds, both covered by a 2-year warranty. Where surfaces multiply, across whole rooms or façades that need to respond together without manual input, you can integrate B-LOGIC, the control platform that coordinates multiple surfaces through unified logic.',
    'prod.pnlc.scale.link': 'Discover B-LOGIC',
    'prod.pnlc.cta.title': 'Let’s talk about your project.',
    'prod.pnlc.cta.body': 'Intended use, safety requirements, surfaces, integration: every project is different. Tell us what you need and we’ll prepare a dedicated proposal.',
    'prod.pnlc.cta.button': 'Request a quote',

    // --- Product: Smart Glass SPD ---
    'prod.spd.meta.title': 'Smart Glass SPD — variable, continuous dimming glass | BrixiaTech',
    'prod.spd.meta.description': 'Smart Glass SPD: glass that dims continuously, adjusted like a dial from deep tint to clear in seconds. Controls glare while keeping the view outward.',
    'prod.spd.eyebrow': 'SMART GLASS SPD · CONTINUOUS DIMMING',
    'prod.spd.name': 'Smart Glass SPD: variable dimming, from deep tint to clear',
    'prod.spd.tagline': 'Glass you adjust continuously, like a dial: move the tint from clear to dark in seconds and set any level in between — without ever closing off the view outward.',
    'prod.spd.what.title': 'Not on or off. Any level you choose.',
    'prod.spd.what.body': 'Smart Glass SPD doesn’t switch between two states — it modulates. Its tint runs continuously from clear to deep dark and stops wherever you want it: a light veil against the midday sun, heavy shading through peak glare, full clarity when the light fades. Control is immediate, within seconds, and at every level the glass stays see-through: you manage light and heat without ever giving up the view outward.',
    'prod.spd.what.link': 'If instead you need to block the view entirely, for privacy, there’s the state-based logic: Smart Film PDLC',
    'prod.spd.edge.title': 'A dimmer for daylight. No other glass does this.',
    'prod.spd.edge.body': 'Every other technology in our range switches between defined states: clear or opaque, bright or shaded. Smart Glass SPD is the only one that behaves like a dimmer — the level is continuous, and you set it to the exact value the moment calls for. That makes it the natural choice wherever light has to be governed precisely and in real time: exposed glazing whose glare shifts through the day, skylights, façades and spaces where visual comfort matters as much as the view. An honest note: even at full tint, Smart Glass SPD remains a dark shade you can still see through — it’s built to manage light and heat, not for privacy. Where the view needs to be closed off completely, another technology is the right choice.',
    'prod.spd.how.title': 'Microparticles that align. Light that passes, on command.',
    'prod.spd.how.body': 'Inside the glass, a thin film holds microscopic suspended particles between two conductive layers. With no power, the particles sit at random and block most of the light: the glass appears dark. Under voltage they align and let light through; and because their orientation follows the strength of the power supplied, adjusting the voltage produces any intermediate tint, continuously. It’s controlled from a switch, remote, app or automatically — like every electrically controlled surface we make.',
    'prod.spd.scale.title': 'One surface, or a whole building.',
    'prod.spd.scale.body': 'A single pane is controlled with a gesture — switch, remote, app — and comes in two forms: an adhesive film, applied as a retrofit to existing glass, or laminated safety glass with the SPD film built in between the panes for new supply, both covered by a 2-year warranty. Where surfaces multiply, across whole façades or spaces that need to respond to the light together without manual intervention, B-LOGIC can be integrated — the control platform that coordinates multiple surfaces through unified logic.',
    'prod.spd.scale.link': 'Discover B-LOGIC',
    'prod.spd.cta.title': 'Let’s talk about your project.',
    'prod.spd.cta.body': 'Exposure, surfaces, the level of light control you need, integration: every project is different. Tell us what you need and we’ll prepare a dedicated proposal.',
    'prod.spd.cta.button': 'Request a quote',
    // --- Product: Smart Glass EC ---
    'prod.ec.meta.title': 'Smart Glass EC — electrochromic glass for passive solar control | BrixiaTech',
    'prod.ec.meta.description': 'Smart Glass EC: electrochromic glass that shifts its tint on command and holds the state with virtually no power. Passive solar and thermal control for façades and high-efficiency buildings.',
    'prod.ec.eyebrow': 'SMART GLASS EC · PASSIVE SOLAR CONTROL',
    'prod.ec.name': 'Smart Glass EC: shifts on command and holds the state without power',
    'prod.ec.tagline': 'Shifts its tint on command, from clear to coloured, and holds that state with virtually no power. Solar and thermal control for façades and high-efficiency buildings.',
    'prod.ec.what.title': 'Solar control, not blackout.',
    'prod.ec.what.body': 'Electrochromic glass is built to manage the sun’s energy, not to hide what sits behind the glass. Even at its deepest tint the pane stays see-through: you keep the view while direct light and heat are cut back. It is the difference between shielding radiation and creating privacy.',
    'prod.ec.what.link': 'If instead you need fast, continuous glare control, the answer is dimming: Smart Glass SPD',
    'prod.ec.edge.title': 'The state stays, the power doesn’t.',
    'prod.ec.edge.body': 'What sets electrochromic apart from every other glass in the range is bistability: power changes the tint, it doesn’t hold it. Once the chosen gradation is reached, the glass keeps it on its own, with no continuous draw. On a façade of hundreds of square metres that means governing solar gain all day for a negligible amount of energy — the reason electrochromic is the choice for buildings designed around efficiency.',
    'prod.ec.how.title': 'How the glass tints.',
    'prod.ec.how.body': 'A very low voltage drives an electrochemical reaction through the layers of the glass: ions migrate and the pane colours gradually and evenly; reverse the polarity and it clears again. The transition is progressive, running over a few minutes rather than switching instantly. It is a change of state meant to track the sun across the day, not to toggle on and off.',
    'prod.ec.scale.title': 'One surface, or a whole building.',
    'prod.ec.scale.body': 'Smart Glass EC is a made-to-measure supply in two forms: laminated safety glass, with the electrochromic layer set between the panes, or an insulating glass unit for the building envelope. Two-year warranty. Across large spans — whole façades that need to respond to the sun together — B-LOGIC can be integrated, the control platform that coordinates multiple surfaces through unified logic.',
    'prod.ec.scale.link': 'Discover B-LOGIC',
    'prod.ec.cta.title': 'Let’s talk about your project.',
    'prod.ec.cta.body': 'Every façade has its own constraints: orientation, scale, glass build-up. Tell us about the project and we’ll define the right electrochromic configuration together.',
    'prod.ec.cta.button': 'Request a quote',
  },
} as const;
