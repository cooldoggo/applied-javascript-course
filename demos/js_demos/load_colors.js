const fs = require('fs').promises;


async function copyColors() {
  try {
    const data = await fs.readFile('colors.txt', 'utf8');
    const colors = data.split('\n');
    await fs.writeFile('colors2.txt', colors.join("\n"));
    console.log('File written successfully');
  } catch (err) {
    console.error('Erros:', err);
  }

}

// fs.readFile('colors.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }

//   global. colors = data.split('\n');

// });


// // non-blocking

// // write the colors loaded from colors.txt to a new file named colors2.txt
// fs.writeFile('colors2.txt', global.colors.join("\n"), (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//     return;
//   }
//   console.log('File written successfully');
// });