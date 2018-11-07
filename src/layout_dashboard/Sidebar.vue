<template>
    <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
    <div class="container-fluid">
      <!-- Toggler -->
      <button @click="collapsee" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Brand -->
      <a class="navbar-brand pt-0">
        <img v-bind:src="ui.logo" class="navbar-brand-img" alt="">
      </a>
      <a id="alit">
        <button @click.prevent="lit" id="lit" class="btn btn-outline-secondary btn-lg btn-block" type="button">
                <span class="btn-inner--icon"><i :class="[bttn ? 'ni ni-bold-left' : 'ni ni-bold-right']"  class=""></i></span>
        </button>
      </a>
      <!-- User -->
      <ul class="nav align-items-center d-md-none">
        <li class="nav-item dropdown">
          <a class="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="ni ni-bell-55"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div class="media align-items-center">
              <span class="avatar avatar-sm rounded-circle">
                <img alt="Image placeholder" src="../assets/img/theme/team-1-800x800.jpg">
              </span>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
            <div class=" dropdown-header noti-title">
              <h6 class="text-overflow m-0">Welcome!</h6>
            </div>
            <a href="../examples/profile.html" class="dropdown-item">
              <i class="ni ni-single-02"></i>
              <span>My profile</span>
            </a>
            <a href="../examples/profile.html" class="dropdown-item">
              <i class="ni ni-settings-gear-65"></i>
              <span>Settings</span>
            </a>
            <a href="../examples/profile.html" class="dropdown-item">
              <i class="ni ni-calendar-grid-58"></i>
              <span>Activity</span>
            </a>
            <a href="../examples/profile.html" class="dropdown-item">
              <i class="ni ni-support-16"></i>
              <span>Support</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#!" class="dropdown-item">
              <i class="ni ni-user-run"></i>
              <span>Logout</span>
            </a>
          </div>
        </li>
      </ul>
      <!-- Collapse -->
      <div v-bind:class="{ show: shows }" class="collapse navbar-collapse" id="sidenav-collapse-main">
        <!-- Collapse header -->
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <a href="">
                <img src="../assets/img/brand/logo-coop.png">
              </a>
            </div>
            <div class="col-6 collapse-close">
              <button @click="closenav" type="button" class="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <!-- Form -->
        <form class="mt-4 mb-3 d-md-none">
          <div class="input-group input-group-rounded input-group-merge">
            <input type="search" class="form-control form-control-rounded form-control-prepended" placeholder="Search" aria-label="Search">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <span class="fa fa-search"></span>
              </div>
            </div>
          </div>
        </form>
        <!-- Navigation -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/">
            <a class="nav-link">
              <i class="ni ni-tv-2 text-primary"></i>{{ sideboard.first }} 
            </a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/probe">
            <a class="nav-link">
              <i class="ni ni-planet text-blue"></i>Wartung
            </a>
            </router-link>
          <li class="nav-item">
            <a class="nav-link" href="../examples/maps.html">
              <i class="ni ni-pin-3 text-orange"></i> Maps
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../examples/profile.html">
              <i class="ni ni-single-02 text-yellow"></i> User profile
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../examples/tables.html">
              <i class="ni ni-bullet-list-67 text-red"></i> Tables
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../examples/login.html">
              <i class="ni ni-key-25 text-info"></i> Login
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../examples/register.html">
              <i class="ni ni-circle-08 text-pink"></i> Register
            </a>
          </li>
        </ul>
        <!-- Divider -->
        <hr class="my-3">
        <!-- Heading -->
        <h6 id="docu" class="navbar-heading text-muted">Documentation</h6>
        <!-- Navigation -->
        <ul class="navbar-nav mb-md-3">
          <li class="nav-item">
            <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html">
              <i class="ni ni-spaceship"></i> Getting started
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/foundation/colors.html">
              <i class="ni ni-palette"></i> Foundation
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/components/alerts.html">
              <i class="ni ni-ui-04"></i> Components
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
:root {
  --margin-width: 60px;
  --display: none;
}
#alit {
  margin-left: -40px;
}
#lit {
  float: right;
  margin-right: -22px;
}
@media (min-width: 768px) {
  .navbar-vertical.navbar-expand-md.fixed-left {
    width: var(--margin-width);
    overflow: hidden;
  }

  #docu {
    display: var(--display);
  }

  .navbar-vertical.navbar-expand-md.fixed-left + .main-content {
    margin-left: var(--margin-width) !important;
  }
}

@media (max-width: 768px) {
  #lit {
    display: none;
  }
}
</style>


<script>
export default {
  data: () => {
    return {
      bttn: false,
      bttn_right: "false",
      shows: "",
      docu: "none",
      navbarlit: false,
      marginleft: "250px",
      widthsidebar: "60px",
      ui: {
        logo: "/img/logo-coop.d5ac4642.png"
      },
      sideboard: {
        first: "Dashboard"
      }
    };
  },
  methods: {
    lit() {
      this.navbarlit = !this.navbarlit;
      if (this.navbarlit == 1) {
        this.marginleft = "250px";
        this.docu = true;
        this.bttn = true;
      } else {
        this.marginleft = "60px";
        this.docu = "none";
        this.bttn = false;
      }
      document.documentElement.style.setProperty(
        "--margin-width",
        this.marginleft
      );
      document.documentElement.style.setProperty("--display", this.docu);
    },
    collapsee() {
      this.shows = "true";
    },
    closenav() {
      this.shows = "";
    }
  }
};
</script>
