function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        "phone number": document.getElementById("phone").value,
    }
    emailjs.send("service_9l7vt7k", "template_8w09g98", parms)
    .then(() => {
        alert("Message sent successfully");
    })
    .catch((error) => {
        console.log("Error sending message:", error);
        alert("There was an error sending your message. Please try again later.");
        });
    }
