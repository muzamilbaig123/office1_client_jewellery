document.addEventListener('DOMContentLoaded', () => {
    const charmSlots = document.querySelectorAll('.charm-slot');
    const mainImage = document.getElementById('mainImage');
    const productName = document.getElementById('productName');
    const discountedPrice = document.getElementById('discountedPrice');
    const productDescription = document.getElementById('productDescription');

    const thumbnails = document.querySelectorAll('.thumbnail-container img');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
            productName.textContent = thumbnail.getAttribute('data-name');
            discountedPrice.textContent = thumbnail.getAttribute('data-price');
            productDescription.textContent = thumbnail.getAttribute('data-description');
        });
    });

    charmSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            alert('Charm selection functionality can be added here!');
        });
    });

    document.querySelector('.add-to-cart-btn').addEventListener('click', () => {
        alert('Added to cart!');
    });
});












document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const symbol = button.querySelector('.symbol');
        const isOpen = content.style.display === 'block';

        document.querySelectorAll('.details-content').forEach(c => c.style.display = 'none');
        document.querySelectorAll('.symbol').forEach(s => s.textContent = '+');

        if (!isOpen) {
            content.style.display = 'block';
            symbol.textContent = '-';
        } else {
            content.style.display = 'none';
            symbol.textContent = '+';
        }
    });
});







// script.js

const video = document.getElementById('myVideo');
const playButton = document.querySelector('.play-button');

playButton.addEventListener('click', function() {
    video.play();
    playButton.style.display = 'none';
});

video.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        playButton.style.display = 'none';
    } else {
        video.pause();
        playButton.style.display = 'block';
    }
});





    document.addEventListener("DOMContentLoaded", function() {
        const starContainers = document.querySelectorAll('.stars');
        
        starContainers.forEach(container => {
            const rating = container.getAttribute('data-rating');
            const stars = container.querySelectorAll('span');
            
            stars.forEach((star, index) => {
                if(index < rating) {
                    star.style.color = 'rgba(53, 53, 53, 1)'; // Gold color for filled stars
                } else {
                    star.style.color = '#ddd'; // Grey color for unfilled stars
                }
            });
        });
    });


    // script.js
function updateReviews(rating, count) {
    document.getElementById('rating-score').innerText = `Excellent ${rating} |`;
    document.getElementById('review-count').innerText = `${count} reviews`;
}

// Example usage
updateReviews(4.9, 2893);






document.addEventListener("DOMContentLoaded", function() {
    const ratings = document.querySelectorAll('.stars-ver');
  
    ratings.forEach(rating => {
      const value = rating.getAttribute('data-rating');
      const percentage = (value / 5) * 100;
      const starPercentage = `${Math.round(percentage / 10) * 10}%`;
  
      rating.style.position = 'relative';
      rating.style.background = `linear-gradient(90deg, #000000 ${starPercentage}, #ccc ${starPercentage})`;
      rating.style.WebkitBackgroundClip = 'text';
      rating.style.WebkitTextFillColor = 'transparent';
    });
  });
  







  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
      item.addEventListener('click', () => {
          item.classList.toggle('active');
      });
  });
  