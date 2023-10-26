const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (name) => {
  rl.question('What is your favourite thing to do? ', (activity) => {
    rl.question('What do you like to listen to? ', (music) => {
      rl.question('What is your favourite meal time? ', (meal) => {
        rl.question('What is your favourite food? ', (food) => {
          rl.question('What is your favourite sport? ', (sport) => {
            rl.question('What would your superpower be? ', (power) => {

              console.log(`hey ${name} i see you like to ${activity} and you like to listen to ${music}. 
              So your favorite meal is ${meal} and your favorite food is ${food}, 
              I like ${sport} as well and ${power} seems like a cool power`);
              r1.close();

            });
          });
        });
      });
    });
  });
});
