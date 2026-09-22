// //solution no 2**************************

// moves all Zero to the end :: No new array for the final Result 

// const arr = [0, 5, 0, 3, 8, 0, 2];

// let index = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//         arr[index] = arr[i];
//         index++;
//     }
// }

// while (index < arr.length) {
//     arr[index] = 0;
//     index++;
// }

// console.log(arr);


// //solution no 3 ***************************************

// Longest word in a Sentence :: no sort() . if equal length ,first word is  selected 


// const sentence = "JavaScript makes web development interesting";

// let words = sentence.split(" ");
// let longest = words[0];

// for (let i = 1; i < words.length; i++) {
//     if (words[i].length > longest.length) {
//         longest = words[i];
//     }
// }

// console.log(longest);

// // solution no 5 ************************************

// Removes duplicate element :: no set , first occurrence order is preserved. 


// const arr1 = [4, 2, 4, 5, 2, 7, 5, 8];

// let result = [];

// for (let i = 0; i < arr1.length; i++) {
//     let found = false;

//     for (let j = 0; j < result.length; j++) {
//         if (arr1[i] === result[j]) {
//             found = true;
//             break;
//         }
//     }

//     if (!found) {
//         result.push(arr1[i]);
//     }
// }

// console.log(result);

// // solution no 7 **************************

//Student Result Using Object  and Function 


// const students = [
//     {
//         name: "Rahul",
//         marks: [78, 85, 92, 67, 88]
//     },
//     {
//         name: "Priya",
//         marks: [95, 91, 89, 94, 96]
//     }
// ];

// function calculateResult(student) {
//     let total = 0;

//     for (let mark of student.marks) {
//         total += mark;
//     }

//     let average = total / student.marks.length;
//     let grade;

//     if (average >= 90) {
//         grade = "A";
//     } else if (average >= 75) {
//         grade = "B";
//     } else if (average >= 60) {
//         grade = "C";
//     } else if (average >= 40) {
//         grade = "D";
//     } else {
//         grade = "F";
//     }

//     console.log("Name:", student.name);
//     console.log("Total:", total);
//     console.log("Average:", average);
//     console.log("Grade:", grade);
//     console.log("----------------");
// }

// for (let student of students) {
//     calculateResult(student);
// }

// // solution no 6 ********************************************

//Find the missing Number :: No sort()

// const ar = [1, 2, 3, 5, 6];

// let n = ar.length + 1;

// let sum = n * (n + 1) / 2;

// let actualSum = 0;

// for (let num of ar) {
//     actualSum += num;
// }

// let missing = sum - actualSum;

// console.log(missing);

// //solution no 4 *************************************


// character Frequency :: uses an object and ignore Space/ case

// const str = "Java Script";

// let frequency = {};

// for (let char of str.toLowerCase()) {
//     if (char === " ") {
//         continue;
//     }

//     if (frequency[char]) {
//         frequency[char]++;
//     } else {
//         frequency[char] = 1;
//     }
// }

// for (let char in frequency) {
//     console.log(char + " : " + frequency[char]);
// }

// // solution no 9 ***********************************

// Most Frequent Element :: uses an object for frequency counting .

// const a = [4, 2, 4, 3, 2, 4, 5, 2];

// let freq = {};

// for (let num of a) {
//     if (freq[num]) {
//         freq[num]++;
//     } else {
//         freq[num] = 1;
//     }
// }

// let maxFreq = 0;
// let res;

// for (let num of a) {
//     if (freq[num] > maxFreq) {
//         maxFreq = freq[num];
//         res = num;
//     }
// }

// console.log(res);

// silution no 10 **************************************************

//Nested Object + function 


// const employees = [
//     {
//         name: "Amit",
//         department: "IT",
//         salary: 45000
//     },
//     {
//         name: "Neha",
//         department: "HR",
//         salary: 38000
//     },
//     {
//         name: "Raj",
//         department: "IT",
//         salary: 52000
//     },
//     {
//         name: "Priya",
//         department: "Finance",
//         salary: 48000
//     }
// ];

// function departmentDetails(employees, department) {
//     let departmentEmployees = [];
//     let totalSalary = 0;
//     let highestSalaryEmployee = null;

//     for (let employee of employees) {
//         if (employee.department === department) {
//             departmentEmployees.push(employee);
//             totalSalary += employee.salary;

//             if (
//                 highestSalaryEmployee === null ||
//                 employee.salary > highestSalaryEmployee.salary
//             ) {
//                 highestSalaryEmployee = employee;
//             }
//         }
//     }

//     if (departmentEmployees.length === 0) {
//         console.log("No employees found");
//         return;
//     }

//     let averageSalary = totalSalary / departmentEmployees.length;

//     console.log(
//         "Employees:",
//         departmentEmployees.map(e => e.name).join(", ")
//     );

//     console.log("Total Salary:", totalSalary);
//     console.log("Average Salary:", averageSalary);
//     console.log("Highest Salary:", highestSalaryEmployee.name);
// }

// departmentDetails(employees, "IT");

// solution no 8 ***************************************************************

// Palindrome Without Reverse() :: case-insenstive and space ignord.

// function isPalindrome(str) {
//     str = str.toLowerCase().replace(/\s/g, "");

//     let left = 0;
//     let right = str.length - 1;

//     while (left < right) {
//         if (str[left] !== str[right]) {
//             return "Not Palindrome";
//         }

//         left++;
//         right--;
//     }

//     return "Palindrome";
// }

// console.log(isPalindrome("Madam"));
// console.log(isPalindrome("nurses run"));



// solution no 1 ***********************************************************
// second largest Distinct Element 
const arr = [10, 5, 8, 10, 3, 8];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of arr) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

if (secondLargest === -Infinity) {
    console.log("At least two distinct elements are required");
} else {
    console.log(secondLargest);
}