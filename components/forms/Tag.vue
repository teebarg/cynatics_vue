<template>
  <div>
    <div>
      <el-tag
        :key="tag.id"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >
        {{ tag.name }}
      </el-tag>
      <el-autocomplete
        class="input-new-tag1"
        v-if="inputVisible"
        v-model="inputValue"
        :fetch-suggestions="querySearch"
        ref="saveTagInput"
        placeholder="Please Input"
        :trigger-on-focus="false"
        @select="handleInputConfirm"
      />
      <el-button v-else class="button-new-tag" size="small" @click="showInput"
        >+ New {{ state }}</el-button
      >
    </div>
    <div style="margin-top: 15px">
      <el-button type="primary" @click="$emit('submit', dynamicTags)">Update</el-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tags: Array,
    state: String,
    action: String
  },
  data() {
    return {
      dynamicTags: this.tags,
      inputVisible: false,
      inputValue: ""
    };
  },
  watch: {
    tags(newValue, oddValue){
      this.dynamicTags = newValue;
    }
  },
  methods: {
    async querySearch(queryString, cb) {
      await this.$store.dispatch(`${this.state}/${this.action}`, {
        name: queryString
      });
      const data = this.$store.getters[`${this.state}`];
      const result = data.map(i => {
        i.value = i.name;
        return i;
      });
      cb(result);
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm({id, name}) {
      if (name) {
        this.dynamicTags.push({id, name});
      }
      this.inputVisible = false;
      this.inputValue = "";
    }
  }
};
</script>
<style>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
