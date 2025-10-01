// Painting class definition
class Painting {
    constructor(name, artist, image, framed) {
        this.name = name;
        this.artist = artist;
        this.image = image;
        this.framed = framed;
    }

    // Method to return HTML section with painting title and image
    getSection() {
        const section = document.createElement("section");
        section.classList.add("painting-item");
        
        const title = document.createElement("h3");
        title.textContent = this.name;
        title.classList.add("painting-title");
        
        const img = document.createElement("img");
        img.src = this.image;
        img.alt = this.name;
        img.classList.add("painting-image");
        
        // Add click event to both title and image
        title.addEventListener("click", () => this.openModal());
        img.addEventListener("click", () => this.openModal());
        
        section.appendChild(title);
        section.appendChild(img);
        
        return section;
    }

    // Method to open modal with painting details
    openModal() {
        const modal = document.getElementById("paintingModal");
        const modalTitle = document.getElementById("modalTitle");
        const modalArtist = document.getElementById("modalArtist");
        const modalImage = document.getElementById("modalImage");
        const modalFramed = document.getElementById("modalFramed");
        
        // Populate modal with painting data
        modalTitle.textContent = this.name;
        modalArtist.textContent = `Artist: ${this.artist}`;
        modalImage.src = this.image;
        modalImage.alt = this.name;
        
        // Add black border if framed, otherwise hide the framed text
        if (this.framed) {
            modalImage.style.border = "5px solid #000";
            modalFramed.style.display = "none";
        } else {
            modalImage.style.border = "none";
            modalFramed.style.display = "none";
        }
        
        // Show the modal
        modal.style.display = "block";
    }
}

// Array of painting objects
const paintings = [
    new Painting("Dogs Playing Poker", "Cassius Marcellus Coolidge", "images/dogs.jpeg", true),
    new Painting("The Last Supper", "Leonardo da Vinci", "images/last_supper.jpeg", true),
    new Painting("The Death of Marat", "Jacques-Louis David", "images/marat.jpeg", false),
    new Painting("Mona Lisa", "Leonardo da Vinci", "images/mona.jpeg", true),
    new Painting("The Scream", "Edvard Munch", "images/scream.jpeg", false)
];

// Function to render paintings to the DOM
function renderPaintings() {
    const gallery = document.getElementById("paintingGallery");
    
    paintings.forEach(painting => {
        const paintingSection = painting.getSection();
        gallery.appendChild(paintingSection);
    });
}

// Close modal functionality
function closeModal() {
    const modal = document.getElementById("paintingModal");
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("paintingModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    renderPaintings();
});
