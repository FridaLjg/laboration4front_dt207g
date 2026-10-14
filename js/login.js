const form = document.getElementById("login-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

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
            alert(data.error);
        }

    } catch (error) {
        console.error(error);
    }
});