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
  


    $(".createBurger").on("submit", function(event) {
      console.log('Hi Enea')
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        addTomato: $("[name=purchased]:!checked").val().trim(),
        addCheese: $("[name=purchased]:!checked").val().trim(),
        addBacon: $("[name=purchased]:!checked").val().trim()
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
  