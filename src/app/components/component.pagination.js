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
            size: "<",
            onBtnClick: '&'
        }

    });

    function controller() {
        var self = this;
        self.totalPage = 0; 
        this.$onInit = function () {
            self.size = self.size || 10;
            console.log("On    init")
        };

        this.getPage = function (index) {

            self.onBtnClick({ page: index });

        }

        this.getpages = function (current, total) {
            // Nombre de page
            total = Math.floor(self.total / self.size) + 1;
            self.totalPage = numberWithCommas(total); 
            // Nombre de button par page 
            var MAX_NUMBER_ELEMENT = 10;
            var array = [];

            var last = MAX_NUMBER_ELEMENT + Math.floor(current / MAX_NUMBER_ELEMENT) * MAX_NUMBER_ELEMENT;
            last = last < total ? last : total;
            
            

            var start = Math.floor(current / MAX_NUMBER_ELEMENT) * MAX_NUMBER_ELEMENT;

            start = start > 0 ? start - 1 : 1;

            for (var index = start; index <= last; index++) {
                array.push(index < self.pageSize ? "0" + index : index);

            }
            return array;
        };

    };


}(angular.module("app")));