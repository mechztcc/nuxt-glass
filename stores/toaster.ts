export const useToaster = defineStore('toaster', {
  state: () => {
    return {
      status: '' as 'CLOSED' | 'OPENED',
      type: '' as 'ERROR' | 'SUCCESS',
      data: {
        msg: '',
      },
      progressWidth: '',
    };
  },
  actions: {
    onHandle() {
      this.status == 'CLOSED' ? (this.status = 'OPENED') : (this.status = 'CLOSED');
    },
    onCloseFromView(event: any) {
      const isFrame = Array(event.target.classList);
      
      if (isFrame[0]['value'].includes('frame')) {
        this.status == 'CLOSED';
      }
    },
    onShow(type: 'ERROR' | 'SUCCESS', data: { msg: string }) {
      this.type = type;
      this.data = data;
      this.status = 'OPENED';

      let size = 0;
      const interval = setInterval(() => {
        if (size < 100) {
          size++;
          this.progressWidth = `${size}%`;
        }

        if (size == 100) {
          this.status = 'CLOSED';
          clearInterval(interval);
        }
      }, 10);
    },
  },
});
