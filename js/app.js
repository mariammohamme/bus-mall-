'use strict';

var oneimgElement = document.getElementById('one-img');
var twoimgElement = document.getElementById('two-img');
var threeimgElement = document.getElementById('three-img');
var divimg = document.getElementById('images-div');
var showResult = document.getElementById('results-list');
var maxSubmit = document.getElementById('submit');
var maxAttempts = 15;
var userAttemptsCounter = 0;

var oneImageIndex;
var twoImageIndex;
var threeImageIndex;
// construcore
function GoatImage(name,source){
  this.name = name;
  this.source = source;
  this.votes = 0;
  var view = 0 ;
  GoatImage.prototype.allImages.push(this);
}
// object 
GoatImage.prototype.allImages = [];
new GoatImage('bag:','../img/bag.jpg');// 0
new GoatImage('banana:','../img/banana.jpg');// 1
new GoatImage('bathroom:','../img/bathroom.jpg');//2
new GoatImage('boots:','../img/boots.jpg');  //3
new GoatImage('breakfast:','../img/breakfast.jpg'); //4
new GoatImage('bubblergum:','../img/bubblegum.jpg');//5
new GoatImage('chair:','../img/chair.jpg');//6
new GoatImage('cthulhu:','../img/cthulhu.jpg');//7
new GoatImage('dog-duck:','../img/dog-duck.jpg');//8
new GoatImage('dragon:','../img/dragon.jpg');//8
new GoatImage('pen:','../img/pen.jpg');//9
new GoatImage('pet-sweep:','../img/pet-sweep.jpg');//10
new GoatImage('scissors:','../img/scissors.jpg');//11
new GoatImage('shark:','../img/shark.jpg');//12
new GoatImage('sweep:','../img/sweep.png');//13
new GoatImage('tauntaun:','../img/tauntaun.jpg');//14
new GoatImage('unicorn:','../img/unicorn.jpg');//15
new GoatImage('usb:','../img/usb.gif');//16
new GoatImage('water-can:','../img/water-can.jpg');//17
new GoatImage('wine-glass:','../img/wine-glass.jpg');//18


console.log(GoatImage.prototype.allImages);

renderTwoRandomImages();

divimg.addEventListener('click',handleUserClick);
showResult.addEventListener('click', showButton);
maxSubmit.addEventListener('submit', setmaxSubmit);

function handleUserClick(event){
  userAttemptsCounter++;

  if(userAttemptsCounter < maxAttempts){
    if(event.target.id === 'one-img'){
      userAttemptsCounter++;
      GoatImage.prototype.allImages[twoImageIndex].votes++;
      renderTwoRandomImages();
    } else if (event.target.id ==='two-img') {
      userAttemptsCounter++;
      GoatImage.prototype.allImages[threeImageIndex].votes++;
      renderTwoRandomImages();
    }else if (event.target.id==='three-img') {
      userAttemptsCounter++;
        GoatImage.prototype.allImages[oneImageIndex].votes++;
        renderTwoRandomImages();
      }
    renderTwoRandomImages();

     } else {
    // handle end of voting
    divimg.removeEventListener('click', handleUserClick);
    showResult.disabled=false;

    }

  }


function renderTwoRandomImages(){
 twoImageIndex = generateRandomIndex();
 


  do{
    oneImageIndex = generateRandomIndex();
    threeImageIndex = generateRandomIndex();
  } while(oneImageIndex === twoImageIndex || oneImageIndex === threeImageIndex || twoImageIndex === threeImageIndex);
  console.log(threeimgElement);

  threeimgElement.src = GoatImage.prototype.allImages[threeImageIndex].source;
  GoatImage.prototype.allImages.view++;
  oneimgElement.src = GoatImage.prototype.allImages[oneImageIndex].source;
  GoatImage.prototype.allImages.view++;
  twoimgElement.src = GoatImage.prototype.allImages[twoImageIndex].source;
  GoatImage.prototype.allImages.view++;

}


function generateRandomIndex(){
  return Math.floor(Math.random() * (GoatImage.prototype.allImages.length));
}
function showButton(){
  var resultsList = document.getElementById('results-list');
  var goatResult;
  for(var i = 0; i < GoatImage.prototype.allImages.length; i++){
    goatResult = document.createElement('li');
    goatResult.textContent = GoatImage.prototype.allImages[i].name + ': '+ GoatImage.prototype.allImages[i].votes + ' votes';
    resultsList.appendChild(goatResult);
}
}
function setmaxSubmit(event){
  console.log(event);
  event.preventDefault();
  maxSubmit=event.target.round.target;

}