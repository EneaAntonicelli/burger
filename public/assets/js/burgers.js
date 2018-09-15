$(function() {

    console.log("TEST BONER");

    $(".purchase").on("click", function(event) {
      console.log("ENEA")
      var id = $(this).data("id");
      var newPurchase = $(this).data("newPurchase");
  
      var newPurchaseState = {
        purchased: newPurchase
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newPurchaseState
      }).then(
        function() {
          console.log("changed requisition to", newPurchase);
          
          location.reload();
        }
      );
    });
  


    $(".createBurger").on("submit", function(event) {
      console.log('Hi Enea')
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        purchased: $("[name=purchased]:checked").val().trim()
      };
  
      
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Added new burger");
          
          location.reload();
        }
      );
    });
  



    $(".deleteBurger").on("click", function(event) {
      var id = $(this).data("id");
  
      
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("Deleted burger", id);
          
          location.reload();
        }
      );
    });
  });
  