const whatsappNumbers = [
      '+912391239129',
      '+910000111789',
      '+919990022333',
      '+919999222218',
      '+913377728289'
  ];

  // Function to get a random WhatsApp number and update the link's href attribute
  function getRandomWhatsAppNumber(event) {
      event.preventDefault();  // Prevent default link behavior

      const randomIndex = Math.floor(Math.random() * whatsappNumbers.length);
      const selectedNumber = whatsappNumbers[randomIndex];
      
      // WhatsApp URL format
      const whatsappURL = `https://wa.me/${selectedNumber}`;
      
      // Open WhatsApp URL in a new tab
      window.open(whatsappURL, '_blank');
  }

  // Attach the function to both WhatsApp link click events
  document.getElementById('whatsapp-link-left').addEventListener('click', getRandomWhatsAppNumber);
  document.getElementById('whatsapp-link-right').addEventListener('click', getRandomWhatsAppNumber);
