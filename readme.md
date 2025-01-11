# Software Requirements Specification

---

## **Scoreboard Module Documentation**

---

## Table of Contents

- **Revision History** .................................................................................. ii
- **1. Introduction** ..........................................................................................  
  - 1.1 Purpose  
  - 1.2 Document Conventions  
- **2. Overall Description** .........................................................................  
  - 2.1 Product Perspective  
  - 2.2 User Classes and Characteristics  
  - 2.3 Operating Environment  
  - 2.4 Design and Implementation Constraints  
  - 2.5 Assumptions and Dependencies  
- **3. System Features** .......................................................................... 
  - 3.1 Retrieve Top 10 Users  
    - 3.1.1 Description  
  - 3.2 Update User Scores  
    - 3.2.1 Description  
  - 3.3 Real-time Update  
    - 3.3.1 Description  
- **4. Data Requirements** .................................................................  
  - 4.1 Logical Data Model  
  - 4.2 Data Integrity, Retention, and Disposal  
- **5. Quality Attributes** ........................................................................
  - 5.1 Usability Requirements  
  - 5.2 Performance Requirements  
  - 5.3 Security Requirements  
  - 5.4 Safety Requirements  
  - 5.5 Availability Requirements  

---

## 1. **Introduction**

### 1.1 **Purpose**
This SRS describes the functional and non-functional requirements for a real-time scoreboard module. The module is designed for a website to display live updates of the top 10 user scores and provide secure backend services for updating user scores. The document will guide the engineering team in implementing the backend module.

### 1.2 **Document Conventions**
No special typographical conventions are used in this SRS.

---

## 2. **Overall Description**

### 2.1 **Product Perspective**
The Scoreboard Module will replace any manual leaderboard updates by offering automated real-time updates through WebSocket or Server-Sent Events. The backend service will ensure secure and scalable score updates.


![scoreboard drawio](https://github.com/user-attachments/assets/d4ce7dae-6a4e-400a-8859-7d8408577362)


Figure 1. Context diagram of the User Login and Score Update Flow.


### 2.2 **User Classes and Characteristics**
- **User:** Any authenticated individual whose actions can increase their score.  
- **Administrator:** Responsible for monitoring and maintaining system integrity.

### 2.3 **Operating Environment**
- **OE-1:** Supported on cloud-hosted environments using **Linux servers**, **Node.js ExpressJS** frameworks.  
- **OE-2:** **Redis** used for in-memory caching of leaderboard data.

### 2.4 **Design and Implementation Constraints**
- **CO-1:** Real-time performance requirement for live score updates.  
- **CO-2:** Compliance with RESTful API design standards.

### 2.5 **Assumptions and Dependencies**
- Continuous internet connection for real-time updates.  
- Active user authentication and authorization.

---

## 3. **System Features**

### 3.1 **Retrieve Top 10 Scores**

#### 3.1.1 **Description**
- **Endpoint:** `GET /api/scoreboard`  
- **Response:** JSON with top scores.  
- **Constraints:** Response latency ≤ 200ms.

### 3.2 **Update User Score**

#### 3.2.1 **Description**
- **Endpoint:** `POST /api/scoreboard/update`  
- **Security:** JWT-based authentication. Validates score updates against server rules.

### 3.3 **Real-time Updates**

#### 3.3.1 **Description**
- **Technology:** WebSocket or Server-Sent Events (SSE).  
- **Purpose:** Pushes live score updates to all connected clients.

---

## 4. **Data Requirements**

### 4.1 **Logical Data Model**
- **User:** `{ id, username, score }`  
- **Leaderboard:** `{ rank, user_id, score }`

### 4.2 **Data Integrity, Retention, and Disposal**
- All updates to scores are atomic and logged for auditing.  
- Leaderboard is updated in memory (**Redis**) and synced to persistent storage periodically.

---

## 5. **Quality Attributes**

### 5.1 **Usability Requirements**
- Accessible via REST APIs and WebSocket endpoints.

### 5.2 **Performance Requirements**
- Handle up to 10,000 concurrent users.

### 5.3 **Security Requirements**
- **SEC-1:** All network transactions involving sensitive information must be encrypted.  
- **SEC-2:** JWT authentication required for all operations.

### 5.4 **Safety Requirements**
- All endpoints require valid authentication tokens.

### 5.5 **Availability Requirements**
- ≥ 99.9% uptime, with failover mechanisms.

---

## **Contact**
For any technical inquiries, please contact the backend engineering team.

---

**Copyright © 2025 by Bui Duy Hieu**

