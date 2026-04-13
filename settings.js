import fs from 'fs';
import { watchFile, unwatchFile } from 'fs'
import { fileURLToPath } from 'url'

global.owner = ['50765836410', '5214452773745']
global.botNumber = ''

global.sessionName = 'Sessions/Owner'
global.version = '^1.0 - Latest'
global.dev = "© ⍴᥆ᥕᥱrᥱძ ᑲᥡ 𝓚𝓪𝓸𝓻𝓾𝓴𝓸"
global.links = {
api: 'https://api.stellarwa.xyz',
canal: "https://whatsapp.com/channel/0029VbCSLsD2UPBQRYi7682K",
github: "https://github.com/SEBASby10/Kaoruko-MD",
gmail: "lopezgarciasebs12@gmail.com"
}
global.my = {
ch: '120363426781015568@newsletter',
name: '𝓚𝓪𝓸𝓻𝓾𝓴𝓸-𝓜𝓓'
}

global.mess = {
socket: '《✧》 Este comando solo puede ser ejecutado por un Socket.',
admin: '《✧》 Este comando solo puede ser ejecutado por los Administradores del Grupo.',
botAdmin: '《✧》 Este comando solo puede ser ejecutado si el Socket es Administrador del Grupo.'
}

global.APIs = {
axi: { url: "https://apiaxi.i11.eu", key: null },
vreden: { url: "https://api.vreden.web.id", key: null },
nekolabs: { url: "https://api.nekolabs.web.id", key: null },
siputzx: { url: "https://api.siputzx.my.id", key: null },
delirius: { url: "https://api.delirius.store", key: null },
ootaizumi: { url: "https://api.ootaizumi.web.id", key: null },
stellar: { url: "https://api.stellarwa.xyz", key: "YukiWaBot" },
apifaa: { url: "https://api-faa.my.id", key: null },
xyro: { url: "https://api.xyro.site", key: null },
yupra: { url: "https://api.yupra.my.id", key: null }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  import(`${file}?update=${Date.now()}`)
})
