window.addEventListener('scroll', function () {
    var backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  document.getElementById('back-to-top').addEventListener('click', function () {
    var navBar = document.getElementById('nav-bar');
    var yOffset = navBar.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: yOffset,
      behavior: 'smooth'
    });
  });