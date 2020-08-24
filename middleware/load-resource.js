import { ROLE, MARKET, GAME_STATUS, BOOKMAKER } from "~/services/mutants";

export default async function({ store, from }) {

  if (!from || !store.getters.permissions.length) {
    const roles = await store.dispatch(`role/${ROLE.ROLES}`);
    // const permission = await store.dispatch(`permission/${PERMISSION.PERMISSIONS}`);
    const market = await store.dispatch(`market/${MARKET.MARKETS}`);
    const game_status= await store.dispatch(`gameStatus/${GAME_STATUS.GAME_STATUSES}`);
    const bookmaker= await store.dispatch(`bookmaker/${BOOKMAKER.BOOKMAKERS}`);

    Promise.all([roles, market, game_status, bookmaker]);
  }
}
