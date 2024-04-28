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
      actualStep: 1
    };
  },
  actions: {
    onHandleStep(step: number) {
      this.actualStep = step;
    }
  },
});
