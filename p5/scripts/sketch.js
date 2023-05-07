var cnv
var particle
var clus = []

const s = -500

function centerCanvas() {
    var x = (windowWidth - width) / 2
    var y = (windowHeight - height) / 2
    cnv.position(x, y)
}



function setup() {
    cnv = createCanvas(windowWidth - s, windowHeight - s)
    particle = new Particle(s / 2, s / 2, random(2, 10))

    centerCanvas()
    cnv.style('z-index', '-1')
    background(0);
}

function mousePressed() {
    par = new Particle(mouseX, mouseY, random(8))
    clus.push(par)
}

function windowResized() {
    resizeCanvas(windowWidth - s, windowHeight - s)
    centerCanvas()
}

function draw() {



    background(0)
    // particle.show('trial')

    // particle.update()
    // particle.collision()

    for (p of clus) {
        p.show('')
        p.update()
        p.multiply(0)
        p.collision()
    }
    if (frameCount % 500 == 0) {
        clus.splice(0, 1)
    }



}