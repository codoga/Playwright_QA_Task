# AI-Augmented QA Engineering Challenge

## Overview

This project includes API and UI automation tests implemented with Playwright, along with AI-assisted test strategy analysis.

The objective of this challenge is to demonstrate structured test automation, risk based thinking, and effective collaboration with AI.

---

## Project Structure

- `tests/api` → API automation (CRUD lifecycle + schema validation)
- `tests/ui` → UI automation with Page Object Model (POM)
- `tests/test-data` → AI-generated dynamic test data
- `pages` → Page Object classes
- `prompts` → All AI prompts used during the process
- `Test Strategy Analysis.pdf` → Risk analysis and Gherkin refinement

---

## Installation

Install dependencies:

```bash
npm install
```
## Run all tests:

```bash
npx playwright test
```