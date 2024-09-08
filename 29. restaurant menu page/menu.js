// menu.js
const menuItems = [
    { name: "Eggs Benedict", description: "Poached eggs on toasted English muffins", price: 12.99, category: "Breakfast" },
    { name: "Grilled Chicken Sandwich", description: "Grilled chicken breast on a toasted bun", price: 10.99, category: "Lunch" },
    { name: "Pan-Seared Salmon", description: "Fresh salmon fillet with roasted vegetables", price: 19.99, category: "Dinner" },
    // Add more menu items here...
  ];
  
  // Get the menu container element
  const menuContainer = document.getElementById("menu-container");
  
  // Function to render the menu items
  function renderMenu(items) {
    const menuHTML = items.map((item) => {
      return `
        <div class="menu-item">
          <h2>${item.name}</h2>
          <p>${item.description}</p>
          <p>Price: $${item.price}</p>
        </div>
      `;
    }).join("");
    menuContainer.innerHTML = menuHTML;
  }
  
  // Render the initial menu
  renderMenu(menuItems);
  
  // Add event listeners to filter buttons
  document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-button");
    filterButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const category = e.target.textContent;
        const filteredMenu = menuItems.filter((item) => item.category.includes(category));
        renderMenu(filteredMenu);
      });
    });
  });