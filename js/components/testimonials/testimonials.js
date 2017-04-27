(function () {
    'use strict';
    angular.module('hotelApp').component('testimonials', {
        templateUrl: 'js/components/testimonials/testimonials.html',
        controller: TestimonialsCtrl,
        controllerAs: 'testimonials'
    });
    
    function TestimonialsCtrl($timeout) {
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
            },
            {
                avatarUrl: 'img/testimonial-avatar2.png',
                name: 'Jane E. Doe',
                position: 'CFO at Blob.com',
                quote:  'Lorem ipsum dolor sit amet, ' +
                        'consectetur adipisicing elit. Consectetur consequuntur cumque delectus ' +
                        'dicta dignissimos distinctio eum, exercitationem explicabo facere harum, ' +
                        'incidunt magni maiores natus pariatur praesentium quia quidem sapiente unde.',
            },
            {
                avatarUrl: 'img/testimonial-avatar3.png',
                name: 'Erza Scarlett',
                position: 'General Manager at FT',
                quote:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa cum ' +
                        'dolore ea eaque facilis illum, laboriosam nemo porro possimus quam quidem quis repellendus ' +
                        'sapiente similique sint, vero voluptatem voluptatum!',
            },
        ];

        vm.testimonialsList[0].active = true;
        vm.currentPosition = 0;

        vm.prevItem = function () {
            moveCursor(-1);
            //restartTimer();
        }

        vm.nextItem = function () {
            moveCursor(1);
            //restartTimer();
        };

        var restartTimer = function () {
            timeout.cancel(timer);
            autoSlide();
        }

        vm.selectSlide = function (index) {
            vm.testimonialsList[vm.currentPosition].active = false;
            vm.testimonialsList[index].active = true;
            vm.currentPosition = index;
        }

        var moveCursor = function (direction) {
            var length = vm.testimonialsList.length;
            vm.testimonialsList[vm.currentPosition].active = false;
            vm.testimonialsList[(vm.currentPosition + direction + length) % length].active = true;
            vm.currentPosition = (vm.currentPosition + direction + length) % length;
        }

        var timer;
        var autoSlide = function() {
            timer = $timeout(function() {
                vm.nextItem();
                autoSlide();
            }, 8000);
        };

        //autoSlide();

    }
})();