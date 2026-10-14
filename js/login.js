const form = document.getElementById("login-form");
const errorMessages = document.getElementById("error-messages");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    errorMessages.innerHTML = "";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    //Validering
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
        const response = await fetch("http://localhost:3001/api/login", {
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

        if (response.ok) {

            // Spara JWT
            localStorage.setItem("token", data.token);

            // Gå till skyddad sida
            window.location.href = "protected.html";

        } else {
            errorMessages.innerHTML =
                `<li>${data.error}</li>`;
        }

    } catch (error) {
        console.error(error);
    }
});