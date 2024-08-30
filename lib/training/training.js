import db from "../database/db";

export function getTrainings() {
  const stmt = db.prepare("SELECT * FROM trainings");
  return stmt.all();
}
