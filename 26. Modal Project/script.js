document.addEventListener("DOMContentLoaded", function () {
    const openModalButton = document.querySelector('.open-modal');
    const closeModalButton = document.querySelector('.close-modal');
    const modalContainer = document.querySelector('.modal-container');

    // Function to open the modal
    openModalButton.addEventListener('click', function () {
        modalContainer.classList.remove('hidden');
    });

    // Function to close the modal
    closeModalButton.addEventListener('click', function () {
        modalContainer.classList.add('hidden');
    });

    // Prevent navigation if there are unsaved changes
    window.addEventListener('beforeunload', function (event) {
        if (!modalContainer.classList.contains('hidden')) {
            event.preventDefault();
            event.returnValue = ''; // This will show the browser's default confirmation dialog
        }
    });
});
