(function (app) {
    "use strict";

    function controller() {
        
    };
    app.component("component.demandeurs", {
            templateUrl: "dist/views/component.demandeurs.html",
            controller: controller,
            controllerAs: "vm",
            bindings:
            {
                demandeurs: "<",
                pages: "<"
            }
        });
} (angular.module("app")));