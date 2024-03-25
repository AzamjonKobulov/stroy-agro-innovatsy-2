document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 1000,
  });
});

const navOnScroll = document.querySelector('.nav-on-scroll');

// Scroll Nav
document.addEventListener('scroll', function () {
  const navOnScroll = document.querySelector('.nav-on-scroll');
  if (window.scrollY > 100) {
    navOnScroll.classList.remove('-translate-y-[101%]'); // Remove the translate class
  } else {
    navOnScroll.classList.add('-translate-y-[101%]');
  }
});

// Tabs
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tabButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    tabContents.forEach((content) => content.classList.remove('active'));
    const target = button.getAttribute('data-target');
    document.getElementById(target).classList.add('active');
  });
});

// Initialize Swiper
var swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
});

// Initialize Swiper
var swiper = new Swiper('.mySwiper2', {
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
  },
});

// Change stroke color of SVG buttons based on slide navigation
swiper.on('slideChange', function () {
  const isBeginning = swiper.isBeginning;
  const isEnd = swiper.isEnd;
  const prevPath = document.querySelectorAll('.prev-path');
  const nextPath = document.querySelectorAll('.next-path');

  // Update stroke colors based on slide navigation direction
  if (isBeginning) {
    prevPath.forEach((path) => path.setAttribute('stroke', '#B6B6B6'));
    nextPath.forEach((path) => path.setAttribute('stroke', 'black'));
  } else if (isEnd) {
    prevPath.forEach((path) => path.setAttribute('stroke', 'black'));
    nextPath.forEach((path) => path.setAttribute('stroke', '#B6B6B6'));
  } else {
    prevPath.forEach((path) => path.setAttribute('stroke', 'black'));
    nextPath.forEach((path) => path.setAttribute('stroke', 'black'));
  }
});

// Select List
document.addEventListener('DOMContentLoaded', function () {
  const selectButtons = document.querySelectorAll('[id^="selectButton"]');
  const selectOptionsList = document.querySelectorAll('[id^="selectOptions"]');
  const selectorIcons = document.querySelectorAll('[id^="selectorIcon"]');
  const selectedOptionTexts = document.querySelectorAll(
    '[id^="selectedOption"]'
  );

  selectButtons.forEach((selectButton, index) => {
    const selectOptions = selectOptionsList[index];
    const selectorIcon = selectorIcons[index];
    const selectedOptionText = selectedOptionTexts[index];

    // Function to toggle select options
    selectButton.addEventListener('click', function () {
      selectOptions.classList.toggle('hidden');
      // Rotate the selector icon
      selectorIcon.classList.toggle('rotate-180');
      // Update aria-expanded attribute
      const expanded = selectOptions.classList.contains('hidden')
        ? 'false'
        : 'true';
      selectButton.setAttribute('aria-expanded', expanded);
    });

    // Function to handle option selection
    selectOptions.addEventListener('click', function (event) {
      if (event.target.tagName === 'DIV') {
        const selectedValue = event.target.getAttribute('data-value');

        // Update the selected option in the button
        selectedOptionText.textContent = event.target.textContent;

        // Change text color class
        selectedOptionText.classList.remove('text-brand-gray-400');
        selectedOptionText.classList.add('text-brand-dark');

        // Remove bg-brand-light-primary class from all options
        const allOptions = selectOptions.querySelectorAll('div');
        allOptions.forEach((option) => {
          option.classList.remove('bg-brand-light-primary');
          option.innerHTML = option.textContent; // Reset option text (removing SVG icon)
        });

        // Add bg-brand-light-primary class to the clicked option
        event.target.classList.add('bg-brand-light-primary');

        // Append SVG icon to selected option
        const svgIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="16" height="16" rx="8" fill="#9AE800"/>
        <path d="M4 7.72727L7.07692 11L12 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 7.72727L7.07692 11L12 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
        event.target.innerHTML =
          event.target.textContent +
          (event.target.classList.contains('bg-brand-light-primary')
            ? svgIcon
            : '');

        // You can do something with the selected value here
        console.log(selectedValue);

        // Hide select options
        selectOptions.classList.add('hidden');
        // Rotate the selector icon
        selectorIcon.classList.remove('rotate-180');
        // Update aria-expanded attribute
        selectButton.setAttribute('aria-expanded', 'false');
      }
    });

    // Close select options when clicking outside
    document.addEventListener('click', function (event) {
      if (
        !selectButton.contains(event.target) &&
        !selectOptions.contains(event.target)
      ) {
        selectOptions.classList.add('hidden');
        // Rotate the selector icon
        selectorIcon.classList.remove('rotate-180');
        // Update aria-expanded attribute
        selectButton.setAttribute('aria-expanded', 'false');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Get the form element
  const form = document.querySelector('form');
  // Get the success modal element
  const successModal = document.querySelector('.success-modal');

  // Add event listener for form submission
  form.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Hide the form
    form.classList.add('hidden');
    // Display the success modal
    successModal.classList.remove('hidden');
  });

  // Add event listener to close the success modal
  const closeButton = document.querySelector('.success-modal button');
  closeButton.addEventListener('click', function () {
    // Show the form
    form.classList.remove('hidden');
    // Hide the success modal
    successModal.classList.add('hidden');
  });
});

const mobileMenuBtns = document.querySelectorAll('#mobileMenuBtn');
const mobileMenu = document.querySelector('#mobileMenu');

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('-translate-y-full');
  document.body.classList.toggle('overflow-hidden');
};

mobileMenuBtns.forEach((btn) => {
  btn.addEventListener('click', toggleMobileMenu);
});

document.querySelectorAll('#mobileMenu ul a').forEach((link) => {
  link.addEventListener('click', toggleMobileMenu);
});

document
  .getElementById('scrollTopButton')
  .addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

window.addEventListener('scroll', function () {
  var button = document.getElementById('scrollTopButton');
  if (window.scrollY > 1000) {
    button.classList.remove('hidden');
  } else {
    button.classList.add('hidden');
  }
});

const toggleButton = document.getElementById('socialsToggleButton');
const socialIcons = document.getElementById('socialIcons');

toggleButton.addEventListener('click', () => {
  socialIcons.classList.toggle('hidden');
});
