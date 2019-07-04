let OliveJar = require('../oliveJarModel');

let createJar = async function (req, res) {
    console.log(req.body);
    let jar = new OliveJar(req.body);

    try {
        let jarCreated = await jar.save();
        console.log(jarCreated);
        res.status(200).json({ 'message': 'New jar has been created!!!' })

    } catch (error) {
        console.log(`Express error: ${error}`);
        res.status(400).send(`You didn't fill the form correctly `)
    }
}

let editJar = async function (req, res) {
    let currentId = req.params.id;
    OliveJar.findById(currentId)
        .then(jar => {
            console.log(jar);
            res.status(200).json(jar )
        }).catch(err => console.log(err))
}
module.exports = { createJar, editJar };