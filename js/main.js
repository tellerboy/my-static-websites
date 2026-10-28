/**
 * main.js - Teller’s Higts Technologies
 */

const WHATSAPP_NUMBER = "2349166119296"; // No + sign

// ==========================
// COURSE ENROLLMENT
// ==========================
function enroll(courseName) {

    const message =
`Hello Teller’s Higts Technologies! 👋

I am interested in enrolling for:

🎓 Course: ${courseName}

Please provide payment details and next steps.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
}


// ==========================
// SERVICE REQUEST
// ==========================
function requestService(serviceType, packageLevel) {

    const message =
`Hello Teller’s Higts Technologies! 👋

I would like to hire your agency for:

🛠 Service: ${serviceType}
📦 Package: ${packageLevel}

Please let me know how we can proceed.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
}


// ==========================
// CONTACT FORM
// ==========================
document.addEventListener('DOMContentLoaded', function () {

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {

        contactForm.addEventListener('submit', function (e) {

            e.preventDefault();

            const name = document.getElementById('name').value;
            const subject = document.getElementById('subject').value;
            const userMsg = document.getElementById('message').value;

            const finalMsg =
`📩 NEW CONTACT FORM MESSAGE

👤 Name: ${name}
🏷 Subject: ${subject}

💬 Message:
${userMsg}`;

            const encodedMsg = encodeURIComponent(finalMsg);

            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`, '_blank');

        });

    }

});
