<template>
  <div class="container">
    <h1 class="page-title">result</h1>
    <PersonalityType
      :types="getTypes.analytical"
      :number="getNumberOfUsersByPersonalityType[3].number"
      :totalNum="getTotalNumberOfPersonalityType"
    />
    <ResultButtons />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
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
