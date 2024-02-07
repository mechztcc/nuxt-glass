export const useCreateAccount = defineStore("createAccount", {
  state: () => {
    return {
      step: 1 as number,
    };
  },
  actions: {
    onHandleStep(type: "prev" | "next") {
      if (type == "next" && this.step < 3) {
        this.step++;
      }

      if (type == "prev" && this.step > 0) {
        this.step--;
      }
    },
    onSetStep(v: number) {
      this.step = v;
    },
  },
});
