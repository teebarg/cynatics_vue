<template>
  <div class="segment_container">
    <div class="header">
      <div class="header__title">
        <slot name="title" >
          Please Provide a Title
        </slot>
      </div>
      <div class="header__icon">
        <i
          class="FSTicon FSTicon--white  "
          style="background-image: url(https://www.freesupertips.com/wp-content/uploads/2018/09/Horse-Racing-1.png)"
        ></i>
      </div>
    </div>
    <div class="body">
      <slot name="body">
        Please Provide Body
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      beaf: {
        title: "A title",
        default: "A Default title"
      }
    };
  },
  methods: {
    test() {
      alert(5);
    }
  }
};
</script>
<style lang="scss" scoped>
.segment_container {
  margin-top: 10px;
}

.header {
  display: flex;
  // justify-content: center;
  align-items: center;
  // padding: 0;
  // margin: 0;
  background-color: var(--btn-background-secondary);
  border: 1px solid var(--btn-border-secondary);
  color: var(--btn-secondary);
  // border: 0.07143rem solid #2f2f2f;
  // -webkit-box-shadow: 0 0 3px #999;
  // box-shadow: 0 0 3px #999;
  // border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: "Open Sans";
  font-weight: 600;
}

@media (min-width: 480px) {
  .header__title {
    font-size: 1.14286rem;
    line-height: 1.28571rem;
  }
}

.header__title {
  flex: 1;
  padding: 0.35714rem 0.35714rem 0.35714rem 0.71429rem;
  // font-size: 1rem;
  // line-height: 1.14286rem;
  // color: #fff;
  // text-align: left;
  text-transform: uppercase;
  // font-weight: 700;
  letter-spacing: 0.05em;
  // margin: 0;
}

.header__icon {
  padding: 0.35714rem;
  max-width: 2.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-item-align: center;
  align-self: center;
}

.FSTicon--white {
  -webkit-filter: brightness(0) invert(1);
  filter: brightness(0) invert(1);
}

.FSTicon {
  display: inline-block;
  height: 25px;
  width: 25px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
