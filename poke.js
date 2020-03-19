
//on start click - show three pokemon

var queryURL1 = "https://pokeapi.co/api/v2/pokemon/jigglypuff"

  $("#startBtn").on("click", function(){
    $.ajax({
      url: queryURL1,
      method: "GET"
    }).then(function (response) {
        var image1 = response.sprites.front_default;
        var imageElement = document.createElement("img");
        var btn1 = document.createElement("button");
        btn1.setAttribute("class", "startBtn");

        imageElement.setAttribute("src", image1);
        btn1.append(imageElement);
        var div = document.getElementById("pokemon");
        div.append(btn1);

    })
    })

    var queryURL2 = "https://pokeapi.co/api/v2/pokemon/ditto"

  $("#startBtn").on("click", function(){
    $.ajax({
      url: queryURL2,
      method: "GET"
    }).then(function (response) {
    var image2 = response.sprites.front_default;
    var imageElement = document.createElement("img");
    var btn2 = document.createElement("button");
    btn2.setAttribute("class", "startBtn");

    imageElement.setAttribute("src", image2);
    btn2.append(imageElement);
    var div = document.getElementById("pokemon");
    div.append(btn2);

      
    })
    })

    var queryURL3 = "https://pokeapi.co/api/v2/pokemon/gengar"

    $("#startBtn").on("click", function(){
      $.ajax({
        url: queryURL3,
        method: "GET"
      }).then(function (response) {
      var image3 = response.sprites.front_default;
      var imageElement = document.createElement("img");
      var btn3 = document.createElement("button");
      btn3.setAttribute("class", "startBtn");


      imageElement.setAttribute("src", image3);
      btn3.append(imageElement);
      var div = document.getElementById("pokemon");
      div.append(btn3);
       
      })
      })
    
    var startBtns = document.getElementsByClassName("startBtn");
      for (var i = 0; i< startBtns.length; i++){
          console.log("test");
          startBtns[i].addEventListener("click", function(){
              console.log("something");
          })
      }


    //when the user chooses one, then load pre-made maze 

        //then take chosen pokemon and put on starting box

        //add event listener for the up arrow key press
            //(how do you do keypress up event listener (38 is key up))

        // make logic to move pokemon one square up

        //make logic for when pokemon reaches end game 

            //pop up message 