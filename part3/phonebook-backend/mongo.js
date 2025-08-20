const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('give password as argument');
  process.exit(1);
}
// else if (process.argv.length === 3) {
//   console.log('print text');
// } else {
//   console.log('create document in mongo.db');
// }

const password = process.argv[2];

const url = `mongodb+srv://anttur85:${password}@cluster0.qr9w7pk.mongodb.net/phonebookApp?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set('strictQuery', false);

mongoose.connect(url);

const personScheme = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model('Person', personScheme);

if (process.argv.length > 3) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  });

  person.save().then(() => {
    console.log('added new number');
    mongoose.connection.close();
  });
} else {
  Person.find({}).then(result => {
    console.log('phonebook:');

    result.forEach(person => {
      const { name, number } = person;

      if (name && number) {
        console.log(`${name} ${number}`);
      }
    });

    mongoose.connection.close();
  });
}
