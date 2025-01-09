# 📸 Mon Album Photo Interactif

<div align="center">
  
![Album Photo Preview](https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&w=600&h=300)

[![Made with React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org)
[![Styled with Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?logo=vite)](https://vitejs.dev)

![Capture d’écran du 2025-01-09 09-59-40](https://github.com/user-attachments/assets/f3c7d16e-947d-4933-89b1-0e4601908a98)


</div>

## ✨ Caractéristiques

🌟 **Interface Immersive**
- Animation 3D réaliste du feuilletage des pages
- Effets de pliage et d'ombres dynamiques
- Transitions fluides entre les pages

🎨 **Design Élégant**
- Typographie manuscrite personnalisée
- Arrière-plan animé avec effets de gradient
- Interface minimaliste et moderne

🔥 **Interactions Intuitives**
- Navigation tactile et par boutons
- Indicateur de coin de page interactif
- Retour visuel sur les interactions

## 🚀 Démarrage Rapide

```bash
# Cloner le projet
git clone https://github.com/DanihStephane/WhimsicalPhotoAlbumWithFlippingPages

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 🛠 Technologies Utilisées

<div align="center">

| Technologie | Utilisation |
|-------------|-------------|
| ⚛️ React | Framework Frontend |
| 🎨 Tailwind CSS | Styling |
| 📝 TypeScript | Typage Statique |
| ⚡ Vite | Build Tool |
| 🖼️ Lucide React | Icônes |

</div>

## 🌟 Fonctionnalités Détaillées

### 📖 Animation de Page
L'animation de feuilletage utilise des transformations CSS 3D pour créer une expérience réaliste :
```typescript
transform: `rotateY(${-flipProgress * 1.8}deg)`,
transformStyle: 'preserve-3d'
```

### 🎭 Effets Visuels
Les effets d'ombre et de pliage sont générés dynamiquement :
```css
.page-fold {
  background: linear-gradient(to right, 
    rgba(0,0,0,0.02) 0%, 
    rgba(0,0,0,0) 20%
  );
}
```

### 🎯 Interactions Utilisateur
Navigation intuitive avec retour visuel :
```typescript
<button
  onClick={() => !isFlipping && turnPage('next')}
  className="hover:scale-110 transition-all"
>
```

## 📱 Responsive Design

L'application s'adapte parfaitement à tous les écrans :
- 📱 Mobile : Interface optimisée pour le tactile
- 💻 Desktop : Expérience immersive complète
- 📺 Grand écran : Mise à l'échelle élégante

## 🎨 Personnalisation

Vous pouvez facilement personnaliser :
- 🖼️ Les images (via le tableau `photos`)
- 🎨 Les couleurs (via Tailwind)
- 📝 Les polices (via Google Fonts)
- ⚡ Les animations (via CSS)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. 🍴 Forker le projet
2. 🔧 Créer une branche
3. 🎨 Faire vos modifications
4. 📤 Soumettre une Pull Request

## 📜 Licence

 `LICENSE` free: https://github.com/DanihStephane.

[![My Skills](https://skillicons.dev/icons?i=linkedin)](https://skillicons.dev) : https://www.linkedin.com/in/danihstephane/

---

<div align="center">

**🌟 Créé avec passion par Danih Stephane**

[⭐ Star le projet]([https://github.com/votre-repo](https://github.com/DanihStephane/WhimsicalPhotoAlbumWithFlippingPages)) | [🐛 Signaler un bug]([https://github.com/votre-repo](https://github.com/DanihStephane/WhimsicalPhotoAlbumWithFlippingPages)/issues) | [💡 Suggérer une fonctionnalité]([https://github.com/votre-repo](https://github.com/DanihStephane/WhimsicalPhotoAlbumWithFlippingPages)/issues)

</div>
