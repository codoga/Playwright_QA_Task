# Playwright_QA_Task

## Overview

This project includes API and UI automation tests implemented with Playwright, along with test strategy analysis.

The objective of this challenge is to demonstrate structured test automation practices, risk-based thinking, and the ability to design reliable and maintainable test strategies.

---

## Project Structure

- `tests/api` → API automation (CRUD lifecycle + schema validation)
- `tests/ui` → UI automation with Page Object Model (POM)
- `tests/test-data` → AI-generated dynamic test data
- `pages` → Page Object classes
- `prompts` → All AI prompts used during the process

---

## Applications Under Test

### UI Testing
The UI automation tests were performed on the SauceDemo e-commerce demo application:
https://www.saucedemo.com

The following flows were automated:
- Login (standard_user / visual_user)
- Add the most expensive product to the cart
- Complete the checkout process
- Verify order completion message
- Visual regression comparison between different user types

### API Testing
API automation was performed using the Restful Booker API:
https://restful-booker.herokuapp.com

The following lifecycle was automated:
- Generate authentication token
- Create booking
- Retrieve booking
- Update booking
- Delete booking

JSON schema validation was implemented using AJV to ensure contract correctness.

## Installation

Install dependencies:

```bash
npm install
```
## Run all tests:

```bash
npx playwright test
```
