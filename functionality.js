// there will probably be some tricky things you need to do
// for this project and i am more than willing to help if you need it
// let me know if you need any help with the specifics of connecting with
// the html file but most of actual mathy-coding is straight forward :)
// javascript is like if java and python had a baby so a lot of the code 
// will look familiar just typed differently

// you got this and dont hesitate to reach out in the groupme!
class Event {
    constructor(event_id, user_id, title, description, due_date, is_expired) {
        this.event_id = event_id;
        this.user_id = user_id;
        this.title = title;
        this.description = description;
        this.due_date = new Date(due_date);
        this.is_expired = is_expired;
    }

    /*
    Made this for when the user wants to update event info.
    I do not know how to get input from the front end though so for now it is not called.
    */
    updateEvent(updateInfo) {
        if (updateInfo.title) {
            this.title = updateInfo.title;
        }
        if (updateInfo.description) {
            this.description = updateInfo.description;
        }
        if (updateInfo.due_date) {
            this.due_date = new Date(updateInfo.due_date);
            this.is_expired = false;
            setAlarm(this);
        }
    }
}

let alarmList = [];

function triggerAlarm(event, alarmID) {
    event.is_expired = true;
    alert(event.title);
    alarmList = alarmList.filter(function(alarm) {
        return (alarm.alarmID != alarmID);
    });
}

function setAlarm(event) {
    alarmList = alarmList.filter(function(alarm) {
        let filterBoolean;
        if (alarm.event_id == event.event_id) {
            clearTimeout(alarm.alarmID);
            return (filterBoolean = false);
        }
        return (filterBoolean = true);
    });

    const reminderAdjust = [(24 * 60 * 60 * 1000), (60 * 60 * 1000), 0];
    reminderAdjust.forEach(function(reminder) {
        const alarmTime = event.due_date.getTime() - reminder;
        const alarmReminder = alarmTime - new Date().getTime();
        if (alarmReminder > 0) {
        const alarmID = setTimeout(function() {
            triggerAlarm(event, alarmID);
        }, alarmReminder)
        alarmList.push({
            event_id: event.event_id,
            due_date: event.due_date,
            alarmID: alarmID
            });
        }

    else {
        if (reminder == 0) {
            alert("Event is before current time. Please enter a valid date.");
        }
    }
    });
}

//Here to just represent accepting a user created event and then using setAlarm to start the timer for it.
const userEvent = new Event(event_id, user_id, title, description, due_date, is_expired);
setAlarm(userEvent);
