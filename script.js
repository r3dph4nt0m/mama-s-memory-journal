// Simple page navigation (Next/Back buttons)
let currentPage = 1;

function nextPage() {
  const current = document.getElementById(`page${currentPage}`);
  const next = document.getElementById(`page${currentPage + 1}`);
  if (next) {
    current.style.display = 'none';
    next.style.display = 'block';
    currentPage++;
  }
}

function prevPage() {
  const current = document.getElementById(`page${currentPage}`);
  const prev = document.getElementById(`page${currentPage - 1}`);
  if (prev) {
    current.style.display = 'none';
    prev.style.display = 'block';
    currentPage--;
  }
}

// Add event listeners for buttons or gestures
// You can add button elements in the HTML for page navigation and link them to these functions
