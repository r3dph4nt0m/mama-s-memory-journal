let currentPage = 0;
const totalPages = 15;

const pages = document.querySelectorAll('.page');
const finalPage = document.getElementById('final-page');
const coverPage = document.getElementById('cover-page');

function showPage(pageNumber) {
  if (pageNumber === totalPages) {
    finalPage.style.display = 'block';
  } else {
    pages[pageNumber].style.display = 'block';
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    pages[currentPage].style.display = 'none';
    currentPage++;
    if (currentPage === totalPages) {
      finalPage.style.display = 'block';
    } else {
      showPage(currentPage);
    }
  }
}

// Initial setup to show the cover page
coverPage.style.display = 'flex';
document.querySelector('.cover-content button').addEventListener('click', () => {
  coverPage.style.display = 'none';
  showPage(currentPage);
});
