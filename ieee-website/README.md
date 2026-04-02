# DICON 2027 - IEEE Conference Website (React Version)

This is the React.js version of the DICON 2027 conference website, converted from the original HTML/CSS/JS implementation.

## About DICON 2027

1st Dronacharya International Conference on Intelligent Computing and Emerging Technologies (DICON 2027) is a premier international conference dedicated to advancing intelligent, sustainable, and future-ready digital technologies.

**Theme:** "Intelligence for a Smarter Planet"
**Dates:** April 23-24, 2027
**Mode:** Hybrid
**Venue:** Dronacharya College of Engineering, Gurugram, Haryana, India

## Features

- 🚀 Modern React.js application with hooks and functional components
- 📱 Responsive design with mobile-first approach
- 🎨 Clean UI with custom CSS and Inter font
- 📍 React Router for client-side navigation
- 🖼️ Image gallery with navigation controls
- 📋 Conference information and registration details
- 👥 Committee and speaker information
- 📝 Call for papers and plagiarism policy

## Project Structure

```
ieee-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Header.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AboutInstitute.jsx
│   │   ├── AboutConference.jsx
│   │   ├── CallForPapers.jsx
│   │   ├── Committee.jsx
│   │   ├── Advisory.jsx
│   │   ├── PlenarySpeakers.jsx
│   │   ├── KeynoteSpeakers.jsx
│   │   ├── Registration.jsx
│   │   ├── Contact.jsx
│   │   └── PlagiarismPolicy.jsx
│   ├── assets/
│   │   └── images/
│   ├── App.jsx
│   ├── App.css
│   └── index.jsx
├── package.json
└── README.md
```

## Installation

1. Make sure you have Node.js installed (version 14 or higher)
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

## Usage

### Development Server

Start the development server:

```bash
npm start
```

The app will be available at `http://localhost:3000`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build files will be in the `build` directory.

### Running Tests

Run the test suite:

```bash
npm test
```

## Technologies Used

- **React 18.2.0** - UI library
- **React Router DOM 6.8.0** - Client-side routing
- **React Scripts 5.0.1** - Build tooling
- **CSS3** - Styling with CSS variables
- **Inter Font** - Typography

## Key Features Implemented

### Navigation
- Responsive header with college logos
- Dropdown menus for committee and speakers
- Mobile hamburger menu
- Active page highlighting
- Smooth transitions

### Pages
- **Home**: Welcome message and important dates
- **About Institute**: College information with image gallery
- **About Conference**: Conference details and focus areas
- **Call for Papers**: Conference tracks and submission guidelines
- **Committee**: Organizing committee members
- **Advisory**: Advisory board members
- **Speakers**: Plenary and keynote speakers
- **Registration**: Registration categories and fees
- **Contact**: Contact information and venue details
- **Plagiarism Policy**: Anti-plagiarism guidelines

### Interactive Elements
- Image gallery with navigation buttons
- Dropdown menus with smooth animations
- Mobile-responsive navigation
- Hover effects and transitions

## Customization

### Adding New Pages
1. Create a new component in `src/pages/` with `.jsx` extension
2. Add the route in `App.jsx`
3. Add navigation link in `Header.jsx`

### Styling
- Modify `src/App.css` for global styles
- CSS variables are defined at the top for easy theme changes
- Responsive breakpoints are included

### Images
- Place images in `src/assets/images/`
- Import them in components using `import imageName from '../assets/images/image.jpg'`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For any questions about the React version of this website, please contact the development team.

**Conference Contact:**
- Email: info@dicon2027.org
- Website: www.dicon2027.org
- Phone: +91-XXXXXXXXXX
