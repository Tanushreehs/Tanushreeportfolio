// App.js
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, User } from 'lucide-react';
import './App.css';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Interactive Resume Website",
      description: "A responsive and interactive resume website showcasing personal information, skills, and experience. Features smooth animations, mobile-friendly design, and modern UI elements.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Tanushreehs",
      live: "https://yourresume.netlify.app",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=250&fit=crop"
    },
    {
      title: "Parking Management System",
      description: "A comprehensive web-based parking management system with real-time slot availability, user registration, booking functionality, and admin dashboard for managing parking spaces efficiently.",
      tech: ["HTML5", "CSS3", "XAMPP", "MySQL", "PHP"],
      github: "https://github.com/Tanushreehs/parking-management",
      live: "#",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=400&h=250&fit=crop"
    }
  ];

  const skills = [
    "HTML", "CSS", "JavaScript", "React", "PHP", "MySQL", "Git"
  ];

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="profile-image">
            <User size={48} />
          </div>
          <h1 className="hero-title">Tanushree HS</h1>
          <p className="hero-subtitle">Student</p>
          <p className="hero-description">
            Passionate about creating beautiful, functional, and user-centered digital experiences.
            I love bringing ideas to life through code and design.
          </p>
          <div className="social-links">
            <a href="https://github.com/Tanushreehs" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/tanushree-hs-21394a310" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="mailto:tanushreehs017@gmail.com" className="social-link">
              <Mail size={24} />
            </a>
          </div>
          <button onClick={() => scrollToSection('about')} className="scroll-down">
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p>
            I am an aspiring front-end developer with a strong interest in creating visually appealing and user-friendly web interfaces.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index} className="skill">{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tech-stack">
                  {project.tech.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={20} /> GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} /> Live
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>

          <div className="contact-grid">
            <div className="contact-item">
              <Mail size={32} />
              <h3>Email</h3>
              <p>tanushreehs017@gmail.com</p>
            </div>
            <div className="contact-item">
              <Github size={32} />
              <h3>GitHub</h3>
              <p>
                <a href="https://github.com/Tanushreehs" target="_blank" rel="noopener noreferrer">
                  @Tanushreehs
                </a>
              </p>
            </div>
            <div className="contact-item">
              <Linkedin size={32} />
              <h3>LinkedIn</h3>
              <p>
                <a href="https://www.linkedin.com/in/tanushree-hs-21394a310" target="_blank" rel="noopener noreferrer">
                  Tanushree HS
                </a>
              </p>
            </div>
          </div>

          <a href="mailto:tanushreehs017@gmail.com" className="contact-btn">
            <Mail size={20} /> Let's Talk
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Tanushree HS. Built with React and CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
