
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

 function Bat(_x,_y, _height){
    this.x = _x;
    this.y = _y;
    this.height = _height;
    this.draw = function(){
        context.clearRect(0,0,canvas.clientWidth, canvas.clientHeight);                
        context.beginPath();
        context.fillStyle = 'rgba(255,0,0,0.5)';        
        context.rect(this.x, this.y, 50, this.height);
        context.fill();
    }
    this.update = function(_isDown){
        if(_isDown){
            if(this.y + this.height < canvas.clientHeight)
            this.y += 8;
        }else{
            if(this.y > 0)
            this.y -= 8;
        }
        this.draw();
    }
}

var leftBat = new Bat(30, canvas.clientHeight/2 - 140, 180);
leftBat.draw();

var rightbat = new Bat(canvas.clientWidth - 120, canvas.clientHeight/2 -140, 180);
rightbat.draw();

window.addEventListener('keydown', function(event){
   if(event.which == 38){
       leftBat.update(false);
   }else if(event.which == 40){
       leftBat.update(true)
   }
})