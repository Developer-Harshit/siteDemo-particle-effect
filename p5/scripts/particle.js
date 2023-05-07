const a = 0.98
const v = 3

function Particle(x,y,w){

    this.vx = random(-v*w,v*w)
    this.vy = random(-v*w,v*w)

    this.dx = x
    this.dy = y

    this.a = random(-0.25,0.25)

    this.prevX = 0
    this.prevY = 0

    this.width = w

    
    
    this.tail = []

    this.div = []
    
    this.show = function(k){
        stroke(255,255,255)
        strokeWeight(1)
        ellipse( this.dx , this.dy , this.width )


        
        
        if(k == 'trial'){
            this.div.push(createVector(this.dx,this.dy))
            op = 0
            for(i = 0; i < this.div.length-2; i++){
                tails = this.div[i]
                // tail2 = this.div[i+1]
    
                // avgX = (tails.x + tail2.x)/2
                // avgY = (tails.y + tail2.y)/2
    
                // this.div.splice(i+1,0,createVector(avgX,avgY))
    
    
                fill(255,op)
                stroke(255,op)
                ellipse(tails.x,tails.y,this.width-1)
                
                op+= 20
            }

        }

       
        


    }

    
    this.update = function(){
        
        this.prevX = this.dx
        this.prevY = this.dy
        this.dx+= this.vx
        this.dy+= this.vy

        this.applyAccr()
        if (this.div.length > 10){
            this.div.splice(0,1)
        }
        
                
    }

    this.applyAccr = function(){
        this.vx += this.a
        this.vy += this.a
    }
  

    this.collision = function(){
        let x = this.dx + this.width*2 
        let y = this.dy + this.width *2
        this.isColliding = false
        if( x < this.width*2 || x > width){
            this.vx *= -1   
            this.isColliding = true

        }
        if( y < this.width*2 || y > height){
            this.vy *= -1
            this.isColliding = true

        }
        if(this.isColliding){
            this.a *= -1
        }

    }



    this.multiply = function(k){
        if(this.tail.length < 5){
            let par = new Particle(this.prevX,this.prevY,random(this.width+1),255)
            this.tail.unshift(par)

            
        }
        
        for (t of this.tail){
            t.show()
            t.update()
            if(random(1) > 0.99999){
                t.collision()
            }
            if (k < 1 ){
                t.multiply(k+1)
    
            }
        }
        
    }

  
}