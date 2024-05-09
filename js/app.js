document.addEventListener("DOMContentLoaded", function () {

    //Sticky header

    window.addEventListener('scroll', () => {
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    })

    //Mobile Nav 

    let navToggleBtn = document.querySelector(".mobile-nav-toggler");
    let navCloseBtn = document.querySelector(".mobile-nav-closer");

    let mobileNav = document.querySelector(".mobile-nav");

    navToggleBtn.addEventListener("click", () => {
        mobileNav.classList.add("mobile-nav-show");
    })

    navCloseBtn.addEventListener("click", () => {
        mobileNav.classList.remove("mobile-nav-show");
    })


    // Quick View Slider

    const quickViewSec = document.getElementById("quick-view");

    const qckViewBtn = document.querySelectorAll(".qck-v-btn");
    const qckViewIconBtn = document.querySelectorAll(".qck-v-i-btn");


    if (quickViewSec) {

        const quickViewClose = document.getElementById("quick-view-close");

        quickViewClose.addEventListener("click", () => {

            quickViewSec.style.display = "none";
        });

        const quickViewImgSlides = document.querySelectorAll(".quick-view-img-slide");
        const quickViewNavDots = document.querySelector(".quick-view-nav-dots");

        let quViewActiveCount = 0;

        quickViewImgSlides.forEach((slide, index) => {

            slide.style.left = `${index * 100}%`;

            let creatImgDot = document.createElement("div");

            (index === 0) ? creatImgDot.classList.add("quick-view-dot", "quick-view-dot-active") : creatImgDot.classList.add("quick-view-dot");

            creatImgDot.dataset.src = slide.querySelector("img").src;
            creatImgDot.dataset.id = index;

            quickViewNavDots.append(creatImgDot);
        });

        const allQuickViewDots = document.querySelectorAll(".quick-view-dot");

        allQuickViewDots.forEach((sinDot) => {

            let createDotImg = document.createElement("img");

            createDotImg.src = sinDot.dataset.src;

            sinDot.append(createDotImg);

            sinDot.addEventListener("click", () => {

                showSinQuickDot();

                quViewActiveCount = + sinDot.dataset.id;

                runQuickViewSlider();
            })

        })


        function runQuickViewSlider() {

            if (quViewActiveCount < 0) {
                quViewActiveCount = quickViewImgSlides.length - 1;
            }

            if (quViewActiveCount >= quickViewImgSlides.length) {
                quViewActiveCount = 0;
            }

            quickViewImgSlides.forEach((sinViewImg) => {
                sinViewImg.style.transform = `translateX(-${quViewActiveCount * 100}%)`;
            })

            showSinQuickDot();
        }

        function showSinQuickDot() {

            allQuickViewDots.forEach((sinQuickViewDot, index, arr) => {

                sinQuickViewDot.classList.remove("quick-view-dot-active");

                if (quViewActiveCount === index) {
                    arr[index].classList.add("quick-view-dot-active");
                }
            });
        }

        showSinQuickDot();

        setInterval(() => {
            quViewActiveCount++;
            runQuickViewSlider();
        }, 3000);

    }





    //Offcanvas Right

    const sideWishBtn = document.getElementById("side-wish-open");
    const sideCartBtn = document.getElementById("side-cart-open");

    const offCanNavs = document.querySelectorAll(".off-can-nav");
    const offCanTabs = document.querySelectorAll(".off-can-tab");

    function clearActive() {

        offCanNavs.forEach((sinOffCanNav) => {
            sinOffCanNav.classList.remove("active");
        })

        offCanTabs.forEach((sinOffCanTab) => {
            sinOffCanTab.classList.remove("active", "show");
        })

    }

    if (sideWishBtn) {

        sideWishBtn.addEventListener("click", () => {

            clearActive();

            offCanNavs[1].classList.add("active");
            offCanTabs[1].classList.add("active", "show");
        })

    }


    if (sideCartBtn) {

        sideCartBtn.addEventListener("click", () => {

            clearActive();

            offCanNavs[0].classList.add("active");
            offCanTabs[0].classList.add("active", "show");
        })

    }


    //Banner Owl Carousel

    $('.owl-one').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    //trend pr Owl Carousel

    $('.owl-two').owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })



    //Testtimonial Owl Carousel

    $('.owl-three').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })



    // Price Range

    let minValue = document.getElementById("min-value");
    let maxValue = document.getElementById("max-value");

    const rangeFill = document.querySelector(".range-fill");

    const rangeIpElem = document.querySelectorAll(".range-slider input");


    function validateRange() {

        let minPrice = parseInt(rangeIpElem[0].value);
        let maxPrice = parseInt(rangeIpElem[1].value);

        if (minPrice > maxPrice) {
            let tempValue = maxPrice;
            maxPrice = minPrice;
            minPrice = tempValue;
        }


        const minPercentage = ((minPrice) / 400) * 100;
        const maxPercentage = ((maxPrice) / 400) * 100;

        rangeFill.style.left = minPercentage + "%";
        rangeFill.style.width = maxPercentage - minPercentage + "%";

        minValue.innerHTML = "$" + minPrice;
        maxValue.innerHTML = "$" + maxPrice;
    }


    rangeIpElem.forEach((singleRangeIp) => {
        singleRangeIp.addEventListener("input", validateRange);
    });


    // validateRange();




    // Single Product Slider 

    const sinSlides = document.querySelectorAll(".sin-slide");

    const sinNavDots = document.querySelector(".sin-nav-dots");

    // console.log(sinNavDots)

    let activeSliderCount = 0;

    sinSlides.forEach((slide, index) => {

        slide.style.left = `${index * 100}%`;

        let createDot = document.createElement("div");

        (index === 0) ? createDot.classList.add("dot", "sin-dot-active") : createDot.classList.add("dot", "img-fluid");

        createDot.dataset.src = slide.querySelector("img").src;
        createDot.dataset.id = index;

        sinNavDots.append(createDot);
    })

    const allSinDot = document.querySelectorAll(".dot");

    allSinDot.forEach((singleDot) => {

        let createImg = document.createElement("img");

        createImg.src = singleDot.dataset.src;

        singleDot.append(createImg);

        singleDot.addEventListener("click", () => {
            showsinDot();

            activeSliderCount = + singleDot.dataset.id;

            runSinSlider();
        })

    })

    function runSinSlider() {

        if (activeSliderCount < 0) {
            activeSliderCount = sinSlides.length - 1;
        }

        if (activeSliderCount >= sinSlides.length) {
            activeSliderCount = 0;
        }

        sinSlides.forEach((singleSlide) => {
            singleSlide.style.transform = `translateX(-${activeSliderCount * 100}%)`;
        })

        showsinDot();

    }

    function showsinDot() {

        allSinDot.forEach((singleDot, index, arr) => {
            singleDot.classList.remove("sin-dot-active");

            if (activeSliderCount === index) {
                arr[index].classList.add("sin-dot-active");
            }
        });
    }

    showsinDot();

    function autoplay() {
        activeSliderCount++;
        runSinSlider();
    }

    let autoplaySlider = setInterval(autoplay, 3000);




    // // Img View Section
    const imgViewSec = document.getElementById("pr-img-view");

    const imgViewExpandBtn = document.querySelectorAll(".expand-sin-pr");

    const imgViewCloseBtn = document.querySelector(".img-view-close");

    imgViewExpandBtn.forEach((imgViewEx) => {

        imgViewEx.addEventListener("click", () => {

            imgViewSec.style.top = "0%";

        })
    });

    if (imgViewCloseBtn) {
        imgViewCloseBtn.addEventListener("click", () => {
            imgViewSec.style.top = "-165%";

        })

    }


    // Img View Slider
    let currSlider = document.querySelector(".curr-slide");

    let totalSlider = document.querySelector(".total-slide");

    const imgViewSlides = document.querySelectorAll(".img-view-silde");

    const ImgViewDots = document.querySelector(".img-view-nav-dots");

    const imgViewPrevBtn = document.querySelector(".img-v-prev");
    const imgViewNextBtn = document.querySelector(".img-v-next");

    // console.log(ImgViewDots);

    let imgViewCounter = 0;

    imgViewSlides.forEach((imgSlide, index) => {

        imgSlide.style.left = `${index * 100}%`;

        let createDotDiv = document.createElement("div");

        (index === 0) ? createDotDiv.classList.add("img-v-dot", "img-v-dot-active") : createDotDiv.classList.add("img-v-dot");

        createDotDiv.dataset.src = imgSlide.querySelector("img").src;
        createDotDiv.dataset.id = index;

        ImgViewDots.append(createDotDiv);
    })

    if (totalSlider) {
        totalSlider.innerText = imgViewSlides.length;
    }

    const allImgViewDots = document.querySelectorAll(".img-v-dot");

    allImgViewDots.forEach((oneImgViewDot) => {

        let createImgElem = document.createElement("img");

        createImgElem.src = oneImgViewDot.dataset.src;

        oneImgViewDot.append(createImgElem);

        oneImgViewDot.addEventListener("click", () => {
            showImgViewDot();

            imgViewCounter = + oneImgViewDot.dataset.id;

            runImgViewSlider();
        })
    })

    function runImgViewSlider() {

        if (imgViewCounter < 0) {
            imgViewCounter = imgViewSlides.length - 1;
        }

        if (imgViewCounter >= imgViewSlides.length) {
            imgViewCounter = 0;
        }

        imgViewSlides.forEach((singleImgViewSlide) => {
            singleImgViewSlide.style.transform = `translateX(-${imgViewCounter * 100}%)`;
        })

        showImgViewDot();

        currSlider.innerText = imgViewCounter + 1;
    }



    function showImgViewDot() {

        allImgViewDots.forEach((dot, index, arr) => {

            dot.classList.remove("img-v-dot-active");

            if (imgViewCounter === index) {
                arr[index].classList.add("img-v-dot-active");
            }
        });
    }

    showImgViewDot();

    if (imgViewPrevBtn) {

        imgViewPrevBtn.addEventListener("click", () => {
            imgViewCounter--;
            runImgViewSlider();
        })
    }

    if (imgViewNextBtn) {
        imgViewNextBtn.addEventListener("click", () => {
            imgViewCounter++;
            runImgViewSlider();
        })
    }






    // Quantity Count

    const quantityBoxes = document.querySelectorAll(".quantity-box");

    quantityBoxes.forEach((singleQuantityBox) => {

        const quantityText = singleQuantityBox.querySelector("input");
        const quantityPlus = singleQuantityBox.querySelector(".quantity-plus");
        const quantityMinus = singleQuantityBox.querySelector(".quantity-minus");

        quantityPlus.addEventListener("click", () => {
            quantityText.value++;
        })

        quantityMinus.addEventListener("click", () => {
            quantityText.value--;

            if (quantityText.value <= 0) {
                quantityText.value = 0;
            }
        })
    });



    //Checkout Page Acccordion Left

    const checkAccorLeft = document.querySelectorAll(".accor-l-list");
    const accorLeftText = document.querySelectorAll(".accor-l-text");
    const accorLeftIcon = document.querySelectorAll(".accor-l-icon");

    checkAccorLeft.forEach((checkAccorLeftOne) => {

        const checkAccorLeftH2 = checkAccorLeftOne.querySelector("h2");
        const checkAccorLeftText = checkAccorLeftOne.querySelector(".accor-l-text");

        if (checkAccorLeftH2) {

            checkAccorLeftH2.addEventListener("click", () => {

                if (checkAccorLeftText.classList.contains("accor-l-text-show")) {

                    checkAccorLeftText.classList.remove("accor-l-text-show");
                    checkAccorLeftH2.querySelector("i").style = "transform: rotate(0deg);"


                } else {


                    accorLeftText.forEach((singleAccorLeftText) => {
                        singleAccorLeftText.classList.remove("accor-l-text-show");
                    })

                    accorLeftIcon.forEach((singleAccorLeftIcon) => {
                        singleAccorLeftIcon.style = "transform: rotate(0deg);"
                    })

                    checkAccorLeftText.classList.add("accor-l-text-show");

                    checkAccorLeftH2.querySelector("i").style = "transform: rotate(180deg);"

                }

            })

        }

    })



    // Payment Accordian

    const paymentOptions = document.querySelectorAll(".payment-option");
    const paymentAccorText = document.querySelectorAll(".pay-accor-text");

    paymentOptions.forEach((singlePayOption) => {

        const payRadio = singlePayOption.querySelector(".form-check-label");

        const sinPayAccorText = singlePayOption.querySelector(".pay-accor-text");

        console.log(payRadio);

        if (payRadio) {

            payRadio.addEventListener("click", () => {

                if (sinPayAccorText.classList.contains("pay-accor-show")) {

                    sinPayAccorText.classList.remove("pay-accor-show");

                } else {

                    paymentAccorText.forEach((onePayAccorText) => {
                        onePayAccorText.classList.remove("pay-accor-show");
                    });

                    sinPayAccorText.classList.add("pay-accor-show");

                }

            })
        }

    })


    // About Page FAQ

    const cliFaqLi = document.querySelectorAll(".client-faq-list");
    const cliFaqIconAll = document.querySelectorAll(".client-head-icon");
    const cliFaqtextAll = document.querySelectorAll(".client-faq-text");

    // console.log(cliFaqtextAll)

    cliFaqLi.forEach((singleCliFaqLi) => {

        const cliFaqHead = singleCliFaqLi.querySelector(".client-faq-head");
        const cliFaqtext = singleCliFaqLi.querySelector(".client-faq-text");

        if (cliFaqHead) {

            cliFaqHead.addEventListener("click", (e) => {

                if (cliFaqtext.classList.contains("client-faq-text-show")) {

                    cliFaqtext.classList.remove("client-faq-text-show");
                    e.target.querySelector("span").innerText = "+";


                } else {

                    cliFaqtextAll.forEach((sinCliFaqText) => {
                        sinCliFaqText.classList.remove("client-faq-text-show");
                    })

                    cliFaqIconAll.forEach((sinCliFaqIcon) => {
                        sinCliFaqIcon.innerText = "+"
                    })

                    cliFaqtext.classList.add("client-faq-text-show");

                    e.target.querySelector("span").innerText = "-";

                }

            })

        }

    })


    //About Page Counter 

    const aboutSaleCounter = document.getElementById("sale-counter");

    if (aboutSaleCounter) {

        const aboutSaleObserver = new IntersectionObserver((e) => {

            let i = 0;

            let aboutCounter = setInterval(() => {

                i++;
                aboutSaleCounter.innerText = i;

                if (i == aboutSaleCounter.dataset.stop) {
                    clearInterval(aboutCounter);
                }

            }, 100)

            aboutSaleObserver.unobserve(e[0].target);

            // console.log(e)

        }, { threshold: 1 });


        aboutSaleObserver.observe(aboutSaleCounter);
    }


});