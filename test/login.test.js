import http from 'k6/http'
import { sleep, check } from 'k6'

export const options = {
  // Define the number of iterations for the test
    iterations: 3,
    thresholds: {
        http_req_duration: ['p(95)<500', 'max<500'], // 95% of requests should be below 500ms

    },
};

export default function () {
  //login
    const url = 'http://localhost:3000/login'

    const payload = JSON.stringify({    
        username: "julio.lima",
        senha: "123456",
    })

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const res = http.post(url, payload, params)
    
    check(res, {
        'validar o status é 200': (r) => r.status === 200,
        'Validar que o token é string': (r) => typeof r.json().token == 'string',
    })

    sleep(1)
}