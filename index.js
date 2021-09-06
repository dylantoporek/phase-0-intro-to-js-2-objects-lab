// Write your solution in this file!
const employee = {
    name: "Dylan",
    streetAddress: "241", 
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...employee,
        [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(obj, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key,){
    delete employee[key];
    return employee;
}
