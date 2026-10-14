// Hämta token från localStorage
const token = localStorage.getItem("token");

// Om token saknas, skicka användaren till login.html
if (!token) {
    window.location.href = "login.html";
}