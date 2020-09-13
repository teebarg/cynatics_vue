<template>
  <div>
    <LayoutMain>
      <template v-slot:default>
        <Segment>
          <template v-slot:title>
            Arsenal vs Chelsea Prediction
          </template>
          <template v-slot:body>
            <div class="">
              <p>sssss</p>
            </div>
          </template>
        </Segment>
        <Segment>
          <template v-slot:title>
            Predictions
          </template>
          <template v-slot:body>
            <div class="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              neque accusamus, quaerat fuga repellat officiis non perferendis
              hic doloribus beatae odit, commodi blanditiis odio aliquam ipsum
              distinctio laboriosam, praesentium tenetur!
            </div>
          </template>
        </Segment>
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
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("bAds", ["bAds"])
  }
};
</script>
