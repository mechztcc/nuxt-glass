export const useCreateProduct = defineStore('createProduct', {
  state: () => {
    return {
      steps: [
        {
          position: 1,
          label: 'Informações gerais',
        },
        {
          position: 2,
          label: 'Preço e estoque',
        },
        {
          position: 3,
          label: 'Imagens do produto',
        },
      ],
      actualStep: 1,
      payload: {
        name: '' as string,
        gender: '' as string,
        glassType: '' as string,
        color: '' as string,
        brand: '' as string,
        material: '' as string,
        code: '' as string,
        description: '' as string,
        priceCost: 0 as number,
        profit: 0 as number,
        maxDescount: 0 as number,
        amount: 0 as number,
        totalPrice: 0 as number,
        weight: 0 as number,
        bridge: '' as string,
        bridgeWithRim: '' as string,
        horizontalRim: '' as string,
        verticalRim: '' as string,
        files: [] as any[],
      },
    };
  },
  actions: {
    onHandleStep(step: number) {
      this.actualStep = step;
    },

    onPrev() {
      if (this.actualStep > 1) {
        this.actualStep--;
      }
    },

    onNext() {
      if (this.actualStep !== this.steps.length) {
        this.actualStep++;
      }
    },

    onUpdatePayload(data: any) {
      this.payload = {
        ...this.payload,
        ...data,
      };
    },

    onUpdateColor(color: string) {
      this.payload.color = color;
    },

    onGetGender(type: string) {
      return this.payload.gender == type;
    },

    onGetGlassType(type: string) {
      return this.payload.glassType == type;
    },

    onGetColor(color: string) {
      return this.payload.gender == color;
    },
  },
  getters: {
    descSize: (state) => state.payload.description.length,
    expectedPrice: (state) => {
      const cost = state.payload.priceCost;
      const profitPercents = state.payload.profit;
      const descont = state.payload.maxDescount;

      const totalProfit = cost + cost * (profitPercents / 100);
      const profitWithDescont = totalProfit - totalProfit * (descont / 100);
      return profitWithDescont.toFixed(2);
    },
  },
});
