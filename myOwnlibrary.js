function isTouching(){

    if(surface1.isTouching(box) ){
        box.shapeColor = "red";
        music.play();

    }
 
    if(surface2.isTouching(box) ){
     box.shapeColor = "red";
     
 }
 
 if(surface3.isTouching(box) ){
     box.shapeColor = "red";
     box.velocityX =0;
     box.velocityY =0;
     music.stop();
     
 }
 
 if(surface4.isTouching(box) ){
     box.shapeColor = "red";
    

    
 }
 

}

function bounceOff(){

    if(box.bounceOff(syrface1) ){
        box.shapeColor = "red";
        music.play();
        
    }
    
    if(box.bounceOff(surface2) ){
        box.shapeColor = "blue";
        music.play();
        
        
    }
    
    if(box.bounceOff(surface3) ){
        box.shapeColor = "orange";
       
        
    }
    if(box.bounceOff(surface4) ){
        box.shapeColor ="yellow" ;
      music.play();
        
    }
        
    
    box.bounceOff(edge1);
   

    box.bounceOff(edge2);
    
    

    box.bounceOff(edge3);
    

    box.bounceOff(edge4);
    


}
  




    


