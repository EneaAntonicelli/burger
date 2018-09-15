$(function() {

    console.log("TEST");

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

    $(".burgersPurchased").on("click", ".remove", function(event) {
      console.log("ENEA")
      var id = $(this).data("id");
      var remove = $(this).data("remove");
  console.log("THIS IS THE DATA VALUE: ");
      var removeState = {
        purchased: false
      };
      $.ajax("/api/burgers/remove/" + id, {
        type: "PUT",
        data: removeState
      }).then(
        function() {
          console.log("changed requisition to", remove);
          
          location.reload();
        }
      );
    });
  


    $("#createBurger").on("click", function(event) {
      console.log(event.target);
      event.preventDefault();
      
      var newBurger = {
        burgerName: $("#inputField").val().trim(),
        
        // TO ADD AT A LATER TIME:
        // addCheese: $("[name=addCheese]").is(':checked'),
        // addTomatos: $("[name=addTomato]").is(':checked'),
        // addBacon: $("[name=addBacon]").is(':checked')
        
      };
    
      console.log('Hi Enea');
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
  
  