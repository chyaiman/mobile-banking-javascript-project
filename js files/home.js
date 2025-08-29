// transaction history

const transactionData = [];

// <!-- logout and go to index.html -->

document
  .getElementById("button-click-id")
  .addEventListener("click", function () {
    window.location.href = "./index.html";
  });

// function to get  input value

function getInputValueNumber(id) {
  const inputfield = document.getElementById(id);
  const inputfieldvalue = inputfield.value;
  const inputfieldvaluenumber = parseInt(inputfieldvalue);
  return inputfieldvaluenumber;
}

function getinputvalue(id) {
  const inputfield = document.getElementById(id);
  const inputfieldvalue = inputfield.value;
  return inputfieldvalue;
}

function getinnertext(id) {
  const element = document.getElementById(id);
  const elementvalue = element.innerText;
  const elementvaluenumber = parseInt(elementvalue);
  return elementvaluenumber;
}

function setinnertext(value) {
  const availablebalanceElement = document.getElementById("dollar-count");
  availablebalanceElement.innerText = value;
}

function handletoggle(id) {
  const forms = document.getElementsByClassName("form");

  for (items of forms) {
    items.style.display = "none";
  }

  document.getElementById(id).style.display = "block";
}
function toggleblue(id) {
  const formbtns = document.getElementsByClassName("form-btn");
  for (btn of formbtns) {
    btn.classList.remove(
      "border-[rgba(8,116,242,1)]",
      "bg-[rgba(8,116,242,0.05)]"
    );
    btn.classList.add("border-gray-300");
  }

  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add(
      "border-2",
      "border-[rgba(8,116,242,1)]",
      "bg-[rgba(8,116,242,0.05)]"
    );
}

document
  .getElementById("transaction-button")
  .addEventListener("click", function () {
    const transactioncontainer = document.getElementById(
      "transaction-container"
    );
    transactioncontainer.innerText = "";

    for (items of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `        <div class="p-4 bg-white rounded-xl flex justify-between items-center mt-3">
      <div class="flex items-center">
        <div class="p-3 rounded-full bg-[rgba(244,245,247,1)]">
          <img class="mx-auto" src="./assets/wallet1.png" alt="" />
        </div>
        <div class="ml-3">
          <h1>${items.name}</h1>
          <p>${items.date}</p>
        </div>
      </div>

      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>`;

      transactioncontainer.appendChild(div);
    }
  });

// toggling feature
document.getElementById("add-button").addEventListener("click", function () {
  handletoggle("add-money-parent");
  toggleblue("add-button");

  // const forms = document.getElementsByClassName("form");

  // for (items of forms) {
  //   items.style.display = "none";
  // }

  // document.getElementById("add-money-parent").style.display = "block";
});

document
  .getElementById("cashout-button")
  .addEventListener("click", function () {
    handletoggle("cashout-parent");
    toggleblue("cashout-button");

    // const forms = document.getElementsByClassName("form");

    // for (items of forms) {
    //   items.style.display = "none";
    // }

    // document.getElementById("cashout-parent").style.display = "block";
  });

document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    handletoggle("transfer-money-parent");
    toggleblue("transfer-button");

    // const forms = document.getElementsByClassName("form");

    // for (items of forms) {
    //   items.style.display = "none";
    // }

    // document.getElementById("transfer-money-parent").style.display = "block";
  });

document
  .getElementById("getbonus-button")
  .addEventListener("click", function () {
    handletoggle("get-bonus-money-parent");
    toggleblue("getbonus-button");

    // const forms = document.getElementsByClassName("form");

    // for (items of forms) {
    //   items.style.display = "none";
    // }

    // document.getElementById("get-bonus-money-parent").style.display = "block";
  });

// pay-bill section

document
  .getElementById("pay-bill-button")
  .addEventListener("click", function () {
    handletoggle("pay-bill-parent");
    toggleblue("pay-bill-button");

    // const forms = document.getElementsByClassName("form");

    // for (items of forms) {
    //   items.style.display = "none";
    // }

    // document.getElementById("get-bonus-money-parent").style.display = "block";
  });

// transaction toggle

document
  .getElementById("transaction-button")
  .addEventListener("click", function () {
    handletoggle("transaction-parent");
    toggleblue("transaction-button");

    // const forms = document.getElementsByClassName("form");

    // for (items of forms) {
    //   items.style.display = "none";
    // }

    // document.getElementById("get-bonus-money-parent").style.display = "block";
  });

//  money plus minus section

// add money feature

document
  .getElementById("addmoney-button")
  .addEventListener("click", function () {
    // normal bank and account info
    const bank = getinputvalue("bank");
    const accountNumber = document.getElementById("account-number").value;
    const pin = getInputValueNumber("add-pin-number");

    // get current balance from span

    if (accountNumber.length < 11 || accountNumber.length > 11) {
      // alert("Account Number Should be 11 digits");

      document.getElementById("error-message").innerText =
        "Account Number Should be 11 digits";
      return;
    }

    if (pin != "1234") {
      document.getElementById("pin-error").innerText =
        "Invalid PIN. Please try again.";
      return;
    }
    document.getElementById("error-message").innerText = "";
    document.getElementById("pin-error").innerText = "";

    const currentBalance = getinnertext("dollar-count");

    // get added money from input
    const addedMoney = getInputValueNumber("added-amount");

    // calculate new balance
    const finalAmount = currentBalance + addedMoney;

    // update the span with new balance
    // document.getElementById("dollar-count").innerText = finalAmount;

    setinnertext(finalAmount);
    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);

    // // or in this method as well

    // const balanceElement = document.getElementById("dollar-count");
    // const balanceValue = parseInt(balanceElement.innerText);

    // const addedMoney = parseInt(document.getElementById("added-amount").value);
    // const finalAmount = balanceValue + addedMoney;

    // balanceElement.innerText = finalAmount;
  });

document
  .getElementById("withdraw-money-button")
  .addEventListener("click", function () {
    const agentNumber = getinputvalue("agent-number");
    const pinNumber = getInputValueNumber("pin-number-cashout");

    if (agentNumber.length != 11) {
      alert("Please add an 11 digit agent number");
      return;
    }
    if (pinNumber != "1234") {
      alert("Pin is 1234");
      return;
    }

    const amountofmoney = getInputValueNumber("money-to-remove");
    const currentBalance = getinnertext("dollar-count");

    const newamount = currentBalance - amountofmoney;
    if (newamount < 0) {
      alert("Insufficient funds");
    } else {
      // document.getElementById("dollar-count").innerText = newamount;
      setinnertext(newamount);

      const data = {
        name: "Cash Out",
        date: new Date().toLocaleTimeString(),
      };
      transactionData.push(data);
    }
  });

// transfer money part

// function money_to_work(id){
//   const amount_to_remove=document.getElementById(id).value
//   const int_amount_to_remove=parseInt(amount_to_remove)
//   return int_amount_to_remove
// }

// const balanceElement = document.getElementById("dollar-count").innerText;
// const currentBalance = parseInt(balanceElement);

// const finalAmount = currentBalance - addedMoney;

// transfer money part

document
  .getElementById("transfer-money-button")
  .addEventListener("click", function () {
    const user_account_number = document.getElementById(
      "user-account-number"
    ).value;
    const transfer_pinNumber = getInputValueNumber("pin-number-transfer-money");

    if (user_account_number.length != 11) {
      alert("Please add an 11 digit agent number");
      return;
    }
    if (transfer_pinNumber != "1234") {
      alert("Pin is 1234");
      return;
    }

    const money_to_transfer = getInputValueNumber("amount-to-remove");

    // const accountbalance = parseInt(
    //   document.getElementById("dollar-count").innerText
    // );

    const currentBalance = getinnertext("dollar-count");

    const newamount = currentBalance - money_to_transfer;
    if (newamount < 0) {
      alert("Insufficient funds");
    } else {
      // document.getElementById("dollar-count").innerText = newamount;
      setinnertext(newamount);
      const data = {
        name: "Transfer Money",
        date: new Date().toLocaleTimeString(),
      };
      transactionData.push(data);
    }
  });

// Pay Bill section

document
  .getElementById("pay-now-button")
  .addEventListener("click", function () {
    const paybill_pinNumber = getinputvalue("biller-account-number");
    const pin_number = getInputValueNumber("pin-number-billpay");

    if (paybill_pinNumber.length != 11) {
      alert("Please add an 11 digit agent number");
      return;
    }
    if (pin_number != "1234") {
      alert("Pin is 1234");
      return;
    }

    const amountofmoney = getInputValueNumber("amount-to-pay");
    const currentBalance = getinnertext("dollar-count");

    const newamount = currentBalance - amountofmoney;
    if (newamount < 0) {
      alert("Insufficient funds");
    } else {
      // document.getElementById("dollar-count").innerText = newamount;
      setinnertext(newamount);

      const data = {
        name: "Pay Bill",
        date: new Date().toLocaleTimeString(),
      };
      transactionData.push(data);
    }
  });
