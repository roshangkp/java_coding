const qrInput = document.getElementById("qrInput");
const generateBtn = document.getElementById("generateBtn");
const qrCodeBox = document.getElementById("qrcode");
const downloadBtn = document.getElementById("downloadBtn");


// =====================================
// GENERATE QR CODE
// =====================================

function generateQR() {

    const text = qrInput.value.trim();

    // Purana QR remove karo
    qrCodeBox.innerHTML = "";

    // Agar input empty hai
    if (text === "") {
        alert("Please type something first!");
        return;
    }

    // QR Code generate
    new QRCode(qrCodeBox, {

        text: text,

        width: 250,

        height: 250,

        colorDark: "#000000",

        colorLight: "#ffffff",

        correctLevel: QRCode.CorrectLevel.H

    });
}


// =====================================
// GENERATE BUTTON
// =====================================

generateBtn.addEventListener("click", function () {

    generateQR();

});


// =====================================
// DOWNLOAD QR CODE
// =====================================

downloadBtn.addEventListener("click", function () {

    const qrImage = qrCodeBox.querySelector("img");

    if (!qrImage) {

        alert("Please generate QR code first!");

        return;
    }

    const link = document.createElement("a");

    link.href = qrImage.src;

    link.download = "QRCode.png";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

});