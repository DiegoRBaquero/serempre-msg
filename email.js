class EmailChannel {
  constructor(SES) {
    this.ses = SES
  }

  sendMessage (destinatarios, message) {
    console.log("Enviando correo a", destinatarios, "a traves de SES", message)
  }
}

module.exports = EmailChannel
