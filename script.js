const whatsappNumbers = [
    '+918571817306',
    '+918571817315',
    // '+919990022333',
    // '+919999222218',
    // '+913377728289'
];

// Function to get a random WhatsApp number and update the link's href attribute
function getRandomWhatsAppNumber(event) {
    event.preventDefault();  // Prevent default link behavior

    const randomIndex = Math.floor(Math.random() * whatsappNumbers.length);
    const selectedNumber = whatsappNumbers[randomIndex];

    // Predefined message that appears in the chat input when WhatsApp opens
    const message = encodeURIComponent("Interested in Laxmi Casino");

    // WhatsApp URL format with predefined message
    const whatsappURL = `https://wa.me/${selectedNumber}?text=${message}`;

    // Open WhatsApp URL in a new tab with the predefined message
    window.open(whatsappURL, '_blank');
}

// Attach the function to both WhatsApp link click events
document.getElementById('whatsapp-link-left').addEventListener('click', getRandomWhatsAppNumber);
document.getElementById('whatsapp-link-right').addEventListener('click', getRandomWhatsAppNumber);
