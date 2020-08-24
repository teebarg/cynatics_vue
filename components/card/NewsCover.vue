<template>
  <div class="NewsCoverCard__wrapper">
    <nuxt-link
      to="/"
      class="v2Cell
v2ArticleLink
v2ArticleLink--card
"
    >
      <img
        class="v2ArticleLink__image loaded"
        data-src="https://www.freesupertips.com/wp-content/uploads/2020/01/Christiano_Ronaldo_scores_hat-trick_for_Juventus-min-Watermarked-1578325674-360x261.jpg"
        alt="Article Link Image"
        lazy-image=""
        src="https://www.freesupertips.com/wp-content/uploads/2020/01/Christiano_Ronaldo_scores_hat-trick_for_Juventus-min-Watermarked-1578325674-360x261.jpg"
        data-was-processed="true"
      />
      <div class="v2ArticleLink__cover">
        <div class="v2ArticleLink__title">
          Serie A: Will Juve blow their title lead in high-scoring restart?
        </div>
        <div class="v2ArticleLink__info">
          <div class="v2ArticleLink__datetime"><strong>Sun</strong> 19 Jul</div>
          <div class="v2ArticleLink__divider">·</div>
          <div class="v2ArticleLink__category">European Football</div>
        </div>
      </div>
    </nuxt-link>
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
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
