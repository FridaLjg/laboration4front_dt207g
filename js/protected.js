// Hämta token från localStorage
const token = localStorage.getItem("token");

// Om token saknas, skicka användaren till login.html
if (!token) {
    window.location.href = "login.html";
}

// Anropa skyddad route
fetch("http://localhost:3001/api/protected", {
    headers: {
        Authorization: `Bearer ${token}`
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("protected-message").textContent =
            `${data.message}`;
    })
    .catch(error => {
        console.error(error);
    });