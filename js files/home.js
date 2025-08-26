// <!-- logout and go to index.html -->

document
  .getElementById("button-click-id")
  .addEventListener("click", function () {
    window.location.href = "./index.html";
  });

// add money feature

document
  .getElementById("addmoney-button")
  .addEventListener("click", function () {
    // normal bank and account info
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const pin = document.getElementById("add-pin-number").value;

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

    const balanceElement = document.getElementById("dollar-count").innerText;
    const currentBalance = parseInt(balanceElement);

    // get added money from input
    const addedMoney = parseInt(document.getElementById("added-amount").value);

    // calculate new balance
    const finalAmount = currentBalance + addedMoney;

    // update the span with new balance
    document.getElementById("dollar-count").innerText = finalAmount;

    // // or in this method as well

    // const balanceElement = document.getElementById("dollar-count");
    // const balanceValue = parseInt(balanceElement.innerText);

    // const addedMoney = parseInt(document.getElementById("added-amount").value);
    // const finalAmount = balanceValue + addedMoney;

    // balanceElement.innerText = finalAmount;
  });

// toggling feature
document.getElementById("add-button").addEventListener("click", function () {
  document.getElementById("cashout-parent").style.display = "none";

  document.getElementById("add-money-parent").style.display = "block";
});

document
  .getElementById("cashout-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";

    document.getElementById("cashout-parent").style.display = "block";
  });

// withdraw money

document
  .getElementById("withdraw-money-button")
  .addEventListener("click", function () {
    const agentNumber = document.getElementById("agent-number").value;
    const pinNumber = document.getElementById("pin-number-cashout").value;

    if (agentNumber.length != 11) {
      alert("Please add an 11 digit agent number");
      return;
    }
    if (pinNumber != "1234") {
      alert("Pin is 1234");
      return;
    }

    const amountofmoney = parseInt(
      document.getElementById("money-to-remove").value
    );
    const accountbalance = parseInt(
      document.getElementById("dollar-count").innerText
    );

    const newamount = accountbalance - amountofmoney;
    if (newamount < 0) {
      alert("Insufficient funds");
    } else {
      document.getElementById("dollar-count").innerText = newamount;
    }
  });
