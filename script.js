function enviarFormulario() {
    
    alert("Mensaje enviado, te contestaremos a la brevedad");
  
    location.reload();
    return false;
  }

  function openFullscreen(img) {
    var overlay = document.getElementById("fullscreen-overlay");
    var fullscreenImg = document.getElementById("fullscreen-image");
    
    fullscreenImg.src = img.src;
    overlay.style.display = "block";
  }
  
  function closeFullscreen() {
    var overlay = document.getElementById("fullscreen-overlay");
    overlay.style.display = "none";
  }