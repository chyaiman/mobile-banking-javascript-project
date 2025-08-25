// login button functionality

document.getElementById("loginbutton").addEventListener("click", function () {
  // const mobileNumber = 12345678910;
  const pinNumber = 1234;

  const mobileNumberValue = document.getElementById("mobile-number").value;
  // const mobileNumberValue_converted = parseInt(mobileNumberValue);
  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberValue_converted = parseInt(pinNumberValue);

  if (
    mobileNumberValue.length === 11 &&
    pinNumberValue_converted === pinNumber
  ) {
    // console.log("All values Matched");

    window.location.href = "./home.html";
  } else {
    // console.log("Invalid credentials");
    // alert("Invalid Credentials");
    document.getElementById("error-message").innerText = "Invalid Credentials";
  }
});
