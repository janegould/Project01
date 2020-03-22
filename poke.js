var queryURL1 = "https://pokeapi.co/api/v2/pokemon/jigglypuff"
var pokeImg;
var cellNumber = 1;

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
        
          var sprite = document.getElementById("sprite");
          if(e.key == "ArrowDown"){
            
            var oldCell = document.getElementById("cell" + cellNumber + "");
            var style = getComputedStyle(oldCell);
            
            if(style.borderBottom != "1px solid rgb(0, 0, 0)"){
              
              oldCell.innerHTML = "";
              cellNumber = cellNumber + 6;
              var newCell = document.getElementById("cell" + cellNumber + "");
              newCell.append(sprite);

              win();
            }
          }

          if(e.key == "ArrowUp"){


            var oldCell = document.getElementById("cell" + cellNumber + "");
            var style = getComputedStyle(oldCell);
            
            if(style.borderTop != "1px solid rgb(0, 0, 0)"){
              
              oldCell.innerHTML = "";
              cellNumber = cellNumber - 6;
              var newCell = document.getElementById("cell" + cellNumber + "");
              newCell.append(sprite);


              win();
            }
          }

          if(e.key == "ArrowRight"){

            var oldCell = document.getElementById("cell" + cellNumber + "");
            var style = getComputedStyle(oldCell);
            
            if(style.borderRight != "1px solid rgb(0, 0, 0)"){
              
              cellNumber = cellNumber + 1;
              var newCell = document.getElementById("cell" + cellNumber + "");
              newCell.append(sprite);
            
              win();
          
          }}

          if(e.key == "ArrowLeft"){

            var oldCell = document.getElementById("cell" + cellNumber + "");
            
            var style = getComputedStyle(oldCell);
          
            if(style.borderLeft != "1px solid rgb(0, 0, 0)"){

              oldCell.innerHTML = "";
              cellNumber = cellNumber - 1;
              var newCell = document.getElementById("cell" + cellNumber + "");
              newCell.append(sprite);
        
            win();
          
          }}

        })

      } 


      function win(){
      
        if(document.getElementById("cell36").firstChild == document.getElementById("sprite")){

          console.log("win");
          var body = document.querySelector("body");
          body.setAttribute("class", "end");
          var x = document.getElementById("x");
          x.remove();
          var img = document.createElement("img");
          img.setAttribute("src", pokeImg);
          img.setAttribute("id", "winImg");
          img.style.width = "300px";
          var winDiv = document.getElementById("win");
          winDiv.style.visibility = "visible";

          body.append(img);


        }
        else{

        }
      }