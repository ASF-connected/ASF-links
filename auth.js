const P = btoa("password");

function PPP() {
    const PP = document.getElementById("password").value;
    const EP = btoa(PP);

    if (EP === P) {
        window.location.href = "links.html";
    } else {
        alert("パスワードが違います");
    }
}