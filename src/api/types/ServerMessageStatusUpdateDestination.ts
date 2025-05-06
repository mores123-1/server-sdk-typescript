{
  "type": "function",
  "function": {
    "name": "bookCalendarN8N",
    "async": false,
    "description": "use this function to book an appointment into the calendar.",
    "parameters": {
      "type": "object",
      "properties": {
        "name": {
          "description": "the name of the caller",
          "type": "string"
        },
        "reason": {
          "description": "the reason for the call or booking",
          "type": "string"
        },
        "requestedTime": {
          "description": "the requested booking time of the user in this format: 2025-02-13T11:00:00",
          "type": "string"
        }
      },
      "required": [
        "requestedTime",
        "name"
      ]
    }
  },
  "server": {
    "url": "<https://aboode.app.n8n.cloud/webhook-test/b3d19683-0f3f-4a61-bb08-3a058fb5b0ab>",
    "timeoutSeconds": 30
  },
  "async": false
}
