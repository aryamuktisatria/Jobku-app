# 💼 Jobku App

<div align="center">
  <p><strong>Modern Job Portal Application</strong></p>
  <p>A sleek and responsive job listing platform built with the latest web technologies</p>
  
  ![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
</div>

---

## 🌟 Features

- 🎨 **Modern UI/UX** - Clean and intuitive interface with smooth animations
- 📱 **Fully Responsive** - Seamless experience across all devices
- ⚡ **Lightning Fast** - Built with Next.js App Router for optimal performance
- 🎯 **Job Search & Filtering** - Advanced search capabilities with multiple filters
- 📝 **Application Forms** - Integrated with Formspree for easy submissions
- 🌓 **Dark Mode Support** - Eye-friendly theme switching
- ♿ **Accessible** - WCAG compliant components from shadcn/ui

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **UI Components** | shadcn/ui, React Bits |
| **Icons** | Heroicons, Lucide React |
| **Forms** | Formspree |
| **Deployment** | Vercel |

---

## 📦 Installation

### Prerequisites

Make sure you have the following installed on your machine:
- Node.js 18+ 
- npm / yarn / pnpm / bun

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/aryamuktisatria/Jobku-app.git
   cd Jobku-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Formspree Configuration
   NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id_here
   
   # Add other environment variables as needed
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this Next.js app is through Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/aryamuktisatria/Jobku-app)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy!

For detailed instructions, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## 📂 Project Structure

```
Jobku-app/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── ...                # Other routes
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── lib/                   # Utility functions
├── public/               # Static assets
├── styles/               # Global styles
├── .env.local           # Environment variables (create this)
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

---

## 🎨 UI Components

This project uses a combination of component libraries:

### shadcn/ui
Pre-built, accessible components built with Radix UI and Tailwind CSS.

```bash
# Add a new component
npx shadcn-ui@latest add button
```

### React Bits
Additional utility components for enhanced functionality.

### Icons
- **Heroicons** - Beautiful hand-crafted SVG icons
- **Lucide React** - Simply beautiful open-source icons

```tsx
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Search } from 'lucide-react'
```

---

## 📝 Form Integration

This app uses **Formspree** for handling form submissions without backend code.

### Setup Formspree:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID
4. Add it to `.env.local`:
   ```env
   NEXT_PUBLIC_FORMSPREE_ID=your_form_id
   ```

### Usage Example:

```tsx
<form action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`} method="POST">
  <input type="email" name="email" required />
  <button type="submit">Submit</button>
</form>
```

---

## 🧪 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Check TypeScript types |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Aryamukti Satria Hendrayana**

- GitHub: [@aryamuktisatria](https://github.com/aryamuktisatria)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons
- [Lucide](https://lucide.dev/) - Beautiful & consistent icon toolkit
- [Formspree](https://formspree.io/) - Form backend service
- [Vercel](https://vercel.com/) - Deployment platform

---

<div align="center">
  <p>Made with ❤️ by Aryamukti Satria</p>
  <p>⭐ Star this repository if you find it helpful!</p>
</div>
