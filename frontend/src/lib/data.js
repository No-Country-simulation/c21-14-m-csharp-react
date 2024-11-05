import axios from 'axios'
import Cookies from 'js-cookie'

const apiClient = axios.create({
  baseURL: 'https://brickly-backend.onrender.com/api/v1',
  headers: {
    Authorization: `Bearer ${Cookies.get('auth')}`,
  },
})

const handleResponse = async promise => {
  try {
    const response = await promise
    return response.data
  } catch (err) {
    console.log(err.response?.data || err)
  }
}

export const loginUser = async form => {
  handleResponse(apiClient.post('/auth/login', form))
}

export const getRecentlyActivity = () =>
  handleResponse(apiClient.get('/investments/recently'))

export const getPropertiesCount = () =>
  handleResponse(apiClient.get('/properties/counts'))

export const getTotalInvestments = () =>
  handleResponse(apiClient.get('/investments/stats'))

export const getPropertyInfo = id =>
  handleResponse(apiClient.get(`/properties/${id}`))

export const getUsers = () => handleResponse(apiClient.get('/users'))

export const getMyInvestments = () =>
  handleResponse(apiClient.get('/investments/me'))

export const addInvestment = (propertyId, amount) =>
  handleResponse(apiClient.post('/investments/' + propertyId, { amount }))

export const getProfile = () => handleResponse(apiClient.get('/auth/profile'))
