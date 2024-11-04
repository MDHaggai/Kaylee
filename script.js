// Slideshow Functionality
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Auto-slide every 10 seconds
setInterval(function() {
    plusSlides(1);
}, 10000);

// Interactive Quotes Functionality
const quotes = {
    quote1: "Every time I see you, Kaylee, it’s like the world suddenly makes sense.",
    quote2: "You’re like a sunset, Kaylee—each time I see you, I'm left speechless.",
    quote3: "I don’t think you realize how effortlessly stunning you are, Kaylee.",
    quote4: "Your beauty feels like poetry, Kaylee—one look and I’m lost in the verses.",
    quote5: "I keep running out of ways to describe how beautiful you are, Kaylee, but I’ll never get tired of trying.",
    quote6: "I don’t need the stars when your smile lights up everything, Kaylee.",
    quote7: "You make it hard to look anywhere else when you’re around, Kaylee.",
    quote8: "Every moment with you is like a page out of my favorite love story, Kaylee."
};

function showQuote(quoteId) {
    const popup = document.getElementById('quote-popup');
    const quoteContent = document.getElementById('quote-content');
    quoteContent.textContent = quotes[quoteId];
    popup.style.display = 'block';
}

function closeQuote() {
    const popup = document.getElementById('quote-popup');
    popup.style.display = 'none';
}

// Beauty Test Functionality
function testBeauty() {
    const usernameInput = document.getElementById('username').value.trim();
    const popup = document.getElementById('beauty-popup');
    const beautyContent = document.getElementById('beauty-content');

    if (usernameInput.toLowerCase() === "kaylee") {
        beautyContent.textContent = `Haggai thinks you are the most beautiful girl ever, Kaylee, and he wants you to keep smiling and know that you are worth every penny.`;
    } else {
        beautyContent.textContent = `Sorry, this website is not for you.`;
    }

    popup.style.display = 'block';
}

function closeBeautyPopup() {
    const popup = document.getElementById('beauty-popup');
    popup.style.display = 'none';
}

// Close popups when clicking outside the content
window.onclick = function(event) {
    const quotePopup = document.getElementById('quote-popup');
    const beautyPopup = document.getElementById('beauty-popup');
    if (event.target == quotePopup) {
        quotePopup.style.display = "none";
    }
    if (event.target == beautyPopup) {
        beautyPopup.style.display = "none";
    }
}
