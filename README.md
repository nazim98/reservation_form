This is a simple reservation form built using HTML, CSS, JavaScript, and PHP.

Features
User-friendly form interface
Input validation using regular expressions to ensure valid user entries
Server-side processing for handling form submissions
Storage of reservation data in a database (text file in this case)
Usage
Clone the repository or download the source files.
Open index.html in a web browser to access the reservation form.
Fill out the form with your name, email, reservation date, and number of guests.
Click the "Submit" button to send the form data to the server.
The server-side script (process.php) will handle the submission and store your reservation data in a text file.
Regular Expressions Used
Name: ^[a-zA-Z\s]+$
Ensures the name field only contains letters and spaces.
Email: ^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$
Validates the email address format.
Reservation Date: ^\d{4}-\d{2}-\d{2}$
Ensures the reservation date is entered in YYYY-MM-DD format.
Number of Guests: ^\d+$
Checks that the number of guests is a positive integer.
Technologies Used
HTML: Structures the web page and form elements.
CSS: Styles the form and layout of the page.
JavaScript: Handles client-side input validation and form submission.
PHP: Processes form data server-side and stores it in a text file.
File Structure
index.html: The main HTML file containing the reservation form.
style.css: The CSS file that styles the reservation form and page.
script.js: The JavaScript file for client-side input validation and form submission.
process.php: The PHP script that processes form data and stores it in a text file.
Contributing
We welcome contributions! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.
