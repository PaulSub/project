var TelegramBot = require('node-telegram-bot-api');
var fs = require('fs');
const osmosis = require('osmosis');
var token = '447746908:AAFOv0sCAjOo8PwSBrvf8vdkGOnssFgkzd0';
var bot = new TelegramBot(token, {polling: true});

var notes = [];

var options = {
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [{ text: '/напомни %заметка% в hh:mm', callback_data: '/напомни' }],
          [{ text: '/заметки', callback_data: '/заметки' }],
          [{ text: '/удалить', callback_data: '/удалить' }],
          [{ text: '/курс', callback_data: '/курс' }],
        ]
      })
    };

bot.onText(/\/напомни (.+) в (.+)/, function (msg, match) {
      var userId = msg.from.id;
      var text = match[1];
      var time = match[2];
    
      notes.push( { 'uid':userId, 'time':time, 'text':text } );
      
      bot.sendMessage(userId, 'Отлично! Жди, я за тобой приду');
      console.log(userId, text, time);
    });

bot.onText(/\/курс/, function (msg, match) {
  var userId = msg.from.id;
  osmosis
    .get('www.yandex.ru')
    .find('.inline-stocks')
    .set({
      'kurs': 'span .inline-stocks__value_inner'
    })
    .data(function(data) {
      // console.log('Курс $: ' + data.kurs);
      bot.sendMessage(userId, 'Курс доллара: ' + data.kurs + ' рублей');
   });
});


bot.onText(/\/заметки/, function (msg, match) {
  var userId = msg.from.id;

  console.log(userId);

  if (notes.length == 0) {
        bot.sendMessage(userId, 'У вас нет заметок');
  }
for (var i = 0; i < notes.length; i++){
    bot.sendMessage(userId, 'Вы должны "' + notes[i]['text'] + ' в ' + notes[i]['time'] + "\" ");
}
  
});

bot.onText(/\/удалить/, function (msg, match) {
        var userId = msg.from.id;
  for (var i = 0; i < notes.length; i++){    
    notes.splice(i,1);

  };
  bot.sendMessage(userId, 'Записи удалены');
});


bot.onText(/\/хелп/, function (msg, match) {
    bot.sendMessage(msg.chat.id, 'Список команд:', options);
});

setInterval(function(){
        for (var i = 0; i < notes.length; i++){
            var curDate = new Date().getHours() + ':' + new Date().getMinutes();
                if ( notes[i]['time'] == curDate ) {
                    bot.sendMessage(notes[i]['uid'], 'Напоминаю, что вы должны: '+ notes[i]['text'] + ' сейчас.');
                    notes.splice(i,1);
                }
            }
    },1000);
