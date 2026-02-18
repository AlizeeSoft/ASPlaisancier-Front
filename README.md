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

Le système repose sur un identifiant unique : **ID_PO**.

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
```

### Android

```bash
# Debug
npm run android -- <flavor>

# Release
npm run android -- <flavor> release
```

#### Exemples

```bash
npm run android -- gruiss           # Debug → Port de Gruissan
npm run android -- gruiss release   # Release → Port de Gruissan
npm run android -- calvad           # Debug → Ports du Calvados    
```

### iOS

#### Avant le premier lancement ou après modification des dépendances natives :

```bash
cd ios
bundle install
bundle exec pod install
cd ..
```

#### Puis lancer l'application

```bash
# Debug
npm run ios -- <scheme>

# Release
npm run ios -- <scheme> release
```

#### Exemples

```bash
npm run ios -- gruiss           # Debug → Port de Gruissan
npm run ios -- gruiss release   # Release → Port de Gruissan
npm run ios -- calvad           # Debug → Ports du Calvados    
```