import { Database } from "sqlite3";

// Initialize a variable to hold the SQLite database connection
const db = new Database("./src/app/api/database.db", (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to the database.");
  }
});

export default db;