document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    let reviewsData = [];

    // Fetch data from the JSON file
    fetch('reviews.json')
        .then(response => response.json())
        .then(data => {
            reviewsData = data;
            updateCarousel();
        })
        .catch(error => console.error('Error fetching the reviews:', error));

    // Function to update the carousel with the current review
    function updateCarousel() {
        const person = reviewsData[currentIndex];
        if (person) {
            document.querySelector('.image-person').src = person.imagePerson;
            document.querySelector('.text_effect .name').textContent = person.name;
            document.querySelector('.text_effect .occupation').textContent = person.occupation;
            document.querySelector('.text_effect .review-text').textContent = person.review;
        }
    }

    // Event listeners for next and previous buttons
    document.getElementById('nextButton').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % reviewsData.length;
        updateCarousel();
    });

    document.getElementById('prevButton').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + reviewsData.length) % reviewsData.length;
        updateCarousel();
    });
});
