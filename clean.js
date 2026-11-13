
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".btn");
    
    if (btn) {
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            console.log("Button clicked successfully!");
            alert("Marhba bik f site dyalna!");
        });
    }
});