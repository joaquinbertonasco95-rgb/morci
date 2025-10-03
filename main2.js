// ESTE MAIN ALTERNATIVO ES PARA VARIAR ENTRE 3 NUMEROS DE TELEFONO


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

// Array de números disponibles
const whatsappNumbers = [
    "5493562442986",
    "5493511234567",
    "5493519876543"
];

// Mensaje fijo
const message = "Hola, me interesó tu producto."; 

function sendWhatsAppMessage() {
    // Elegir un número aleatorio
    const randomIndex = Math.floor(Math.random() * whatsappNumbers.length);
    const selectedNumber = whatsappNumbers[randomIndex];

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${selectedNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
}

// Vincular al botón
document.querySelector(".Btn").addEventListener("click", sendWhatsAppMessage);
