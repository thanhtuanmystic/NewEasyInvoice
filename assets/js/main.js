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
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
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
$(document).ready(function () {
  $("#document-tab").tabs({
    activate: function (event, ui) {
      if (ui.newPanel.attr("id") === "document-tab-1") {
        $(".document-tabs-head li .document-tab1 img").attr(
          "srcset",
          "./assets/img/document-color-icon.png 2x"
        );
        $(".document-tabs-head li .document-tab2 img").attr(
          "srcset",
          "./assets/img/question-white-icon.png 2x"
        );
      } else if (ui.newPanel.attr("id") === "document-tab-2") {
        $(".document-tabs-head li .document-tab1 img").attr(
          "srcset",
          "./assets/img/document-white-icon.png 2x"
        );
        $(".document-tabs-head li .document-tab2 img").attr(
          "srcset",
          "./assets/img/question-color-icon.png 2x"
        );
        $(".htc88-slick").slick("setPosition");
        $(".htc78-slick").slick("setPosition");
      }
    },
  });
});
// Mảng chứa dữ liệu các gói báo giá(trang chủ)
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

// Mảng chứa dữ liệu các gói báo giá(trang chi tiết báo giá)
const businessDiamondPackagesFinal = [
  {
    quantity: 300,
    price: "1.560.000",
    unitPrice: "460.000đ/gói",
    initFee: "500.000đ/gói",
  },
  {
    quantity: 500,
    price: "1.750.000",
    unitPrice: "650.000đ/gói",
    initFee: "500.000đ/gói",
  },
  {
    quantity: 1000,
    price: "2.200.000",
    unitPrice: "1.100.000đ/gói",
    initFee: "500.000đ/gói",
  },
  {
    quantity: 3000,
    price: "3.400.000",
    unitPrice: "2.300.000đ/gói",
    initFee: "500.000đ/gói",
  },
  {
    quantity: 5000,
    price: "3.800.000",
    unitPrice: "3.200.000đ/gói",
    initFee: "Miễn phí",
  },
  {
    quantity: 10000,
    price: "6.300.000",
    unitPrice: " 5.700.000đ/gói",
    initFee: "Miễn phí",
  },
];
const businessGoldPackagesFinal = [
  {
    quantity: 300,
    price: "960.000",
    unitPrice: "460.000đ/gói",
    initFee: "500.000đ/gói",
  },
  {
    quantity: 500,
    price: "1.150.000",
    unitPrice: "650.000đ/gói",
    initFee: "500.000đ/gói",
  },
  {
    quantity: 1000,
    price: "1.600.000",
    unitPrice: "1.100.000đ/gói",
    initFee: "500.000đ/gói",
  },
  {
    quantity: 3000,
    price: "2.800.000",
    unitPrice: "2.300.000đ/gói",
    initFee: "500.000đ/gói",
  },
  {
    quantity: 5000,
    price: "3.200.000",
    unitPrice: "3.200.000đ/gói",
    initFee: "Miễn phí",
  },
  {
    quantity: 10000,
    price: "5.700.000",
    unitPrice: " 5.700.000đ/gói",
    initFee: "Miễn phí",
  },
];

const htc88PackagesFinal = [
  { year: "1 năm", quantity: 300, price: "1.400.000" },
  { year: "2 năm", quantity: 600, price: "2.450.000" },
  { year: "3 năm", quantity: 1000, price: "3.600.000" },
];
const htc78PackagesFinal = [
  { year: "1 năm", quantity: 300, price: "800.000" },
  { year: "2 năm", quantity: 600, price: "1.450.000" },
  { year: "3 năm", quantity: 1000, price: "2.100.000" },
];
// Hàm sinh báo giá trang chủ
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

// Hàm sinh báo giá chi tiết
function appendPackagesFinal(selector, packages, type) {
  $.each(packages, function (index, pkg) {
    const quantityOrYear = type === "year" ? pkg.year : pkg.quantity;
    const isGold = type === "Gold" ? true : false;
    $(selector).append(`
      <div class="price-box">
        <div class="price-name">${
          type === "year" ? "Gói" : type
        } <span>${quantityOrYear}</span></div>
        <div class="price-have">
          <span>Tổng giá</span> 
        </div>
        <div class="price-money">
          ${pkg.price} <span>vnđ/gói</span>
        </div>
        <a href="" class="ei-primary-btn">
          <div>Mua ngay!</div>
        </a>
        <div class="price-detail">
          <div class="price-have">
            <img srcset="./assets/img/tick-icon.png 2x" alt="Tick Icon" /> <span>${quantityOrYear}</span> hoá đơn điện tử
          </div>
          <div class="price-have">
            <img srcset="./assets/img/tick-icon.png 2x" alt="Tick Icon" /> Đơn giá: <span>${
              pkg.unitPrice
            }</span>
          </div>
           <div class="price-have">
            <img srcset="./assets/img/tick-icon.png 2x" alt="Tick Icon" /> Phí khởi tạo: <span>${
              pkg.initFee
            }</span>
          </div>
          ${
            !isGold
              ? `
            <div class="price-have">
             <img srcset="./assets/img/tick-icon.png 2x" alt="Tick Icon" /> Phí hàng năm: <span>600.000đ/gói</span>
           </div>`
              : ""
          }
        </div>
      </div>
    `);
  });
}

// Hàm sinh báo giá Hộ cá thể chi tiết
function appendHCTPackagesFinal(selector, packages, type) {
  const is88 = type === "88" ? true : false;
  $.each(packages, function (index, pkg) {
    $(selector).append(`
      <div class="price-box">
        <div class="price-name">Gói <span>${pkg.year}</span></div>
        <div class="price-money">
          ${pkg.price} <span>vnđ/gói</span>
        </div>
        <a href="" class="ei-primary-btn">
          <div>Mua ngay!</div>
        </a>
        <div class="price-detail">
          <div class="price-have">
            <img srcset="./assets/img/tick-icon.png 2x" alt="Tick Icon" /> <span>${
              pkg.quantity
            }</span> số hoá đơn điện tử
          </div>
          <div class="price-have">
            <img srcset="./assets/img/tick-icon.png 2x" alt="Tick Icon" /> Chữ ký số
          </div>
            <div class="price-have">
            <img srcset="./assets/img/tick-icon.png 2x" alt="Tick Icon" /> Mobile app
          </div>
          <div class="price-have">
            <img srcset="./assets/img/tick-icon.png 2x" alt="Tick Icon" /> Hoá đơn đầu vào
          </div>
          ${
            is88
              ? `
             <div class="price-have">
            <img srcset="./assets/img/tick-icon.png 2x" alt="Tick Icon" /> Phần mềm kế toán
          </div>
          <div class="price-have">
            <img srcset="./assets/img/tick-icon.png 2x" alt="Tick Icon" /> Tích hợp
          </div>
              `
              : ""
          }
         
          <div class="price-have">
            <img srcset="./assets/img/tick-icon.png 2x" alt="Tick Icon" /> Web
          </div>
        </div>
      </div>
    `);
  });
}

// Append packages to respective sections
appendPackagesFinal(
  "#business-diamond-list-final",
  businessDiamondPackagesFinal,
  "Diamond"
);
appendPackagesFinal(
  "#business-gold-list-final",
  businessGoldPackagesFinal,
  "Gold"
);
appendHCTPackagesFinal("#htc88-list-final", htc88PackagesFinal, "88");
appendHCTPackagesFinal("#htc78-list-final", htc78PackagesFinal, "78");

// Scroll partner
const scrollers = document.querySelectorAll(".scroller");

// If an user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// All product show
$(document).ready(function () {
  var timeout;
  $(".all-product").hover(
    function () {
      clearTimeout(timeout);
      $(".all-product-show").show();
    },
    function () {
      timeout = setTimeout(function () {
        if (!$(".all-product-show").is(":hover")) {
          $(".all-product-show").hide();
        }
      }, 100); // Delay để kiểm tra nếu con trỏ chuột không nằm trên div2
    }
  );

  $(".all-product-show").hover(
    function () {
      clearTimeout(timeout);
      $(".all-product-show").show();
    },
    function () {
      timeout = setTimeout(function () {
        if (!$(".all-product").is(":hover")) {
          $(".all-product-show").hide();
        }
      }, 100); // Delay để kiểm tra nếu con trỏ chuột không nằm trên div1
    }
  );
});

// Process Easyinvoice
$(document).ready(function () {
  const $faqItems = $(".faq-item");

  $faqItems.on("click", function () {
    const $item = $(this);
    const $answer = $item.next();
    const $icon = $item.find("i");
    const $faqBox = $item.closest(".faq-box");
    $(".faq-box").removeClass("faqBoxActive");
    $faqItems.not($item).each(function () {
      const $otherAnswer = $(this).next();
      const $otherIcon = $(this).find("i");
      $otherAnswer
        .removeClass("active")
        .css("max-height", "0")
        .css("margin-top", 0);
      $otherIcon.removeClass("active");
    });

    $answer.toggleClass("active");
    $icon.toggleClass("active");
    $answer
      .css(
        "max-height",
        $answer.hasClass("active") ? $answer[0].scrollHeight + "px" : "0"
      )
      .css("margin-top", $answer.hasClass("active") ? "1rem" : "0");
    $faqBox.addClass($answer.hasClass("active") ? "faqBoxActive" : "");
  });
});
