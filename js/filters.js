// Create filter function that matches by search term
app.filter('categoryFilter', function() {
  return function(input) {
    console.log(input);
  }
})

// Converts boolean (for In Stock) to "yes" or "no"
app.filter('yesNo', function() {
  return function(input) {
      return input ? 'Yes' : 'No';
  }
})