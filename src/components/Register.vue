<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field type="password"
      v-model="password"
      :counter="10"
      :rules="pwRules"
      label="Password"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Sexo is required']"
      label="Sexo"
      required
    ></v-select>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="registrar()"
    >
     Añadir
    </v-btn>
  </v-form>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    valid2: true,
    password: '',
    pwRules: [
      v => !!v || 'Password is required',
      v => (v && v.length <= 10) || 'Password must be less than 10 characters'
    ],
    select: null,
    items: [
      'Masculino',
      'Femenino'
    ]
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    registrar () {
      if (this.$refs.form.validate()) {
        var registrar = {
          name: this.name,
          email: this.email,
          password: this.password,
          select: this.genre
        }
        return axios.post('http://localhost:3000/api/addusuario', registrar).then(respuesta => {
          this.$swal('¡Grandioso!', '¡Administrador añadido con éxito!', 'success')
          this.$router.push({
            name: 'Home'
          })
          console.log(respuesta)
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
}
</script>
