// Inventory Filtering - by Category
app.directive('categoryFiltering', function() {
  return {
    restrict: "E",
    scope: {},
    controllerAs: "catFilt",
    controller: CategoryFilterController,
    templateUrl: '../partials/categoryFiltering.html'
  }
});

// Inventory Filtering - by Category
app.directive('searchFiltering', function() {
  return {
    restrict: 'E',
    scope: {},
    controllerAs: 'searchFilt',
    controller: SearchFilterController,
    templateUrl: '../partials/searchFiltering.html'
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

// To Add an Item to the Cart
app.directive('addToCart', function() {
  return {
    restrict: "E",
    scope: {},
    bindToController: {
      itemAttr: "=itemFromDirective"
    },
    controllerAs: "add",
    controller: AddToCartController,
    templateUrl: "../partials/addToCart.html"
  }
})

app.directive("cartList", function() {
  return {
    restrict: "E",
    scope: {},
    controllerAs: "cart",
    controller: CartListController,
    templateUrl: "../partials/cartView.html"
  }
})

