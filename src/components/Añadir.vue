<template>
<div>
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
      v-model="edad"
      :rules="edadRules"
      label="Edad"
      required
    ></v-text-field>

    <v-select
      v-model="selectSex"
      :items="itemsS"
      :rules="[v => !!v || 'Item is required']"
      label="Sexo"
      required
    ></v-select>

    <v-select
      v-model="selectLevel"
      :items="itemsL"
      :rules="[v => !!v || 'Item is required']"
      label="Nivel"
      required
    ></v-select>

    <v-select
      v-model="selectHour"
      :items="itemsH"
      :rules="[v => !!v || 'Item is required']"
      label="Horario"
      required
    ></v-select>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="agregar()"
      v-if="!idAlu"
    >
      Guardar
    </v-btn>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="editar()"
      v-if="idAlu"
    >
     Actualizar
    </v-btn>
  </v-form>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    valid: true,
    token: '',
    name: '',
    idAlu: '',
    alumno: [],
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    edad: '',
    edadRules: [
      v => !!v || 'Edad is required'
    ],
    selectSex: null,
    itemsS: [
      'Masculino',
      'Femenino'
    ],
    selectLevel: null,
    itemsL: [
      '1',
      '2',
      '3',
      '4'
    ],
    selectHour: null,
    itemsH: [
      '16-17 hrs',
      '17-18 hrs',
      '18-19 hrs',
      '19-20 hrs',
      '20-21:30 hrs'
    ]
  }),
  beforeMount () {
    this.usuarioId()
    this.checkParams()
  },
  methods: {
    async usuarioId () {
      this.$identity = JSON.parse(localStorage.getItem('identity'))
      this.token = JSON.parse(localStorage.getItem('token'))
      if (!this.$identity) {
        this.$router.push({
          name: 'Home'
        })
      }
    },
    validate () {
      this.$refs.form.validate()
    },
    agregar () {
      if (this.$refs.form.validate()) {
        var alumno = {
          name: this.name,
          age: this.edad,
          genre: this.selectSex,
          level: this.selectLevel,
          schedule: this.selectHour
        }
        return axios.post('http://localhost:3000/api/addalu', alumno, {headers: {Authorization: this.token}}).then(respuesta => {
          this.$swal('¡Grandioso!', '¡Alumno añadido con éxito!', 'success')
          this.$router.push({
            name: 'Home'
          })
          console.log(respuesta)
        }).catch(error => {
          console.log(error)
        })
      }
    },
    async verAlu () {
      return axios.get('http://localhost:3000/api/getalu/' + this.idAlu).then(respuesta => {
        this.alumno = respuesta.data.alumno[0]
        this.name = this.alumno.name
        this.edad = this.alumno.age
        this.selectSex = this.alumno.genre
        this.selectLevel = this.alumno.level.toString()
        this.selectHour = this.alumno.schedule
      })
    },
    checkParams () {
      this.idAlu = this.$route.params.id
      if (this.idAlu) {
        this.verAlu()
      }
    },
    editar () {
      var alumno = {
        id: this.idAlu,
        name: this.name,
        age: this.edad,
        genre: this.selectSex,
        level: this.selectLevel,
        schedule: this.selectHour
      }
      console.log(this.token)
      return axios.post('http://localhost:3000/api/editalu', alumno, {headers: {Authorization: this.token}}).then(respuesta => {
        this.$swal('¡Grandioso!', '¡Alumno editado con éxito!', 'success')
        this.$router.push({
          path: '/alumnos/' + alumno.level
        })
        console.log(respuesta)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
