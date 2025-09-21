

console.log("Assignment 6 JavaScript loaded");

// Toggle menu functionality for smaller screens
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const exerciseLinks = document.getElementById('exercise-links');
    
    if (menuToggle && exerciseLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            exerciseLinks.classList.toggle('show');
        });
    }
});

// Exercise 1 functionality
document.getElementById('exercise1-link').onclick = (event) => {
    event.preventDefault();
    
    const exerciseBox = document.querySelector('.exercise-box');
    exerciseBox.innerHTML = `
        <h3>Planting</h3>
        <p>How long has it been since you have watered your plants?</p>
        <div class="slider-container">
            <input type="range" id="days-slider" min="1" max="12" value="1" class="slider">
            <div class="slider-value">
                <span id="days-display">1</span> days
            </div>
        </div>
        <div id="plant-result">
            <p id="plant-message"></p>
            <img id="plant-image" src="" alt="Plant status">
        </div>
    `;
    
    // Add slider functionality
    const slider = document.getElementById('days-slider');
    const daysDisplay = document.getElementById('days-display');
    const plantMessage = document.getElementById('plant-message');
    const plantImage = document.getElementById('plant-image');
    
    slider.oninput = () => {
        const days = parseInt(slider.value);
        daysDisplay.textContent = days;
        
        // Plant status based on days using if statements
        if (days >= 1 && days <= 2) {
            plantMessage.textContent = "Your plants are well-watered and healthy!";
            plantImage.src = "images/healthy.jpg";
            plantImage.alt = "Healthy green plant";
        } else if (days >= 3 && days <= 5) {
            plantMessage.textContent = "Your plants are doing fine, but keep an eye on them.";
            plantImage.src = "images/water.png";
            plantImage.alt = "Plant needing water";
        } else if (days >= 6 && days <= 9) {
            plantMessage.textContent = "Your plants are starting to get thirsty. Consider watering soon.";
            plantImage.src = "images/rose.jpg";
            plantImage.alt = "Rose plant";
        } else if (days >= 10 && days <= 12) {
            plantMessage.textContent = "Your plants are quite dry and need water urgently!";
            plantImage.src = "images/dead.jpg";
            plantImage.alt = "Dead plant";
        } else {
            plantMessage.textContent = "Your plants are severely dehydrated! Water them immediately!";
            plantImage.src = "images/dead.jpg";
            plantImage.alt = "Dead plant";
        }
    };
    
    
    slider.oninput();
};

// Digital Clock
document.getElementById('exercise2-link').onclick = (event) => {
    event.preventDefault();
    
    const exerciseBox = document.querySelector('.exercise-box');
    exerciseBox.innerHTML = `
        <h3>Digital Clock</h3>
        <div id="digital-clock"></div>
    `;
    
    
    const updateClock = () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        document.getElementById('digital-clock').textContent = timeString;
    };
    
    
    updateClock();
    setInterval(updateClock, 1000);
};
