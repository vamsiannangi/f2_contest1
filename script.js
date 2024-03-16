/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    arr.map(employee => {
    if (employee.profession === "developer") {
      console.log(employee.name);
    }
  });

}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee.name);
    }
  });
}

function addData() {
  //Write your code here, just console.log
   let newEmployee={id: 4, name: "vamsi", age: "22", profession: "admin"}
   arr.push(newEmployee);
   console.log(arr);
}

function removeAdmin() {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].profession !== "admin") {
      newArr.push(arr[i]);
    }
  }

  console.log(newArr);
  arr.length = 0;
for (let i = 0; i < newArr.length; i++) {
    arr.push(newArr[i]);
  }
 console.log(arr);
}

function concatenateArray() {
  // Create an empty array to store the concatenated result
  let concatenatedArray = [];

  // Iterate over the original array and add each element to the concatenated array
  for (let i = 0; i < arr.length; i++) {
    concatenatedArray.push(arr[i]);
  
  }

  // Create new employee objects
  let newEmployee = { id: 4, name: "krish", age: "22", profession: "developer" };
  let newEmployee1 = { id: 5, name: "ram", age: "24", profession: "admin" };
  let newEmployee2 = { id: 6, name: "sunny", age: "24", profession: "developer" };

  // Add the new employee objects to the concatenated array
  concatenatedArray.push(newEmployee, newEmployee1, newEmployee2);

  // Log the concatenated array to the console
  console.log(concatenatedArray);
}



