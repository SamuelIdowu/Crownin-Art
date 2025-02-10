// Define an array of image objects with paths relative to the HTML file's location
const carauselimages = [
    { src: "../images/FB_IMG_1.jpg", alt: "First Image" },
    { src: "../images/FB_IMG_2.jpg", alt: "Second Image" },
    { src: "../images/FB_IMG_3.jpg", alt: "Third Image" },
    { src: "../images/FB_IMG_4.jpg", alt: "Fourth Image" },
    { src: "../images/FB_IMG_5.jpg", alt: "Fifth Image" },
    { src: "../images/FB_IMG_6.jpg", alt: "Sixth Image" },
    { src: "../images/FB_IMG_7.jpg", alt: "Seventh Image" },
];

// Function to update the image with a fade effect
function updateImage(index) {
    const imgElement = document.getElementById("imgg");

    // Add the fade-out class to start the fade-out transition
    imgElement.classList.add("fade-out");

    // Wait for the fade-out transition to complete before changing the image
    setTimeout(() => {
        imgElement.src = carauselimages[index].src;
        imgElement.alt = carauselimages[index].alt;

        // Remove the fade-out class to start the fade-in transition
        imgElement.classList.remove("fade-out");
    }, 1000); // Match this delay with the CSS transition duration
}

// Set the initial image when the page loads
document.addEventListener("DOMContentLoaded", () => {
    updateImage(0); // Set to the first image in the array
});

// Change image every 5 seconds
let currentIndex = 0;
setInterval(() => {
    currentIndex = (currentIndex + 1) % carauselimages.length;
    updateImage(currentIndex);
}, 5000);


//news letter
// document.getElementById('newsletterForm').addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     const email = document.getElementById('newsletterEmail').value;

//     // Here you would typically send the email to your server for newsletter signup
//     console.log('Newsletter signup:', email);
    
//     // Show success message
//     alert('Thank you for subscribing to our newsletter!');
    
//     // Reset form
//     this.reset();
// });


// About
document.addEventListener('DOMContentLoaded', () => {
    const workLink = document.querySelector('.menu .active');
    workLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Dropdown functionality would go here');
    });

    const backLink = document.querySelector('.back-link');
    backLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Simulating going back in history
        console.log('Going back to all templates');
    });
});

// Post 

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('vaccination-form');
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const fileList = document.getElementById('file-list');
    const browseBtn = document.querySelector('.browse-btn');

    // Handle drag and drop events
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, unhighlight, false);
    });

    function highlight() {
        dropZone.classList.add('dragover');
    }

    function unhighlight() {
        dropZone.classList.remove('dragover');
    }

    // Handle dropped files
    dropZone.addEventListener('drop', handleDrop, false);

    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
    }

    // Handle file input change
    fileInput.addEventListener('change', function() {
        handleFiles(this.files);
    });

    // Click browse button to trigger file input
    browseBtn.addEventListener('click', () => {
        fileInput.click();
    });

    function handleFiles(files) {
        fileList.innerHTML = ''; // Clear existing list
        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                const fileItem = document.createElement('div');
                fileItem.className = 'file-item';
                
                const fileName = document.createElement('span');
                fileName.textContent = file.name;
                
                const removeBtn = document.createElement('button');
                removeBtn.textContent = '×';
                removeBtn.onclick = () => fileItem.remove();
                
                fileItem.appendChild(fileName);
                fileItem.appendChild(removeBtn);
                fileList.appendChild(fileItem);
            }
        });
    }

    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        console.log('Form submitted!');
        const formData = new FormData(form);
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
        
        // Show success message or handle response
        alert('Form submitted successfully!');
        form.reset();
        fileList.innerHTML = '';
    });
});

//Login Page

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simple client-side validation
    if (username.length < 3 || password.length < 6) {
        errorMessage.textContent = 'Username must be at least 3 characters and password at least 6 characters long.';
        return;
    }

    // Here you would typically send the login data to a server
    console.log('Login attempt:', { username, password });
    errorMessage.textContent = 'Login successful! (This is a demo, no actual authentication occurred)';
    errorMessage.style.color = 'green';
});