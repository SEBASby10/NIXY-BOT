import { getBuffer } from '../../lib/message.js'

export default {
   name: 'owner', // Tu bot usa 'name' para el título principal en el menú
   command: ['owner', 'creador', 'propietario'],
   category: 'utils',
   description: 'Muestra la información del propietario del bot.',
   run: async (client, m, { usedPrefix, command }) => {
      const ownerNumber = '5214452773745'
      const ownerName = '70kkotsu'
      const github = 'https://github.com/SEBASby10'
      const instagram = 'https://www.instagram.com/loga_sebas'
      const ppOwner = 'https://github.com/SEBASby10.png' 

      const caption = `───〔 **OWNER INFO** 〕───

> 👤 **Nombre:** ${ownerName}
> 📱 **WhatsApp:** wa.me/${ownerNumber}
> 🐙 **GitHub:** ${github}
> 📸 **Instagram:** ${instagram}

*Desarrollador de Kaoruko-MD*
────────────────────`

      try {
         const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${ownerName}\nTEL;type=CELL;type=VOICE;waid=${ownerNumber}:+${ownerNumber}\nEND:VCARD`
         
         await client.sendMessage(m.chat, {
            contacts: {
               displayName: ownerName,
               contacts: [{ vcard }]
            }
         }, { quoted: m })

         await client.sendMessage(m.chat, {
            image: { url: ppOwner },
            caption: caption
         }, { quoted: m })

      } catch (e) {
         console.error(e)
         m.reply('❌ Error al mostrar la info del owner.')
      }
   }
}

