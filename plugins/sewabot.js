let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌〔 List Berlangganan 〕
├ Permanent
├ 1 Bulan
├ 1 Minggu
├ Trial 3 Hari
└────
Silahkan klik pada "List Harga" untuk melihat list.

Pembayaran:
Pulsa : 083112831554
GoPay: 083866366437
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: 'Permanent', description: "Rp5.000\nSewa bot tanpa batasan waktu.", rowId:".masuk"},
        {title: '1 Bulan', description: "Rp3.000\nSewa bot selama 1 bulan.", rowId:".masuk"},
        {title: '1 Minggu', description: "Rp1.000\nSewa bot selama 1 minggu.", rowId:".masuk"},
        {title: 'Trial', description: "GRATIS\nBot gratis 3 Hari.", rowId:".join"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".snk"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//R-Txzy
