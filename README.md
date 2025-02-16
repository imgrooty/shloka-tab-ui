# Shloka Tab UI

## 🌟 Project Overview
Shloka Tab UI is a spiritual-themed browser extension/web application that provides a serene and inspirational new tab experience, featuring Sanskrit shlokas, customizable themes, and quick links.

## ✨ Features
- **Dynamic Shloka Display**: Randomly showcases Sanskrit shlokas with transliteration and meaning
- **Customizable Themes**: Multiple pre-defined color themes inspired by spiritual aesthetics
  - Spiritual Saffron
  - Divine Indigo
  - Emerald Wisdom
  - Royal Amethyst
- **Background Images**: Curated images from Mahabharata, Ramayana, and other Hindu mythological sources
- **Quick Links**: Easily accessible bookmarks and navigation
- **Dark/Light Mode Support**

## 🛠 Technologies
- React
- TypeScript
- Vite
- Tailwind CSS
- Supabase (Backend/Database)
- Lucide React Icons

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/shloka-tab-ui.git
   cd shloka-tab-ui
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   - Create a `.env` file in the root directory
   - Add your Supabase credentials:
     ```
     VITE_SUPABASE_URL=your_supabase_project_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 🔧 Configuration
- Customize themes in `src/App.tsx`
- Modify quick links and sidebar links in the same file
- Add or edit background images in the application

## 📦 Project Structure
- `src/App.tsx`: Main application component
- `src/types.ts`: TypeScript type definitions
- `src/main.tsx`: Entry point
- `src/index.css`: Global styles

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments
- Inspired by spiritual wisdom and technological innovation
- Icons by Lucide
- Styling with Tailwind CSS
