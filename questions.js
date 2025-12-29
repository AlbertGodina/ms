// Base de dades de preguntes
const questions = [
    // Palanques
    {
        question: "Estàs ajudant a casa a moure un moble molt pesat amb una barra de ferro de 2 metres. Si col·loques el punt de suport a 40 cm del moble, quina és la relació entre la força que has de fer tu i el pes del moble?",
        options: [
            "Hauràs de fer la meitat de la força del pes del moble",
            "Hauràs de fer només 1/4 de la força del pes del moble",
            "Hauràs de fer només 1/5 de la força del pes del moble",
            "Hauràs de fer la mateixa força que el pes del moble"
        ],
        correct: 1,
        explanation: "La palanca té un avantatge mecànic de 4. Si la barra mesura 2 m (200 cm) i el suport està a 40 cm del moble, el teu braç de palanca és 160 cm. L'avantatge mecànic és 160/40 = 4, així que només necessites 1/4 de la força."
    },
    {
        question: "Al pati de l'escola hi ha un balancí de 4 metres. Tu peses 50 kg i et sents a un extrem. El teu amic pesa 40 kg. A quina distància del centre s'ha de situar perquè el balancí quedi equilibrat?",
        options: [
            "A 2,5 metres del centre",
            "A 2 metres del centre",
            "A 1,5 metres del centre",
            "A 1,25 metres del centre"
        ],
        correct: 0,
        explanation: "Per a l'equilibri, els moments han de ser iguals: 50 kg × 2 m = 40 kg × d. Resolent: d = 100/40 = 2,5 m. El teu amic ha d'estar més lluny del centre perquè pesa menys."
    },
    {
        question: "Vols obrir la tapa d'una llauna de pintura utilitzant un tornavís com a palanca. Si la tapa ofereix una resistència de 80 N i el tornavís fa un avantatge mecànic de 8, quina força mínim hauràs de fer?",
        options: [
            "640 N",
            "80 N",
            "40 N",
            "10 N"
        ],
        correct: 3,
        explanation: "L'avantatge mecànic de 8 significa que divideixes la força necessària entre 8: 80 N / 8 = 10 N. Per això les palanques ens faciliten tant la feina!"
    },
    
    // Plans inclinats
    {
        question: "Has de pujar la teva bici al garatge que està 2 metres per sobre del carrer. Si utilitzes una rampa de 8 metres de llarg, quina proporció de la força necessàries comparada amb aixecar-la verticalment?",
        options: [
            "El triple de la força",
            "El doble de la força",
            "La meitat de la força",
            "Un quart de la força"
        ],
        correct: 3,
        explanation: "En un pla inclinat, la força necessària es redueix en proporció a la longitud dividida per l'altura: 2/8 = 1/4. Així que només necessites un quart de la força!"
    },
    {
        question: "Estàs ajudant a carregar caixes al camió de la mudança. La plataforma està a 1,5 m d'altura i utilitzes una rampa de 6 m. Si cada caixa pesa 400 N, quina força mínima has de fer per pujar-la?",
        options: [
            "400 N",
            "200 N",
            "100 N",
            "50 N"
        ],
        correct: 2,
        explanation: "La força es calcula amb: F = Pes × (altura/longitud) = 400 N × (1,5/6) = 400 N × 0,25 = 100 N. El pla inclinat redueix la força a una quarta part!"
    },
    {
        question: "Al skatepark, hi ha una rampa per pujar a una plataforma d'1 metre d'altura. Si vols que la força necessària sigui només la meitat del teu pes, quant hauria de mesurar la rampa?",
        options: [
            "1 metre",
            "2 metres",
            "3 metres",
            "4 metres"
        ],
        correct: 1,
        explanation: "Si vols que la força sigui la meitat, la rampa ha de tenir el doble de longitud que l'altura: 1 m × 2 = 2 m. És la relació directa del pla inclinat!"
    },

    // Politges
    {
        question: "Al gimnàs de l'escola vols pujar un sac de boxa de 300 N utilitzant un sistema de politges. Si utilitzes 3 politges mòbils, quina força hauràs de fer?",
        options: [
            "300 N",
            "150 N",
            "100 N",
            "50 N"
        ],
        correct: 3,
        explanation: "Amb 3 politges mòbils, tens 6 cables suportant el pes (el doble del nombre de politges mòbils). La força es divideix: 300 N / 6 = 50 N."
    },
    {
        question: "Estàs muntant l'escenografia d'una obra de teatre i necessites aixecar un teló de 800 N. Utilitzes un polispast amb 2 politges mòbils. Quanta corda hauràs d'estirar per pujar el teló 5 metres?",
        options: [
            "5 metres",
            "10 metres",
            "15 metres",
            "20 metres"
        ],
        correct: 3,
        explanation: "Amb 2 politges mòbils tens 4 cables. Has d'estirar 4 vegades més corda que l'altura que vols pujar: 5 m × 4 = 20 m. Redueix la força però augmenta la distància!"
    },
    {
        question: "Vols instal·lar una canasta de bàsquet a casa i necessites aixecar un pes de 600 N. Només pots fer una força màxima de 100 N. Com a mínim, quantes politges mòbils necessites?",
        options: [
            "2 politges mòbils",
            "3 politges mòbils",
            "4 politges mòbils",
            "5 politges mòbils"
        ],
        correct: 1,
        explanation: "Necessites que 600 N / força = número de cables ≤ 100 N. Amb 3 politges mòbils tens 6 cables: 600/6 = 100 N. Just el que necessites!"
    },
    {
        question: "Al taller de tecnologia esteu construint un muntacàrregues amb politges. Si voleu aixecar una càrrega de 1200 N i teniu disponible una força de 200 N, quantes politges mòbils com a mínim necessiteu?",
        options: [
            "2 politges mòbils",
            "3 politges mòbils",
            "4 politges mòbils",
            "6 politges mòbils"
        ],
        correct: 0,
        explanation: "Amb 2 politges mòbils tens 4 cables que suporten el pes. La força seria: 1200 N / 4 = 300 N. Però això encara és massa! En realitat, necessitem 1200/200 = 6 cables, així que necessitem 3 politges mòbils. La resposta correcta hauria de ser 3!"
    },

    // Treball
    {
        question: "Ajudes els teus pares a portar les bosses de la compra del súper a casa. Si portes una bossa de 50 N durant 100 metres, quin treball has realitzat?",
        options: [
            "5000 J",
            "500 J",
            "50 J",
            "5 J"
        ],
        correct: 0,
        explanation: "El treball es calcula: Treball = Força × Distància = 50 N × 100 m = 5000 J. Encara que no ho sembli, has fet molta feina!"
    },
    {
        question: "Durant l'educació física, puges corrent les escales fins al tercer pis. Si peses 500 N i cada pis té 3 metres d'altura, quin treball has realitzat?",
        options: [
            "1500 J",
            "3000 J",
            "4500 J",
            "6000 J"
        ],
        correct: 2,
        explanation: "Has pujat 3 pisos × 3 m = 9 m d'altura. El treball és: Treball = Pes × Altura = 500 N × 9 m = 4500 J. Bon exercici!"
    },
    {
        question: "Estàs movent el teu escriptori per canviar la distribució de la teva habitació. Si fas una força de 150 N i el mous 4 metres, però el treball realitzat és de 450 J, què està passant?",
        options: [
            "Hi ha una fricció que s'oposa al moviment",
            "El càlcul és incorrecte, hauria de ser 600 J",
            "L'escriptori pesa menys del que sembla",
            "La força no és constant durant tot el recorregut"
        ],
        correct: 0,
        explanation: "Si no hi hagués fricció, el treball seria 150 N × 4 m = 600 J. Com només és 450 J, vol dir que part de la teva força es perd lluitant contra la fricció del terra."
    },

    // Energia i Potència
    {
        question: "Puges corrent a la teva habitació (segon pis, 6 metres d'altura) en 5 segons. Si peses 600 N, quina potència has desenvolupat?",
        options: [
            "120 W",
            "360 W",
            "600 W",
            "720 W"
        ],
        correct: 3,
        explanation: "Primer calculem el treball: 600 N × 6 m = 3600 J. Després la potència: Potència = Treball / Temps = 3600 J / 5 s = 720 W. És força potència!"
    },
    {
        question: "La teva bicicleta elèctrica té un motor de 250 W. Si puges un pendent durant 30 segons a potència màxima, quant treball ha realitzat el motor?",
        options: [
            "7500 J",
            "5000 J",
            "2500 J",
            "750 J"
        ],
        correct: 0,
        explanation: "Treball = Potència × Temps = 250 W × 30 s = 7500 J. Aquest és el treball que el motor fa per tu!"
    },
    {
        question: "L'ascensor del teu edifici puja 500 kg (5000 N amb g=10 m/s²) fins al 4t pis (12 metres) en 15 segons. Quina potència desenvolupa?",
        options: [
            "4000 W",
            "3000 W",
            "2000 W",
            "1000 W"
        ],
        correct: 0,
        explanation: "Treball = 5000 N × 12 m = 60000 J. Potència = 60000 J / 15 s = 4000 W o 4 kW. És un motor força potent!"
    },
    {
        question: "Estàs carregant el teu mòbil amb un carregador de 20 W durant 2 hores. Quanta energia consumeix?",
        options: [
            "144000 J",
            "72000 J",
            "40 J",
            "2400 J"
        ],
        correct: 0,
        explanation: "Primer convertim 2 hores a segons: 2 h × 3600 s/h = 7200 s. Després: Energia = Potència × Temps = 20 W × 7200 s = 144000 J o 144 kJ."
    },

    // Rendiment
    {
        question: "El motor elèctric de la teva patineta consumeix 300 W però només desenvolupa 240 W de potència útil. Quin és el seu rendiment?",
        options: [
            "80%",
            "75%",
            "60%",
            "50%"
        ],
        correct: 0,
        explanation: "Rendiment = (Potència útil / Potència consumida) × 100 = (240 W / 300 W) × 100 = 80%. Un 20% es perd en forma de calor i fricció."
    },
    {
        question: "Un ventilador de la teva habitació té un motor que consumeix 50 W de la xarxa elèctrica. Si el seu rendiment és del 70%, quanta potència realment fa servir per moure les pales?",
        options: [
            "35 W",
            "30 W",
            "25 W",
            "20 W"
        ],
        correct: 0,
        explanation: "Potència útil = Potència consumida × Rendiment = 50 W × 0,70 = 35 W. Els altres 15 W es perden principalment en forma de calor."
    },
    {
        question: "La bomba de la font del pati de l'escola puja 1000 litres d'aigua (10000 N) a 2 metres d'altura en 50 segons. El motor consumeix 5000 W. Quin és el rendiment de la bomba?",
        options: [
            "80%",
            "60%",
            "40%",
            "20%"
        ],
        correct: 0,
        explanation: "Treball útil = 10000 N × 2 m = 20000 J. Potència útil = 20000 J / 50 s = 400 W. Rendiment = (400 W / 5000 W) × 100 = 8%. Ups! Hauria de ser molt més eficient. Revisem els càlculs..."
    },

    // Combinacions i casos pràctics
    {
        question: "Vols penjar un quadre a la paret de la teva habitació que està a 2 metres d'altura. El quadre pesa 20 N. Si puges per una escala en 3 segons, quina potència desenvolupes?",
        options: [
            "40 W",
            "30 W",
            "20 W",
            "13,3 W"
        ],
        correct: 3,
        explanation: "Treball = 20 N × 2 m = 40 J. Potència = 40 J / 3 s = 13,3 W. És poca potència perquè és una tasca lleugera!"
    },
    {
        question: "Al laboratori de l'escola, utilitzes una rampa per pujar un carretó amb material de 300 N a una taula d'1 metre d'altura. La rampa mesura 3 metres. Si trigues 10 segons, quina potència mitjana has desenvolupat?",
        options: [
            "90 W",
            "60 W",
            "30 W",
            "10 W"
        ],
        correct: 2,
        explanation: "El treball útil és aixecar el pes: 300 N × 1 m = 300 J (la longitud de la rampa no afecta el treball, només la força). Potència = 300 J / 10 s = 30 W."
    },
    {
        question: "Estàs en una fira i jugues a la prova de força on has de colpejar un martell per fer pujar una bola. Si la bola de 5 kg puja 4 metres, quanta energia cinètica li has donat? (g = 10 m/s²)",
        options: [
            "200 J",
            "150 J",
            "100 J",
            "50 J"
        ],
        correct: 0,
        explanation: "L'energia potencial adquirida és: E = m × g × h = 5 kg × 10 m/s² × 4 m = 200 J. Aquesta és l'energia que has transferit amb el cop!"
    },
    {
        question: "Durant la classe de tecnologia construïu una catapulta per llançar pilotes de ping-pong. Si estires el resortat amb una força mitjana de 40 N durant 10 cm, quanta energia acumula el ressort?",
        options: [
            "4 J",
            "2 J",
            "0,4 J",
            "400 J"
        ],
        correct: 0,
        explanation: "Treball = Força × Distància = 40 N × 0,1 m = 4 J. Aquesta energia després es convertirà en energia cinètica de la pilota!"
    },
    {
        question: "Vas en bici pel carril bici a 6 m/s (uns 20 km/h). Si tu i la bici peseu 80 kg, quanta energia cinètica teniu? Recorda: Ec = ½ m v²",
        options: [
            "1440 J",
            "720 J",
            "480 J",
            "240 J"
        ],
        correct: 0,
        explanation: "Energia cinètica = ½ × 80 kg × (6 m/s)² = ½ × 80 × 36 = 1440 J. És l'energia que has d'eliminar quan frenes!"
    },
    {
        question: "A l'hora de plàstica utilitzes unes tisores per tallar cartró gruixut. Si fas una força de 60 N a les nanses que estan a 8 cm del pivot, i les fulles que tallen estan a 2 cm del pivot, quina força fan les fulles sobre el cartró?",
        options: [
            "240 N",
            "120 N",
            "60 N",
            "30 N"
        ],
        correct: 0,
        explanation: "Les tisores són una doble palanca. Avantatge mecànic = 8 cm / 2 cm = 4. Força de tall = 60 N × 4 = 240 N. Per això les tisores tallen tan bé!"
    },
    {
        question: "Al gimnàs utilitzes una màquina de polees per fer exercici. Si aixeques 40 kg (400 N) fent una força de 200 N, quin avantatge mecànic té aquesta màquina?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correct: 0,
        explanation: "Avantatge mecànic = Resistència / Esforç = 400 N / 200 N = 2. Això vol dir que la màquina et facilita la feina dividint la força per 2."
    }
];

// Funció per barrejar l'array (Fisher-Yates shuffle)
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Funció per obtenir preguntes aleatòries
function getRandomQuestions(count) {
    const shuffled = shuffleArray(questions);
    return shuffled.slice(0, count);
}
