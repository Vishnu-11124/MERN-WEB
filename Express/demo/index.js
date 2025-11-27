import express from 'express'
import students from './routes/student.js'

const app = express()

app.get('/', (req, res) => {
  res.send("<h1>Home Page</h1>")
})

app.use('/students', students)

// Route Params
app.get('/teacher/delete/:id', (req, res) =>{
  res.send(`User deleted ${req.params.id}`)
})

app.get('/ecom1/:category/:brand', (req, res) => {
  res.send(`The selected ${req.params.category} is ${req.params.brand}`)
})

/*
// Http Methods
app.get('/student', (req, res) => {
  res.send("Get Students")
})

app.post('/student', (req, res) => {
  res.send("Create Student")
})

app.put('/student', (req, res) => {
  res.send("Update Student")
})

app.delete('/student', (req, res) => {
  res.send("Delete Student")
})
// Refactoring routes
app.route('/student')
.get((req, res) => res.send('Get User data'))
.post((req, res) => res.send('Create User data'))
.put((req, res) => res.send('Update User data'))
.delete((req, res) => res.send('Remove User data'))
*/

/*
// Array of callback functions
const cb1 = (req, res, next) => {
  console.log("First callback call")
  next()
}

const cb2 = (req, res, next) => {
  console.log("Second callback call")
  next()
}

const cb3 = (req, res) => {
  console.log("Third callback call")
  res.send("Response from third callback")
}

app.get('/array-cb', [cb1, cb2, cb3])
*/

// app.get('/single-cb', (req,res) => {
//   res.send("SIngle Callback Function")
// })

// app.get(/^\/a(b)?cd$/, (req, res) => {
//   res.send("ab or acd will work")
// })

// Regex
// app.get(/x/, (req, res) => {
//     res.send("Match route founded")
// })

// nested routes
// app.get('/products/iphone', (req, res) => {
//   res.send("iPhone page")
// })

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
