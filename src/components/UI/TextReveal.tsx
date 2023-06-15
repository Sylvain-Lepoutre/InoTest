import { useEffect } from 'react'

const TextReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 200;
        
      if (elementTop < windowHeight - elementVisible && !element.classList.contains("active")) {
        element.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
};

export default TextReveal;
