const form = document.getElementById("register-form");

//Eventlyssnare
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

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
            alert(data.error);
        }

    } catch (error) {
        console.error(error);
    }
});