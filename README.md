# Física en Acció 🎯

Aplicació web educativa per generar exercicis aleatoris de Tecnologia i Digitalització per a 3r d'ESO.

## 📚 Contingut

L'aplicació inclou preguntes sobre:
- **Màquines simples**: palanques, plans inclinats, politges
- **Energia**: treball, potència i rendiment
- Tots els conceptes es presenten en **escenaris propers als alumnes de 14-15 anys**

## 🎮 Modes de joc

### Mode Pràctica
- Una pregunta a la vegada
- Feedback immediat després de respondre
- Explicació detallada de la resposta correcta
- Perfecte per aprendre i practicar

### Mode Examen
- 5 preguntes aleatòries
- Sense feedback fins al final
- Resultats i explicacions al finalitzar
- Ideal per avaluar coneixements

## 🚀 Com utilitzar-lo

### Opció 1: Veure'l en línia (Recomanat)
1. Ves a: `https://[el-teu-usuari].github.io/fisica-en-accio/`
2. Ja està! Comença a practicar

### Opció 2: Descarregar i executar localment
1. Descarrega tots els fitxers
2. Obre `index.html` amb el teu navegador
3. Comença a utilitzar l'aplicació

## 📁 Estructura del projecte

```
fisica-en-accio/
├── index.html       # Pàgina principal
├── styles.css       # Estils i disseny
├── questions.js     # Base de dades de preguntes
├── script.js        # Lògica de l'aplicació
└── README.md        # Aquest fitxer
```

## 🛠️ Personalització

### Afegir noves preguntes

Obre el fitxer `questions.js` i afegeix noves preguntes seguint aquest format:

```javascript
{
    question: "Text de la pregunta?",
    options: [
        "Opció A",
        "Opció B",
        "Opció C",
        "Opció D"
    ],
    correct: 0,  // Índex de la resposta correcta (0-3)
    explanation: "Explicació de per què aquesta és la resposta correcta."
}
```

### Modificar el nombre de preguntes del mode examen

Al fitxer `script.js`, línia on diu `getRandomQuestions(5)`, canvia el 5 pel número que vulguis.

## 🎨 Característiques

- ✅ Disseny minimalista i modern
- ✅ Totalment responsiu (funciona en mòbils i tauletes)
- ✅ Preguntes amb escenaris realistes
- ✅ Explicacions detallades
- ✅ Sense necessitat d'instal·lar res
- ✅ Funciona sense connexió a internet (després de la primera càrrega)

## 📱 Compatibilitat

- Chrome, Firefox, Safari, Edge (versions recents)
- Dispositius mòbils i tauletes
- No requereix JavaScript extern ni llibreries

## 👨‍🏫 Per a professors

Aquest material és ideal per:
- Reforç de conceptes a classe
- Deures interactius
- Preparació d'exàmens
- Avaluació formativa
- Aprenentatge autònom dels alumnes

## 📝 Llicència

Aquest projecte és de lliure ús educatiu. Pots modificar-lo i adaptar-lo a les teves necessitats!

## 🤝 Contribucions

Si vols afegir més preguntes o millorar l'aplicació:
1. Fes un fork del repositori
2. Crea les teves modificacions
3. Envia un pull request

---

Creat amb ❤️ per a l'educació en tecnologia i física
