// Two functions are used to provide complete functionality

function compute()
{
  var principal = document.getElementById("principal").value;
  
  // check if principal is negative or zero and redirect user to enter positive number
    if(principal<=0){
      alert("Enter a positive number.");
      document.getElementById("principal").value = "";
      document.getElementById("principal").focus(); 
      document.getElementById("result").innerHTML="";


      // this section should be the typical case
    } else {
      var rate = document.getElementById("rate").value;
      var years = document.getElementById("years").value;
      var interest = principal*years*rate / 100;
      var year = new Date().getFullYear()+parseInt(years);              
      var result = document.getElementById("result");
      // use the above vars in the text statement. Include highlighting by using span elements
      // use template literals `${}` to combine text with vars
      result.innerHTML = `If you deposit <span class="highlight">${principal}</span>,\<br\>
      at an interest rate of <span class="highlight">${rate}%</span>.\<br\> 
      You will receive an amount of <span class="highlight">${interest}</span>,
      \<br\>in the year <span class="highlight">${year}</span>`;
    }
}

// This function updates the interest rate display when the slider is changed
// see onchange=updateRate() in input element id="rate"
function updateRate(){
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText=rateval+"%";
}