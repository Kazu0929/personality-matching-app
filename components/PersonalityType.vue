<template>
  <div class="column ">
    <div v-for="(type, index) in types" :key="index">
      <h1 class="item-title">{{ type.name }}</h1>
      <img :src="require(`../assets/image/${type.image}`)" />
      <div v-for="sentence in type.sentences" :key="sentence.category" class="content">
        <h2 class="content-title">{{ sentence.category }}</h2>
        <p v-for="content in sentence.contents" :key="content">{{ content }}</p>
      </div>
    </div>
    <p class="result">診断を受けた人の割合</p>
    <div class="square">
      <div class="square-main">
        <span>このタイプの割合</span>
      </div>
      <div class="square-sub">
        <span>その他のタイプ</span>
      </div>
    </div>
    <b-progress class="bar" size="is-medium" format="percent" :max="totalNum">
      <template #bar>
        <b-progress-bar :value="number" type="is-primary" show-value> </b-progress-bar>
        <b-progress-bar :value="totalNum - number" show-value> </b-progress-bar>
      </template>
    </b-progress>
  </div>
</template>

<script>
export default {
  props: {
    types: {
      type: Array,
      required: true,
      default: null,
    },
    number: {
      type: Number,
      require: true,
      default: null,
    },
    totalNum: {
      type: Number,
      require: true,
      default: null,
    },
  },
};
</script>

<style scoped>
.content {
  width: 70%;
  margin: 0 auto;
}

.square-main {
  width: 180px;
  background: #3da9fc;
  color: white;
  margin-top: 0.5rem;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  border-radius: 20px;
}
.square-sub {
  width: 180px;
  background: #4a4a4a;
  color: white;
  margin: 0 auto;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 20px;
}
.content p {
  margin: 0;
}

.content-title {
  margin-top: 1rem;
}

.result {
  margin-top: 1rem;
  font-size: 1.75rem;
  color: #363636;
  font-weight: bold;
}
.column {
  height: 50%;
  margin-right: 0.5rem;
}

.bar {
  width: 70%;
  margin: 0 auto;
}
</style>
