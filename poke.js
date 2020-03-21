var queryURL1 = "https://pokeapi.co/api/v2/pokemon/jigglypuff"
var pokeImg;


  $("#startBtn").on("click", function start(){
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
            var cell1 = document.getElementById("cell1");
            cell1.append(spriteDiv);
            pokeImg = img.getAttribute("src");
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
            sprite.style.top = (Number(topValue) + 96) + "px";

            win();

          }

          if(e.key == "ArrowUp"){

            var elStyle = window.getComputedStyle(sprite);
            var topValue = elStyle.getPropertyValue("top").replace("px", "");
            sprite.style.top = (Number(topValue) - 96) + "px";

            win();
          
          }

          if(e.key == "ArrowRight"){

            var elStyle = window.getComputedStyle(sprite);
            var topValue = elStyle.getPropertyValue("left").replace("px", "");
            sprite.style.left = (Number(topValue) + 96) + "px";

            win();
          
          }

          if(e.key == "ArrowLeft"){

            var elStyle = window.getComputedStyle(sprite);
            var topValue = elStyle.getPropertyValue("left").replace("px", "");
            sprite.style.left = (Number(topValue) - 96) + "px";
            
            win();
          
          }

        })

      } 


      function win(){
      
        if($("#sprite").position().left == $("#cell36").position().left && document.getElementById("sprite").offsetTop == document.getElementById("cell36").offsetTop){
        
          console.log("win");
          var body = document.querySelector("body");
          body.setAttribute("class", "end");
          var x = document.getElementById("x");
          x.remove();
          var img = document.createElement("img");
          img.setAttribute("src", pokeImg);
          img.style.width = "300px";

          body.append(img);


        }
        else{

        }
      }


      
   
      //endCell.append(endDiv);


    //when the user chooses one, then load pre-made maze 

        //then take chosen pokemon and put on starting box

        //add event listener for the up arrow key press
            //(how do you do keypress up event listener (38 is key up))

        // make logic to move pokemon one square up

        //make logic for when pokemon reaches end game 

            //pop up message 