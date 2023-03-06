## To run the project

- `pnpm install`
- `pnpm dev`

## Instructions

Your goal is to be able to switch columns in the table presented in the `index.html` file.
The design should look like the screenshot image `screenshot.png`.

You are allowed to use any Javascript/HTML/CSS library of your choice.

The goal is to switch any column in the table with the columns Custom Field 1 or Custom Field 2.
Custom Field 1 and Custom Field 2 should start out as hidden columns via CSS.
The table header for any column when clicked should present a dropdown as shown in `screenshot.png` under the User ID column.
When hovering over the `Change Data` menu item, it should present the columns to switch and display.

For example, clicking on the header of "User ID", the dropdown appears; hovering over the "Change Data" option should present the "Custom Field 1" and "Custom Field 2" options.
Clicking on "Custom Field 1", replaces the "User ID" column with the "Custom Field 1" column.
Clicking on the newly appeared "Custom Field 1" column and then hovering over the "Change Data" option in the dropdown should reveal "User ID" and "Custom Field 2" as the new options.
Then clicking on the "User ID" column should return the table back to its previous state.

This behaviour should work with any column.

## Notes

The test is open ended, there are many ways to complete the test, we are more interested in your approach and interpretation of the requirements, rather than finding the most perfect/complete answer.

Please take as long as you'd like, but we recommend spending to 2-3 hrs.
