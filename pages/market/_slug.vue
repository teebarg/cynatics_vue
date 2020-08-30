<template>
  <div>
    <LayoutMain>
      <template v-slot:default>
        <div
          class="infinite-list"
          v-infinite-scroll="load"
          style="overflow:auto; height: 40vh"
        >
          <Segment v-for="game in games" :key="game.id">
            <template v-slot:title>
              {{ game.market.name }}
            </template>
            <template v-slot:body>
              <GameTable :game="game" />
            </template>
          </Segment>
        </div>
      </template>
      /*sidebar*/
      <template v-slot:sidebar>
        <Segment>
          <template v-slot:title>
            Offers
          </template>
          <template v-slot:body>
            <!-- <div class="feature-news__container"> -->
            <OfferCard v-for="o in 3" :key="o" />
            <!-- </div> -->
          </template>
        </Segment>
      </template>
    </LayoutMain>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { GAME } from "~/services/mutants";

export default {
  async fetch() {
    // console.log(params);
    await this.getGames({ market: this.$route.params.slug });
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("game", ["games", "pagination"])
  },
  methods: {
    ...mapActions("game", [GAME.GAMES]),
    async load() {
      console.log('scroll')
      if (this.pagination.next_page_url) {
        await this.getGames({ page: this.pagination.current_page + 1, market: this.$route.params.slug});
      }
    }
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
