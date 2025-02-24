


console.log("hello");
function run(){

    let value = Number(document.getElementById("input1").value)
    let range = Number(document.getElementById("input2").value)

    let tables = ""
    for (let i = 1; i <= range; i++) {
        // tables += '${value} x ${i}=${value*i}<br>'
    
         tables+= `${value} x ${i}=${value*i}<br>`
    }

    document.getElementById("main").innerHTML = tables

}

function reload() {
    window.location.reload()
}



