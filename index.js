const Discord = require("discord.js");
const mongoose = require("mongoose");
const { token } = require("./config.json");
const greeting = require("./helpers/greeting");

require("dotenv").config();

const client = new Discord.Client();
const uri = process.env.ATLAS_URI;
const connection = mongoose.connection;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
connection.once("open", () => {
  console.log("MongoDB connection established.");
});

client.once("ready", () => {
  console.log("Bot ready!");
  client.user.setActivity("~help for help");
});

client.on("message", (message) => {
  if (
    message.content === "~init" &&
    message.channel.type === "text" &&
    message.member.hasPermission("ADMINISTRATOR")
  ) {
    message.channel
      .send(`Initializing bot in ${message.channel} channel`)
      .then((msg) => msg.delete({ timeout: 5000 }))
      .catch((err) => console.log(err));
    greeting(message);
  }
  if(message.content === "~help"){
    message.channel.send("Use ~init to initialize me in a channel.");
  }
});

client.login(token);
