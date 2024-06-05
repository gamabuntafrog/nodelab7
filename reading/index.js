const config = require('../config');
const enableScheduleJobs = true;
const startReadingJob = require('./reading');
const startUserLoginReminderJob = require('./userLoginReminder');

function start() {
if (!enableScheduleJobs) {
        console.warn('Jobs scheduling is not enabled.');
        return;
    }

    startReadingJob();
    startUserLoginReminderJob();
}

module.exports = start;