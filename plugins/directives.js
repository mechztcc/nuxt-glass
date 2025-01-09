import { defineNuxtPlugin } from '#app';
import focus from '~/directives/v-focus';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('focus', focus);
});