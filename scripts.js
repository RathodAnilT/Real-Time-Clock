document.addEventListener('DOMContentLoaded', () => {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');

    const updateClock = () => {
        const now = new Date();
        
        // Time formatting
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        // Date formatting
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = days[now.getDay()];
        const date = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = now.getFullYear();
        
        // Update the DOM
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        dateElement.textContent = `${day}, ${date}/${month}/${year}`;
    };

    setInterval(updateClock, 1000);
    updateClock(); // Initial call
});
