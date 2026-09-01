import express from 'express';
const app = express();
app.use(express.json());
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

//GET : get request to fetch all users
app.get('/users', (req, res) => {
    res.json(users);
});
//Post : post request to create a new user
app.post('/users', (req, res) => {
  const user = {  id :users.length + 1,
    name : req.body.name,
    email : req.body.email
};
users.push(user);
res.json(user);
});
app.listen(8000, () => {
    console.log('Local server is running on : http://localhost:8000');
});