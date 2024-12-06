import { NextApiRequest, NextApiResponse } from "next";

const subscribers: { email: string; pushToken?: string }[] = []; // Bu yerda email va pushTokenlarni saqlaymiz (Prod uchun DB foydalaning)

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, pushToken } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email required" });
    }

    // Email va pushTokenni saqlash
    subscribers.push({ email, pushToken });
    return res.status(200).json({ message: "Subscribed successfully" });
  }

  res.status(405).json({ error: "Method not allowed" });
}
