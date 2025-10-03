// MAIN 1 FUNCION NORMAL PARA UN SOLO NUMERO DE TELEFONO
window.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".Btn");
    setTimeout(() => {
        btn.classList.add("expand");
    }, 300); // delay para suavizar
});

// evento de click para el pixel

document.addEventListener("DOMContentLoaded", () => {
  const whatsappBtn = document.getElementById("whatsappBtn");
  
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      // Evento personalizado en Meta Pixel
      fbq('trackCustom', 'WhatsappClick', {
        buttonName: 'WhatsApp'
      });
      
      console.log("WhatsApp button clicked - Pixel event sent!");
    });
  }
});


const whatsappNumber = "5493424073095"; // Reemplaza con tu numero (con código país sin + y sin espacios)
const message = "Hola, quiero un usuario."; // reemplaza el mensaje dentro de las (""), no las borres

function sendWhatsAppMessage() {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
}

// Vincular al botón
document.querySelector(".Btn").addEventListener("click", sendWhatsAppMessage);