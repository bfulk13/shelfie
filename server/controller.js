module.exports = {
    // CREATE-POST
    newProduct: (req, res) => {
        const db = req.app.get('db');
        const { name, price, img } = req.body;
        db.newProduct([name, price, img]).then(response => {
            res.status(200).send(response)
        }).catch(err => {
            console.log(err)
        })
    },
    getAll: (req, res) => {
        const db = req.app.get('db');
        db.getAll().then(response => {
            res.status(200).send(response)
        }).catch(err => {
            console.log(err)
        })
    },
    getOne: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.getOne(id).then(response => {
            res.status(200).send(response)
        }).catch(err => {
            console.log(err)
        })
    },
    updateInventory: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        const { name, price, img } = req.body;
        db.updateInventory([id, name, price, img]).then(response => {
            res.sendStatus(200)
        }).catch(err => {
            res.sendStatus(500)
            console.log(err)
        })
    },
    delete: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.delete(id).then(response => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(err)
        })
    }
}