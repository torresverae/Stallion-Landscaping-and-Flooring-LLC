window.addEventListener("scroll", slideInSections);

function slideInSections() {
  var landscapeSection = document.querySelector(".landscape-section");
  var reviewsSection = document.querySelector(".reviews-section");
  var reviewButtons = document.querySelector(".review-buttons");
  var getQuoteSection = document.querySelector(".getquote");

  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY;

  var landscapeSectionOffset = landscapeSection.offsetTop;
  var reviewsSectionOffset = reviewsSection.offsetTop;
  var reviewButtonsOffset = reviewButtons.offsetTop;
  var getQuoteSectionOffset = getQuoteSection.offsetTop;

  if (scrollY > landscapeSectionOffset - windowHeight + 100) {
    landscapeSection.style.opacity = "1";
    landscapeSection.style.transform = "translateY(0)";
    landscapeSection.style.transitionDuration = "1.5s"; 
  }

  if (scrollY > reviewsSectionOffset - windowHeight + 100) {
    reviewsSection.style.opacity = "1";
    reviewsSection.style.transform = "translateY(0)";
    reviewsSection.style.transitionDuration = "2s"; 
  }

  if (scrollY > reviewButtonsOffset - windowHeight + 100) {
    reviewButtons.style.opacity = "1";
    reviewButtons.style.transform = "translateY(0)";
    reviewButtons.style.transitionDuration = "2s"; 
  }

  if (scrollY > getQuoteSectionOffset - windowHeight + 100) {
    getQuoteSection.style.opacity = "1";
    getQuoteSection.style.transform = "translateY(0)";
    getQuoteSection.style.transitionDuration = "2s";
    }
}

slideInSections();