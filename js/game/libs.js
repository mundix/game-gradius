var animationID = null;
function animate(){
    ctx.clearRect(0,0,width,height);
    collection.forEach((obj,index)=>{
        obj.draw();
        // obj.move(0,0);
    });
    

    animationID = requestAnimationFrame(animate);
}