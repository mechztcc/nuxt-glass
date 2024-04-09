export const useCreateShop = defineStore('createShop', {
  state: () => {
    return {
      hasShop: false as boolean,
      showCreateForm: false as boolean,
    };
  },
  actions: {
    onHandleForm() {
      this.showCreateForm = !this.showCreateForm;
      console.log(this.showCreateForm);
    },
  },
});
