const { userView } = require('./userView')
function taskView(task) {
    return {
        id: task.id,
        description: task.description,
        createdAt: task.createdAt,
        status: task.status,
        deadline: task.deadline,
        user: userView(task.user),
        labels: task.labels,
    }
}

module.exports = {
    taskView,
}