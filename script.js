document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('nav');
  
    // Adiciona um evento de clique no botão de menu
    menuButton.addEventListener('click', function() {
      nav.classList.toggle('show');
    });
  
    // Adiciona um evento de clique no corpo da página
    document.body.addEventListener('click', function(event) {
      // Verifica se o clique não foi dentro do menu, do botão de menu ou dos links do menu
      if (!nav.contains(event.target) && event.target !== menuButton && !event.target.closest('nav ul')) {
        // Esconde o menu se estiver visível
        if (nav.classList.contains('show')) {
          nav.classList.remove('show');
        }
      }
    });
  });
  