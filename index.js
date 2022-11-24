const employee = {
    name: "Bart",
    streetAddress: "123 Springfield Rd" 
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployee = {
        ...employee}
        newEmployee[key] = value
        return newEmployee
    }

let destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value)=> {
    employee[key] = value
    return employee
}

let deleteFromEmployeeByKey = (employee, key) => {
    let newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee

}
let destructivelyDeleteFromEmployeeByKey = (employee, key) => {
     delete employee[key]
     return employee


}