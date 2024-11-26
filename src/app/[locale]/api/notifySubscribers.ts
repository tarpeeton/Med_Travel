import { NextApiRequest, NextApiResponse } from "next";

const subscribers: { email: string; pushToken?: string }[] = []; // Shu faylda bo'lgan subscribers massiviga murojaat qilamiz
const ONE_SIGNAL_REST_API_KEY = "YOUR_ONESIGNAL_REST_API_KEY"; // OneSignal REST API kalitini kiriting
const ONE_SIGNAL_APP_ID = "YOUR_ONESIGNAL_APP_ID"; // OneSignal App ID

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { title, message, url } = req.body;

    // Push xabarni yuborish
    try {
      await fetch("https://onesignal.com/api/v1/notifications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${ONE_SIGNAL_REST_API_KEY}`,
        },
        body: JSON.stringify({
          app_id: ONE_SIGNAL_APP_ID,
          headings: { en: title },
          contents: { en: message },
          url: url, // Blog post link
          included_segments: ["Subscribed Users"], // OneSignal obunachilari uchun
        }),
      });

      // Obunachilarga email yuborish (Prod uchun Email servisini qo'llang)
      subscribers.forEach((subscriber) => {
        if (subscriber.email) {
          console.log(`Email sent to ${subscriber.email} about new blog.`);
        }
      });

      res.status(200).json({ message: "Notifications sent successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to send notifications" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
