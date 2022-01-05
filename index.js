
const express = require('express')
// const open = require('open');
const fs = require('fs')

const app = express()
const port = process.env.PORT || 3000
var request = require('request');
var bb 

// request('https://livehealth.solutions/qr_for_userwise_reports/18021/7cf03e3f-b6f9-11eb-b420-0af7484678b0/58255766/', function (error, response, body) {
//   console.log('Status:', response.statusCode);
//   console.log('Headers:', JSON.stringify(response.headers));
//   console.log('Response:', body);
// });



app.get('/', (req, res) => {
  const path = './test.pdf'
  if (fs.existsSync(path)) {
    res.contentType("application/pdf");
    fs.createReadStream(path).pipe(res)
} else {
    res.status(500)
    console.log('File not found')
    res.send('File not found')
}
  // res.setHeader('Content-Type', 'test/pdf')
// let a =  open();
//   res.send(a)

// opens the url in the default browser 

})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})