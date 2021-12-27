# syook_task2
Second task for Syook

Entry point for project is app.js <br />
Steps to start - 
```
cd src
npm install
node app
```

This project consumes socket.io in order to emit and broadcast data across multiple sockets. MongoDB is sued to create a time series db ans store the data post integrity checks

Project structure - 
- src <br />
| - content <br />
---|-- data.json -> consists of the dataset provided by syook <br />
| - dataTransform <br />
---|-- randomize.js -> randomly creates a data array from content (data.json) <br />
---|--checksum.js -> calculates checksum using sha-256 for the random objects created and attaches it to the object <br />
---|--encrypt.js -> encrypts the data object created using aes-256 <br />
| - models <br />
---|--timeseries.js -> mongo db schema for the timeseries db <br />
| - public <br />
---|--client.js -> client side script that runs and emits the encrypted objects <br />
| - util <br />
---|--integrity.js -> server side helper function to validate the checksum integrity of the recieved object <br />
---|--saveToDb.js -> server side helper function to save validated object to mongoDb <br />
| - views <br />
---|--index.ejs -> frontend html page
| - app.js -> main entry point for the server. contains the server side broadcasting service <br />

Things to be added - 
- Frontend scripts for dataTransform need to be integrated <br />
- Remove non-essential packages <br />
- End-to-end functionality needs to be added <br />

