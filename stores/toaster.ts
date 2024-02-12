export const useToaster = defineStore('toaster', {
  state: () => {
    return {
      state: '' as 'CLOSED' | 'OPENED',
    };
  },
  actions: {
    onHandle() {
      this.state == 'CLOSED' ? (this.state = 'OPENED') : (this.state = 'CLOSED');
    },
  },
});
