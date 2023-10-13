import express from 'express';
import Mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 9090;
const dataBaseName  ="base1"
import gameRoutes from './routes/game.js';
import userRoutes from './routes/user.js';
import achatRoutes from './routes/achat.js';
import mongoose from 'mongoose';

app.use(express.json());
mongoose.set('debug',true);
mongoose.Promise= global.Promise;
mongoose
.connect(`mongodb://127.0.0.1:27017/${dataBaseName}`)
.then(() => {
    console.log("data base connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use('/game', gameRoutes);
app.use('/user', userRoutes);
app.use('/buy', achatRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});