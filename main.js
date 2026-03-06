document.querySelectorAll('.faq-panel-header').forEach(trigger => {
    trigger.addEventListener('click', function () {

        const content = this.nextElementSibling;

        document.querySelectorAll('.faq-panel-header').forEach(other => {
            if (other !== this) {
                other.classList.remove('active');
                other.querySelector('.faq-panel-icon')
                    .classList.remove('active');

                const otherContent = other.nextElementSibling;
                otherContent.style.height = '0';
            }
        });

        this.classList.toggle('active');

        this.querySelector('.faq-panel-icon')
            .classList.toggle('active');

        if (this.classList.contains('active')) {
            const body = content.querySelector('.faq-panel-body');
            content.style.height = body.offsetHeight + 'px';
        } else {
            content.style.height = '0';
        }

    });
});

$(function () {

    $(".hamburger").on("click", function () {
        $("header").toggleClass("open");
    });

    $(".mask").on("click", function () {
        $("header").removeClass("open");
    });

    $(".header-nav").on("click", function () {
        $("header").removeClass("open");
    });
});


$(window).scroll(function () {
    $(".inview-slide-left").each(function () {

        var scroll = $(window).scrollTop();

        var target = $(this).offset().top;

        var windowHeight = $(window).height();

        if (scroll > target - windowHeight + $(this).outerHeight()) {
            $(this).addClass("slide-left");
        }
    });
});


$(window).scroll(function () {
    $(".inview-slide-right").each(function () {

        var scroll = $(window).scrollTop();

        var target = $(this).offset().top;

        var windowHeight = $(window).height();

        if (scroll > target - windowHeight + $(this).outerHeight()) {
            $(this).addClass("slide-right");
        }
    });
});

gsap.utils.toArray(".popup").forEach((item) => {
    gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 0.7,

        scrollTrigger: {
            trigger: item,
            start: "top 85%",
        }
    });
});