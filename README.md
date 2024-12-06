
# Country Info Application

This project is a full-stack web application that provides information about countries, built with:
- **Backend**: Node.js (Express).
- **Frontend**: React.

## Features
- **Country List Page**: Displays all available countries.
- **Country Info Page**: Shows country details, including flag, borders, and population chart.

---

## Setup Instructions

### Prerequisites
- Node.js (16+ recommended)
- npm or yarn

---

### Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
   Backend runs at `http://localhost:3002`.

---

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm start
   ```
   Frontend runs at `http://localhost:3000`.

---

### Testing
- Open `http://localhost:3000` for the frontend.
- Test backend endpoints:
  - `GET http://localhost:3002/countries`
  - `GET http://localhost:3002/country/:code`

---

### Environment Variables
#### Backend:
Create `.env` in `backend/`:
```env
PORT=3002
```
#### Frontend:
Create `.env` in `frontend/`:
```env
REACT_APP_BACKEND_URL=http://localhost:3002
```

---

### Project Structure
```
root/
├── backend/        # Backend (Node.js)
├── frontend/       # Frontend (React)
└── README.md       # Instructions
```

---

### Deployment
- **Backend**: Use Heroku, AWS, or Railway.
- **Frontend**: Use Vercel or Netlify.

---

### License
MIT License. See `LICENSE` for details.
