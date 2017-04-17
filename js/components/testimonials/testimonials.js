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

        vm.prevItem = function (currentItem) {
            var currentIndex = vm.testimonialsList.indexOf(currentItem);
            if (currentIndex !== 0) {
                currentItem.active = false;
                vm.testimonialsList[currentIndex - 1].active = true;
            }
            else {
                vm.testimonialsList[0].active = false;
                vm.testimonialsList[vm.testimonialsList.length - 1].active = true;
            }
        }

        vm.nextItem = function (currentItem) {
            var currentIndex = vm.testimonialsList.indexOf(currentItem);
            if (currentIndex !== vm.testimonialsList.length - 1) {
                currentItem.active = false;
                vm.testimonialsList[currentIndex + 1].active = true;
            }
            else {
                vm.testimonialsList[0].active = true;
                vm.testimonialsList[vm.testimonialsList.length - 1].active = false;
            }
        };

        this.$onChanges = function () {
            window.setInterval(ToggleNextTestimonial(), 50);
        }

        function ToggleNextTestimonial() {
            /*var currentItem = vm.testimonialsList.find(function (item) {
                return item.active;
            });

            currentItem.active = false;

            if (!vm.testimonialsList[vm.testimonialsList.indexOf(currentItem) + 1])
                vm.testimonialsList[0].active = true;
            else
                vm.testimonialsList[vm.testimonialsList.indexOf(currentItem)].active = true;*/
        }
    }
})();