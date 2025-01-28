const EmailChannel = require('./email')
const PushChannel = require('./push')
const SMSChannel = require('./sms')

class MessagingSystem {
  constructor() {
    this.channels = {
      email:  new EmailChannel(),
      push:  new PushChannel(),
      sms: new SMSChannel(),
    }
  }

  sendMessage(channel, destinatarios, message) {
    if (!this.channels[channel]) {
      return console.error('Channel',channel,'does not exist')
    }
    this.channels[channel].sendMessage(destinatarios, message);
  }
}

const messagingSystem = new MessagingSystem()

messagingSystem.sendMessage('email', 'diego@diego.com', 'Hola Diego');
messagingSystem.sendMessage('push', '3504897911', 'Hola Diego');
messagingSystem.sendMessage('sms', '3504897911', 'Hola Diego');
messagingSystem.sendMessage('whatsapp', '3504897911', 'Hola Diego');
