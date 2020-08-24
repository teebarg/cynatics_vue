<template>
  <div>
    <LayoutMain>
      <template v-slot:default>
        <Banner />
        <Segment>
          <template v-slot:title>
            Today's Free Horse Racing Tips
          </template>
          <template v-slot:body>
            <div class="feature-game__container">
              <GameCard v-for="o in 4" :key="o" />
            </div>
          </template>
        </Segment>
        <Segment>
          <template v-slot:title>
            Free Picks
          </template>
          <template v-slot:body>
            <GameTable />
          </template>
        </Segment>
        <Segment>
          <template v-slot:title>
            TODAY'S FREE FOOTBALL TIPS
          </template>
          <template v-slot:body>
            <div class="feature-game__container">
              <BetMarket v-for="o in 4" :key="o" />
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
export default {};
</script>

<style scoped>
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
