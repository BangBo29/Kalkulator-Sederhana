function tambah() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("hasil").textContent = "Hasil:";
    document.getElementById("result").innerHTML = num1 + num2;
}

function kurang() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("hasil").textContent = "Hasil:";
    document.getElementById("result").innerHTML = num1 - num2;
}

function kali() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("hasil").textContent = "Hasil:";
    document.getElementById("result").innerHTML = num1 * num2;
}
