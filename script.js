const navBtn = document.querySelector('#menu-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');

navBtn.addEventListener('click', () => {
  navLinks.classList.add('activated');
  const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
  navBtn.setAttribute('aria-expanded', !isExpanded);
  !isExpanded && nav.classList.add('active');
})

/*document.querySelectorAll('.nav-link').forEach(link => {
    if(link.href === window.location.href){
        link.setAttribute('aria-current', 'page')
    }
})*/

$(document).ready(function(){
    let menuScrollTimer = null;
    $(".nav-link btn").click(function (e) {
        e.preventDefault();
        if (menuScrollTimer === null) {
            $('.nav-link btn.active').removeClass('active');
            $(this).addClass('active');
            let target = $(this).attr('href');
            $('html, body').animate({ scrollTop: $(target).offset().top - 100 }, 1050);
            menuScrollTimer = setTimeout(function () {
                clearTimeout(menuScrollTimer);
                menuScrollTimer = null;
            }, 1050);
        }
    });
    $(window).scroll(function (e) {
        // Avoid triggering the logic if the scroll event is triggerd from clicking one of the items
        if (menuScrollTimer === null) {
            let windowTop = $(this).scrollTop();

            $(".nav-link btn").each(function (event) {
                if (windowTop >= $($(this).attr('href')).offset().top - 100) {
                    $(".nav-link btn").removeClass('active');
                    $(this).addClass('active');
                }
            });
        }
    });

})
