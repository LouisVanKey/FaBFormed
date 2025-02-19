document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("cardCanvas");
    const ctx = canvas.getContext("2d"); // Get the 2D drawing context

    // Set proper canvas dimensions
    canvas.width = 450;
    canvas.height = 628;

    // Draw a white background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw a placeholder text
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Card Preview", 130, 50);
});
