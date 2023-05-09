<template>
  <div>
    <h1>NEUEN KONTAKT ERFASSEN</h1>
  </div>
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Name</label>
      <input type="text" class="form-control" :class="{error: errorName}" id="exampleInputEmail1"
             aria-describedby="emailHelp" placeholder="Name"
             v-model="kontakt.name">
      <small id="emailHelp" class="form-text text-muted"></small>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Vorname</label>
      <input type="text" class="form-control" :class="{error: errorName}" id="exampleInputEmail1"
             aria-describedby="emailHelp" placeholder="Vorname"
             v-model="kontakt.vorname">
      <small id="emailHelp" class="form-text text-muted"></small>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Strasse</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Strasse"
             v-model="kontakt.strasse">
      <small id="emailHelp" class="form-text text-muted"></small>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Plz</label>
      <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Plz"
             v-model="kontakt.plz">
      <small id="emailHelp" class="form-text text-muted"></small>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Ort</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ort"
             v-model="kontakt.ort">
      <small id="emailHelp" class="form-text text-muted"></small>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email</label>
      <input type="email" class="form-control" :class="{error: errorName}" id="exampleInputEmail1"
             aria-describedby="emailHelp" placeholder="Email"
             v-model="kontakt.email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Telefonnummer Privat</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
             placeholder="Private Telefonnummer" v-model="kontakt.tpriv">
      <small id="emailHelp" class="form-text text-muted"></small>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Telefonnummer Geschäft</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
             placeholder="Geschäftliche Telefonnummer" v-model="kontakt.tgesch">
      <small id="emailHelp" class="form-text text-muted"></small>
    </div>
    <br>
    <div>
      <button type="submit" @click="sendForm" class="btn btn-primary">Senden</button>
      <button type="reset" @click="clearValues" class="btn btn-primary">Abbrechen</button>
    </div>
  </form>

</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      kontakt: {
        name: '',
        vorname: '',
        strasse: '',
        plz: '',
        ort: '',
        email: '',
        tpriv: '',
        tgesch: ''
      },
      errorName: false,
      errorVorname: false,
      errorEmail: false
    };
  },
  mounted() {
    if (this.$route.params.kid) {
      axios(
          {
            method: "get",
            url: "/api/kontakt/" + this.$route.params.kid + "/",
          }
      ).then(response => {
        this.kontakt = response.data;
        console.log(this.kontakt);
      })
          .catch(error => {
            console.log(error);
          })
    }
  },
  methods: {
    sendForm() {
      var method;
      if (this.$route.params.kid) {
        method = 'put';
      } else {
        method = 'post';
      }
      axios(
          {
            method: method,
            url: "/api/kontakt/",
            data: this.kontakt
          }
      ).then((response) => {
        console.log(response);
        console.log(this.kontakt);
        this.clearValues();
      }, (error) => {
        console.log(error);
        this.errorName = !error.response.data.name;
        this.errorVorname = !error.response.data.vorname;
        this.errorEmail = !error.response.data.email;
      })
    },
    clearValues() {
      this.name = '',
          this.vorname = '',
          this.strasse = '',
          this.plz = '',
          this.ort = '',
          this.email = '',
          this.tpriv = '',
          this.tgesch = ''
    }
  }
}

</script>


<style>
.btn {
  margin-right: 3px;
}

.error {
  border: 3px orange solid;
  transition: 0.5s;
}
</style>
