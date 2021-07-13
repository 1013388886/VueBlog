import service from './axios.js'
import api from '@/config/apiList.js'
import until from '@/until/jsencrypt.js'
import store from 'store'
import baseConfig from '@/config/baseConfig.js'
const { TOKEN_NAME } = baseConfig
export default async function http(type, data) {
    let { url, method, setToken = false, rsaKey = false } = api[type]
    try {
        if (rsaKey) {
            if (data.password) {
                data.password = until(data.password)
            }

        }
        data = { params: data }
        let result = await service[method](url, data)
        if (setToken) {
            store.set(TOKEN_NAME,  result.token)
        }
        return result
    } catch (error) {
        console.log(error)
    }


}