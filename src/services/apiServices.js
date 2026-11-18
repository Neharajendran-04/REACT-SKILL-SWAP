import axiosService from "../api/axiosServices";


// register a new user
export const setUserApi = async(newUser) => {
  return await axiosService('POST', '/users', newUser)
}

// check existing user
export const getUserApi = async(userEmail) => {
  return await axiosService('GET', `/users?email=${userEmail}`)
}

// login user
export const loginApi = async(email) => {
  return await axiosService('GET', `/users?email=${email}`)
}

//fetch user by id
export const getUserByIdApi = async(userId) => {
  return await axiosService('GET', `/users/${userId}`)
}
