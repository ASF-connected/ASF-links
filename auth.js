const P = btoa("password");

function PPP() {
    const PP = document.getElementById("password").value;
    const EP = btoa(PP);

    if (EP === P) {
        sessionStorage.setItem("loggedIn", "true");
        window.location.href = "links.html";
    } else {
        alert("パスワードが違います");
    }
}
