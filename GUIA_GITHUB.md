# 📖 Guia pas a pas: Com pujar el projecte a GitHub

## Pas 1: Crear un compte de GitHub (si no en tens)

1. Ves a [github.com](https://github.com)
2. Clica "Sign up" i segueix els passos
3. Verifica el teu correu electrònic

## Pas 2: Crear un nou repositori

1. Un cop hagis iniciat sessió a GitHub, clica el botó **"+"** a la part superior dreta
2. Selecciona **"New repository"**
3. Omple els camps:
   - **Repository name**: `fisica-en-accio` (o el nom que vulguis)
   - **Description**: "Exercicis interactius de física per a 3r ESO"
   - Deixa-ho com a **Public**
   - **NO marquis** cap de les opcions (README, .gitignore, license)
4. Clica **"Create repository"**

## Pas 3: Pujar els fitxers

Hi ha dues maneres de fer-ho:

### Opció A: Des de la interfície web (MÉS FÀCIL)

1. A la pàgina del teu nou repositori, clica **"uploading an existing file"**
2. Arrossega tots aquests fitxers a la zona de càrrega:
   - `index.html`
   - `styles.css`
   - `questions.js`
   - `script.js`
   - `README.md`
   - `.gitignore`
3. A la part inferior, escriu "Primera versió" al camp de commit
4. Clica **"Commit changes"**

### Opció B: Des de la línia de comandes (si saps utilitzar-la)

```bash
# 1. Navega a la carpeta on has descarregat els fitxers
cd fisica-en-accio

# 2. Inicialitza Git
git init

# 3. Afegeix tots els fitxers
git add .

# 4. Fes el primer commit
git commit -m "Primera versió de l'aplicació"

# 5. Afegeix el repositori remot (canvia [usuari] pel teu nom d'usuari)
git remote add origin https://github.com/[usuari]/fisica-en-accio.git

# 6. Puja els fitxers
git branch -M main
git push -u origin main
```

## Pas 4: Activar GitHub Pages

1. Al teu repositori, clica la pestanya **"Settings"** (a la part superior)
2. Al menú lateral esquerre, clica **"Pages"** (sota la secció "Code and automation")
3. A la secció **"Source"**, selecciona:
   - Branch: **main**
   - Folder: **/ (root)**
4. Clica **"Save"**
5. Espera uns 2-3 minuts
6. Refresca la pàgina i veuràs un missatge verd que diu:
   > "Your site is published at https://[usuari].github.io/fisica-en-accio/"

## Pas 5: Provar l'aplicació

1. Clica l'enllaç que apareix a GitHub Pages
2. Si no funciona immediatament, espera uns minuts més i torna-ho a provar
3. **Ja està!** La teva aplicació està en línia! 🎉

## 🔄 Com actualitzar l'aplicació després

### Opció A: Des de la interfície web

1. Al repositori, clica sobre el fitxer que vols modificar
2. Clica la icona del llapis (Edit this file)
3. Fes els canvis
4. Baixa fins a "Commit changes"
5. Escriu què has canviat i clica "Commit changes"
6. Espera 1-2 minuts i els canvis es veuran a la web

### Opció B: Des de la línia de comandes

```bash
# 1. Fes els canvis als fitxers locals

# 2. Afegeix els canvis
git add .

# 3. Fes un commit amb un missatge descriptiu
git commit -m "Afegides 5 preguntes noves sobre energia"

# 4. Puja els canvis
git push
```

## 📝 Consells útils

- **Fes commits freqüents**: Cada vegada que facis un canvi important, fes un commit
- **Escriu missatges clars**: Explica què has canviat en cada commit
- **Prova localment primer**: Obre `index.html` al navegador abans de pujar canvis
- **Comparteix l'enllaç**: Dóna l'enllaç de GitHub Pages als teus alumnes

## ❓ Problemes comuns

### La pàgina no es mostra
- Espera 5-10 minuts després d'activar GitHub Pages
- Comprova que has seleccionat la branca correcta (main)
- Assegura't que el fitxer es diu exactament `index.html`

### Els canvis no es veuen
- Refresca la pàgina amb Ctrl+F5 (Windows) o Cmd+Shift+R (Mac)
- Esborra la caché del navegador
- Espera uns minuts perquè GitHub actualitzi

### No puc pujar fitxers
- Comprova que has verificat el teu correu electrònic a GitHub
- Assegura't que el repositori és teu
- Prova amb un navegador diferent

## 🎓 Vols aprendre més sobre Git?

- [Tutorial oficial de GitHub](https://docs.github.com/en/get-started)
- [Git - la guia senzilla](https://rogerdudler.github.io/git-guide/index.ca.html)
- [Aprèn Git amb GitHub Desktop](https://desktop.github.com/)

---

Si tens qualsevol problema, busca a Google l'error específic o pregunta a un company que conegui Git/GitHub!
