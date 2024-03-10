export default async function handler(req, res) {
    // Handle GET requests
    if (req.method === "GET") {
      res.status(200).json({ text: "Hello from Next.js 14 API!" });
    } else {
      // Handle other methods (optional)
      res.status(405).end(); // Method Not Allowed
    }
  }