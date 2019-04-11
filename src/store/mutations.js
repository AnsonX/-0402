const user = {
  SET_USER_INFO: (state, data) => {
    state.userInfo = data
  }
}

const project = {
  SET_PROJECT_INFO: (state, data) => {
    state.projectInfo = data
  }
}

const mutations = {
  ...user,
  ...project
}

export default mutations
