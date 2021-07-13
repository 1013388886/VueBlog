import { JSEncrypt } from "jsencrypt";

let key = `-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKoKHkvHNKSfCJPannsMnoMotpz0DSj1
hAUjI+yhEvUFlYiLGiUsbg4p49G6ekwmI3s7b/JtuYBE6gMBZTL9woUCAwEAAQ==
-----END PUBLIC KEY-----`


function Encrypt(val) {
    let encrypt = new JSEncrypt()
    encrypt.setPublicKey(key)
    let encryptKey = encrypt.encrypt(val)
    return encryptKey
}
export default Encrypt
