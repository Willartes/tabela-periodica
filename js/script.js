document.addEventListener("DOMContentLoaded", () => {
    const infoEspaco = document.getElementById("info-espaco");
  
    // Exemplo de conteúdo dinâmico que será exibido no espaço
    infoEspaco.innerHTML = `
      <strong>Quadro de Informações</strong>
      <p>Este é um espaço dedicado a exibir mais detalhes sobre os elementos químicos.</p>
    `;
  
    // Animação adicional ao passar o mouse sobre o quadro
    infoEspaco.addEventListener("mouseover", () => {
      infoEspaco.style.transform = "scale(1.05)";
      infoEspaco.style.transition = "transform 0.3s";
    });
  
    infoEspaco.addEventListener("mouseout", () => {
      infoEspaco.style.transform = "scale(1)";
    });
  });