
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

/* 
    Incase you are using mongodb atlas database uncomment below line
    and replace "mongoAtlasUri" with your mongodb atlas uri.
*/
// mongoose.connect( mongoAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true})

app.get('/', (req, res) => {
const open = require('open');
// opens the url in the default browser 
open('https://livehealth.solutions/qr_for_userwise_reports/18021/7cf03e3f-b6f9-11eb-b420-0af7484678b0/58255766/');

})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})