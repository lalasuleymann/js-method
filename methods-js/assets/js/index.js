const employees=[
    {
        employeeName: "Emily",
        position: "HR",
        employeeId:25
    },
    {
        employeeName: "Kate",
        position: "manager",
        employeeId: 26
    },
    {
        employeeName: "Emma",
        position: "manager",
        employeeId: 27
    }
]

// Custom Find
function findByName(name){
    let temporary=true;
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].employeeName==name) {
            console.log("Name of the employee is: " + name);
            temporary= true;
        }
        else{
            console.log("There is no employee in company with name " + name);
            return temporary= false;
        }
        return employees[i];
    }
}
console.log(findByName("Emily"));



//Custom Filter
let filtered={
    employeeId: 25,
    employeeName: "Emily"
    };
function filterByEmployeeId(id,filtered){
    let newArr= [];
    for (var id in filtered) {
        if (filtered.employeeId==id) {
            for (let i = 0; i < employees.length; i++) {
                if (employees[i].employeeId===filtered.employeeId) {
                    newArr.push(employees[i]);
                }
            }
        } 
    }
    return newArr;
}
console.log(filterByEmployeeId(25));



// Custom Some
function someById(id){
    let newArr= [];
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].employeeId> id) {
            newArr.push(employees[i]);
        }
    }
    return newArr;
}
console.log(someById(23));



// Custom Every
function everyById(id) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].employeeId> id) {
            return true
        }
        else{
            return false;
        }
    }
}
console.log(everyById(24));