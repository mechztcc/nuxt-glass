export const useNewAuctionRequest = defineStore('newAuctionRequest', {
  state: () => {
    return {
      step: 1 as number,
      payload: {
        glassType: [] as { id: number; name: string }[],
      },
      orderInformations: {
        glassFrame: [] as { id: number; name: string }[],
        glassgender: [] as { id: number; name: string }[],
        glassLensType: [] as { id: number; name: string }[],
        glassType: [] as { id: number; name: string }[],
        orderDeliveryType: [] as { id: number; name: string }[],
        orderPaymentType: [] as { id: number; name: string }[],
      },
    };
  },
  actions: {
    onHandleStep(type: 'prev' | 'next') {
      if (type == 'next' && this.step < 6) {
        this.step++;
      }
      if (type == 'prev' && this.step > 0) {
        this.step--;
      }
    },
    onSetStep(v: number) {
      this.step = v;
    },

    onSetGlassType({ id, label: name, selected }: { id: number; label: string; selected: boolean }) {
      if (selected) {
        this.payload.glassType.push({ id, name });
        return;
      }
      this.payload.glassType = this.payload.glassType.filter((el: any) => el.id !== id);
    },
  },
  getters: {
    hasGlassType: (state) => {
      return state.payload.glassType.length > 0;
    },
  },
});
