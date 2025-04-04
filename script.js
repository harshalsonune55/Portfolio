
const loadingScreen = document.querySelector('.loading-screen');
const content = document.querySelector('.content');

// Debug: Check if elements are found
console.log('Loading Screen:', loadingScreen);
console.log('Content:', content);

// Show loader
function showLoader() {
  if (loadingScreen && content) {
    loadingScreen.classList.remove('hidden');
    content.classList.remove('visible');
    console.log('Loader shown');
  } else {
    console.error('Elements not found');
  }
}

// Hide loader
function hideLoader() {
  if (loadingScreen && content) {
    loadingScreen.classList.add('hidden');
    content.classList.add('visible');
    content.classList.add('fade-in');
    console.log('Loader hidden, content visible');
  } else {
    console.error('Elements not found');
  }
}

// Simulate loading
function simulateLoading() {
  showLoader();
  setTimeout(() => {
    hideLoader();
  },4000); // 3-second delay
}

// Run on page load
window.addEventListener('load', () => {
  console.log('Page loaded, starting simulation');
  simulateLoading();
});

// Fallback: Run immediately if load event already fired
if (document.readyState === 'complete') {
  console.log('Page already loaded, running simulation');
  simulateLoading();
}

document.getElementById("myButton").onclick = function () {
    location.href = "projects.html";
};