let chatrooms = [
  {
    roomId: "bff04e07-3c50-410a-877d-8bc908fbae98",
    roomName: "261207 General",
    messages: [
      {
        messageId: "e1480e86-8fdd-4a9d-83fb-69e34e9848f2",
        text: "สวัสดีค้าบ",
      },
      { messageId: "b10afeea-9814-4e9b-b7a5-e9e6d1606d3b", text: "อิอิ" },
    ],
  },
  {
    roomId: "c3023eee-1112-411b-81d3-79c5ba78c517",
    roomName: "ศาลาคนเศร้า",
    messages: [
      {
        messageId: "87740661-e20e-4159-b6b2-e48dc8165097",
        text: "ร้านไหนดีเพื่อน",
      },
    ],
  },
];

export function readDB() {
  //read in-memory DB

  return chatrooms;
}

export function writeDB(_chatrooms) {
  //write in-memory DB
  chatrooms = _chatrooms;
}
