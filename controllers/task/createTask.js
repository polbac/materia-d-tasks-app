const { createTaskDAO } = require('../../DAOS/Task')
const { Task } = require('../../db/models')
const badRequestError  = require('../../errors/badRequestError')

async function createTask(req, res) {
    try {
        const { description, labelIds, status, deadline } = req.body
        
        const userId = req.user

        if (!description) {
            return res.status(400).send(badRequestError('Por favor ingrese una descripcion'))
        }

        if (!deadline) {
            return res.status(400).send(badRequestError('Por favor ingrese un deadline'))
        }

        if (!status || !Task.STATUS_OPTIONS.includes(status)) {
            return res.status(400).send(badRequestError(`Por favor ingrese un status (${Task.STATUS_OPTIONS})`))
        }
        
        const task = await createTaskDAO({ description, userId, deadline, status })
        if (labelIds) {
            const labels = labelIds.split(",")
            await task.addLabels(labels)
        }
        
        
        res.json(task)
    } catch(error) {
        console.log(error)
        res.status(500).send('error de sistema', error)
    }
}

module.exports = createTask 