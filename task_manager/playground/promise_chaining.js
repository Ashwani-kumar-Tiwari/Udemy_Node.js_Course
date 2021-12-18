//promise chaining
require('../src/db/mongoose');

const User = require('../src/models/user');

User.findByIdAndUpdate('61b525c88ceca376f65b0b89', {age: 1}).then((user) => {
    console.log(user);

    return User.countDocuments({age: 1});
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});


//async await
const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age});
    const count = User.countDocuments({age});
    return count;
}

updateAgeAndCount('61b525c88ceca376f65b0b89', 2).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});