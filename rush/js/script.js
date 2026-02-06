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
  