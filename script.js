


document.getElementById("calculate").addEventListener("click", function (){

    var bill  = Number(document.getElementById("bill").value);
    var people  = Number(document.getElementById("people").value);
    var service = Number(document.getElementById("service").value);
    var result =  document.getElementById("result");

    
    let finalResult = (((service/100)*bill)/people);
    
    result.innerHTML= "Rs."+finalResult;
    
    

});
