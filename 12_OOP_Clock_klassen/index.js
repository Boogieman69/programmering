

function setup(){
    //Variablen c, er en ny instans af klassen Clock, som får div'en #clock med i sin constructor
    let c = new Clock( select('#clock') , 'black')
    c.start()

    let otherClockDiv = createDiv()
    let otherClock = new Clock( otherClockDiv )
    otherClock.start()
    otherClockDiv.position( 100, 100 )
}
const today = new Date()

console.log(today.toLocaleString())
const f = new Intl.DateTimeFormat("en-us", {
    dateStyle: "full"
})

console.log(f.format(today))