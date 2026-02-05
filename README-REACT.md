# Raghav Bagdi - Portfolio Website

A modern, responsive portfolio website built with React and the MERN stack.

## Features

- **Modern React Architecture**: Component-based structure with hooks
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Interactive Sidebar**: Expandable contact information
- **PDF Resume Viewer**: Embedded PDF viewer with download functionality
- **Project Showcase**: Dynamic project cards with descriptions
- **Tech Stack Display**: Organized technology categories
- **Smooth Navigation**: Tab-based navigation between sections

## Tech Stack

### Frontend
- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **CSS3**: Custom CSS with CSS variables
- **Ionicons**: Icon library

### Development
- **Create React App**: Build tooling and development environment
- **ES6+**: Modern JavaScript features

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your resume PDF:
   - Place your resume PDF at `public/assets/documents/resume.pdf`
   - Update your profile image at `public/assets/images/my-avatar.png`

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

## Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Navbar.js
│   │   ├── Resume.js
│   │   └── Sidebar.js
│   ├── styles/
│   │   └── App.css
│   ├── App.js
│   └── index.js
└── package.json
```

## Customization

### Updating Personal Information

Edit the components in `src/components/` to customize:
- **Sidebar.js**: Name, title, and contact links
- **About.js**: Personal description, projects, and tech stack
- **Resume.js**: Resume PDF path

### Styling

All styles are in `src/styles/App.css` using CSS custom properties for easy theming.
