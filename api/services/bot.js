var TelegramBot = require('node-telegram-bot-api');
var token = '241291801:AAE1e09BpMNQogZF6xeqYiKV_oyTjV-11sk';

var bot = new TelegramBot(
    token, {
        polling:true
    });

bot.getMe().then(function (me) {
    console.log('Hi, my name is %s!', me.username);
});

 bot.onText(/^\/soy (.+)$/, function(msg, match) {
 	var fromId = msg.from.id;
 	var resp = match[1];
 	console.log(msg);
 	bot.sendMessage(fromId, "Hola " + msg.from.first_name);
 });