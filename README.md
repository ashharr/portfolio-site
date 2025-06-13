# Portfolio Site

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. This portfolio showcases my professional journey, projects, and skills as a Senior Software Engineer.

## 🚀 Features

- Responsive design that works on all devices
- Dark/Light mode toggle
- Interactive timeline of professional experience
- Project showcase with detailed descriptions
- Skills and technologies section
- Contact information
- Modern UI with smooth animations

## 📋 Prerequisites

- Node.js (v14.18+ or v16+)
- npm (comes with Node.js)
- Git

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/ashharr/portfolio-site.git
cd portfolio-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 📁 Project Structure

```
portfolio-site/
├── public/
│   └── assets/         # Project images and favicon
├── src/
│   ├── components/     # React components
│   ├── data/          # Data files for projects and timeline
│   ├── styles/        # CSS and Tailwind styles
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── index.html         # HTML template
└── package.json       # Project dependencies and scripts
```

## 📝 Adding New Content

### Adding a New Project

1. Add project image to `public/assets/`
2. Open `src/data/portfolio.js`
3. Add a new project object following this structure:
```javascript
{
  title: "Project Name",
  image: "/assets/project-image.jpg",
  description: "Project description",
  tags: ["React", "Node.js", "MongoDB"],
  category: "web app",
  github: "https://github.com/username/project",
  webapp: "https://project-url.com"
}
```

### Adding a Timeline Item

1. Open `src/data/timeline.js`
2. Add a new timeline object following this structure:
```javascript
{
  date: "Month Year",
  title: "Position/Event",
  location: "Company/Location",
  description: "Description of role/event"
}
```

## 🎨 Customization

### Changing Theme Colors

1. Open `src/styles/tailwind.css`
2. Modify the color variables in the `:root` section
3. Update the dark mode colors in the `[data-theme='dark']` section

### Updating Personal Information

1. Open `src/components/Intro.jsx` to update personal information
2. Modify `src/data/timeline.js` to update professional experience
3. Update `src/data/portfolio.js` to modify projects

## 🚀 Deployment

The site can be deployed to any static hosting service like:
- GitHub Pages
- Netlify
- Vercel
- AWS S3

## 📦 Build

To create a production build:
```bash
npm run build
```

The build files will be in the `dist` directory.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Contact

Ashhar - [@ashharr](https://github.com/ashharr)

Project Link: [https://github.com/ashharr/portfolio-site](https://github.com/ashharr/portfolio-site)
