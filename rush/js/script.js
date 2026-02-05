//Smooth Scroll
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      //anchor ทำงานเองถ้า target ไม่มี
      const targetId = link.getAttribute('href');
      if (!targetId.startsWith('#')) return;
  
      const targetSection = document.querySelector(targetId);
      if (!targetSection) return;
  
      e.preventDefault();
  
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  
  //Active Navbar on Scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 90; //เผื่อ navbar
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
  