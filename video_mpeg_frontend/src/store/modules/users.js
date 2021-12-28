export default {
  namespaced: true,
  state: {
    user: {

    }
  },
  getters: {
    user (state) {
      return state.user
    }
  },
  mutations: {
    user (state, user) {
      state.comment = user
    }
  },
  actions: {
    async login (context, payload) {
      try {
        const response = await this.$axios.post('/login', {
          username: payload.uname,
          password: payload.upassword
        })
        if (response.status === 200) {
          if (response.data.two_factor != null) {
            console.log('login' + response.data.two_factor)
          }
        } else {
        }
      } catch (error) {
        if (error.response) {
          if (error.response.data.errors.email[0]) {
            return error.response.data.errors.email[0]
          }
        }
      }
    },

    async loadProfileAvatar () {
      try {
        const response = await this.$axios.get('/user-profile')
        return response.data.avatar.user_avatar_name
      } catch (error) {
        if (error.response) {
        }
      }
    },

    async uploadProfileAvatar (context, payload) {
      try {
        const avatar = payload.avatar
        let data = new FormData()
        data.append('file', avatar)
        const response = await this.$axios.post('/avatar', data)
        return response.data
      } catch (error) {
      }
    },

    async getCurrentUserId () {
      try {
        const response = await this.$axios.get('/users')
        return response.data
      } catch (error) {
      }
    },

    async register (context, payload) {
      try {
        console.log(payload.name + ' ' + payload.email + ' ' + payload.password + ' ' + payload.password_confirmation)
        const response = await this.$axios
          .post('/register', {
            name: payload.username,
            email: payload.email,
            password: payload.password,
            password_confirmation: payload.password_confirmation
          }, {
            crossDomain: true,
            baseURL: 'http://www.mpegvideoback.com',
            Headers: {
              'Access-Control-Allow-Origin': 'http://www.mpegvideofront.com',
              'Access-Control-Allow-Methods': {
                GET: 'GET',
                POST: 'POST',
                PUT: 'PUT',
                DELETE: 'DELETE',
                OPTIONS: 'OPTIONS'
              }
            }
          })
        console.log(response.data)
      } catch (error) {
      }
    },

    async logout () {
      try {
        const response = await this.$axios
          .post('logout')
        if (response.status === 302 || 401) {
          console.log('logout')
        }
      } catch (error) {
      }
    }
  }
}
