// Basic interactivity (e.g., alerts for demo purposes)
document.querySelectorAll('.store-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Download the GreenSwift app! (This is a demo)');
    });
});