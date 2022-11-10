var hamb=document.getElementById('hamb');
var left=document.getElementById('left-side');
hamb.addEventListener('click',function(){
  this.classList.toggle('active');
  left.classList.toggle('active'); 
});