document.addEventListener("DOMContentLoaded", function () {
  const continuarBtn = document.getElementById('continuarBtn');
  const discordInput = document.getElementById('discordInput');
  const inicioSection = document.getElementById('inicio');
  const segundaEtapaSection = document.getElementById('segunda-etapa');
  const userH2 = document.querySelector('.user');

  if (localStorage.getItem('discordName')) {
      const discordName = localStorage.getItem('discordName');
      inicioSection.style.display = 'none';
      segundaEtapaSection.style.display = 'flex'; 
      
      userH2.textContent = "Usuário: " + discordName;
  } else {
      segundaEtapaSection.style.display = 'none';
  }

  if (continuarBtn && discordInput && inicioSection) {
      continuarBtn.addEventListener('click', () => {
          const discordName = discordInput.value;

          if (discordName.trim() === '') {
              alert("Por favor, insira seu nome do Discord.");
              return;
          }

          localStorage.setItem('discordName', discordName);
          continuarBtn.textContent = 'Continuando...';

          setTimeout(() => {
              inicioSection.style.display = 'none';
              segundaEtapaSection.style.display = 'flex';
              
              userH2.textContent = "Usuário: " + discordName;
          }, 2000);
      });
  }
});
