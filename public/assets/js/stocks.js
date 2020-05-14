// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newStock = {
      symbol: $("#stockSymbol").val().trim(),
      maxPrice: $("#maxPrice").val().trim()
    };
    console.log(newStock);
    $.ajax("/api/newStock", {
      type: "POST",
      data: newStock
    }).then(
      function() {
        console.log("created new stock");
        // Reload the page to get the updated list
        //location.reload();
      }
    );
  });
});
