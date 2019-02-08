const express = require('express');
const bodyParser = require('body-parser');
const mc = require(`./controllers/msg_ctrl`)

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + `/../public/build`))


const msgsBaseURL = `/api/msgs`;
app.post(msgsBaseURL, mc.create);
app.get(msgsBaseURL, mc.read);
app.put(`${msgsBaseURL}/:id`, mc.update);
app.delete(`${msgsBaseURL}/:id`, mc.delete);



const port = 3001;

app.listen(port, () => {
    console.log(`Server ${port}`);
});