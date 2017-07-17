(function (app) {
    "use strict";

    function controller() {
        
    };
    app.component("component.demandeur", {
            templateUrl: "dist/views/component.demandeur.html",
            controller: controller,
            controllerAs: "vm",
            bindings:
            {
                demandeur: "<"
            }
        });
} (angular.module("app")));
