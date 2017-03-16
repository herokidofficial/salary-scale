var total = 0;
var employee = prompt("Enter employee's name: ");
var role = prompt("Enter employee's role(Intern/Associates/Managers/Executives/Directors): ");
var x = prompt("Enter Basic Salary: ");
switch(role) {
  case 'Intern':
    var y = (x * 0.05);
    var basic_salary = parseInt(x);
    var tax = parseInt(y);
    total += basic_salary - tax;
    console.log("" + employee + "'s Salary is:\nBasic Allowance: " + basic_salary + " \nTax: " + tax + "\nSalary: " + total);
    break;
  case 'Associates':
    var y = (x * 0.05);
    var z = (x * 0.08);
    var basic_salary = parseInt(x);
    var tax = parseInt(y);
    var pension = parseInt(z);
    total += basic_salary - tax - pension;
    console.log("" + employee + "'s Salary is:\nBasic Allowance: " + basic_salary + "\nPension: "
     + pension + "\nTax: " + tax + "\nSalary: " + total);
    break;
  case 'Managers':
    var y = (x * 0.05);
    var z = (x * 0.08);
    var i = (x * 0.15);
    var j = (x * 0.2);
    var basic_salary = parseInt(x);
    var tax = parseInt(y);
    var pension = parseInt(z);
    var feeding = parseInt(i);
    var housing = parseInt(j);
    total += basic_salary + housing + feeding - tax -pension;
    console.log("" + employee + "'s Salary is:\nBasic Allowance: " + basic_salary + "\nHousing Allowance: "
     + housing + "\nFeeding Allowance: " + feeding + "\nPension: " + pension + "\nTax: " + tax + "\nSalary: " + total);
    break;
  case 'Executives':
    var y = (x * 0.05);
    var z = (x * 0.08);
    var i = (x * 0.15);
    var j = (x * 0.2);
    var basic_salary = parseInt(x);
    var tax = parseInt(y);
    var pension = parseInt(z);
    var feeding = parseInt(i);
    var housing = parseInt(j);
    total += basic_salary + housing + feeding - tax -pension;
    console.log("" + employee + "'s Salary is:\nBasic Allowance: " + basic_salary + "\nHousing Allowance: "
     + housing + "\nFeeding Allowance: " + feeding + "\nPension: " + pension + "\nTax: " + tax + "\nSalary: " + total);
    break;
  case 'Directors':
    var y = (x * 0.05);
    var z = (x * 0.08);
    var i = (x * 0.15);
    var j = (x * 0.2);
    var basic_salary = parseInt(x);
    var tax = parseInt(y);
    var pension = parseInt(z);
    var feeding = parseInt(i);
    var housing = parseInt(j);
    total += basic_salary + housing + feeding - tax -pension;
    console.log("" + employee + "'s Salary is:\nBasic Allowance: " + basic_salary + "\nHousing Allowance: "
     + housing + "\nFeeding Allowance: " + feeding + "\nPension: " + pension + "\nTax: " + tax + "\nSalary: " + total);
    break;
}