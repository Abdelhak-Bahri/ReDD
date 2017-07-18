(function (app) {
    "use strict";

    app.controller("controller.main", controller);

    controller.$inject = ["dataservice", "config", "$timeout"];

    function controller(dataservice, config, $timeout) {
        var self = this;

        self.options = dataservice.options;

        self.pages = {};
        self.resultStats = "";
        self.query = "";
        self.isSimpleSearch = false;

        $timeout(function () {
            self.isSimpleSearch = true;
        }, 1000)

        self.simpleSearch = function (query) {
            query = query || "";
            self.query = query;
            console.log("Searche for : " + self.query);
            
            dataservice.getData(query)
                .then(success);
        };

        self.getPage = function (page) {
            dataservice.getData(self.query, page)
                .then(success);
        }

        init();

        function success(data) {

            self.demandeurs.list = data.hits.hits;
            self.resultStats = "About " + numberWithCommas(data.hits.total) + " results ( " + data.took / 1000 + " seconds) "
            console.log(data.hits);


            self.pages.total = data.hits.total;
            self.pages.current = data.hits.current;
            console.log("Page : ", self.pages);



        };

        function init() {
            self.contents = config.DIST;
            self.demandeurs = {
                list: []
            };

        }

    };
}(angular.module("app")));  