let msgs = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body;
        msgs.push({id, text, time})
        id++;
        res.status(200).send(msgs);
    },

    read: (req, res) => {
        res.status(200).send(msgs)
    },

    update: (req, res) => {
        const {text} = req.body;
        const updateID = req.params.id;
        const msgIndex = msgs.findIndex(msg => msg.id == updateID);

        let msg = msgs[msgIndex];

        msgs[msgIndex] = {
            id: msg.id,
            text: text || msg.text,
            time: msg.time
        };
        res.status(200).send(msgs)
    },

    delete: (req, res) => {
        const deleteID = req.params.id;
        msgIndex = msgs.findIndex(msg => msg.id == deleteID);
        msgs.splice(msgIndex, 1);
        res.status(200).send(msgs);
    }
}