<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">Scoreboard API Module Specification</h3>
</div>

<!-- ABOUT THE PROJECT -->
## About The Module
This document specifies the requirements for a backend API module responsible for managing the top 10 user's scores and updating the scoreboard in real-time. This module will be integrated into the 
existing website to provide a dynamic and secure scorekeeping system.

## Module Requirement
### Functional requirement:
- Save the scores of all users
- Provides a live-updating leaderboard displaying the top 10 users and their scores.
- Updates user scores when receiving authorized API calls from the website.
- Implements security measures to prevent unauthorized score manipulation.
### Non-functional requirement:
- Performance:
  - The module must load the list of the top 10 users and their scores in 2 seconds or less.
  - Update the score for the user in real-time
- Security:
  - The module needs to secure the updation score api

 ## Technology Stack
 Depending on the total number of users we can choose between using web socket or Kafka to achieve real-time updating for the scoreboard. Here I recommend using a web socket for three main reasons:
 - WebSockets are easier to implement and require less infrastructure than Kafka.
 - The number of users is limited so Kafka may be an overkill for this module.
 - WebSockets deliver updates only to connected clients interested in the scoreboard. With Kafka, messages might be sent to a broader audience depending on the topic configuration, potentially creating unnecessary processing.
 ### Websocket
- Websockets provide a direct, two-way communication channel between the web browser and the server.
- When a user's score changes, the server can push the updated scoreboard to all connected clients in real time using web sockets.

## Requirements:
Here we need to save scores for all the users and also a separate table for saving the top 10 users for the scoreboard for faster query in the first time.
### Database design
#### 1. User Scores Table:
- This table stores individual user scores and related data.
- Columns include:
  - user_id (unique identifier for the user)
  - score (current score of the user)
  - last_updated (timestamp of the last score update)
  - created_at (timestamp of the score create)

#### 2. Top Scores Table:
- This table stores only the top 10 user scores and their corresponding user IDs.
- Columns include:
  - rank (position in the leaderboard)
  - user_id (foreign key referencing the User Scores table)
  - score (current score of the user at this rank)

