function collecting(count){
    document.getElementById('progress').innerHTML = count;
    var countUp = setInterval(function(){
        if (count <= 100){
            document.getElementById('progress').innerHTML = count + "% Complete";
            count++;
        }
    }, 666);
}