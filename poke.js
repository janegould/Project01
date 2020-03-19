var queryURL = "https://pokeapi.co/api/v2/pokemon/"

  $("#startBtn").on("click", function(){
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response, "Im here!!!!");
    })
    })

    //on start click - show three pokemon

    //when the user chooses one, then load pre-made maze 

        //then take chosen pokemon and put on starting box

        //add event listener for the up arrow key press
            //(how do you do keypress up event listener (38 is key up))

        // make logic to move pokemon one square up

        //make logic for when pokemon reaches end game 

            //pop up message 