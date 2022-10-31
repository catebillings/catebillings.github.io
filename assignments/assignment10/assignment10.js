var companyJSON = `
{
    "companyName":"Tech Starts",
    "website":"www.techstars.site",
    "employees": [
        {
        "firstName":"Sam",
        "department":"Tech",
        "designation":"Manager",
        "salary":40000,
        "raiseEligible":true
        },
        {
        "firstName":"Mary",
        "department":"Finance",
        "designation":"Trainee",
        "salary":18500,
        "raiseEligible":true
        },
        {
        "firstName":"Bill",
        "department":"HR",
        "designation":"Executive",
        "salary":21200,
        "raiseEligible":false
        }
    ]
}
`
var company = JSON.parse(companyJSON)

// Problem 1
console.log(company.employees)

// Problem 2
console.log(company)

// Problem 3
var annaJSON =`
{
    "firstName":"Anna",
    "department":"Tech",
    "designation":"Executive",
    "salary":25600,
    "raiseEligible":false
}
`
var anna = JSON.parse(annaJSON)

company.employees.push(anna)

console.log(company.employees)

// Problem 4
var totalSalary = 0
for(var i = 0; i < company.employees.length; i++) {
    totalSalary += company.employees[i].salary 
}

console.log(totalSalary)

// Problem 5
function updateSalary(employees) {
    for(var i = 0; i < employees.length; i++) {
        if (employees[i].raiseEligible == true) {
            employees[i].salary = employees[i].salary*1.1
            employees[i].raiseEligible = false
        }
    }
}

updateSalary(company.employees)

console.log(company.employees)

// Problem 6

wfh = ['Anna', 'Sam']

for(var i = 0; i < company.employees.length; i++) {
    if (wfh.indexOf(company.employees[i].firstName) >= 0) {
        company.employees[i].wfh = true
    } else {
        company.employees[i].wfh = false
    }
}

console.log(company.employees)