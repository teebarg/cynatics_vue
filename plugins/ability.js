export default ({ store }, inject) => {
  let permission = "";
  let result = true;

  const isAllowed = e => {
    if (e != permission) {
      permission = e;
      result = !!store.getters.loggedInUser.permissions.find(
        i => i.name.toLowerCase() == e.toLowerCase()
      );
    }
    return result;
  };

  inject("can", isAllowed);
};
