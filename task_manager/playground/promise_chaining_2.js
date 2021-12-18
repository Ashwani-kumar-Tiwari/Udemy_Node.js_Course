//Promise chaining
require('../src/db/mongoose');

const Task = require('../src/models/task');

Task.findByIdAndDelete('61b96866d02ec0a68668f7aa').then((task) => {
    console.log(task);
    return Task.countDocuments({completed: false});
}).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});


//async await
const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: false});
    return count;
}

deleteTaskAndCount('61bce7e0af4e6abf50b34642').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});