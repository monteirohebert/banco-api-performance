const config = JSON.parse(open('../config/config.json'));

export function retornarUrlBase() {
  return __ENV.BASE_URL || config.baseUrl;
}