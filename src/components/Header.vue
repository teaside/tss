<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">CRM</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <template v-if="currentUser">
            <li class="dropdown nav-item" @click="isDropdownUser = !isDropdownUser">
              <a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown">User</a>
              <div id="w1" class="dropdown-menu" :class="{show: isDropdownUser}">
                <router-link to="/user/index" class="dropdown-item">List</router-link>
                <router-link to="/user/roles" class="dropdown-item">Roles</router-link>
              </div>
            </li>
            <li class="dropdown nav-item" @click="isDropdownOther = !isDropdownOther">
              <a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown">Other</a>
              <div id="w2" class="dropdown-menu" :class="{show: isDropdownOther}">
                <router-link to="/patient/index" class="dropdown-item">List</router-link>
                <router-link to="/patient/create" class="dropdown-item">Create Form Builder</router-link>
                <router-link to="/patient/Templates" class="dropdown-item">Templates</router-link>
                <router-link to="/patient/Manipulations" class="dropdown-item">Manipulations</router-link>
                <router-link to="/patient/output" class="dropdown-item">Output</router-link>
                <router-link to="/patient/createform" class="dropdown-item">Create Form</router-link>
              </div>
            </li>
            <li class="dropdown nav-item" @click="isDropdownDoctors = !isDropdownDoctors">
              <a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown">Doctors</a>
              <div id="w3" class="dropdown-menu" :class="{show: isDropdownDoctors}">
                <router-link to="/doctors/schedule" class="dropdown-item">Schedules List</router-link>
                <router-link to="/doctors/schedule/crud" class="dropdown-item">Schedules Crud</router-link>
              </div>
            </li>
            <li class="dropdown nav-item" @click="isDropdownSettings = !isDropdownSettings">
              <a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown">Settings</a>
              <div id="w4" class="dropdown-menu" :class="{show: isDropdownSettings}">
                <!--<router-link to="/settings/tooth-canals" class="dropdown-item">Tooth canals</router-link>-->
                <router-link to="/settings/patient" class="dropdown-item">Patient</router-link>
                <router-link to="/settings/diagnosis" class="dropdown-item">Diseases list</router-link>
                <router-link to="/settings/manipulations" class="dropdown-item">Manipulations list</router-link>
                <router-link to="/settings/currencies" class="dropdown-item">Currencies List</router-link>
                <router-link to="/settings/units" class="dropdown-item">Units List</router-link>
                <router-link to="/settings/reagents" class="dropdown-item">Reagents List</router-link>
              </div>
            </li>
            <li>
              <a href="#!" class="nav-link" v-on:click.prevent="logout">Logout</a>
            </li>
            <li class="dropdown nav-item" @click="isDropdownPatientCard = !isDropdownPatientCard">
              <a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown">Patient card</a>
              <div id="w5" class="dropdown-menu" :class="{show: isDropdownPatientCard}">
                <router-link to="/diagnoses" class="nav-link">Diagnoses</router-link>
                <router-link to="/tooth-card" class="nav-link">Tooth card</router-link>
                <router-link to="/diagnoses-assignment" class="nav-link">Diagnoses assignment</router-link>
                <router-link to="/family-list" class="nav-link">Family List</router-link>
                <router-link to="/patients/list" class="nav-link">Patients List</router-link>
                <router-link to="/history-diagnoses" class="nav-link">History diagnoses</router-link>
              </div>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <a class="nav-link" href="#">Static Page 1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Static Page 2</a>
            </li>
            <li class="nav-item dropdown" @click="isDropdownLogin = !isDropdownLogin">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                Login
              </a>
              <div class="dropdown-menu" :class="{show: isDropdownLogin}" aria-labelledby="navbarDropdown">
                <router-link to="/login" class="dropdown-item">Log In</router-link>
                <router-link to="/singin" class="dropdown-item">Sing In</router-link>
              </div>
            </li>
          </template>
          <li class="nav-item dropdown" @click="isDropdownLanguage = !isDropdownLanguage">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
              Language
            </a>
            <div class="dropdown-menu" :class="{show: isDropdownLanguage}" aria-labelledby="navbarDropdown">
              <a href="#" @click="setLocale('en')">English</a>
              <a href="#" @click="setLocale('ru')">Russian</a>
            </div>
          </li>
          <li class="dropdown nav-item" @click="isDropdownPatient = !isDropdownPatient">
            <a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown">Patients</a>
            <div id="w6" class="dropdown-menu" :class="{show: isDropdownPatient}">
              <router-link to="/patients/general-information" class="nav-link">General information</router-link>
              <router-link to="#" class="nav-link">Images</router-link>
              <router-link to="/patients/ambulatory-card" class="nav-link">Ambulatory card</router-link>
              <router-link to="/patients/finance" class="nav-link">Finance</router-link>
              <router-link to="#" class="nav-link">Edit list</router-link>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      currentUser: true,
      isDropdownLogin: false,
      isDropdownLanguage: false,
      isDropdownSettings: false,
      isDropdownUser: false,
      isDropdownPatient: false,
      isDropdownDoctors: false,
      isDropdownPatientCard: false,
      isDropdownOther: false
    }
  }
}
</script>
