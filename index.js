
const express = require('express')
const open = require('open');
const app = express()
const port = process.env.PORT || 3000



app.get('/', (req, res) => {
let a =  open('https://livehealth.solutions/qr_for_userwise_reports/18021/7cf03e3f-b6f9-11eb-b420-0af7484678b0/58255766/');
  res.send(a)

// opens the url in the default browser 

})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})