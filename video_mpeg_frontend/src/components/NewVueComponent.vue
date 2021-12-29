<template>
<div>
  Hello from NewVueComponent
  <button type="button" @click="checkServerResponse">Click me, please</button>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'NewVueComponent',
  methods: {
    async checkServerResponse () {
      // const xmlHttp = new XMLHttpRequest()
      // xmlHttp.open('GET', '/', true) // false for synchronous request
      // xmlHttp.send(null)
      // return xmlHttp.responseText
      try {
        // let bURL = 'google.com'
        // const res = await axios({ method: 'get', url: '/' /* , baseURL: 'www.mpegvideoback.com' */ })
        const res = await axios.post('/login', {}, {
          crossDomain: true,
          baseURL: 'http://www.mpegvideoback.com',
          Headers: {
            'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Origin': 'http://localhost:8080',
            'Access-Control-Allow-Methods': {
              GET: 'GET',
              POST: 'POST',
              PUT: 'PUT',
              DELETE: 'DELETE',
              OPTIONS: 'OPTIONS'
            },
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
          }
        })
        // console.log(res.data)
        console.log(res)
      } catch (error) {

      }
    }
  }
}

</script>

<style scoped>

</style>
