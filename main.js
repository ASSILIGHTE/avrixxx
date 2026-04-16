const text = "Aku punya sesuatu yang indah untukmu...\nKlik dan lihat 🌸";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typingText").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}

window.onload = () => {
  // typing effect
  if (document.getElementById("typingText")) {
    typeEffect();
  }

  // 🔥 aktifkan animasi bunga
  const container = document.querySelector(".container");
  if (container) {
    setTimeout(() => {
      container.classList.add("play");
    }, 300);
  }
};

function goToFlower() {
  const music = document.getElementById("bgMusic");

  if (music) {
    music.play().catch(() => {});const text = "Aku punya sesuatu yang indah untukmu...\nKlik dan lihat 🌸";
    let index = 0;
    
    function typeEffect() {
      if (index < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
      }
    }
    
    window.onload = () => {
      // typing effect (halaman index)
      if (document.getElementById("typingText")) {
        typeEffect();
      }
    
      // animasi bunga (halaman flower)
      const container = document.querySelector(".container");
      if (container) {
        setTimeout(() => {
          container.classList.add("play");
        }, 300);
      }
    };
    
    function goToFlower() {
      const music = document.getElementById("bgMusic");
    
      if (music) {
        music.play().catch(() => {});
      }
    
      setTimeout(() => {
        window.location.href = "flower.html";
      }, 800);
    }
  }

  setTimeout(() => {
    window.location.href = "flower.html";
  }, 800);
}
onload = () =>{
        document.body.classList.remove("container");
};
