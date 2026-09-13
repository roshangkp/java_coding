const textInput = document.getElementById("textInput");

const generateBtn = document.getElementById("generateBtn");

const clearBtn = document.getElementById("clearBtn");

const downloadBtn = document.getElementById("downloadBtn");

const qrCodeBox = document.getElementById("qrcode");

const message = document.getElementById("message");


// ==========================================
// GENERATE QR CODE
// ==========================================

generateBtn.addEventListener("click", function () {

    const text = textInput.value.trim();


    // Empty input

    if (text === "") {

        qrCodeBox.innerHTML = "";

        message.textContent =
            "Please enter text or URL!";

        message.className = "error";

        return;
    }


    // Remove old QR

    qrCodeBox.innerHTML = "";


    // Generate new QR

    new QRCode(qrCodeBox, {

        text: text,

        width: 240,

        height: 240,

        colorDark: "#000000",

        colorLight: "#ffffff",

        correctLevel: QRCode.CorrectLevel.H

    });


    // Success message

    message.textContent =
        "QR code generated successfully!";

    message.className = "success";

});


// ==========================================
// CLEAR
// ==========================================

clearBtn.addEventListener("click", function () {

    textInput.value = "";

    qrCodeBox.innerHTML = "";

    message.textContent = "";

    message.className = "";

});


// ==========================================
// DOWNLOAD
// ==========================================

downloadBtn.addEventListener("click", function () {

    const qrImage = qrCodeBox.querySelector("img");


    if (!qrImage) {

        message.textContent =
            "Please generate QR code first!";

        message.className = "error";

        return;
    }


    const link = document.createElement("a");

    link.href = qrImage.src;

    link.download = "QRCode.png";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

});