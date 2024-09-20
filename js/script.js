const $ = document;

// Nav Bar

const navBtns = $.querySelectorAll(".nav-btn");

navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    //Codes
  });
});

// Nav Menu

const hamburgerBtn = $.querySelector(".hamburger-btn");
const navMenu = $.querySelector(".menu");
const navCloseMenuBtn = $.querySelector(".close-btn");

hamburgerBtn.addEventListener("click", () => {
  navMenu.style.right = "0";
});
navCloseMenuBtn.addEventListener("click", () => {
  navMenu.style.right = "-29rem";
});

// Search Bar
const categoriesBtnWrapper = $.querySelectorAll(".categories-btn-wrapper");
const searchInput = $.querySelector("#search-input");
const searchBox = $.querySelector(".search-box");
const searchBoxBtn5 = $.querySelector(".search-box-btn-5");

let btn5IsClicked = false;

let searchInputPlaceholder = [
  {
    id: "categories-btn-1",
    placeHolder:
      "مکان هایی برای رفتن، کارهایی که می‌توانید انجام دهید، هتل ها...",
  },
  { id: "categories-btn-2", placeHolder: "نام هتل یا مسیر" },
  { id: "categories-btn-3", placeHolder: "جاذبه، فعالیت یا مسیر" },
  { id: "categories-btn-4", placeHolder: "رستوران یا مسیر" },
  { id: "categories-btn-6", placeHolder: "مسیر" },
];

categoriesBtnWrapper.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn5IsClicked = false;

    searchBox.style.display = "flex";
    searchBoxBtn5.style.display = "none";

    let btnElemObj = searchInputPlaceholder.find((btnElem) => {
      return btnElem.id == btn.id;
    });
    if (btnElemObj) {
      searchInput.setAttribute("placeholder", btnElemObj.placeHolder);
    }
    if (btn.id == "categories-btn-5") {
      btn5IsClicked = true;

      searchBox.style.display = "none";

      if (window.innerWidth <= 1136) {
        searchBoxBtn5.style.display = "grid";
      } else {
        searchBoxBtn5.style.display = "flex";
      }
    }
  });
  window.addEventListener("resize", () => {
    if (btn5IsClicked && window.innerWidth <= 1136) {
      searchBoxBtn5.style.display = "grid";
    } else if (btn5IsClicked && !window.innerWidth <= 1136) {
      searchBoxBtn5.style.display = "flex";
    } else if (!btn5IsClicked) {
      searchBoxBtn5.style.display = "none";
    }
  });
});

const foodDeliveryMainImg = $.querySelector(".food-delivery-img");
const foodDeliveryResponsiveImg = $.querySelector(
  ".food-delivery-responsive-img img"
);

window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    foodDeliveryMainImg.style.display = "none";
    foodDeliveryResponsiveImg.style.display = "block";
  } else {
    foodDeliveryMainImg.style.display = "block";
    foodDeliveryResponsiveImg.style.display = "none";
  }
});

// Slider Scripts

const sliderItem = $.querySelector(".slide");
const itemWidth = sliderItem.offsetWidth;

function dirHandler(sliderClass, dir) {
  let slider = $.querySelector(sliderClass);
  console.log(slider);
  if (dir == "prev") {
    slider.scrollBy({ left: itemWidth * 4.12, behavior: "smooth" });
  } else {
    slider.scrollBy({ left: -itemWidth * 4.12, behavior: "smooth" });
  }
}

const exploreArrow = $.querySelectorAll(".explore-arrow");

exploreArrow.forEach((arrow) => {
  arrow.style.display = "none";
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1136) {
      arrow.style.display = "none";
    } else {
      arrow.style.display = "flex";
    }
  });
});

const adSectionImg = $.querySelector(".ad-section-img");
window.addEventListener("resize", () => {
  if (window.innerWidth <= 576) {
    adSectionImg.src = "imgs/Ads/ad1-img3.jpg";
  } else {
    adSectionImg.src = "imgs/Ads/ad1-img2.jpg";
  }
});
