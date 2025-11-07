window.onload = () => {
  document.body.classList.remove("container");

  const audio = document.getElementById("audio");

  // Função de reprodução que é chamada pelo clique
  window.reproduzir = () => {
    audio.currentTime = 0; // reinicia do começo
    audio.play()
      .then(() => console.log("🎵 Áudio tocando..."))
      .catch(err => console.warn("🔇 Bloqueado até interação do usuário:", err));
  };

  // Se quiser ativar também com mouseOver (somente no PC)
  window.mouseOver = () => {
    audio.play().catch(() => {});
  };
};
