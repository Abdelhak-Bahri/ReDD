(function (app) {
    "use strict";

    function controller() {
        self = this;
        self.query="";
        this.submit = function (query) {
            console.log(self.query);
            self.onSubmit({ query: self.query });
        }
    };
    app.component("component.simpleSearch", {
        templateUrl: "dist/views/component.simpleSearch.html",
        controller: controller,
        controllerAs: "vm",
        bindings:
        {
            onSubmit: '&'
        }
    });
}(angular.module("app")));
