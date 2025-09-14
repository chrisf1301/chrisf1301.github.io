// Sunny Times click
document.getElementById('sunny-times').onclick = function() {
    var message = document.getElementById('sunny-message');
    if (message.style.display === 'none') {
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
    }
};

// Color picker
document.getElementById('color-picker').onchange = function() {
    var color = this.value;
    document.getElementById('color-display').textContent = 'Selected Color: ' + color;
    document.getElementById('color-display').style.color = color;
    document.getElementById('color-paragraph').style.color = color;
};

// Image change
var isSunny = false;
document.getElementById('image-button').onclick = function() {
    var img = document.getElementById('changeable-image');
    var button = document.getElementById('image-button');
    
    if (!isSunny) {
        img.src = 'images/sunny.jpeg';
        img.alt = 'Sunny sky';
        button.textContent = 'Become Sunny';
        button.disabled = true;
        isSunny = true;
    }
};