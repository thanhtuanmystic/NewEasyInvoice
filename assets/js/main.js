// Header
// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show1");
};

$(document).ready(function () {
  $("#price-tabs").tabs({
    activate: function (event, ui) {
      if (ui.newPanel.attr("id") === "price-tab-1") {
        $(".price-tabs-head li .pricetab1 img").attr(
          "srcset",
          "./assets/img/business-white-icon.png 2x"
        );
        $(".price-tabs-head li .pricetab2 img").attr(
          "srcset",
          "./assets/img/home-blue-icon.png 2x"
        );
        $("#business-diamond-tab .business-diamond-slick").slick("setPosition");
        $("#business-gold-tab .business-gold-slick").slick("setPosition");
      } else if (ui.newPanel.attr("id") === "price-tab-2") {
        $(".price-tabs-head li .pricetab1 img").attr(
          "srcset",
          "./assets/img/business-blue-icon.png 2x"
        );
        $(".price-tabs-head li .pricetab2 img").attr(
          "srcset",
          "./assets/img/home-white-icon.png 2x"
        );
        $(".htc88-slick").slick("setPosition");
        $(".htc78-slick").slick("setPosition");
      }
    },
  });
  $("#price-tab-1").tabs({
    activate: function (event, ui) {
      // Kiểm tra tab bên trong để khởi tạo lại slick carousel
      if (ui.newPanel.attr("id") === "business-diamond-tab") {
        $("#business-diamond-tab .business-diamond-slick").slick("setPosition");
      } else if (ui.newPanel.attr("id") === "business-gold-tab") {
        $("#business-gold-tab .business-gold-slick").slick("setPosition");
      }
    },
  });
  $("#price-tab-2").tabs({
    activate: function (event, ui) {
      // Kiểm tra tab bên trong để khởi tạo lại slick carousel
      if (ui.newPanel.attr("id") === "htc88-tab") {
        $(".htc88-slick").slick("setPosition");
      } else if (ui.newPanel.attr("id") === "htc78-tab") {
        $(".htc78-slick").slick("setPosition");
      }
    },
  });
  // Common settings for the slick slider
  const baseSlickSettings = {
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Function to initialize the slick slider
  function initializeSlick(selector, slidesToShow) {
    const slickSettings = {
      ...baseSlickSettings,
      slidesToShow: slidesToShow,
    };

    $(selector).slick(slickSettings);
  }
  // Initialize sliders
  initializeSlick("#business-diamond-tab .business-diamond-slick", 4);
  initializeSlick("#business-gold-tab .business-gold-slick", 4);
  initializeSlick(".htc88-slick", 3);
  initializeSlick(".htc78-slick", 3);

  $(".business-tab li").click(function () {
    // Kích hoạt click vào thẻ a bên trong thẻ li được click
    $(this).find("a").trigger("click");
  });
});

// Mảng chứa dữ liệu các gói "Diamond"
const businessDiamondPackages = [
  { quantity: 300, price: "460.000" },
  { quantity: 500, price: "650.000" },
  { quantity: 1000, price: "1.100.000" },
  { quantity: 3000, price: "2.300.000" },
  { quantity: 5000, price: "3.200.000" },
  { quantity: 10000, price: "5.700.000" },
];
const businessGoldPackages = [
  { quantity: 300, price: "460.000" },
  { quantity: 500, price: "650.000" },
  { quantity: 1000, price: "1.100.000" },
  { quantity: 3000, price: "2.300.000" },
  { quantity: 5000, price: "3.200.000" },
  { quantity: 10000, price: "5.700.000" },
];

const htc88Packages = [
  { year: "1 năm", quantity: 300, price: "1.400.000" },
  { year: "2 năm", quantity: 600, price: "2.450.000" },
  { year: "3 năm", quantity: 1000, price: "3.600.000" },
];
const htc78Packages = [
  { year: "1 năm", quantity: 300, price: "800.000" },
  { year: "2 năm", quantity: 600, price: "1.450.000" },
  { year: "3 năm", quantity: 1000, price: "2.100.000" },
];
// Common function to generate package HTML
function appendPackages(selector, packages, type) {
  $.each(packages, function (index, pkg) {
    const quantityOrYear = type === "year" ? pkg.year : pkg.quantity;
    $(selector).append(`
      <div class="price-box">
        <div class="price-name">${
          type === "year" ? "Gói" : type
        } <span>${quantityOrYear}</span></div>
        <div class="price-have">
          <img srcset="./assets/img/tick-icon.png 2x" alt="Tick Icon" />
          <span>${pkg.quantity}</span> hoá đơn điện tử
        </div>
        <div class="price-money">
          ${pkg.price} <span>vnđ/gói</span>
        </div>
        <a href="" class="ei-primary-btn">
          <div>Mua ngay!</div>
        </a>
      </div>
    `);
  });
}

// Append packages to respective sections
appendPackages("#business-diamond-list", businessDiamondPackages, "Diamond");
appendPackages("#business-gold-list", businessGoldPackages, "Gold");
appendPackages("#htc88-list", htc88Packages, "year");
appendPackages("#htc78-list", htc78Packages, "year");
