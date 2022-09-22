import { readDB, writeDB } from "../../../../backendLibs/dbLib";
import { v4 as uuidv4 } from "uuid";

export default function roomIdMessageRoute(req, res) {
  if (req.method === "GET") {
    const rooms = readDB();
    const roomId = req.query.roomId;
    const roomIdx = rooms.findIndex((a) => a.roomId === roomId);

    if (roomIdx === -1) {
      return res.status(404).json({
        ok: false,
        message: "Invalid room id",
      });
    } else {
      const messages = rooms[roomIdx].messages;
      return res.json({
        ok: true,
        messages,
      });
    }
  } else if (req.method === "POST") {
    const rooms = readDB();
    const newId = uuidv4();
    //read request body
    const roomId = req.query.roomId;
    const roomIdx = rooms.findIndex((a) => a.roomId === roomId);
    const text = req.body.text;

    if (roomIdx === -1) {
      return res.status(404).json({
        ok: false,
        message: "Invalid room id",
      });
    }

    if (typeof text !== "string") {
      return res.status(400).json({ ok: false, message: "Invalid text input" });
    } else {
      const newtext = {
        messageId: newId,
        text: text,
      };

      writeDB(rooms);

      return res.json({ ok: true, messages: newtext });
    }
  }
}
