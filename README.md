# Roman Numerals

#### Converts numbers to Roman Numerals, 01/19/2017

#### By Elise St Hilaire & Keely Glenn

## Specs

**Determine whether the number can be converted to Roman numerals (must be a number, cannot include punctuation, cannot exceed 3,999)**
* Input: 4,000
* Output: This cannot be converted to a Roman Numeral because...

<!-- **Replace single digits with I, 5 with V, 10 with X, 50 with L, 100 with C, D with 500, and M with 1,000**
* Input: 1, 5, 10, 50, 100, 500, 1000
* Output: I, V, X, L, C, D, M -->

**For each digit in the number inputted, program will count number of digits to determine whether number is in the ones, tens, hundreds or thousands.**
* Input: 133
* Output: (1 - hundreds) (3 - tens) (3 - ones)

<!-- single digits -->
**If the single digits end in 1-3, the program will output the corresponding number of I's**
* Input: 1, 2, 3
* Output: I, II, III

**If the single digits end in 4, the program will output the corresponding roman numeral**
* Input: 4
* Output: IV

**If the single digits end in 5, the program will output the corresponding roman numeral**
* Input: 5
* Output: V

**If the single digits end in 6-8, the program will output V plus the corresponding number of I's**
* Input: 6, 7, 8
* Output: VI, VII, VIII

**If the single digits end in 9, the program will output the corresponding roman numeral**
* Input: 9
* Output: IX

<!-- double digits -->

**If the number in the 10s position, is 10, 20, or 30 the program will output the corresponding number of x **
* Input: 10, 20, 30
* Output: x, xx, xx

**If the number in the 10s position is 40, the program will output the corresponding roman numeral**
* Input: 40
* Output: IL

**If the number in the 10s position, is 60, 70, or 80, the program will output L plus the corresponding number of x's,**
* Input: 60, 70, 80
* Output: LX, LXX, LXXX

**If the number in the 10s position, is 10, 20, or 30 the program will output the corresponding number of x **
* Input: 10, 20, 30
* Output: x, xx, xx

**If the number in the 10s position is 50, the program will output the corresponding roman numeral**
* Input: 50
* Output: L

**If the number in the 10s position, is 60, 70, or 80, the program will output L plus the corresponding number of x's,**
* Input: 60, 70, 80
* Output: LX, LXX, LXXX

**If the number in the 10s position, is 90, the program will output the corresponding roman numeral**
* Input: 90
* Output: XC

**If the number in the 10s position, is 90, the program will output the corresponding roman numeral**
* Input: 90
* Output: XC

<!-- hundreds -->

**If the number in the 100s position, is 100, 200, or 300 the program will output the corresponding number of x **
* Input: 100, 200, 300
* Output: C, CC, CCC

**If the number in the 100s position is 400, the program will output the corresponding roman numeral**
* Input: 400
* Output: CD

**If the number in the 100s position is 500, the program will output the corresponding roman numeral**
* Input: 500
* Output: D

**If the number in the 100s position, is 600, 700, or 800, the program will output L plus the corresponding number of x's,**
* Input: 600, 700, 800
* Output: DC, DCC, DCCC

**If the number in the 100s position, is 900, the program will output the corresponding roman numeral**
* Input: 900
* Output: CM

<!-- thousands -->

**If the number in the 1000s position, is 1000, 2000, or 3000 the program will output the corresponding number of x **
* Input: 1000, 2000, 3000
* Output: M, MM, MMM
