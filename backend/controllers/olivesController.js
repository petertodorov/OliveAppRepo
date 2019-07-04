let OliveJar = require('../oliveJarModel')

let getOlives = async function (req, res) {
    await OliveJar.find(function (err, allJars) {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json(allJars)
        }
    })
}

module.exports = { getOlives};