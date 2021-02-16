function sliderChange(val) {
document.getElementById('sliderVal').innerHTML = val;

}

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var yearsVal = document.getElementById("years").value;
    if ( principal <= 0 ) {
        alert("Enter Positive number");
        return false;
    } else{

    var interest=principal*yearsVal*rate/100;
     var d = new Date();
     var currentyear = d.getFullYear();
    var totalDays = yearsVal * 365;
    var years = Math.floor(currentyear) + Math.floor(totalDays/365);
      
    document.getElementById('result').innerHTML  = "If you deposit <mark> "+ principal+",</mark><br/> at an interest rate of <mark>"+ rate +"% .</mark><br/>You will receive an amount of <mark>"+ interest+",</mark><br/>in the year <mark>"+ years +"</mark>";
      Logger.log(result);          

    }
    
}