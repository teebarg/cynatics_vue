<template>
  <div>
    <App>
      <template v-slot:header='info'>
        <!-- <p>A paragraph for the main content.</p> -->
        {{info.beaf.title}}
      </template>
      <template v-slot:default>
        <p>A paragraph for the main content......................................</p>
        <p>And another one.</p>
      </template>
      <template v-slot:footer>
        <p>Overridden</p>
      </template>
    </App>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
