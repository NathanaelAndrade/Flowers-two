window.onload = () => {
  const audio = document.getElementById("audio");
  const playButton = document.getElementById("playButton");

  // Remove qualquer classe antiga se quiser
  document.body.classList.remove("container");

  // Evento direto no botão (precisa ser um clique físico)
  playButton.addEventListener("click", async () => {
    try {
      await audio.play();
      playButton.innerText = "🎶 Tocando...";
      console.log("✅ Música reproduzida com sucesso!");
    } catch (err) {
      console.error("❌ Erro ao tentar tocar o áudio:", err);
      playButton.innerText = "⚠️ Toque novamente para permitir o som";
    }
  });
};
