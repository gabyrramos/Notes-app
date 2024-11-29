import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import tasksRouter from './src/routes/tasks.js'

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/todo-app')
.then(() => {
  console.log('Conectado a MongoDB');
}).catch((err) => {
  console.log('Error al conectar con MongoDB:', err);
});


app.use('/', tasksRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
