
var totalbudget = 0;
var currentbalance = 0;

function addMoney() {
    amountvalue = money.value;

    if (amountvalue == "" || isNaN(amountvalue)) {

        alert("Please enter a valid number");

    }
    else {
        localStorage.setItem("AMOUNT", amountvalue);
        alert("add successfully");
        data = Number(localStorage.getItem("AMOUNT"));
        console.log(data);
        totalbudget += data;
        currentbalance += data;

        totalBudget.innerHTML = `Total Budget: ${data}`;
        currentBalance.innerHTML = `Current Balance: ${data}`;
    }
}

function addExpense() {

    expense_name = expenseName.value;
    expense_amount = expenseAmount.value;
    current_balance = currentbalance;

    var user = {
        Item: expense_name,
        Expense: expense_amount,
        Balance: current_balance
    }

     localStorage.setItem(expense_name, JSON.stringify(user));

   convert = JSON.parse(localStorage.getItem(expense_name));

    
       

    if (expense_name.length == "") {

        alert("Please enter an expense name");
    }
   
    else if (expense_amount == "" || isNaN(expense_amount)) {

        alert('Please enter a valid expense amount');
    }

    else if (expense_amount <= currentbalance) {
        

      
        para = "";
        currentbalance = parseFloat(Number(currentbalance) - Number(expense_amount));
        currentBalance.innerHTML = `Current Balance:${currentbalance}`;
        // currentBalance.innerHTML =  currentBalance ;


        para=`<ul class="list-group list-group-flush text-dark mb-4 ">
        <li class="list-group-item  bg-secondary rounded-bottom ps-3">Expense Name : ${user.Item} &nbsp;&nbsp; Expense amount : ${user.Expense}</li>
        
        
      </ul>`;
        // para = `<p style="color:black">Expense Name : ${user.Item} Expense amount : ${user.Expense}</p>`;
        addedExpenses.innerHTML += para;

        // dout 
        expenseName.value='';
        expenseAmount.value='';
        // dout 
        // why above set as empty & not use  JSON.parse(localStorage.getItem(expense_name)); (string to object conversion ?)  

    }

    else {
        alert("sorry your expense amount is higher than your current balance");
    }

}

function logout()
{

    localStorage.removeItem(expense_name);
    window.location='./login.html';  


}


