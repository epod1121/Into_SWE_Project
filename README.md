# Into to Software Engineering Project

General Planner

Overview
The General Planner is a browser-based deadline tracking system designed to help students and professionals manage complex schedules. The project addresses the need for a central system to track multi-stage deadlines—such as discussion board posts that require initial entries and subsequent responses—which are often poorly defined or easy to overlook. Users can create accounts, manage a personal calendar, and receive automated browser notifications as deadlines approach.
+4

Key Features

Event Management: Full CRUD (Create, Read, Update, Delete) capabilities for calendar events, including titles, descriptions, and due dates.
+2


Automated Notifications: System-triggered browser alerts sent 24 hours and 1 hour before a scheduled event.
+1


Personalized Accounts: Secure login system where passwords are stored using hashing techniques to protect user data.
+1


Responsive UI: A mobile-friendly interface that allows users to view and manage their calendar on any device with a modern web browser.
+3


Categorization: Ability to use custom tags (e.g., Work, School, Personal) to organize upcoming events.
+1

Technology Stack
The project is built using a straightforward, portable technology stack to ensure ease of maintenance and broad compatibility without the complexity of heavy frameworks:
+1


Frontend: HTML5 and CSS for a functional and visually pleasing interface.
+2


Logic Layer: JavaScript (JS) for handling event listeners, internal clock logic, and notification triggers.
+2


Backend/Storage: SQL database for persistent storage of user profiles and event data.
+4

System Architecture
The application follows a three-tier architecture:
+1


Frontend: Manages the calendar view and processes user input.


Logic (JavaScript): Processes deadlines and triggers notifications.


Database (SQL): Stores user credentials and event details across two primary tables: User and Event.
+2

Performance & Reliability Standards

Speed: Pages are designed to load within 2 seconds under normal usage.
+1


Uptime: The system aims for 99% availability, excluding scheduled maintenance.
+1


Data Integrity: Automatic database backups are scheduled every 12 hours to prevent significant data loss in the event of a failure.
+1

Installation and Requirements

Platform: Accessible via modern web browsers such as Chrome, Safari, and Edge.
+1


Connectivity: Requires an active internet connection to access stored data and receive notifications.


Manual Entry: Events must be entered manually; the current version does not support automatic syncing with external calendars or AI-based suggestions.

Project Team (Group 6)

Ethan Podhorez: Project Leader 


Mathila Phay: Structure Design (HTML) 


Arturo Quevedo: User Interface Design (CSS) 


Calvary Richardson: Functionality and Algorithms Design (JavaScript) 


Camilo Salazar: Database Design (SQL)
