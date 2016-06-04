// Filtering (Search Controller)
  // By Category - drop down
app.controller("CategoryFilterController", CategoryFilterController);

CategoryFilterController.$inject = ["ShoppingCartService"];

function CategoryFilterController(ShoppingCartService) {
  // Gets category on page load
  this.category = ShoppingCartService.getCategory();
  // Updates the category
  this.changeCategory = function(category) {
    console.log("The new category is", category)
    this.category = ShoppingCartService.changeCategory(category);
  }
}
  // By Name - text match
  // Might be two separate controllers 


// List Display Controllers
  // Controls the displaying of items
  // Sort by price
  // Calculate price 
app.controller("InventoryListController", InventoryListController);

InventoryListController.$inject = ["ShoppingCartService", "yesNoFilter"]

function InventoryListController(ShoppingCartService) {
  this.inventory = ShoppingCartService.getInventory();
  this.category = ShoppingCartService.getCategory();
  this.byCategory = function(category) {
    return function(item) {
      return item.categories.includes(category);
    }
  }
}

// Item Controller
  // Lives inside elements getting repeated
  // Changes the quantity in cart