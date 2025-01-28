class PushChannel {
  constructor(SDK) {
    this.sdk = SDK
  }

  sendMessage (destinatarios, message) {
    console.log("Enviando push a traves de pushover", message)
  }
}

module.exports = PushChannel
