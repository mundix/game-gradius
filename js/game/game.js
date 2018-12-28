$(function(){
        animate();
});


collection.push(new GameBoard(0,0,width,height,"#000"));
// collection.push(new GameBoard(0,0,width,height,"red"));
collection.push(new Obstacle(10,10,10,10,"red"));
collection.push(new Obstacle(0,0,10,10,"red"));

level.forEach((cols,pos)=>{
   cols.forEach((row,index)=>{       
    // collection.push(new Obstacle(index,pos,10,10,"red"));
   });
   
});


// collection.forEach((obj,index)=>{
//     obj.draw();
// });
