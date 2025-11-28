 import express from 'express'

 const router = express.Router()

 import { allStudent, newStudent, updateStudent, deleteStudent} from '../controllers/student.js'

 router.get('/all', allStudent)
 router.post('/create', newStudent)
 router.put('/update', updateStudent)
 router.delete('/remove', deleteStudent )

 export default router