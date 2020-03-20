var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"];

var queryURL1 = "https://pokeapi.co/api/v2/pokemon/jigglypuff"

  $("#startBtn").on("click", function(){
    document.getElementById("pokemon").innerHTML = "";
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

    var queryURL2 = "https://pokeapi.co/api/v2/pokemon/ditto"

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

    var queryURL3 = "https://pokeapi.co/api/v2/pokemon/gengar"

    
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

      var startBtns = document.getElementsByClassName("startBtn");

      for (var i = 0; i< startBtns.length; i++){
        console.log("test");
        startBtns[i].addEventListener("click", function(){
            var spriteDiv = document.getElementById("sprite");
            spriteDiv.innerHTML = "";
            var img = document.createElement("img");
            img.setAttribute("src", this.firstChild.getAttribute("src"));
            var spriteDiv = document.getElementById("sprite");
            spriteDiv.append(img);
            moveSprite();

        })
      } 
       
      })
      })

      function moveSprite(){

        var sprite = document.getElementById("sprite");
        document.addEventListener("keydown", function(e){

          if(e.key == "ArrowDown"){

            var elStyle = window.getComputedStyle(sprite);
            var topValue = elStyle.getPropertyValue("top").replace("px", "");
            sprite.style.top = (Number(topValue) + 20) + "px";

            win();

          }

          if(e.key == "ArrowUp"){

            var elStyle = window.getComputedStyle(sprite);
            var topValue = elStyle.getPropertyValue("top").replace("px", "");
            sprite.style.top = (Number(topValue) - 20) + "px";

            win();
          
          }

          if(e.key == "ArrowRight"){

            var elStyle = window.getComputedStyle(sprite);
            var topValue = elStyle.getPropertyValue("left").replace("px", "");
            sprite.style.left = (Number(topValue) + 20) + "px";

            win();
          
          }

          if(e.key == "ArrowLeft"){

            var elStyle = window.getComputedStyle(sprite);
            var topValue = elStyle.getPropertyValue("left").replace("px", "");
            sprite.style.left = (Number(topValue) - 20) + "px";
            
            win();
          
          }

        })

      } 


      function win(){
      
        if($("#sprite").position().left == $("#end").position().left && $("#sprite").position().right == $("#end").position().right){
        
          var winDiv = document.getElementById("win");
          winDiv.style.visibility = "visible";

        }
        else{

        }
      }
   

    //when the user chooses one, then load pre-made maze 

        //then take chosen pokemon and put on starting box

        //add event listener for the up arrow key press
            //(how do you do keypress up event listener (38 is key up))

        // make logic to move pokemon one square up

        //make logic for when pokemon reaches end game 

            //pop up message 