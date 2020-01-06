import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/spa_db`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false
}).catch(error => {
    console.log(error)
});

export default mongoose;
