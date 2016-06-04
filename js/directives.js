// Inventory Filtering
app.directive('inventoryFiltering', function() {
  return {
    restrict: "E",
    scope: {},
    controllerAs: "catFilt",
    controller: CategoryFilterController,
    templateUrl: '../partials/inventoryFiltering.html'
  }
});

// Inventory Display
app.directive('inventoryList', function() {
  return {
    restrict: "E",
    // replace: true,
    scope: {},
    controllerAs: "list",
    controller: InventoryListController,
    templateUrl: '../partials/inventoryView.html'
  }
});

// // Item Display
// app.directive('itemView', function() {
//   return {
//     restrict: "AE",
//     scope: {},
//     controllerAs: "itemViewCtrl",
//     controller: function() {

//     },
//     templateUrl: '../partials/itemView.html'
//   }
// })