<template>
  <div id="app">
    <ul>
      <li v-for="country in countries">
        {{ country.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
// import countries from '../countries.json'

export default {
  data: function () {
    return {
      countries: []
    }
  },
  created: function() {
    let self = this;
    axios.get('https://restcountries.eu/rest/v2/all').then(res => {
      self.countries = res.data;
    });
  }
}
</script>
