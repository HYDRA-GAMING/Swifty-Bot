const { ActivityType } = require("discord.js");

module.exports = (client) => {
  client.pickPresence = async () => {
    const options = [
      {
        type: ActivityType.Listening,
        text: "Swifty Editzz",
        status: "online",
      },
      {
        type: ActivityType.Streaming,
        text: "Discord",
        status: "idle",
      },
      {
        type: ActivityType.Competing,
        text: "Swifty's World",
        status: "dnd",
      },
    ];
    const option = Math.floor(Math.random() * options.length);

    client.user.setPresence({
      activities: [
        {
          name: options[option].text,
          type: options[option].type,
        },
      ],
      status: options[option].status,
    });
  };
};
