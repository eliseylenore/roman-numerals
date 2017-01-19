# Roman Numerals

#### Converts numbers to Roman Numerals, 01/19/2017

#### By Elise St Hilaire & Keely Glenn

## Specs

**Determine whether the number can be converted to Roman numerals (must be a number, cannot include punctuation, cannot exceed 3,999)**
* Input: 4,000
* Output: This cannot be converted to a Roman Numeral because...

**Replace single digits with I**
* Input: 3
* Output: III

**Replace 5 with V, 10 with X, 50 with L, 100 with C, D with 500, and M with 1,000**
* Input: 5
* Output: V

**For each digit in the number inputted, program will count number of digits to determine whether number is in the ones, tens, hundreds or thousands.**
* Input: 133
* Output: 1 - hundreds 3 - tens 3 - ones

**Program will add up numerals to produce more complex numbers**
* Input: 66
* Output: LXVI

**The program will not allow more than three of the same numerals in a row. If there are more than three of the same numeral in a row, go up to the nearest increment and subtract from it by placing a numeral in front**
* Input: 4
* Output: IV

**When subtracting in order to avoid more than three numerals in a row, separate the ones, tens, hundreds, and thousands.**
* Input: 99;
* Output: Instead of IC, output should be XCIX
