function min_max()
{
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);
    let msg="" ,i;
    
    for( i = min; i < max; i++)
        {
            msg+=i;
            msg+="<br>";
        }
    document.getElementById('res').innerHTML = msg;
}