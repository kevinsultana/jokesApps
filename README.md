cat << 'EOF' > README.md
# 😂 Funny Categories - React Native App

A fun and interactive React Native app that displays random jokes categorized by topic using [JokeAPI](https://jokeapi.dev/). Includes expandable list views, animated joke items, pull-to-refresh, and "Load More" functionality.

---

## ✨ Features

- 📂 Expandable joke categories  
- 😂 Fetch jokes from JokeAPI  
- 📦 Animated joke items (fade-in effect)  
- 🔄 Pull to refresh  
- ⬆️ "Go Top" functionality  
- ➕ Load more jokes per category  
- ⚙️ Clean architecture & modular codebase  
- 🎨 Doodle cartoon background with responsive layout  

---

## 📱 Preview

> Tambahkan screenshot di sini jika ada  
> ![App Screenshot](https://your-screenshot-url-if-any.png)

---

## 🚀 Getting Started

### 1. Clone the Repo

\`\`\`bash
git clone https://github.com/yourusername/funny-categories-app.git
cd funny-categories-app
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
# atau
yarn install
\`\`\`

### 3. Run the App

#### Menggunakan Expo:

\`\`\`bash
npx expo start
\`\`\`

- Scan QR code dengan aplikasi **Expo Go** di Android/iOS  
- Jalankan di emulator dengan:  
  - \`i\` untuk iOS  
  - \`a\` untuk Android  

---

## ⚙️ Build Instructions

### Android APK

\`\`\`bash
npx expo build:android
# atau jika menggunakan EAS:
npx eas build -p android
\`\`\`

### iOS (Khusus Mac)

\`\`\`bash
npx eas build -p ios
\`\`\`

> 💡 Untuk build iOS butuh akun Apple Developer dan macOS.

---

## 🧩 Project Structure

\`\`\`bash
📁 components/          # UI components seperti Header, CategoryItem
📁 animation/           # Komponen animasi
📁 styles/              # StyleSheet + palet warna
📁 utils/               # Fungsi API dan helper
📄 App.js               # Entry point aplikasi
\`\`\`

---

## 📦 Dependencies

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [JokeAPI](https://jokeapi.dev/)
- \`react-native-vector-icons\`
- \`react-native-responsive-screen\`
- \`react-native-reanimated\`

---

## 📌 To-Do

- [ ] Dark mode support 🌙  
- [ ] Favorite jokes dengan AsyncStorage 💾  
- [ ] Share jokes 📤  

---

## 👨‍💻 Developer

**Kevin Sultana Herman**  
- 🌐 [Portfolio](https://kevinsultana.carrd.co/)  
- 💼 [LinkedIn](https://www.linkedin.com/in/kevin-sultana-308a48213/)  
- 📧 kevinpdg.ks@gmail.com  

---

## 📄 License

MIT License — feel free to use and modify!
EOF
