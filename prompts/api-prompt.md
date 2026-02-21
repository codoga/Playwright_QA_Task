Act as a Software QA Automation Engineer.

Generate a reusable JavaScript function that returns dynamic booking data
for the Restful Booker API.

Functional Requirements:
- firstname: realistic random human first name (not random string)
- lastname: realistic random human surname (not random string)
- totalprice: random integer between 100 and 2000
- depositpaid: random boolean
- bookingdates:
    - checkin: random future date in YYYY-MM-DD format
    - checkout: must always be after checkin (minimum +1 days)
- additionalneeds: randomly selected realistic value (e.g., breakfast, late checkout, extra bed)

Technical Constraints:
- No hardcoded static test data
- No external libraries
- Use native JavaScript only
- Ensure checkout is always greater than checkin
- Clean, modular, and readable implementation
- Avoid global variables

Return only the function.

