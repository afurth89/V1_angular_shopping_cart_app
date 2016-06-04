// Filtering (Search Controller)
  // By Category - drop down
app.controller("CategoryFilterController", CategoryFilterController);

CategoryFilterController.$inject = ["ShoppingCartService"];

function CategoryFilterController(ShoppingCartService) {
  this.category = ShoppingCartService.getCategory();
  console.log(this.category)
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
  console.log(this.inventory)
}

// Item Controller
  // Lives inside elements getting repeated
  // Changes the quantity in cart