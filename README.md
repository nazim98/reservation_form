# Reservation Form
This is a simple reservation form built using HTML, CSS, JavaScript, and PHP.

## Features
* User-friendly form interface
* Input validation to ensure valid user entries using regular expressions
* Server-side processing to handle form submissions
* Storage of reservation data in a database (in this case, a simple text file)

## Usage
1. Clone the repository or download the source files.
2. Open the index.html file in a web browser to access the reservation form.
3. Fill out the form with the required information (name, email, reservation date, and number of guests).
4. Click the "Submit" button to send the form data to the server.
5. The server-side script (process.php) will handle the form submission and store the reservation data in a text file.

## Regular Expressions Used
* Name: /^[a-zA-Z\s]+$/
This regular expression ensures that the name field only contains letters and spaces.
* Email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
This regular expression validates the email address format.
* Reservation Date: /^\d{4}-\d{2}-\d{2}$/
This regular expression ensures that the reservation date is entered in the correct YYYY-MM-DD format.
* Number of Guests: /^\d+$/
This regular expression checks that the number of guests is a positive integer.

## Technologies Used
* HTML: Used to structure the web page and form elements.
* CSS: Used to style the form and layout of the page.
* JavaScript: Used for client-side input validation and form submission.
* PHP: Used for server-side processing of the form data and storage in a text file.

## File Structure
* index.html: The main HTML file that contains the reservation form.
* style.css: The CSS file that styles the reservation form and page.
* script.js: The JavaScript file that handles client-side input validation and form submission.
* process.php: The PHP script that processes the form data and stores it in a text file.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
