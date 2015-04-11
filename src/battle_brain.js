var i = require('./init');
var b = require('./battle');

localStorage.clear();

i.init();

function BattleBrain(){

/*function Test(dict) {
  this.name = dict.name;
  return this;
}

var pokes = new Test({name:"Pikachu"});
localStorage.setItem("pokelist",JSON.stringify(pokes));*/
var pokelist = localStorage.getItem("pokelist");
var pokemen = JSON.parse(pokelist);

var poke1 = pokemen.p25;
var poke2 = pokemen.p115;

var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Card({
  title: 'Pokemon',
  icon: 'images/25_front.png',
});

main.show();

/*main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Pebble.js',
        icon: 'images/menu_icon.png',
        subtitle: 'Can do Menus'
      }, {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
      }]
    }]
  });
  
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
});*/

main.on('click', 'select', function(e) {
  var wind = new UI.Window();
  var hp1 = poke1.physics.hp_base - poke1.physics.hp_taken;
  var hp2 = poke2.physics.hp_base - poke2.physics.hp_taken;
  var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: poke1.name + ": " + hp1 + "\n" + poke2.name + ": " + hp2,
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
  
  wind.on('click', 'down', function(e) {
    var menu = new UI.Menu({
      sections: [{
        items: [{
          title: poke1.move1.name,
          subtitle: "PP: " + poke1.move1.pp,
        }, {
          title: poke1.move2.name,
          subtitle: "PP: " + poke1.move2.pp,
        }]
      }]
    });
    
    var thing = {"pokemon":pokemen.p25.physics};
    
    menu.on('select', function(e) {
      console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
      console.log('The item is titled "' + e.item.title + '"');
      
      /*switch(e.itemIndex) {
        case 0: thing.move = poke1.move1; break;
        case 1: thing.move = poke1.move2; break;
        default: thing.move = poke1.move1; break;
      }*/
    });
    
    menu.show();
    
    for (var key in poke1.move1){
      console.log(key + ": " + poke1.move1[key]);
    }
    
    b.attack(poke1.physics,poke2.physics);
    wind.hide();
  });
  
  wind.on('click', 'up', function(e) {
   // var w = new UI.Window();
    b.attack(pokemen.p115.physics,pokemen.p25.physics);
    //hp = pokemen.p25.physics.hp_base - pokemen.p25.physics.hp_taken;
    //w.text = hp;
    wind.hide();
  });
});

/*main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();
});*/
}

module.exports = BattleBrain;
