<template>
  <div class="about">
    <h1>KONTAKTE ÜBERSICHT</h1>
    <div class="input-group">
      <div class="form-outline">
        <input type="search" class="form-control" v-model="filters.name.keys" />
      </div>
    </div>
    <table class="table" :data="{data}" :filters="filters">
      <thead class="thead-dark">
      <tr>
        <th scope="col">Löschen</th>
        <th scope="col">Editieren</th>
        <th scope="col" >kid</th>
        <th scope="col">Name</th>
        <th scope="col">Vorname</th>
        <th scope="col">Strasse</th>
        <th scope="col">PLZ</th>
        <th scope="col">Ort</th>
        <th scope="col">E-Mail</th>
        <th scope="col">T-Priv</th>
        <th scope="col">T-Gesch</th>
      </tr>
      </thead>
      <tbody slot="body">
      <tr v-for="element in data">
        <td><font-awesome-icon icon="fa-solid fa-trash" @click="putInTrash(element.kid)"></font-awesome-icon></td>
        <td><font-awesome-icon icon="fa-solid fa-edit" @click="edit(element.kid)"></font-awesome-icon></td>
        <td data-label="kid">{{ element.kid }}</td>
        <td data-label="name">{{ element.name }}</td>
        <td data-label="vorname">{{ element.vorname }}</td>
        <td data-label="strasse">{{ element.strasse }}</td>
        <td data-label="plz">{{ element.plz }}</td>
        <td data-label="ort">{{ element.ort }}</td>
        <td data-label="email">{{ element.email }}</td>
        <td data-label="tpriv">{{ element.tpriv }}</td>
        <td data-label="tgesch">{{ element.tgesch }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    data: [],
    filters: {
      name: { value: '', keys: ['name'] }
    }
  }),
  /*
  data () {
      return {
        data: [],
        filters: {
          name: {value: '', keys: ['name']}
        },
      };
  },*/
  mounted() {
    console.log("mounted");
    axios(
        {
          method: "get",
          url: "/api/kontakt/"
        }
    ).then(response => {
      this.data = response.data;
      console.log(this.data);
    })
        .catch(error => {
          console.log(error);
        })
  },
  methods: {
    edit(id) {
      this.$router.push({name: 'Kontakt hinzufügen', params: {kid: id}});
    },
    putInTrash(id) {
      confirm("Bist du sicher, dass du diesen Eintrag löschen möchtest?")
      axios(
          {
            method: "delete",
            url: "/api/kontakt/"+id+"/"
          }
      ).then(response => {
        this.data = response.data;
        console.log(this.data);
      })
          .catch(error => {
            console.log(error);
          })
      location.reload();
    }
  }
}
</script>

<style>

</style>
