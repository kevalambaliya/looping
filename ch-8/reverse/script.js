function reverse(){
    let num = parseInt(document.getElementById('num').value);

    let rm,rev=0;

    while(num !=0){
        rm = num % 10;
        rev = rev * 10 + rm;
        num = parseInt(num / 10);
    }

    document.getElementById('find').innerHTML = rev;
}