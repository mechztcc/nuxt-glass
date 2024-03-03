interface IDetails {
  id: number;
  name: string;
}

interface IBadgeInfo {
  id: number;
  label: string;
  selected: boolean;
}

export const useNewAuctionRequest = defineStore('newAuctionRequest', {
  state: () => {
    return {
      step: 1 as number,
      payload: {
        glassType: [] as IDetails[],
        glassGender: [] as IDetails[],
        glassFrame: [] as IDetails[],
        glassLensType: [] as IDetails[],
        availableAt: [] as { state: string; city: string }[],
        paymentType: [] as IDetails[],
        delivery: {} as IDetails,
      },
      orderInformations: {
        glassFrame: [] as IDetails[],
        glassGender: [] as IDetails[],
        glassLensType: [] as IDetails[],
        glassType: [] as IDetails[],
        orderDeliveryType: [] as IDetails[],
        orderPaymentType: [] as IDetails[],
      },
    };
  },
  actions: {
    onHandleStep(type: 'prev' | 'next') {
      if (type == 'next' && this.step < 7) {
        this.step++;
      }
      if (type == 'prev' && this.step > 0) {
        this.step--;
      }
    },
    onSetStep(v: number) {
      this.step = v;
    },

    onSetGlassType({ id, label: name, selected }: IBadgeInfo) {
      if (selected) {
        this.payload.glassType.push({ id, name });
        return;
      }
      this.payload.glassType = this.payload.glassType.filter((el: any) => el.id !== id);
    },

    onSetGlassFrame({ id, label: name, selected }: IBadgeInfo) {
      if (selected) {
        this.payload.glassFrame.push({ id, name });
        return;
      }
      this.payload.glassFrame = this.payload.glassFrame.filter((el: any) => el.id !== id);
    },

    onSetGlassGender({ id, label: name, selected }: IBadgeInfo) {
      if (selected) {
        this.payload.glassGender.push({ id, name });
        return;
      }
      this.payload.glassGender = this.payload.glassGender.filter((el: any) => el.id !== id);
    },

    onSetGlassLens({ id, label: name, selected }: IBadgeInfo) {
      if (selected) {
        this.payload.glassLensType.push({ id, name });
        return;
      }
      this.payload.glassLensType = this.payload.glassLensType.filter((el: any) => el.id !== id);
    },

    onSetAvailableRegion(data: { state: string; city: string }) {
      let region = this.payload.availableAt;

      const regionExists = region.some((re) => re.city === data.city && re.state === data.state);
      if (regionExists) {
        return;
      }

      region.push(data);
    },

    onRemoveRegion(index: number) {
      this.payload.availableAt.splice(index, 1);
    },

    onSetPaymentType({ id, label: name, selected }: IBadgeInfo) {
      let payment = this.payload.paymentType;

      if (selected) {
        payment.push({ id, name });
        return;
      }
      this.payload.paymentType = payment.filter((el: any) => el.id !== id);
    },

    onSelectDelivery({ id, label: name, selected }: IBadgeInfo) {
      if (selected) {
        this.payload.delivery = { id, name };
        return;
      }

      this.payload.delivery = { id: 0, name: '' };
    },
  },
  getters: {
    hasGlassType: (state) => {
      return state.payload.glassType.length > 0;
    },

    hasAvailableAt: (state) => {
      return state.payload.availableAt.length > 0;
    },

    hasOrderDetails: (state) => {
      return (
        state.payload.glassFrame.length > 0 &&
        state.payload.glassGender.length > 0 &&
        state.payload.glassLensType.length > 0 &&
        state.payload.glassType.length > 0
      );
    },

    hasPaymentType: (state) => {
      return state.payload.paymentType.length > 0;
    },

    hasDelivery: (state) => state.payload.delivery
  },
});
