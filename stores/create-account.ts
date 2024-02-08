export const useCreateAccount = defineStore('createAccount', {
	state: () => {
		return {
			step: 1 as number,
			profile: 'CUSTOMER' as string,
			steps: [
				{
					step: 1,
					label: 'Tipo de usuário',
				},
				{
					step: 2,
					label: 'Dados de Acesso',
				},
			],
		};
	},
	actions: {
		onHandleStep(type: 'prev' | 'next') {
			if (type == 'next' && this.step < 3) {
				this.step++;
			}

			if (type == 'prev' && this.step > 0) {
				this.step--;
			}
		},
		onSetStep(v: number) {
			this.step = v;
		},
		onSetProfile(type: 'CUSTOMER' | 'ADMIN') {
			this.profile = type;
			const thirdStep = {
				step: 3,
				label: 'Detalhes da Loja',
			};

			const stepsExists = this.steps.some((el: any) => el.step === thirdStep.step);
			if (type == 'ADMIN' && !stepsExists) {
				this.steps.push(thirdStep);
				return;
			}
			if (type == 'ADMIN' && stepsExists) {
				this.steps = this.steps.filter((el: any) => el.step !== thirdStep.step);
			}
		},
	},
});
