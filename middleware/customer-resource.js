import { ROLE, MARKET, ADSLOT } from "~/services/mutants";

export default async function({ store, from }) {

  if (!from || !store.getters.permissions.length) {
    const roles = await store.dispatch(`role/${ROLE.ROLES}`);
    const market = await store.dispatch(`market/${MARKET.MARKETS}`);
    const bAds= await store.dispatch(`bAds/${ADSLOT.ADSLOTS}`, {name: 'free_bet', isActive: true});

    Promise.all([roles, bAds, market]);
  }
}
