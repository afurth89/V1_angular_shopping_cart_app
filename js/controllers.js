// Filtering (Search Controller)
  // By Category - drop down
  // By Name - text match
  // Might be two separate controllers 


// List Display Controllers
  // Controls the displaying of items
  // Sort by price
  // Calculate price 
app.controller("InventoryListController", InventoryListController);

InventoryListController.$inject = ["ShoppingCartService"]

function InventoryListController(ShoppingCartService) {
  this.inventory = ShoppingCartService.getInventory();
  console.log(this.inventory)
}

// Item Controller
  // Lives inside elements getting repeated
  // Changes the quantity in cart