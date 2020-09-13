<template>
  <div>
    <LayoutMain>
      <template v-slot:default>
        <Banner :banners="banners" />
        <Segment>
          <template v-slot:title>
            Today's Premium Tips
          </template>
          <template v-slot:body v-if="premium.game_items && premium.game_items.length">
            <div class="feature-game__container">
              <GameCard
                v-for="(item, key) in premium.game_items"
                :gameItem="item"
                :key="key"
              />
            </div>
          </template>
        </Segment>
        <Segment>
          <template v-slot:title>
            Free Picks
          </template>
          <template v-slot:body v-if="free.game_items && free.game_items.length">
            <div class="feature-game__container">
              <GameTable
                v-for="(item, key) in free.game_items"
                :game="item"
                :key="key"
              />
            </div>
          </template>
        </Segment>
        <Segment>
          <template v-slot:title>
            LATEST FREE TIPS
          </template>
          <template v-slot:body v-if="latest.length">
            <div class="feature-game__container">
              <BetMarket
                v-for="(item, key) in latest"
                :game="item"
                :key="key"
              />
            </div>
          </template>
        </Segment>
        <Segment>
          <template v-slot:title>
            Latest News
          </template>
          <template v-slot:body>
            <div class="feature-news__container">
              <NewsCard v-for="o in 3" :key="o" />
            </div>
          </template>
        </Segment>
      </template>
      /*sidebar*/
      <template v-slot:sidebar>
        <Segment>
          <template v-slot:title>
            Offers
          </template>
          <template v-slot:body v-if="bAds.length">
            <template v-if="bAds[0].adverts.length">
              <OfferCard
                v-for="(item, key) in bAds[0].adverts"
                :key="key"
                :offer="item"
              />
            </template>
          </template>
        </Segment>
      </template>
    </LayoutMain>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { ApiEndPoint } from "~/services/constants";

export default {
  async fetch() {
    const { data } = await this.$axios.$get(ApiEndPoint.HOME);
    this.free = data.free;
    this.premium = data.premium;
    this.latest = data.latest;
    this.banners = data.banners;
  },
  computed: {
    ...mapState("bAds", ["bAds"])
  },
  data: () => ({ premium: {}, free: {}, latest: {}, banners: [] }),
  head() {
    return {
      title: "Cynatics|Home of Sport Betting",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        },
        {
          hid: "oi:image",
          name: "oi:image",
          content: "Link to Image"
        }
      ]
    };
  }
};
</script>
