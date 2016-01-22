define(
    [
        'backbone',
        'views/search'
    ],
    function (Backbone, Search) {
        return Backbone.Router.extend({
            routes: {
                '(/)': 'search'
            },
            initialize: function() {
                Backbone.history.start()
            },
            search: function () {
                var search = new Search({
                    el: $('main')
                });

                search.render()
            }
        });
    }
);