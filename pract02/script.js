const textInput = document.getElementById("textInput");

const generateBtn = document.getElementById("generateBtn");

const qrCodeBox = document.getElementById("qrcode");


// =====================================
// GENERATE QR CODE
// =====================================

generateBtn.addEventListener("click", function () {

    const text = textInput.value.trim();


    // Check empty input

    if (text === "") {

        alert("Please enter text or URL!");

        return;
    }


    // Remove previous QR

    qrCodeBox.innerHTML = "";


    // Generate new QR

    new QRCode(qrCodeBox, {

        text: text,

        width: 300,

        height: 300,

        colorDark: "#000000",

        colorLight: "#ffffff",

        correctLevel: QRCode.CorrectLevel.H

    });

});