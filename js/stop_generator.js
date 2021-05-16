function callStop(){
    var STOP_CODES = ["MIMIKATZ_DETECTED","SYSTEM32_NOT_FOUND","CURSED_BY_WIZARD","5G_OVERLOADED"]
    var randomStop = STOP_CODES[Math.floor(Math.random()*STOP_CODES.length)]
    document.getElementById('stop').innerText = document.getElementById('stop').innerText.replace('OOPS',randomStop)
    }