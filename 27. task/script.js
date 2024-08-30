// Get all FAQ toggle buttons
const faqToggles = document.querySelectorAll('.faq-toggle');

// Add event listener to each toggle button
faqToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        // Get the closest .cards div
        const parent = toggle.closest('.cards');

        // Get the FAQ answer element
        const answer = parent.querySelector('.faq-answer');

        // Toggle the show class on the answer element
        answer.classList.toggle('show');

        // Toggle the arrow icon on the toggle button
        toggle.classList.toggle('active');
    });
});