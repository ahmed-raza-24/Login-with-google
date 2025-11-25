const btn = document.getElementById("gmail");
const textdisplay = document.getElementById("textdisplay");

btn.addEventListener("click", function () {
    textdisplay.textContent = "Redirecting to Google Login...";
    
    setTimeout(() => {
        textdisplay.textContent = "✔ Login Successful! Welcome Ahmed!";
        textdisplay.style.color = "green";
    }, 1500);
});
