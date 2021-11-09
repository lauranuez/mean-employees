const Employee = require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req,res) => {
    const employees = await Employee.find();
    res.json(employees);
};

employeeCtrl.createEmployees = async (req,res) => {
    const employee = new Employee({
        name: req.body.name,
        position: req.body.position,
        office:req.body.office,
        salary: req.body.salary
    });
    console.log(employee);
    await employee.save();
    res.json({'status': 'Employee Saved'});
};

employeeCtrl.getEmployee = async (req,res) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
};

employeeCtrl.editEmployee = async (req,res) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        position:req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    const employeeAct = await Employee.findByIdAndUpdate(req.params.id, {$set:employee}, {new : true});
    res.json({status: 'Employee updated'});

};

employeeCtrl.deleteEmployee = async (req,res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({status: 'Employee deleted'});
};

module.exports = employeeCtrl;