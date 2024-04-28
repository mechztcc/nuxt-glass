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
        name: '',
        gender: null,
        glassType: null,
        color: '',
        brand: '',
        material: '',
        code: '',
        description: '',
        costPrice: 0,
        profitPercents: 0,
        maxDescount: 0,
        amount: 0,
        saleValue: 0,
        files: [],
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
  },
});
