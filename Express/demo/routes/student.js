 import express from 'express'

 const router = express.Router()

 router.get('/all', (req, res) => res.send("Get Student Data"))
 router.post('/create', (req, res) => res.send("Create Student Data"))
 router.put('/update', (req, res) => res.send("Update Student data"))
 router.delete('/remove', (req, res) => res.send("Remove Student data"))

 export default router