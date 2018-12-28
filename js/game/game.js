$(function(){
        animate();
});


collection.push(new GameBoard(0,0,width,height,"#000"));
// collection.push(new GameBoard(0,0,width,height,"red"));
collection.push(new Obstacle(10,10,10,10,"red"));
collection.push(new Obstacle(0,0,10,10,"red"));

level.forEach((cols,y)=>{
    
   cols.forEach((row,x)=>{      
    // console.log([x,y,row]);
    if(row === 1)
        collection.push(new Obstacle(x*10,y*10,10,10,"red"));
   });
   
});


// collection.forEach((obj,index)=>{
//     obj.draw();
// });
