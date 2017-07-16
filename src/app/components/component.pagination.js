(function (app) {
    "use strict";
    app.component("component.pagination", {
        restrict: 'E',
        templateUrl: "dist/views/component.pagination.html",
        controller: controller,
        controllerAs: "vm",
        bindings: {
            total: "<",
            current: "<",
            onBtnClick: '&'
        }

    });

    function controller() {
        var self = this;
        this.getPage = function (index) {

            self.onBtnClick({ page: index });

        }

        this.getpages = function (current, total) {
            total = Math.floor(self.total / 10) + 1;
            var array = [];
            var last = 10 + Math.floor(current / 10) * 10;
            last = last < total ? last : total;

            var start = Math.floor(current / 10) * 10;
            start = start > 0 ? start - 1 : 1;

            for (var index = start; index <= last; index++) {
                array.push(index < 10 ? "0" + index : index);

            }
            return array;
        };

    };


}(angular.module("app")));