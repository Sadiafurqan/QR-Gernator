document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-btn');
    const textInput = document.getElementById('text-input');
    const qrCodeContainer = document.getElementById('qrcode');

    generateButton.addEventListener('click', () => {
        const text = textInput.value.trim();
        if (text) {
            // Clear previous QR code
            qrCodeContainer.innerHTML = '';

            // Generate QR code
            QRCode.toCanvas(text, { width: 200, height: 200 }, (error, canvas) => {
                if (error) {
                    console.error(error);
                } else {
                    qrCodeContainer.appendChild(canvas);
                }
            });
        } else {
            alert('Please enter text to generate QR code.');
        }
    });
});

