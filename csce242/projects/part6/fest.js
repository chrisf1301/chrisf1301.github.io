// for burger menu i used w3 schools for reference
// JSON DATA LOADING: This script loads Oktoberfest activities data from a JSON file
// and dynamically creates gallery items. The JSON contains activity information including
// names, descriptions, categories, pricing, and popularity ratings.

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle functionality
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && menuToggle && navMenu) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // Modal functionality for gallery items
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Open modal when gallery item is clicked
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-image');
            const altText = this.querySelector('img').alt;
            
            modalImage.src = imageSrc;
            modalImage.alt = altText;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });
    
    // Close modal when X is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        });
    }
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
    
    // Load JSON data for activities gallery
    loadActivitiesData();
});

// Function to load and display activities from JSON
async function loadActivitiesData() {
    try {
        // Use GitHub raw URL for the JSON file to avoid CORS issues
        const jsonUrl = 'https://raw.githubusercontent.com/chrisf1301/chrisf1301.github.io/main/csce242/projects/part6/oktoberfest-activities.json';
        
        const response = await fetch(jsonUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const activities = await response.json();
        displayActivities(activities);
        
    } catch (error) {
        console.error('Error loading activities data:', error);
        // Fallback: show error message
        const gallery = document.getElementById('activitiesGallery');
        if (gallery) {
            gallery.innerHTML = '<div class="error-message"><p>Unable to load activities data. Please check your internet connection and try again.</p></div>';
        }
    }
}

// Function to display activities in the gallery
function displayActivities(activities) {
    const gallery = document.getElementById('activitiesGallery');
    if (!gallery) return;
    
    gallery.innerHTML = ''; // Clear existing content
    
    activities.forEach(activity => {
        const activityElement = createActivityElement(activity);
        gallery.appendChild(activityElement);
    });
    
    // Re-attach event listeners to new elements
    attachGalleryEventListeners();
}

// Function to create individual activity elements
function createActivityElement(activity) {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.setAttribute('data-image', `images/${activity.img_name}`);
    div.setAttribute('data-title', activity.name);
    div.setAttribute('data-description', activity.description);
    div.setAttribute('data-details', `Category: ${activity.category} | Price: ${activity.price_range} | Popularity: ${activity.popularity} | Dietary: ${activity.dietary_options}`);
    
    div.innerHTML = `
        <img src="images/${activity.img_name}" alt="${activity.name}">
        <div class="activity-info">
            <h3>${activity.name}</h3>
            <p class="category">${activity.category}</p>
            <p class="price">${activity.price_range}</p>
            <p class="popularity">${activity.popularity}</p>
        </div>
    `;
    
    return div;
}

// Function to re-attach event listeners to gallery items
function attachGalleryEventListeners() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-image');
            const altText = this.querySelector('img').alt;
            
            modalImage.src = imageSrc;
            modalImage.alt = altText;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
}
