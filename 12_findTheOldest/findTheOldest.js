const findTheOldest = function(people) {
    const oldest =  people.reduce((a , b) => {
        const last = a.yearOfDeath - a.yearOfBirth;
        const next = b.yearOfDeath - b.yearOfBirth;
        return next > last ? b : a;
    }); return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
