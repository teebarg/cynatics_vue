<template>
  <div style="text-align: center">
    <el-transfer
      v-model="value"
      style="text-align: left; display: inline-block"
      filterable
      :titles="[title, 'Target']"
      :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
      :props="{
        key: 'id',
        label: 'name'
      }"
      :data="sourceData"
    >
      <el-button slot="right-footer" type="primary" class="transfer-footer" size="small" @click="$emit('update', value)">
        Update {{title}}
      </el-button>
    </el-transfer>
  </div>
</template>
<script>
export default {
  props: {
    targetData: {
      type: Array,
      default:() => []
    },
    sourceData: Array,
    title: String
  },
  data () {
    const active = (_) => {
      return this.targetData.map(i => i.id)
    }
    return {
      value: active(),
      renderFunc (h, option) {
        return <span>{ option.key } - { option.label }</span>
      }
    }
  }
}
</script>
<style>
  .transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }
</style>
