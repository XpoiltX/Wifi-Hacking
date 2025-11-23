document.getElementById('hackButton').addEventListener('click', function() {
    var wifiName = document.getElementById('wifiName').value;
    var resultDiv = document.getElementById('result');

    // Simulasi proses hacking (TIDAK BENAR-BENAR MERETAS)
    resultDiv.textContent = "Hacking " + wifiName + "... (Simulasi)";

    // Simulate a delay to make it look like it's working
    setTimeout(function() {
        // Simulate the result (TIDAK BENAR-BENAR MENDAPATKAN PASSWORD)
        var password = generateRandomPassword();
        var username = "admin"; // Router username example
        resultDiv.textContent = "Username: " + username + ", Password: " + password + " (SIMULASI)";
    }, 3000); // Delay 3 seconds
});

function generateRandomPassword() {
    var length = 12;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    var password = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
}