import { MODAL } from "~/services/mutants";

export const state = () => ({
  modalVisible: false,
  modalData: {
    componentName: "",
    componentData: {},
    title: "",
    opened: false,
    disabledClose: false,
    onCloseModal: () => {},
    containerStyle: {},
    rootStyle: {}
  }
});

export const mutations = {
  [MODAL.SHOW_MODAL](state, modalData) {
    state.modalVisible = true;
    state.modalData = { ...state.modalData, ...modalData, opened: true };
  },
  [MODAL.HIDE_MODAL](state) {
    state.modalVisible = false;
    state.modalData = { ...state.modalData, componentData: {}, componentName: "", opened: false, mode: "" };
  }
};
