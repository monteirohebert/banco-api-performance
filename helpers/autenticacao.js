import http from 'k6/http'
import {retornarUrlBase} from '../utils/variaveis.js'

const postLogin = JSON.parse(open('../fixtures/postLogin.json'))

export function obterToken() {
    //login
    const url = retornarUrlBase() + '/login'

    const payload = JSON.stringify(postLogin)

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const res = http.post(url, payload, params)

    return res.json('token')
        
}