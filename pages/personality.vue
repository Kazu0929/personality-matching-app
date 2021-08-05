<template>
  <div class="container">
    <h1 class="page-title">Personality Type</h1>
    <div class="columns">
      <personality-type
        :types="getTypes.driving"
        :number="getNumberOfUsersByPersonalityType[0].number"
        :totalNum="getTotalNumberOfPersonalityType"
      />
      <personality-type
        :types="getTypes.expressive"
        :number="getNumberOfUsersByPersonalityType[1].number"
        :totalNum="getTotalNumberOfPersonalityType"
      />
    </div>
    <div class="columns">
      <personality-type
        :types="getTypes.amiable"
        :number="getNumberOfUsersByPersonalityType[2].number"
        :totalNum="getTotalNumberOfPersonalityType"
      />
      <personality-type
        :types="getTypes.analytical"
        :number="getNumberOfUsersByPersonalityType[3].number"
        :totalNum="getTotalNumberOfPersonalityType"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PersonalityType from '../components/PersonalityType.vue';
export default {
  components: { PersonalityType },
  computed: {
    ...mapGetters([
      'getTypes',
      'getNumberOfUsersByPersonalityType',
      'getTotalNumberOfPersonalityType',
    ]),
  },
  created() {
    this.fetchNumberOfUsersByPersonalityType();
    this.sumNumberOfUsersByPersonalityType();
  },
  methods: {
    ...mapActions(['fetchNumberOfUsersByPersonalityType', 'sumNumberOfUsersByPersonalityType']),
  },
};
</script>

<style scoped>
.content-title {
  margin-top: 1rem;
}

.container {
  height: auto;
}
</style>
