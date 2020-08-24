<template>
  <div>
    <LayoutNews>
      <template v-slot:header>
        <div class="news__header">
          <h2>News Article</h2>
          <el-select v-model="value" clearable placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </template>
      /*sidebar*/
      <template v-slot:content>
        <NewsTemplate>
          <template v-slot:title>
            Feature News
          </template>
          <template v-slot:content>
            <CardNewsCover />
            <CardNewsCover />
          </template>
        </NewsTemplate>
        <NewsTemplate>
          <template v-slot:title>
            Latest News
          </template>
          <template v-slot:link>
            Link
          </template>
          <template v-slot:content>
            <CardNewsCover />
            <CardNewsInfo v-for="o in 5" :key="o"/>
          </template>
        </NewsTemplate>
      </template>
    </LayoutNews>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "Option1",
          label: "Option1"
        },
        {
          value: "Option2",
          label: "Option2"
        },
        {
          value: "Option3",
          label: "Option3"
        },
        {
          value: "Option4",
          label: "Option4"
        },
        {
          value: "Option5",
          label: "Option5"
        }
      ],
      value: ""
    };
  }
};
</script>

<style scoped>
.news__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #3333;
}
.feature-game__container {
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  gap: 5px;
}
.feature-news__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 5px;
}
</style>
