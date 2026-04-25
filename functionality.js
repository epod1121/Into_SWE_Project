class Event {
    constructor(title, description, due_date) {
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.due_date = new Date(due_date);
    }
}

let alarmList = [];

// 2. UI SELECTORS
const colorInput = document.getElementById('base-color-input');
const assignmentForm = document.getElementById('assignment-form');
const assignmentList = document.getElementById('assignment-list');
const scheduleForm = document.getElementById('schedule-form');
const scheduleList = document.getElementById('schedule-list');
const notesForm = document.getElementById('notes-form');

// 3. COLOR PICKER
colorInput.addEventListener('input', (e) => {
    document.body.style.setProperty('--base-color', e.target.value);
});

// 4. ASSIGNMENT LOGIC
assignmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('assignment-name-input').value;
    const date = document.getElementById('assignment-date-input').value;
    const course = document.getElementById('course-name-input').value;

    if (!name || !date) return alert("Please enter a name and date.");

    const newAssignment = new Event(name, course, date);
    
    // Add to HTML List
    const li = document.createElement('li');
    li.className = 'list-item';
    li.innerHTML = `<strong>${newAssignment.title}</strong> (${newAssignment.description}) - Due: ${newAssignment.due_date.toLocaleDateString()}`;
    assignmentList.appendChild(li);

    setAlarm(newAssignment);
    assignmentForm.reset();
});

// 5. SCHEDULE LOGIC
scheduleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const className = document.getElementById('class-title-input').value;
    const day = document.getElementById('class-day-select').value;
    const time = document.getElementById('class-time-input').value;

    const li = document.createElement('li');
    li.className = 'list-item';
    li.innerHTML = `<strong>${className}</strong> - ${day} at ${time}`;
    scheduleList.appendChild(li);

    scheduleForm.reset();
});

// 6. NOTES LOGIC
notesForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const noteText = document.getElementById('notes-textarea').value;
    
    // For now, we'll just alert the user it's saved. 
    // Real saving would go to LocalStorage or a Database.
    alert("Note saved locally!");
    console.log("Saved Note:", noteText);
});

// 7. ALARM SYSTEM
function setAlarm(event) {
    const reminders = [
        { offset: 24 * 60 * 60 * 1000, label: "24 hours" },
        { offset: 60 * 60 * 1000, label: "1 hour" },
        { offset: 0, label: "final" }
    ];

    reminders.forEach(reminder => {
        const alarmTime = event.due_date.getTime() - reminder.offset;
        const timeUntilAlarm = alarmTime - Date.now();

        if (timeUntilAlarm > 0) {
            const alarmID = setTimeout(() => {
                if (reminder.label === "final") {
                    alert(`🚨 DEADLINE: ${event.title} is due now!`);
                } else {
                    alert(`🔔 REMINDER: ${event.title} is due in ${reminder.label}.`);
                }
            }, timeUntilAlarm);

            alarmList.push({ id: event.id, alarmID });
        }
    });
}
