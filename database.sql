-- this should be fairly straight forward for you
-- you can honestly wait until js is done connecting
-- to the html file and accessing the data before you need to
-- code anything so you know the names of what to put down
-- i would reccomend that you at least get the main format out
-- of the way so you have the shell of what you need to code 

-- i got the very first line out of the way but add some comments
-- or even some more solid usable code so that when js is done
-- you can just throw the names of everything in and call it a day

-- General Planner Database

DROP DATABASE IF EXISTS general_planner;
CREATE DATABASE general_planner;
USE general_planner;

-- =========================
-- USERS TABLE
-- Email is included for password recovery
-- =========================

CREATE TABLE users (
    user_id        INT AUTO_INCREMENT PRIMARY KEY,
    username       VARCHAR(50)  NOT NULL UNIQUE,
    email          VARCHAR(255) NOT NULL UNIQUE,
    password_hash  VARCHAR(255) NOT NULL,

    -- Password reset
    reset_token         VARCHAR(255) DEFAULT NULL,
    reset_token_expires DATETIME DEFAULT NULL,

    created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- EVENTS TABLE
-- =========================

CREATE TABLE events (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    due_date DATETIME NOT NULL,
    category ENUM('Work', 'School', 'Personal', 'Other') DEFAULT 'Other',
    is_expired BOOLEAN DEFAULT FALSE,
    reminder_24hr_sent BOOLEAN DEFAULT FALSE,
    reminder_1hr_sent BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_events_users
        FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE
);

-- =========================
-- SAMPLE DATA
-- =========================

INSERT INTO users (username, email, password_hash)
VALUES ('testuser', 'testuser@example.com', 'hashed_password_example');

INSERT INTO events (
    user_id, 
    title, 
    description, 
    due_date, 
    category, 
    is_expired
)
VALUES
(
    1,
    'Work Meeting',
    'Prepare notes for team meeting.',
    '2026-05-03 10:00:00',
    'Work',
    FALSE
);

