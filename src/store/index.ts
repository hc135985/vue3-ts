//@ts-nocheck
import { createStore } from "vuex";

const context = require["context"]("./modules", false, /\.(js|ts)$/);
const getModel = context.keys().map(key => context(key));
const Store = {};

getModel.forEach(model => {
  Store[model.default.name] = model.default;
});
export default createStore({
  modules: Store
});
