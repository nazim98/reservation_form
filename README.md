<<<<<<< HEAD
ÿþRegular Expressions Used in the Reservation Form
Name Regex
Pattern: /^[A-Za-z-]+(?:\s[A-Za-z-]+)*$/
=======
# Reservation Form

This repository contains a reservation form web application.

## Regular Expressions Used in the Reservation Form

### Name Regex
Pattern: /^[A-Za-z-]+(?:\s[A-Za-z-]+)$/
>>>>>>> be31cc61f56f7695363196ee47dd6cbb73e91fd5
Explanation: This regular expression is used to validate the first name and last name fields in the reservation form.
It allows alphabetic characters (both uppercase and lowercaseand hyphens.
The pattern ensures that the first name and last name are at least one character long and can contain multiple words separated by spaces.

### Email Regex
Pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
Explanation: This regular expression is used to validate the email address field in the reservation form.
It follows the standard pattern for validating email addresses.
The pattern ensures that the email address contains alphanumeric characters, dots, underscores, hyphens, and the percentage and plus symbols.
<<<<<<< HEAD
The email address must have a domain name consisting of alphanumeric characters, dots, and hyphens, followed by a top-level domain (TLDwith at least two characters.
Phone Regex
Pattern: /^+(?:[0-9] ?){6,14}[0-9]$/
Explanation: This regular expression is used to validate the phone number field in the reservation form.
It allows international phone numbers in the format "+[country code][number]".
The pattern ensures that the country code starts with a "+" sign, followed by a sequence of digits (0-9).
The phone number can have spaces after every 2 digits, and the total length of the number (including the country codeshould be between 7 and 15 digits.
Datetime Regex
=======
The email address must have a domain name consisting of alphanumeric characters, dots, and hyphens, followed by a top-level domain (TLD) with at least two characters.

### Phone Regex
Pattern: /^\+(?:[0-9] ?){6,14}[0-9]$/
Explanation: This regular expression is used to validate the phone number field in the reservation form.
It allows international phone numbers in the format "+[country code][number]".
The pattern ensures that the country code starts with a "+" sign, followed by a sequence of digits (0-9).
The phone number can have spaces after every 2 digits, and the total length of the number (including the country code) should be between 7 and 15 digits.

### Datetime Regex
>>>>>>> be31cc61f56f7695363196ee47dd6cbb73e91fd5
Pattern: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/
Explanation: This regular expression is used to validate the date and time field in the reservation form.
It matches the format "YYYY-MM-DDTHH:MM" (ISO 8601 formatcommonly used for datetime input.
The pattern ensures that the date consists of four digits for the year, followed by two digits for the month and two digits for the day.
The time consists of two digits for the hour and two digits for the minute.

### Persons Regex
Pattern: /^[1-9][0-9]$/
Explanation: This regular expression is used to validate the number of persons field in the reservation form.
It allows positive integers greater than zero.
The pattern ensures that the input starts with a digit from 1 to 9, followed by zero or more digits from 0 to 9.

## About

This repository contains a reservation form web application. It is designed to collect user information for making reservations.

## Usage

To use the reservation form application, follow these steps:

1. Clone the repository: `git clone https://github.com/nazim98/reservation_form.git`
2. Open the `reservation_form.html` file in a web browser.
3. Fill in the required information in the form fields.
4. Submit the form to make a reservation.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
