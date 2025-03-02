
import logoImage from './navbar-logo.jpg'; // Logo
import heroImage from './hero-section.jpg'; // Hero image

// Service images
import service1Image from './services-1.jpg'; // Service 1
import service2Image from './services-2.jpg'; // Service 2
import service3Image from './services-3.jpg'; // Service 3
import service4Image from './services-4.jpg'; // Service 4
import service5Image from './services-5.jpg'; // Service 5
import service6Image from './services-6.jpg'; // Service 6

// Project images
import project1Image from './projects-1.jpg'; // Project 1
import project2Image from './projects-2.jpg'; // Project 2
import project3Image from './projects-3.jpg'; // Project 3
import project4Image from './projects-4.jpg'; // Project 4
import project5Image from './projects-5.jpg'; // Project 5
import project6Image from './projects-6.jpg'; // Project 6

// Since we don't have these specific images yet, we'll use existing images as placeholders
// About section images
const aboutImage = heroImage; // Using hero image as a placeholder for about
const person1Image = service1Image; // Using service images as placeholders for team members
const person2Image = service2Image;
const person3Image = service3Image;

export const IMAGES = {
  LOGO: logoImage,
  HERO: heroImage,
  SERVICE_1: service1Image,
  SERVICE_2: service2Image,
  SERVICE_3: service3Image,
  SERVICE_4: service4Image,
  SERVICE_5: service5Image,
  SERVICE_6: service6Image,
  PROJECT_1: project1Image,
  PROJECT_2: project2Image,
  PROJECT_3: project3Image,
  PROJECT_4: project4Image,
  PROJECT_5: project5Image,
  PROJECT_6: project6Image,
  // Add the missing image references
  ABOUT: aboutImage,
  PERSON_1: person1Image,
  PERSON_2: person2Image,
  PERSON_3: person3Image,
};

export default IMAGES;
