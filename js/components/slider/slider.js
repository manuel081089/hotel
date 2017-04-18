(function () {
    angular.module('hotelApp').component('slider', {
        templateUrl: 'js/components/slider/slider.html',
        controller: SliderCtrl,
        controllerAs: 'slider'
    })
    function SliderCtrl() {
        var vm = this;

        vm.slickConfig1Loaded = true;
        vm.currentSlideIndex = 0;
        vm.sliderSettings = {
            //autoplay: true,
            initialSlide: 1,
            //infinite: true,
            //autoplaySpeed: 5000,
            method: {},
            event: {
                afterChange: function (event, slick, currentSlide, nextSlide) {
                    vm.currentSlideIndex = currentSlide;
                },
            }
        }

        vm.slides = [
            {
                src: 'img/slide1.jpg'
            },
            {
                src: 'img/slide2.jpg'
            },
            {
                src: 'img/slide3.jpg'
            },
            {
                src: 'img/slide4.jpg'
            },
        ]
    }
})();
