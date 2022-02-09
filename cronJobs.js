const { CronJob } = require('cron');
const expireTasks = require('./scripts/expireTasks')

// Podemos sacar las reglas de cron job de esta web http://www.cronmaker.com/
// Cada una hora: 0 0 0/1 1/1 * ? *

const expireTasksJob = new CronJob('0/5 * * * * *', expireTasks, null, true, 'America/Argentina/Buenos_Aires');
  
  expireTasksJob.start();
  
