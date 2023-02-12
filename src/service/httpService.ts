import axios, { AxiosRequestConfig } from 'axios'

export default {
    createInstance() {
        return axios.create()
    },
    post(url: string, body?: any, config?: AxiosRequestConfig) {
        const axiosInstance = this.createInstance()
        return axiosInstance.post(url, body, config)
    },

    get(url: string, requestParams?: any, config?: AxiosRequestConfig) {
        const axiosInstance = this.createInstance()
        let urlSearchParams = new URLSearchParams(requestParams)

        return axiosInstance.get(`${url}?${urlSearchParams}`, config)
    }
}