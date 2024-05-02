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
        name: 'prdoduto' as string,
        gender: '' as string,
        glassType: '' as string,
        color: '' as string,
        brand: '' as string,
        material: '' as string,
        code: '' as string,
        description: '' as string,
        costPrice: 0 as number,
        profitPercents: 0 as number,
        maxDescount: 0 as number,
        amount: 0 as number,
        saleValue: 0 as number,
        weight: 0 as number,
        dimensions: '' as string,
        files: [] as File[],
      },
    };
  },
  actions: {
    onHandleStep(step: number) {
      this.actualStep = step;
    },

    onPrev() {
      if (this.actualStep !== 0) {
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

    onGetColor(color: string) {
      return this.payload.gender == color;
    },
  },
  getters: {
    descSize: (state) => state.payload.description.length,
    expectedPrice: (state) => {
      const cost = state.payload.costPrice;
      const profitPercents = state.payload.profitPercents;
      const descont = state.payload.maxDescount;

      const totalProfit = cost + cost * (profitPercents / 100);
      const profitWithDescont = totalProfit - totalProfit * (descont / 100);
      return profitWithDescont.toFixed(2);
    },
  },
});
