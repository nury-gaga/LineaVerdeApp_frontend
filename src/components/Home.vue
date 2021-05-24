<template>
<div class="text-center">
  <div class="mb-4">
    <img src="../assets/maripa.jpg" alt="">
  </div>
<p>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
    Principiante
  </button>
   <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
    Intermedio
  </button>
   <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
   Avanzado
  </button>
   <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
    Equipo
  </button>
</p>
<div class="collapse" id="collapseExample1">
  <div class="card card-body">
    <h5 class="card-title">PRINCIPIANTE</h5>
    Horarios disponibles:
    16-17, 17-18, 18-19 hrs.
    <v-btn text v-bind:to="{ path: '/alumnos/1' }">
    Ver lista de alumnos
    </v-btn>
  </div>
</div>
<div class="collapse" id="collapseExample2">
  <div class="card card-body">
   <h5 class="card-title">INTERMEDIO</h5>
   Horarios disponibles:
    16-17, 18-19, 19-20 hrs.
    <v-btn text v-bind:to="{ path: '/alumnos/2' }">Ver lista de alumnos</v-btn>
  </div>
</div>
<div class="collapse" id="collapseExample3">
  <div class="card card-body">
    <h5 class="card-title">AVANZADO</h5>
    Horarios disponibles:
    16-17, 18-19, 19-20 hrs.
     <v-btn text v-bind:to="{ path: '/alumnos/3' }">Ver lista de alumnos
     </v-btn>
  </div>
</div>
<div class="collapse" id="collapseExample4">
  <div class="card card-body">
    <h5 class="card-title">EQUIPO</h5>
   Horarios disponibles:
    7-8, 20-21:30 hrs.
     <v-btn text v-bind:to="{ path: '/alumnos/4' }">Ver lista de alumnos</v-btn>
  </div>
</div>
</div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
