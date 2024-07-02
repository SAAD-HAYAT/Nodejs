const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/playground', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
  author: { type: String, required: true },
  tags: { type: [String], required: true },
  date: { type: Date, default: Date.now },
  isPublished: { type: Boolean, required: true }
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse(){
const course = new Course({
    name: 'Nodejs Course',
    author: 'Saad',
    tags: ['node', 'backend'],
    isPublished: true
});
try{
const result = await course.save();
console.log(result);
}catch(err){
    console.log(err.message);
}
}

createCourse();