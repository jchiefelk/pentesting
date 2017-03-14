// server/index.js
'use strict';
const app = require('./app');
var router = require('./router');
const PORT = process.env.PORT || 9000;
console.log('Setup logger');

app.get('/', (req, res) => {
  console.log('Get Get');
   res.json({
           message: 'Get Get',
   });

  
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
