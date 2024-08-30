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


// Fetch FAQ data from JSON file
fetch('faq.json')
    .then(response => response.json())
    .then(data => {
        const faqContainer = document.getElementById('faq-container');

        // Dynamically create FAQ content
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('cards');

            const questionDiv = document.createElement('div');
            questionDiv.classList.add('faq-question');
            questionDiv.innerHTML = `
                <h1>${item.question}</h1>
                <button class="faq-toggle">
                    <img src="https://cdn-icons-png.flaticon.com/512/148/148764.png" alt="toggle button">
                </button>
            `;

            const answerDiv = document.createElement('div');
            answerDiv.classList.add('faq-answer');
            answerDiv.textContent = item.answer;

            card.appendChild(questionDiv);
            card.appendChild(answerDiv);
            faqContainer.appendChild(card);

            // Add event listener to toggle answer visibility
            const toggleButton = questionDiv.querySelector('.faq-toggle');
            toggleButton.addEventListener('click', () => {
                answerDiv.classList.toggle('show');
            });
        });
    })
    .catch(error => console.error('Error fetching FAQ data:', error));
