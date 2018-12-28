//GameBoard Class
class Base {
    constructor(x,y,width,height,color) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._color = color;
    }
    draw()
    {
        ctx.beginPath();
        ctx.rect(this._x, this._y, this._width, this._height);
        ctx.fillStyle = this._color;
        ctx.fill();
        ctx.stroke();
    }
    
}

class GameBoard extends Base {
    constructor(x,y,width,height,color){
        super(x,y,width,height,color);
    }
    move(x,y)
    {
       return;
    }
}

class Obstacle extends Base {
    constructor(x,y,width,height,color){
        super(x,y,width,height,color);
    }
    move(x,y)
    {
        return;
    }
}
