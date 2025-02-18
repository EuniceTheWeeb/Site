// carousel + tooltip
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const slider = document.querySelector("#carousel-slider");
  const prevBtn = document.querySelector("#prev-pg");
  const nextBtn = document.querySelector("#next-pg");
  const tooltip = document.querySelector("#tooltip");
  const slides = carousel.children;
  const totalSlides = slides.length;
    let currentIndex = parseInt(slider.value, 10) - 1; // Initialize currentIndex
  
    // Set the slider max attribute based on the number of slides
  slider.setAttribute("max", totalSlides);
  
  function updateCarousel() {
      const slideWidth = slides[0].offsetWidth;
      const scrollLeft = currentIndex * slideWidth;
      carousel.scrollLeft = scrollLeft;
      slider.value = currentIndex + 1; // Update slider position
      updateTooltip();
  }
  
  function updateTooltip() {
      const sliderWidth = slider.offsetWidth;
      const thumbWidth = 32; // Width of the slider thumb
      const sliderValue = parseInt(slider.value, 10);
      const valuePercentage =
      (sliderValue - slider.min) / (slider.max - slider.min);
      const tooltipX =
        valuePercentage * (sliderWidth - thumbWidth) + thumbWidth / 2;
  
      tooltip.textContent = `Page ${sliderValue}`;
      tooltip.style.left = `${tooltipX}px`;
  }
  
  function positionTooltip() {
      updateTooltip(); // Update tooltip position and content
      tooltip.style.display = "block";
  }
  
    // Navigation buttons functionality
  prevBtn.addEventListener("click", function () {
      if (currentIndex > 0) {
      currentIndex--;
      } else {
        currentIndex = totalSlides - 1; // Loop back to the last slide
      }
      updateCarousel();
  });
  
  nextBtn.addEventListener("click", function () {
      if (currentIndex < totalSlides - 1) {
      currentIndex++;
      } else {
        currentIndex = 0; // Loop back to the first slide
      }
      updateCarousel();
  });
  
  // Slider functionality
  slider.addEventListener("input", function () {
  currentIndex = parseInt(slider.value, 10) - 1; // Update currentIndex based on slider
  updateCarousel();
  positionTooltip(); // Position tooltip relative to the slider thumb
  });
  
  // Show tooltip on slider hover
  slider.addEventListener("mouseover", function () {
  positionTooltip(); // Update tooltip position on hover
  });
  
  slider.addEventListener("mouseout", function () {
  tooltip.style.display = "none";
  });
  
  // Initial setup
  updateCarousel();
  positionTooltip(); // Position tooltip initially
  });