/*
feature expire tasks:

1- Levantar todas las tareas que cumplan la siguiente condicion:
    - No estan en status "completed"
    - Deadline sea menor a la fecha de hoy
2- Pasar la tarea a estado "expired" 
*/

const { Task } = require("../db/models")
const { Op } = require('sequelize')

async function expireTasks() {
    const tasks = await Task.findAll({
        where: {
            status: {
                [Op.or]: ['new', 'doing']
            },
            deadline: {
                [Op.lt]: new Date()
            }
        }
    })

    const taskIds = tasks.map(task => task.id)
    
    tasks.forEach(async task => {
        task.status = "expired"
        await task.save()
    })

    console.log(`${tasks.length} expiradas (${taskIds.join(",")})`)
}

expireTasks()