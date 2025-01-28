class SMSChannel {
  constructor(SDK) {
    this.sdk = SDK
  }

  sendMessage (destinatarios, message) {
    console.log("Enviando sms a traves de Twilio", message)
  }
}

module.exports = SMSChannel
