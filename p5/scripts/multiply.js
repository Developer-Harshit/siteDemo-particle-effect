var cnv
var n

var cluster 
const s = 700

function centerCanvas(){
    var x = (windowWidth - width)/2
    var y = (windowHeight - height)/2
    cnv.position(x,y)
}

function spawnParticles(){

	cluster = []
	for(let i = 0; i < 1 ; i++){

    	n = new Particle(s/2,s/2,random(5))
    	cluster.push(n)
    }
}

// function setup(){
// 	cnv = createCanvas(s,s)
	
// 	spawnParticles()
	
//     centerCanvas()
// 	background(5);
// }
// function windowResized(){
//     centerCanvas()
// }
// let c = 0
// function draw() {

// 	for(particle of cluster){
		
// 		background(5)
// 		particle.show()
		
//     	particle.update()
// 		// particle.multiply(0)
// 	}
// 	c+= 1
// }
