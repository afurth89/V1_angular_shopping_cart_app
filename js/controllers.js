// Filtering (Search Controller)
  // By Category - drop down
app.controller("CategoryFilterController", CategoryFilterController);

CategoryFilterController.$inject = ["ShoppingCartService"];

function CategoryFilterController(ShoppingCartService) {
  // Gets category on page load
  this.category = ShoppingCartService.getCategory();
  // Updates the category
  this.changeCategory = function(category) {
    console.log("The old category is", this.category)
    console.log("The new category is", category)
    this.category = ShoppingCartService.changeCategory(category);
    console.log("NOW the category is", this.category)
  }
}

  // By Name - text match
app.controller("SearchFilterController", SearchFilterController)

SearchFilterController.$inject = ["ShoppingCartService"]

function SearchFilterController(ShoppingCartService) {
  // Search function to compare text against inventory
  this.updateSearchText = function() {
    console.log("The controller's search text is: ", this.text)
    ShoppingCartService.changeSearchText(this.text)
  }
}


// List Display Controllers
  // Controls the displaying of items
  // Sort by price
  // Calculate price 
app.controller("InventoryListController", InventoryListController);

InventoryListController.$inject = ["ShoppingCartService", "yesNoFilter"]

function InventoryListController(ShoppingCartService) {
  vm = this;
  vm.inventory = ShoppingCartService.getInventory();
  vm.category = ShoppingCartService.getCategory();
  vm.byCategory = function() {
    console.log("The inventory list's category is: ", vm.category)
    return function(item) {
      // Why does this function get triggered when the category is changed
      // BUT the category doesn't update from ShoppingCartService.getCategory();
      // debugger
      if (vm.category === "all categories") {
        return item;
      }
      return item.categories.includes(vm.category);
    }
  }
}

// AddToCart Controller
app.controller("AddToCartController", AddToCartController)

AddToCartController.$inject = ["ShoppingCartService"]

function AddToCartController(ShoppingCartService) {
  // Create an addToCart function
  this.addToCart = function() {
    console.log("The item being updated is: ", this.itemFromDirective)
    console.log("The updated quantity is: ", this.itemFromDirective.quantity)
    ShoppingCartService.updateQuantity(this.itemFromDirective) 
  }
}

// Cart Display Controller
app.controller("CartListController", CartListController)

CartListController.$inject = ["ShoppingCartService"]

function CartListController(ShoppingCartService) {
  this.cart = ShoppingCartService.getCart();
  console.log(this.cart)
}

app.controller("UpdateCartController", UpdateCartController)

UpdateCartController.$inject = ["ShoppingCartService"]

function UpdateCartController(ShoppingCartService) {
  this.updateCart = function() {
    console.log("The item being updated is: ", this.itemFromDirective)
    console.log("The updated quantity is: ", this.itemFromDirective.quantity)
    ShoppingCartService.updateQuantity(this.itemFromDirective) 
  }
}