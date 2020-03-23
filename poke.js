var queryURL1 = "https://pokeapi.co/api/v2/pokemon/jigglypuff"
var pokeImg;
var cellNumber = 1;
var url = "https://www.googleapis.com/youtube/v3/videos?id=-PlAg8R9TG4&key=AIzaSyCJ1iJthOd27F_OOEKx_-hJ8S07jCBDZB0&part=snippet,statistics";

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
            
            $.ajax({
              url: url,
              method: "GET"
            }).then(function(response){
              
              console.log(response);
              var youUrl = "https://www.youtube.com/embed/" + response.items[0].id + "?autoplay=1";
              var iframe = document.getElementById("iframe");
              iframe.setAttribute("src", youUrl);
              
            
            })

            moveSprite();
            startTimer();

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

          setScore();


        }
        else{

        }
      }
      
    var timeLeft = 60;
   
    function startTimer(){

      
      var elem = document.getElementById('timer');
    
      var timerId = setInterval(countdown, 1000);

      function countdown() {
        if (timeLeft == 0) {
          clearTimeout(timerId);
          score()
        } else {
          elem.innerHTML = timeLeft + ' seconds remaining';
          timeLeft--;
        }
      }

    }
    var score  = 0;

    function setScore(){
      score = timeLeft * 100;
      var div = document.getElementById("score");
      div.innerHTML = score; 

    }

    var nameArray = "caio";
    var scoreArray = "10000000";

    function pushScore(){
      window.localStorage.setItem("name", nameArray);
      window.localStorage.setItem("score", scoreArray);

    }

    function getScore(){
      
      var nameLocal = window.localStorage.getItem("name");
      var scoreLocal = window.localStorage.getItem("score");

      if(nameLocal == null){

      }else{
      nameArray = nameLocal;
      scoreArray = scoreLocal;
      }
    }
    getScore();



    function upScore(){
      
      var name = document.getElementById("nameInput").value;
      nameArray = nameArray + "," +  name;
      scoreArray = scoreArray + "," +  score;
      pushScore();
      getScore();

    }
    function viewScore(){
      
      var xDiv = document.getElementById("x");
      var winDiv = document.getElementById("win");
      var scoreDiv = document.getElementById("viewScoreDiv");
  
      scoreDiv.setAttribute("style", "visibility: visible");
      xDiv.setAttribute("style", "visibility: hidden;");
      winDiv.setAttribute("style", "visibility: hidden;");

      var nameString = localStorage.getItem("name");
      var scoreString = localStorage.getItem("score");
      var nameArray = nameString.split(",");
      var scoreArray = scoreString.split(",");

      var ul = document.getElementById("scoreUl");
      ul.innerHTML = "";
      
      for(i = 0; i < nameArray.length; i++){
        var li = document.createElement("li");
        li.innerHTML = nameArray[i] + " " + scoreArray[i];
        ul.append(li);

      }
    
    }
    function hideScore(){
      var scoreDiv = document.getElementById("viewScoreDiv");
      var gameDiv = document.getElementById("x");
      scoreDiv.setAttribute("style", "visibility: hidden");
      gameDiv.setAttribute("style", "visibility: visible");
    }
    
    
