<?php
// Retrieve form data
$reservationId = $_POST['reservation-id'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$datetime = $_POST['datetime'];
$persons = $_POST['persons'];
$location = $_POST['location'];

// Insert the data into the database or perform desired CRUD operations

// Return a response, such as a success message or error code
echo json_encode(['status' => 'success']);
?>