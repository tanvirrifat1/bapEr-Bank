/*
1. add event handler with the withdraw button
2. get the withdraw ammount from the withdraw input field
2.5 also make sure to convert the input into a number by using parseFloat
3. get previous withdraw total
4. calculate total withdraw amount
4.5  set total withdraw amount
5. get the previous balance total
6. calculate new balance total
6.5. set the new balance total
7. clear the input field
*/

//step :1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step 2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWIthdrawAmount = parseFloat(newWithdrawAmountString);
    console.log(newWIthdrawAmount);

     //step 7
     withdrawField.value = '';

    if(isNaN(newWIthdrawAmount)){
        alert('please provide a valid number')
        return;
    }


    // step 3
    const withdrawTotalElement =document.getElementById('total-withdraw');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    //step 5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalaceTotal = parseFloat(previousBalanceTotalString);


    //.........
    if(newWIthdrawAmount > previousBalaceTotal){
        alert('tor bap er bank a ato tk nai fokir');
        return;
    }

    //step 4
    const currentWithdrawTotal = previousWithdrawTotal + newWIthdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //step 6
    const newBalanceTotal = previousBalaceTotal - newWIthdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
  
})