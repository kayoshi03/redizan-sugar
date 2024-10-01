import axios, {CreateAxiosDefaults} from "axios";

const options:CreateAxiosDefaults =  {
    baseURL: "https://back.saharvata74.ru",
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: false
}

const query = axios.create(options)

const queryAuth = axios.create(options)




export { query, queryAuth }