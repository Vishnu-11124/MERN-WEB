import express from 'express'

const allStudent= (req, res) => {
    res.send("Get Student Data")
}

const newStudent = (req, res) => {
    res.send("Create Student Data")
}

const updateStudent = (req, res) => {
    res.send("Update Student data")
}

const deleteStudent = (req, res) => {
    res.send("Remove Student data")
}

export { allStudent, newStudent, updateStudent, deleteStudent}