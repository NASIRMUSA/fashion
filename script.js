document.addEventListener("DOMContentLoaded", function () {
  // Search Icon Functionality
  const searchIcon = document.querySelector(".search-icon");
  const searchInput = document.querySelector(".search-input");

  searchIcon.addEventListener("click", function () {
    searchInput.classList.toggle("active"); // Toggle search input visibility
    if (searchInput.classList.contains("active")) {
      searchInput.focus(); // Focus on the input when visible
    }
  });

  // Close search input when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !searchIcon.contains(event.target) &&
      !searchInput.contains(event.target)
    ) {
      searchInput.classList.remove("active");
    }
  });

  // Cart Functionality
  const cartBadge = document.querySelector(".cart-badge");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  let cartCount = 0;

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      cartCount++; // Increment cart count
      cartBadge.textContent = cartCount; // Update badge
      cartBadge.style.display = "flex"; // Show badge if hidden

      // Optional: Add visual feedback
      button.textContent = "Added!";
      button.disabled = true;

      // Reset button after 2 seconds
      setTimeout(() => {
        button.textContent = "Add to Cart";
        button.disabled = false;
      }, 2000);
    });
  });
});
