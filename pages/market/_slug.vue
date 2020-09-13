<template>
  <div>
    <LayoutMain>
      <template v-slot:default>
        <div
          class="infinite-list"
          v-infinite-scroll="load"
          style="overflow:auto; height: 40vh"
          v-if="games.length"
        >
          <Segment v-for="game in games" :key="game.id">
            <template v-slot:title>
              {{ game.market_name }} | <span style="font-size: 80%">{{$moment(game.game_date)}}</span>
            </template>
            <template v-slot:body>
              <div class="feature-game__container">
                <GameTable
                  v-for="(item, key) in game.game_items"
                  :game="item"
                  :key="key"
                />
              </div>
            </template>
          </Segment>
        </div>
        <div v-else class="placeholder">
            Games are not available at the moment
        </div>
      </template>
      /*sidebar*/
      <template v-slot:sidebar>
        <Segment v-if="bAds.length">
          <template v-slot:title>
            Offers
          </template>
          <template v-slot:body>
            <OfferCard
              v-for="(item, key) in bAds[0].adverts"
              :key="key"
              :offer="item"
            />
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
    await this.getGames({ market: this.$route.params.slug || ' ' });
  },
  computed: {
    ...mapState("game", ["games", "pagination"]),
    ...mapState("bAds", ["bAds"])
  },
  methods: {
    ...mapActions("game", [GAME.GAMES]),
    async load() {
      if (this.pagination.next_page_url) {
        await this.getGames({
          page: this.pagination.current_page + 1,
          market: this.$route.params.slug || ' '
        });
      }
    }
  }
};
</script>
