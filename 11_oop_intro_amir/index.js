let currentPage = 1
let pages //array med alle elementer med class = page 

function setup(){
    pages = selectAll('.page')
    setInterval( () => {
        let minuteZero = minute() < 10 ? "0" : ""
         let hourZero = hour() < 10 ? "0" : ""
        select('#timer_hours').html(minuteZero + hour())
        select('#timer_minutes').html(minuteZero + minute())
        select('#timer_seconds').html(second())
    }, 1000)
    
}

function shiftPage(num){
    if(num == "ArrowLeft"){
        num = currentPage - 1
    }
    if(num == "ArrowRight"){
        num = currentPage + 1
    }

    if(isNaN(num) || num > pages.length || num == 0){
        return
    }
    select("#page" + currentPage).removeClass('visible')
    currentPage = num
    select("#page" + currentPage).addClass('visible')
}

function keyPressed(){
    console.log(key)
    shiftPage(key)
}

