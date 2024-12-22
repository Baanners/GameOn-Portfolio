$(document).ready(function(){
    $('.logo-area').slick({
        slidesToShow: 7, 
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        speed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});
