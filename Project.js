document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const status = document.getElementById("status").value;

    // Create table row with user data
    const newRow = `<tr>
        <td>${name}</td>
        <td>${email}</td>
        <td>${gender}</td>
        <td>${status}</td>
      </tr>`;

    // Append new row to table
    document.getElementById("userData").innerHTML += newRow;

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById('input[name="gender"]:checked').checked = false;
    document.getElementById("status").value = "active";
  });
