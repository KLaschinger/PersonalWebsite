$(document).ready(function(){
  /*
  $(window).scroll(function(){
    if ($(window).scrollTop() > 20) {
      //$('#navbar').animate({height: 25px},'slow');
    }
  });

  $(window).resize(function(){
    var squares = $(window).width() % 25;
  });

*/
  setInterval(loop(), 200);

});

var square = new Square

var group = [];

function loop(){

  //Initial setup
  var c = document.getElementById('squares');
  var context = c.getContext('2d');

  // Loops through group until there is enough arrays to fill the width of the page
  while (group.length * 80 < $(window).width()) {
    var list = [];
    group.push(list);
  }

  //Loops through ever array in group to make sure that it has enough squares
  for (i = 0; i < group.length; ++i) {
    while (group[i].length * 80 < $(window).height()) {
      var obj = {
        up:true,
        rg:0,
        b:255,
      };
      group[i].push(obj);
    }
  }

  // Loop through group and subobjects to format the canvas with the result
  for (j = 0; j < group.length; ++j){
    var list = group[j];
    for (k = 0; k < list.length; ++k) {
      context.rect(j*80, k*80, 80, 80);
      var rand = Math.random();
      var obj = list[k];

      if (obj.up == true) {
      console.log("Is True");
        if (obj.b < 255) {
          if (obj.b <= 175) {
            obj.up = false;
            context.fillStyle = 'rgb(0,0,'+ (obj.b + 10) + ')';
            obj.b = obj.b + 10;
          } else {
            context.fillStyle = 'rgb(0,0,'+ (obj.b - 10) + ')';
            obj.b = obj.b - 10;
          }
        } else {
          if (obj.rg == 0) {
            context.fillStyle = 'rgb(0,0,254)';
            obj.b = 254;
          } else {
            context.fillStyle = 'rgb(' + (obj.rg - 10) +',' + (obj.rg - 10) + ',255)';
            obj.rg = obj.rg - 10;
          }
        }
      } else {
      console.log("Is false")
        if (obj.b < 255) {
          context.fillStyle = 'rgb(0,0,'+ (obj.b + 10) + ')';
          obj.b = obj.b + 10;
        } else {
          if (obj.rg >= 75) {
            obj.up = true;
            context.fillStyle = 'rgb(' + (obj.rg - 10) +',' + (obj.rg - 10) + ',255)';
            obj.rg = obj.rg - 10;
          } else {
            context.fillStyle = 'rgb(' + (obj.rg + 10) +',' + (obj.rg + 10) + ',255)';
            obj.rg = obj.rg + 10;
          }
        }
      }

      context.fill();
    }
  }

  console.log("Refreshing");
  setTimeout(loop(), 1000);
}
