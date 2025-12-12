import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.NEON_CONNECTION);

export async function GET() {
  try {
    const result = await sql`SELECT * FROM moods ORDER BY time DESC LIMIT 50;`;
    return Response.json(result);
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Failed to fetch moods" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { mood, note, user_id } = body;

    const result = await sql`
      INSERT INTO moods (mood, note, user_id)
      VALUES (${mood}, ${note || null}, ${user_id || null})
      RETURNING *;
    `;

    return Response.json(result[0]);
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Failed to save mood" }, { status: 500 });
  }
}
