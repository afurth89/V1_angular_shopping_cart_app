// Inventory Filtering
app.directive('inventoryFiltering', function() {
  return {
    restrict: "E",
    scope: {},
    controllerAs: "filterCtrl",
    controller: function() {

    },
    templateUrl: '../partials/inventoryFiltering.html'
  }
});

// Inventory Display
app.directive('inventoryView', function() {
  return {
    restrict: "E",
    // replace: true,
    scope: {},
    controllerAs: "invViewCtrl",
    controller: function() {

    },
    templateUrl: '../partials/inventoryView.html'
  }
});

// Item Display
app.directive('itemView', function() {
  return {
    restrict: "AE",
    scope: {},
    controllerAs: "itemViewCtrl",
    controller: function() {

    },
    templateUrl: '../partials/itemView.html'
  }
})