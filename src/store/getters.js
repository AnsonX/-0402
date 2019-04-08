const user = {
  getUserInfo (state, getters) {
    return state.userInfo
  }
}

const project = {
  getProjectInfo (state, getters) {
    return state.projectInfo
  }
}

export default {
  ...user,
  ...project
}
