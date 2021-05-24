<template>
<div>
<div v-if="alumnos.length == 0">
    <h1>No hay alumnos inscritos</h1>
</div>
 <v-card
    v-for="alumno in alumnos"
    :key="alumno._id"
    class="mx-auto"
    max-width="444"
  >
    <v-card-text>
      <h5 v-if="alumno.level == 1" class="card-title">PRINCIPIANTE</h5>
      <h5 v-if="alumno.level == 2" class="card-title">INTERMEDIO</h5>
      <h5 v-if="alumno.level == 3" class="card-title">AVANZADO</h5>
      <h5 v-if="alumno.level == 4" class="card-title">EQUIPO</h5>
      <p class="display-1 text--primary">
       {{alumno.name}}
      </p>
      <p>{{alumno.schedule}}</p>
      <p>{{alumno.age}}</p>
      <p>{{alumno.genre}}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="editAlu(alumno._id)"
        v-if="$identity"
      >
       Editar
      </v-btn>
      <v-btn
        text
        color="teal accent-4"
        @click="borrarAlumno(alumno._id)"
        v-if="$identity"
      >
       Eliminar
      </v-btn>
    </v-card-actions>
  </v-card>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    reveal: false,
    alumnos: []
  }),
  mounted () {
    this.getAlus()
  },
  beforeMount () {
    this.getAlus()
    this.usuarioId()
  },
  methods: {
    getAlus () {
      console.log('si entró')
      var nivel = {
        level: this.$route.params.level
      }
      return axios.post('http://localhost:3000/api/listaalu', nivel).then(respuesta => {
        console.log(respuesta)
        this.alumnos = respuesta.data.alumno
      }).catch(error => {
        console.log(error)
      })
    },
    borrarAlumno (id) {
      return axios.delete('http://localhost:3000/api/deletealu/' + id, {headers: {Authorization: this.token}}).then(respuesta => {
        if (respuesta) {
          this.$swal('¡Grandioso!', '¡Alumno borrado con éxito!', 'success')
          this.getAlus()
        }
      }).catch(error => {
        console.log(error)
      })
    },
    editAlu (id) {
      this.$router.push({path: '/anadir/' + id})
    },
    validate () {
      this.$refs.form.validate()
    },
    async usuarioId () {
      this.$identity = JSON.parse(localStorage.getItem('identity'))
      this.token = JSON.parse(localStorage.getItem('token'))
    }
  }
}
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
