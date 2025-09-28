const petBeforeImages = {
    "Polly": "images/parrot1.jpeg",
    "Rio": "images/parrot2.jpeg",
    "Coco": "images/parrot4.jpeg",
    "Sunny": "images/parrot4.jpeg"
};

const petAfterImages = {
    "Polly": "images/parrot5.jpeg",
    "Rio": "images/parrot3.jpeg",
    "Coco": "images/parrot6.jpeg",
    "Sunny": "images/parrot6.jpeg"
};

document.addEventListener('DOMContentLoaded', function() {
    loadPets();
    setupPopup();
});

function loadPets() {
    const petGallery = document.getElementById('pet-gallery');
    
    for (const petName in petBeforeImages) {
        const petItem = document.createElement('div');
        petItem.className = 'pet-item';
        petItem.setAttribute('data-pet-name', petName);
        
        const petImage = document.createElement('img');
        petImage.className = 'pet-image';
        petImage.src = petBeforeImages[petName];
        petImage.alt = `${petName} - Before adoption`;
        
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = `${petName} - please adopt`;
        
        petItem.appendChild(petImage);
        petItem.appendChild(tooltip);
        petGallery.appendChild(petItem);
        
        petItem.addEventListener('click', function() {
            showPopup(petName);
        });
    }
}

function setupPopup() {
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close');
    
    closeBtn.addEventListener('click', function() {
        popup.classList.add('hidden');
    });
}

function showPopup(petName) {
    const popup = document.getElementById('popup');
    const petNameElement = document.getElementById('pet-name');
    const petAfterImage = document.getElementById('pet-after-image');
    
    petNameElement.textContent = petName;
    petAfterImage.src = petAfterImages[petName];
    petAfterImage.alt = `${petName} - After adoption`;
    
    popup.classList.remove('hidden');
}