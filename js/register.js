const form = document.getElementById("register-form");
const errorMessages = document.getElementById("error-messages");

//Eventlyssnare
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    errorMessages.innerHTML = "";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validering
    if (!username || !password) {

        if (!username) {
            errorMessages.innerHTML +=
                "<li>Användarnamn måste anges.</li>";
        }

        if (!password) {
            errorMessages.innerHTML +=
                "<li>Lösenord måste anges.</li>";
        }

        return;
    }

    try {
        //Skickar username och password till API
        console.log("Skickar request...");
        const response = await fetch("http://localhost:3001/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        });

        const data = await response.json();

        //Kontroll
        if (response.ok) {
            alert("Användare skapad!");

            // Skicka användaren till login-sidan
            window.location.href = "login.html";
        } else {
            errorMessages.innerHTML =
                `<li>${data.error}</li>`;
        }

    } catch (error) {
        console.error(error);
    }
});