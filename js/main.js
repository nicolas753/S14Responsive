document.addEventListener('DOMContentLoaded', function() {
    const carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleSlidesOnly'), {
      interval: 2000
    });
  });

  function toggleOptions() {
    const optionsDropdown = document.getElementById('optionsDropdown');
    optionsDropdown.style.display = (optionsDropdown.style.display === 'block') ? 'none' : 'block';
  }

