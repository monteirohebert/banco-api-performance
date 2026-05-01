import http from 'k6/http'
import { sleep, check } from 'k6'

export const options = {
    // Define the number of iterations for the test
    stages: [
        { duration: '30s', target: 50 }, // Ramp up to 50 users over 30 seconds
        { duration: '1m', target: 50 }, // Stay at 50 users for 1 minute
        { duration: '30s', target: 0 }, // Ramp down to 0 users over 30 seconds
    ],
    thresholds: {
        http_req_duration: ['p(95)<3000', 'max<1000'], // 95% of requests should be below 500ms
        http_req_failed: ['rate<0.01'], // Less than 1% of requests should fail

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