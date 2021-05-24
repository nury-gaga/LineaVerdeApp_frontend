<template>
    <div>
    <form>
  <div class="form-group w-25">
    <label for="exampleInputEmail1">Ingrese su Email</label>
    <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group w-25">
    <label for="exampleInputPassword1">Contraseña</label>
    <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
  </div>
  <button @click="submit()" type="button" class="btn btn-primary">Entrar</button>
</form>
    </div>
</template>

<script>
import axios from 'axios'
import bus from '../bus'

export default {
  data: () => ({
    valid: true,
    email: '',
    password: ''
  }),
  methods: {
    submit () {
      var login = {
        email: this.email,
        password: this.password
      }
      return axios.post('http://localhost:3000/api/login', login).then((res) => {
        if (res && res.data.user) {
          console.log('si entra')
          localStorage.setItem('identity', JSON.stringify(res.data.user))
          this.getToken()
          bus.$emit('refreshUser')
        }
        this.$router.push({
          name: 'Home'
        })
      }).catch(err => {
        console.log(err)
      })
    },
    getToken () {
      var login = {
        email: this.email,
        password: this.password,
        gettoken: true
      }
      axios.post('http://localhost:3000/api/login', login).then((res) => {
        if (res && res.data.token) {
          console.log('si entra')
          localStorage.setItem('token', JSON.stringify(res.data.token))
        }
      })
    }
  }
}
</script>
