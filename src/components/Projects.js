import React from 'react';
import styles from './Projects.module.css';
import WebImage from '../Images/party.jpg'; 
import WebImage1 from '../Images/weather.png'; 
import WebImage2 from '../Images/quiz.jpg';
import WebImage3 from '../Images/smartmed.jpeg';
import WebImage4 from '../Images/Conference.jpg';
import AppImage1 from '../Images/travel.jpg';
import AppImage2 from '../Images/fruites.jpg';
import UIUXImage1 from '../Images/Food.jpg';
import UIUXImage2 from '../Images/Cloth.jpg';

const projects = [
 
  {
  type: 'Web Development',
  description: 'SMARTMED – University Medical Management System (Final Project)',
  shortDescription: 'A web-based healthcare management system developed to digitalize student medical records and streamline university medical center operations. Features include patient registration, QR-based identification, digital medical report transfer, hospital and pharmacy integration, telemedicine (video consultations), inventory management, and secure REST API-based data exchange. Built to improve accessibility, reduce paper usage, and enhance healthcare efficiency for students.',
  image: WebImage3,
  repoLink: 'https://github.com/Dhanuka2002/SmartMed-Frontend.git',
},
{
  type: 'Web Development',
  description: 'Party Item Shopping Web Site – ESD Final Project',
  shortDescription: 'A group-based web application for selecting and purchasing party items with dynamic product listings, shopping cart functionality, and seamless backend integration. Designed to provide a smooth and interactive shopping experience.',
  image: WebImage,
  repoLink: 'https://github.com/dumeeshatharukee/Party-Items-Web-Application.git',
},

 {
  type: 'Web Development',
  description: 'Real-Time Weather Dashboard',
  shortDescription: 'An end-to-end full-stack real-time weather dashboard with automatic data updates every minute. Implemented a RESTful backend API using Node.js, integrated interactive maps using Leaflet, and deployed the system on Railway and AWS EC2 (Ubuntu t3.micro) with PM2 and configured AWS security groups for reliability and scalability.',
  image: WebImage1,
  repoLink: 'https://github.com/dumeeshatharukee/weather-dashboard.git',
},
{
  type: 'Web Development',
  description: 'Quiz Web App',
  shortDescription: 'A React-based quiz application with multiple-choice questions and score tracking.I used React.js for build in this web app.',
  image: WebImage2,
  repoLink: 'https://github.com/dumeeshatharukee/Quiz-App.git',
},

  {
  type: 'App Development',
  description: 'Travel Website',
  shortDescription: 'A user-friendly travel site that highlights top destinations and trip planning in Sri Lanka. Built using HTML, CSS, and JavaScript, this project highlights my skills in front-end development and user interface design',
  image: AppImage1,
  repoLink: 'https://www.linkedin.com/posts/dumeesha-tharukee-186599306_webdevelopment-frontenddevelopment-html-activity-7301515881736527872-Ur2R?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE4KcrYBK86w62fYbLGNLvdh8ntoAIfeNm8',
},

{
  type: 'Web Development',
  description: 'Conference Management System',
  shortDescription: 'A web-based system designed to manage academic conferences, featuring Home and Schedule pages, participant registration, secure login and authentication, and an Admin Dashboard for managing sessions, tracks, and attendance efficiently.',
  image: WebImage4,
  repoLink: 'https://github.com/your-github-link-here',
}
,
{
  type: 'Web Development',
  description: 'Fruits Selling E-commerce Website',
  shortDescription: 'A responsive e-commerce website designed for selling fruits, featuring a modern navigation bar, attractive hero section, smooth animations using Framer Motion, and a fully responsive layout built with best UI/UX practices.',
  image: AppImage2,
  repoLink: 'https://github.com/dumeeshatharukee/Fruits-E-commerce-Website-with-Frame-Motion.git',
},

  
  {
  type: 'UI/UX Design',
  description: 'Food Delivery App',
  shortDescription: 'A modern and intuitive UI design for a food ordering and delivery mobile app.',
  image: UIUXImage1,
  repoLink: 'https://www.figma.com/design/7Nn0Ih32gudiZpk8jBwwnH/Untitled?node-id=0-1&p=f&t=8vSgZQ3pbOWVviys-0',
},
{
  type: 'UI/UX Design',
  description: 'Clothing App Design',
  shortDescription: 'A stylish and responsive app UI for browsing and shopping clothes online.',
  image: UIUXImage2,
  repoLink: 'https://www.figma.com/design/lWq3OqCSVTCwhYNBf371Rd/Untitled?t=8vSgZQ3pbOWVviys-0',
}

];

function Projects() {
  const webProjects = projects.filter(project => project.type === 'Web Development');
  const appProjects = projects.filter(project => project.type === 'App Development');

  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>My Projects</h2>
      
      {/* First Row: Web Projects */}
<div className={styles.projectRow}>
  {webProjects.map((project, index) => (
    <div key={index} className={styles.projectItem}>
      <img 
        src={project.image} 
        alt={project.description} 
        className={styles.projectImage} 
      />
      
      <p className={styles.projectDescription}>{project.description}</p>
      
      {/* Add short description below main description */}
      <p className={styles.projectShortDescription}>{project.shortDescription}</p>
      
      <button 
        className={styles.viewButton} 
        onClick={() => window.open(project.repoLink, '_blank')}
      >
        View on GitHub
      </button>
    </div>
  ))}
</div>

        
  
     {/* Second Row: App Projects */}
<div className={styles.projectRow}>
  {appProjects.map((project, index) => (
    <div key={index} className={styles.projectItem}>
      <img 
        src={project.image} 
        alt={project.description} 
        className={styles.projectImage} 
      />
      
      <p className={styles.projectDescription}>{project.description}</p>
      
      {/* Add this line to show the short description */}
      <p className={styles.projectShortDescription}>{project.shortDescription}</p>
      
      <button 
        className={styles.viewButton} 
        onClick={() => window.open(project.repoLink, '_blank')}
      >
        View on LinkedIn
      </button>
    </div>
  ))}
</div>

     
      {/* UI/UX Design Projects Row */}
<h3 className={styles.title}>UI/UX Design Projects</h3>
<div className={styles.projectRow}>
  {projects
    .filter(project => project.type === 'UI/UX Design')
    .map((project, index) => (
      <div 
        key={index} 
        className={styles.projectItem} 
        onClick={() => window.open(project.repoLink, '_blank', 'noopener,noreferrer')}
        style={{ cursor: 'pointer' }}
      >
        <img src={project.image} alt={project.description} className={styles.projectImage} />
        <h4 className={styles.projectTitle}>{project.description}</h4>
        <p className={styles.projectShortDescription}>{project.shortDescription}</p>
        <button 
          className={styles.viewButton} 
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click
            window.open(project.repoLink, '_blank', 'noopener,noreferrer');
          }}
        >
          View on Figma
        </button>
      </div>
    ))}
</div>


    </section>
  );
}

export default Projects;