function getBill() {
  while(true) { //Loop to ensure correct bill amount
  var bill = prompt("Enter bill amount between $5.00 and $500.00:"); //Ask user to enter bill amount
  if (bill < 5.00 || bill > 500.00) //Bill parameters

    alert("Invalid Entry. Please enter an amount between $5.00 and $500.00:");
    //Alert if bill is outside parameters
  else

    return Number(bill);
    //Return if bill is within parameters
  }
};

function getServiceQuality() {
  while(true) { //Loop to ensure correct serviceQuality response
    var serviceQuality = prompt("How was the service quality (great/ok/poor)?").toLowerCase(); //Ask user for service rating
    if(serviceQuality === "great" || serviceQuality === "ok" || serviceQuality === "poor") //Service rating parameters

      return serviceQuality; //Return if service rating meets parameters

    else

      alert("Invalid input. Please enter 'great', 'ok', or 'poor'."); //Alert if service rating does not meet parameters

  }
};

var getTip = (bill, serviceQuality) => { //Calculate tip and final bill
  var tip; //Initialize tip

    //Check which service rating was aproved
    if (serviceQuality === "great")

      tip = 0.20;

    else if (serviceQuality === "ok")

      tip = 0.15;

    else if (serviceQuality === "poor")

      tip = 0.10;

  var totalTip = Number((tip*bill).toFixed(2)); //Calculate the total tip to give
  var totalBill = Number(bill+totalTip).toFixed(2); //Calculate the final bill

  return alert(`Your bill is $${bill}
    Your service quality was ${serviceQuality} / ${tip*100}%
    Your tip should be $${totalTip}.
    This brings your total to $${totalBill}.`); //Alert with all information

};

console.log(getTip(getBill(), getServiceQuality())); //Calls re
