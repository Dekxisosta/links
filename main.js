document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.createElement("canvas");
  canvas.className = "particles";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  const TETROMINOES = [
      { matrix: [[1, 1, 1, 1]], color: "rgb(0, 255, 255)" },
      { matrix: [[1, 1], [1, 1]], color: "rgb(255, 255, 0)" },
      { matrix: [[0, 1, 0], [1, 1, 1]], color: "rgb(128, 0, 128)" },
      { matrix: [[0, 1, 1], [1, 1, 0]], color: "rgb(0, 255, 0)" },
      { matrix: [[1, 1, 0], [0, 1, 1]], color: "rgb(255, 0, 0)" },
      { matrix: [[1, 0, 0], [1, 1, 1]], color: "rgb(0, 0, 255)" },
      { matrix: [[0, 0, 1], [1, 1, 1]], color: "rgb(255, 165, 0)" }
  ];

  const particles = Array.from({ length: 30 }, () => {
      const type = TETROMINOES[Math.floor(Math.random() * TETROMINOES.length)];
      return {
          x: Math.random() * window.innerWidth,
          y: Math.random() * (window.innerHeight / 2), 
          size: Math.random() * 6 + 10,
          speedY: Math.random() * 0.8 + 0.4,
          speedX: (Math.random() - 0.5) * 0.3,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          maxOpacity: Math.random() * 0.4 + 0.15,
          sway: Math.random() * Math.PI * 2,
          swaySpeed: Math.random() * 0.008 + 0.002,
          matrix: type.matrix,
          color: type.color
      };
  });

  function drawTetromino(x, y, matrix, size, rotation, opacity, baseColor) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;

      const rowCount = matrix.length;
      const colCount = matrix[0].length;
      const offsetX = -(colCount * size) / 2;
      const offsetY = -(rowCount * size) / 2;

      for (let r = 0; r < rowCount; r++) {
          for (let c = 0; c < colCount; c++) {
              if (matrix[r][c]) {
                  const blockX = offsetX + c * size;
                  const blockY = offsetY + r * size;

                  ctx.fillStyle = baseColor;
                  ctx.fillRect(blockX, blockY, size - 1, size - 1);

                  ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
                  ctx.lineWidth = 1;
                  ctx.strokeRect(blockX, blockY, size - 1, size - 1);
              }
          }
      }

      ctx.restore();
  }

  function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const halfHeight = canvas.height / 2;

      particles.forEach((p) => {
          p.sway += p.swaySpeed;
          p.x += Math.sin(p.sway) * 0.3 + p.speedX;
          p.y += p.speedY;
          p.rotation += p.rotationSpeed;

          let currentOpacity = p.maxOpacity;
          if (p.y > 0) {
              const lifeRatio = 1 - (p.y / halfHeight);
              currentOpacity = Math.max(0, p.maxOpacity * lifeRatio);
          }

          drawTetromino(p.x, p.y, p.matrix, p.size, p.rotation, currentOpacity, p.color);

          if (p.y > halfHeight) {
              p.y = -40;
              p.x = Math.random() * canvas.width;
              const type = TETROMINOES[Math.floor(Math.random() * TETROMINOES.length)];
              p.matrix = type.matrix;
              p.color = type.color;
              p.maxOpacity = Math.random() * 0.4 + 0.15;
          }
      });

      requestAnimationFrame(animate);
  }

  animate();
});