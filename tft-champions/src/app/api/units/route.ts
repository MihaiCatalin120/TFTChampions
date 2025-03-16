import db from "@/app/api/database";
// Handler for GET requests to retrieve all units
export async function GET(req: Request, res: Response) {
  return new Promise((resolve, reject) => {
    // Query to get all units from the "units" table
    db.all("SELECT * FROM units", [], (err, rows) => {
      if (err) {
        console.error("Error fetching units:", err.message);
        reject(new Response("Internal Server Error", { status: 500 }));
      } else {
        // Return the units as a JSON response with a 200 status code
        resolve(new Response(JSON.stringify(rows), {
          headers: { "content-type": "application/json" },
          status: 200,
        }));
      }
    });
  });
}
