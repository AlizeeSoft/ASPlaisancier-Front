# ASPlaisancier

Application mobile white-label destinée aux ports de plaisance français.

---

## 🧭 Concept

ASPlaisancier est une base d'application mobile commune utilisée par plusieurs ports de plaisance.

Chaque port dispose :
- de sa propre application publiée sur les stores
- de son propre branding (nom, logo, couleurs)
- de ses propres fonctionnalités activées
- de son propre cycle de versioning

Le système repose sur un identifiant unique : **IDPO**.

Exemples :
- GRUISS → Port de Gruissan
- BRESTM → Port de Brest
- SPLNCO → Port de Caen

L'ID_PO est utilisé pour :
- la configuration de l'application
- les builds natifs (Android flavors, iOS schemes)
- la connexion à l'interface administrateur
- la communication avec les APIs backend

---

## 🏗️ Stack technique

- React Native CLI 0.84
- TypeScript
- iOS & Android natif
- Architecture multi-client (white-label)

---

## 🚀 Lancement en développement

### Démarrer Metro

```bash
npm start

### Android
npm run android

### iOS

#### Avant le premier lancement ou après modification des dépendances natives :

bundle install
bundle exec pod install

#### Puis lancer l'application

npm run ios


