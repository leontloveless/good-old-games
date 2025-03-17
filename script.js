const gameUrls = {
  2048: "https://play2048.co/",
  tetris: "https://tetris.com/play-tetris",
  snake: "https://playsnake.org/",
};

document.querySelectorAll(".nav-btn").forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    document.querySelectorAll(".nav-btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active class to clicked button
    button.classList.add("active");

    // Update iframe source
    const game = button.dataset.game;
    const gameFrame = document.getElementById("game-frame");
    gameFrame.src = gameUrls[game];
  });
});
