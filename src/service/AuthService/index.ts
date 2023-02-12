import HttpService from '../httpService';

const CONFIG = {
    headers: { 'content-type': 'application/json' }
}
export default {
    async login(payload: { email: string, password: string }) {
        return await HttpService.post("http://localhost:3000/api/login", payload, CONFIG)
    }
}