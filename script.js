window.addEventListener('scroll', () => {
    let scrollButton = document.querySelector('.gototop > div');
    scrollButton.classList.toggle("gotop", window.scrollY > 100);
  });