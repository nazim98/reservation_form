document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservation-form');
    const tableBody = document.querySelector('#reservation-table tbody');
    const submitButton = document.getElementById('submit-button');
    const clearButton = document.getElementById('clear-button');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      submitReservation();
    });
  
    clearButton.addEventListener('click', function() {
      clearForm();
    });
  
    function submitReservation() {
      const reservationId = document.getElementById('reservation-id').value;
      const firstname = document.getElementById('firstname').value;
      const lastname = document.getElementById('lastname').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const datetime = document.getElementById('datetime').value;
      const persons = document.getElementById('persons').value;
      const location = document.getElementById('location').value;
  
      // Perform regex validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/;
  
      if (!emailRegex.test(email)) {
        alert('Invalid email address!');
        return;
      }
  
      if (!phoneRegex.test(phone)) {
        alert('Invalid phone number!');
        return;
      }
  
      // Create a new row for the reservation data
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${reservationId}</td>
        <td>${firstname}</td>
        <td>${lastname}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${datetime}</td>
        <td>${persons}</td>
        <td>${location}</td>
        <td>
          <button class="edit-button" data-id="${reservationId}">Edit</button>
          <button class="delete-button" data-id="${reservationId}">Delete</button>
        </td>
      `;
  
      // Add event listeners for edit and delete actions
      const editButton = newRow.querySelector('.edit-button');
      const deleteButton = newRow.querySelector('.delete-button');
  
    editButton.addEventListener('click', function() {
        // Retrieve the reservation data and populate the form for editing
        const row = this.parentNode.parentNode;
        const id = row.querySelector('td:first-child').textContent;
        const firstname = row.querySelector('td:nth-child(2)').textContent;
        const lastname = row.querySelector('td:nth-child(3)').textContent;
        const email = row.querySelector('td:nth-child(4)').textContent;
        const phone = row.querySelector('td:nth-child(5)').textContent;
        const datetime = row.querySelector('td:nth-child(6)').textContent;
        const persons = row.querySelector('td:nth-child(7)').textContent;
        const location = row.querySelector('td:nth-child(8)').textContent;

        document.getElementById('reservation-id').value = id;
        document.getElementById('firstname').value = firstname;
        document.getElementById('lastname').value = lastname;
        document.getElementById('email').value = email;
        document.getElementById('phone').value = phone;
        document.getElementById('datetime').value = datetime;
        document.getElementById('persons').value = persons;
        document.getElementById('location').value = location;
    });

    deleteButton.addEventListener('click', function() {
        // Remove the row from the table
        const row = this.parentNode.parentNode;
        tableBody.removeChild(row);
    });

    // Append the new row to the table
    tableBody.appendChild(newRow);

    // Clear the form
    clearForm();
    }
  
    function clearForm() {
      document.getElementById('reservation-id').value = '';
      document.getElementById('firstname').value = '';
      document.getElementById('lastname').value = '';
      document.getElementById('email').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('datetime').value = '';
      document.getElementById('persons').value = '';
      document.getElementById('location').value = 'indoor';
    }
  });