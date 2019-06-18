import Vue from "vue";
import App from "./examples/App.vue";

// :::::::::::::::::::::::::::::::::::::::::: //
// ::::::::::::: EDITOR FROALA ::::::::::::: //
// :::::::::::::::::::::::::::::::::::::::: //

// Require Froala Editor js file.
require("froala-editor/js/froala_editor.pkgd.min.js");
require("froala-editor/js/plugins.pkgd.min.js");
// Require Froala Editor css files.
require("froala-editor/css/froala_editor.pkgd.min.css");
require("froala-editor/css/froala_style.min.css");

require("froala-editor/js/languages/de.js");

// Import and use Vue Froala lib.
import VueFroala from "vue-froala-wysiwyg";
Vue.use(VueFroala);
window.VueFroala = VueFroala;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

