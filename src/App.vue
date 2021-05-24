<template>
 <v-app id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand v-bind:to="{ name: 'Home' }">Linea Verde</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto" :key="login" v-if="$identity">

            <b-nav-item right v-bind:to="{ name: 'Anadir' }">
              Añadir alumno
            </b-nav-item>

            <b-nav-item-dropdown right v-if="$identity">
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>{{$identity.name}}</em>
              </template>
              <b-dropdown-item href="#" @click="cerrar()">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
        <b-navbar-nav v-if="!$identity" class="ml-auto">
            <b-nav-item  right v-bind:to="{ name: 'Login' }">
              Iniciar sesión
            </b-nav-item>
            <b-nav-item  right v-bind:to="{ name: 'Register' }">
              Registro
            </b-nav-item>
          </b-navbar-nav>
      </b-navbar>
    </div>
    <!-- END OF NAVBAR -->
    <v-main>
      <v-container fluid>
        <div id="app">
          <router-view />
        </div>
      </v-container>
    </v-main>
    <v-footer color="indigo" app>
      <span class="white-text">&copy; 2020-2021</span>
    </v-footer>
  </v-app>
</template>

<script>
import bus from './bus'
export default {
  data: () => ({
    drawer: null,
    login: 0
  }),
  updated () {
    this.usuarioId()
  },
  beforeMount () {
    this.usuarioId()
  },
  mounted () {
    this.listenToEvents()
  },
  methods: {
    async usuarioId () {
      this.$identity = JSON.parse(localStorage.getItem('identity'))
    },
    cerrar () {
      this.login = this.login === 0 ? 1 : 0
      localStorage.removeItem('identity')
      localStorage.removeItem('token')
      this.$identity = null
      if (this.$route.path !== '/') {
        this.$router.push({
          name: 'Home'
        })
      }
    },
    listenToEvents () {
      bus.$on('refreshUser', () => {
        this.usuarioId()
      })
    }
  }
}

</script>
