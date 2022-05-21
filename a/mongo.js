const { ObjectId } = require('mongodb')

const MongoClient = require('mongodb').MongoClient

const url = 'mongodb+srv://deap:jgJDQAR9gIFPnirz@cluster0.4yigb.mongodb.net/poops_test?retryWrites=true&w=majority'

const createPoop = async (req, res, next) =>  {
    const newPoop = {
        answers: req.body.answers
    }
    const client = new MongoClient(url)

    try {
        await client.connect()
        const db = client.db()
        const result = await db.collection('poops').insertOne(newPoop)
    } catch(err) {
        return res.json({ message: "nope" })
    }
    client.close()

    res.json(newPoop) 
}

const getPoops = async(req,res,next) => {
    const client = new MongoClient(url)

    let poops

    try {
        await client.connect()
        const db = client.db()
        poops = await db.collection('poops').find().toArray()
    } catch(err) {
        return res.json({ message: "nope" })
    }
    client.close()

    res.json(poops)
}
const createQ = async (req, res, next) =>  {
    const form = {
        title: req.body.title,
        form: req.body.form
    }
    const client = new MongoClient(url)

    try {
        await client.connect()
        const db = client.db()
        const result = await db.collection('form').insertOne(form)
    } catch(err) {
        return res.json({ message: "nope" })
    }
    client.close()

    res.json(form) 
}

const getQ = async(req,res,next) => {
    const client = new MongoClient(url)

    let form

    try {
        await client.connect()
        const db = client.db()
        form = await db.collection('form').find().toArray()
    } catch(err) {
        return res.json({ message: "nope" })
    }
    client.close()

    res.json(form)
}

const deleteQ = async (req, res, next) =>  {
    
    const client = new MongoClient(url)

    try {
        await client.connect()
        const db = client.db()
        const result = await db.collection('form').deleteOne({ _id : ObjectId(req.params.id) })
    } catch(err) {
        return res.json({ message: `nope ${err}` })
    }
    client.close()

    res.json('asdsadas')
}
exports.createPoop = createPoop
exports.getPoops = getPoops
exports.createQ = createQ
exports.getQ = getQ
exports.deleteQ = deleteQ
