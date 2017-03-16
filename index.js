function EmployeeSalary(level){
	this.level = level;
	this.basic_salary = 100000;
	this.basic_transport_alawance = 30000;
	this.basic_housing_alawance = 50000;
	this.basic_feeding_alawance = 40000;

}

EmployeeSalary.prototype.getTransportAlawance = function() {

	return calculator(this.basic_transport_alawance,this.level);

};

EmployeeSalary.prototype.getHousingAlawance = function() {
	return calculator(this.basic_housing_alawance,this.level);
};

EmployeeSalary.prototype.getSalary = function() {
	return calculator(this.basic_salary,this.level);
};

EmployeeSalary.prototype.getFeedingAlawance = function() {
	return calculator(this.basic_feeding_alawance,this.level);
};

EmployeeSalary.prototype.total = function() {
	return this.getSalary() + this.getTransportAlawance() + this.getFeedingAlawance() + this.getHousingAlawance();
};

EmployeeSalary.prototype.toString = function() {
   return "Total Earnings: "+ this.total()+ " Basic Salary " + this.getSalary() + " Transport Alawance "+ this.getTransportAlawance() + " Feeding Alawance "+this.getFeedingAlawance()+" Housing Alawance "+this.getHousingAlawance();	
};


function  calculator(basic_salary,emplo_level){
 if(emplo_level === 1){
   return basic_salary;
 }else{
    return (((0.5 * basic_salary) * emplo_level) + basic_salary/2);
 }
}

var emp = new EmployeeSalary(2);
console.log(emp.toString());