(function () {
    'use strict';
    angular.module('hotelApp').component('testimonials', {
        templateUrl: 'js/components/testimonials/testimonials.html',
        controller: TestimonialsCtrl,
        controllerAs: 'testimonials'
    });
    
    function TestimonialsCtrl($window) {
        var vm = this;

        vm.testimonialsList = [
            {
                avatarUrl: 'img/testimonial-avatar.jpg',
                name: 'John A. Doe',
                position: 'Fullstack Developer at CYOM,Inc',
                quote:  'Lorem ipsum dolor sit amet, ' +
                        'consectetur adipisicing elit. Sint quos dolorum beatae officiis ' +
                        'ab ipsa aut ipsum iusto, eius neque dolor aliquam. Quisquam explicabo ' +
                        'fugiat voluptatem nostrum, eos, dolorum eius.',
                active: true
            },
            {
                avatarUrl: 'img/testimonial-avatar2.png',
                name: 'Jane E. Doe',
                position: 'CFO at Blob.com',
                quote:  'Lorem ipsum dolor sit amet, ' +
                        'consectetur adipisicing elit. Consectetur consequuntur cumque delectus ' +
                        'dicta dignissimos distinctio eum, exercitationem explicabo facere harum, ' +
                        'incidunt magni maiores natus pariatur praesentium quia quidem sapiente unde.',
                active: false
            },
            {
                avatarUrl: 'img/testimonial-avatar3.png',
                name: 'Erza Scarlett',
                position: 'General Manager at FT',
                quote:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa cum ' +
                        'dolore ea eaque facilis illum, laboriosam nemo porro possimus quam quidem quis repellendus ' +
                        'sapiente similique sint, vero voluptatem voluptatum!',
                active: false
            },
        ];

        vm.prevItem = function (currentIndex) {
            moveCursor(-1, currentIndex);
        }

        vm.nextItem = function (currentIndex) {
            moveCursor(1, currentIndex);
        };

        var moveCursor = function (direction, currentIndex) {
            var length = vm.testimonialsList.length;
            vm.testimonialsList[currentIndex].active = false;
            vm.testimonialsList[(currentIndex + direction + length) % length].active = true;
        }

        this.$onChanges = function () {
            window.setInterval(ToggleNextTestimonial(), 50);
        }

        function ToggleNextTestimonial() {

        }
    }
})();