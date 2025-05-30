# Portfolio Website - Sriprada Upadya

A minimalistic, responsive portfolio website showcasing skills, projects, and professional experience. Built with clean HTML, CSS, and JavaScript following modern web design principles.

## 🌟 Features

### Design & UI
- **Minimalistic Design**: Clean black and white color scheme
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Typography**: IBM Plex Mono font for a modern, technical aesthetic
- **No Hover Effects**: Clean, static interaction design
- **Touch-Friendly**: Optimized for mobile interactions with disabled tap highlights

### Sections
- **Index**: Personal introduction, social links, and featured posts preview
- **About**: Technical skills, education, and professional background
- **Blog**: Blog post showcase with filtering capabilities (ready for content)
- **Work**: Project portfolio and professional experience timeline
- **Now**: Current activities, learning goals, and contact information

### Technical Features
- **Single Page Application**: Smooth navigation between sections
- **JavaScript Navigation**: Dynamic section switching with active states
- **Blog Filtering**: Ready-to-use blog post categorization system
- **PDF Resume**: Direct download/view functionality
- **Keyboard Navigation**: Arrow key support for section navigation
- **Scroll Animations**: Fade-in effects for interactive elements
- **Cross-Browser Compatibility**: Works across modern browsers

## 🚀 Live Demo

- **Local Server**: `http://localhost:8000`
- **Network Access**: `http://192.168.43.231:8000` (accessible from mobile devices)

## 📁 Project Structure

```
Minimal_Site/
├── index.html              # Main HTML file
├── style.css               # Stylesheet with responsive design
├── script.js              # JavaScript for navigation and interactions
├── Sriprada_Upadya.pdf    # Resume file
└── README.md              # Project documentation
```

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Typography**: IBM Plex Mono (Google Fonts)
- **Icons**: Custom SVG icons
- **Server**: Python HTTP Server (for development)
- **Responsive Design**: CSS Grid, Flexbox, Media Queries

## ⚙️ Setup Instructions

### Prerequisites
- Python 3.x installed on your system
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation & Running

1. **Clone or download the project files**
   ```bash
   cd /path/to/your/directory
   ```

2. **Start the local server**
   ```bash
   python -m http.server 8000
   ```

3. **Access the website**
   - Local: `http://localhost:8000`
   - Network: `http://[YOUR-IP]:8000`

4. **Stop the server**
   - Press `Ctrl + C` in the terminal

## 🎨 Customization Guide

### Personal Information
1. **Update Content**: Edit `index.html` to replace personal information
2. **Replace Resume**: Replace `Sriprada_Upadya.pdf` with your resume file
3. **Social Links**: Update URLs in the social links section
4. **Project Information**: Modify project descriptions and links

### Design Changes
1. **Colors**: Modify CSS variables in `style.css`
2. **Typography**: Change font imports in HTML head
3. **Layout**: Adjust grid and flexbox properties in CSS
4. **Animations**: Modify transition properties in CSS and JavaScript

### Adding Content
1. **Blog Posts**: Uncomment and populate blog section
2. **Projects**: Add new project cards in the work section
3. **Skills**: Update technical skills in the about section
4. **Experience**: Modify timeline in work section

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px  
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 Key CSS Classes

### Layout
- `.container`: Main content wrapper (max-width: 800px)
- `.section`: Individual page sections
- `.hidden`: Hidden sections (JavaScript controlled)

### Components
- `.nav-link`: Navigation menu items
- `.social-link`: Social media buttons
- `.project-card`: Project showcase cards
- `.blog-post`: Blog post items
- `.contact-link`: Contact buttons

### Utilities
- `.section-title`: Main headings
- `.subsection-title`: Secondary headings
- `.tech-tag`: Technology badges

## 📋 Development Status

### Completed Features ✅
- Responsive design implementation
- Navigation system with JavaScript
- Contact links and social media integration
- Resume download functionality
- Mobile optimization
- Touch interaction improvements

### Pending Updates 🔄
See `PENDING_UPDATES.md` for detailed roadmap including:
- Blog content creation
- Project link updates
- Additional interactive features
- SEO improvements

## 🎯 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📊 Performance Features

- **Lightweight**: Minimal external dependencies
- **Fast Loading**: Optimized CSS and JavaScript
- **Smooth Animations**: Hardware-accelerated transitions
- **Mobile Optimized**: Touch-friendly interactions

## 🔒 Security Notes

- No external JavaScript libraries (security-first approach)
- Local file serving only
- No data collection or tracking

## 📞 Contact Information

- **Email**: sriprada346@gmail.com
- **LinkedIn**: [linkedin.com/in/sripradaupadya](https://linkedin.com/in/sripradaupadya)
- **GitHub**: [github.com/sriprada346](https://github.com/sriprada346)
- **Twitter**: [twitter.com/sriprada](https://twitter.com/sriprada)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Font**: IBM Plex Mono by IBM
- **Icons**: Custom SVG implementations
- **Design Inspiration**: Minimalistic portfolio trends

---

**Last Updated**: May 30, 2025  
**Version**: 1.0.0  
**Author**: Sriprada Upadya 
