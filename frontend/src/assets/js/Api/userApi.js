import baseApi from './base';

const user = () => {
}

const login = (data) => baseApi.baseApi({
    method: 'POST',
    url : `http://localhost:8000/login`,
    data: data
})

const register = (data) => baseApi.baseApi({
    method: 'POST',
    url : `http://localhost:8000/processregister`,
    data: data
})
export default{
    user,
    login,
    register
}