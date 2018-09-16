$(function() {


  

    $(".purchase").on("click", function(event) {
     
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

          location.reload();
        }

      ); // END OF THEN
    }); // END OF ON CLICK FUNCTION




    $(".burgersPurchased").on("click", ".remove", function(event) {
      
      var id = $(this).data("id");
      var remove = $(this).data("remove");
  
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

      ); // END OF THEN
    }); // END OF ON CLICK FUNCTION
  



    $("#createBurger").on("click", function(event) {
      
      event.preventDefault();
      
      var newBurger = {
        burgerName: $("#inputField").val().trim(),
        
        // TO ADD AT A LATER TIME:

        // addCheese: $("[name=addCheese]").is(':checked'),
        // addTomatos: $("[name=addTomato]").is(':checked'),
        // addBacon: $("[name=addBacon]").is(':checked')
        
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(

        function() {
          
          location.reload();
        }

      ); // END OF THEN
    }); // END OF ON CLICK FUNCTION
  



    $(".deleteBurger").on("click", function(event) {
      var id = $(this).data("id");
  
      
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("Deleted burger", id);
          
          location.reload();
        }

      ); // END OF THEN
    }); // END OF ON CLICK FUNCTION
}); // END OF ON READY FUNCTION
  
  