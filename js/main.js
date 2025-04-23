document.addEventListener('DOMContentLoaded', () => {
    console.log('VictoryPulse est prêt !');
  
    // Gestion de la redirection via le bouton "Voir les stats"
    const statsBtn = document.getElementById('statsBtn');
    if (statsBtn) {
      statsBtn.addEventListener('click', () => {
        window.location.href = 'StatsPage.html';  // Redirection vers la page Stats
      });
    }
  
    // Fonction de redirection via la navbar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        // Optionnel: tu peux faire une animation avant redirection si tu veux
        console.log('Navigation vers :', event.target.href);
      });
    });
  });
  