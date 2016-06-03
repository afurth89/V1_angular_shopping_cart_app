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
app.directive('inventoryDisplay', function() {
  return {
    restrict: "E",
    scope: {},
    controllerAs: "displayCtrl",
    controller: function() {

    },
    templateUrl: '../partials/inventoryDisplay.html'
  }
});