const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-sidebar");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
