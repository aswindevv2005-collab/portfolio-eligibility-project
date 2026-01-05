function checkAge() {
  let age = Number(document.getElementById("age").value);
  let result = document.getElementById("result");

  if (!age) {
    result.innerHTML = "Please enter a valid age";
    result.style.color = "orange";
    return;
  }

  if (age >= 18) {
    result.innerHTML = "Eligible for opportunities";
    result.style.color = "green";
  } else {
    result.innerHTML = "Not eligible currently";
    result.style.color = "red";
  }
}
