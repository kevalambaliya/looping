function loop(){
    let n = parseInt(document.getElementById('num').value);
    let msg = "";

    let i;
    for(i=1;i<=n;i++){
        msg +=i;
        msg +="<br>"
    }
    document.getElementById('res').innerHTML = msg;
}