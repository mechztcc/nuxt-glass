interface IParams {
  body?: any;
  method: 'post' | 'get' | 'put' | 'delete';
  immediate: boolean;
  successMsg?: string;
  redirect?: string;
  cb?: Function;
  headers?: any;
}

export default function useFetchAuth(url: string, { body, immediate, method, successMsg, redirect, cb, headers }: IParams) {
  const runtimeConfig = useRuntimeConfig();
  const toastr = useToaster();
  const router = useRouter();

  const api = runtimeConfig.public.apiBase;

  const { error, data, pending, execute } = useFetch(`${api}/${url}`, {
    body,
    immediate,
    watch: false,
    credentials: 'include',
    method,
    server: true,
    headers: useRequestHeaders(['cookie']),
    onRequestError: (e: any) => {
      toastr.onShow('ERROR', { msg: e.error.message });
    },
    onResponseError: (e: any) => {
      toastr.onShow('ERROR', { msg: e.response._data.message });
    },
    onResponse: (e: any) => {
      if (!e.response.ok) {
        return;
      }

      if (successMsg) {
        toastr.onShow('SUCCESS', { msg: successMsg });
      }

      if (redirect) {
        router.push(redirect);
      }

      if (cb) {
        cb();
      }
    },
  });

  return {
    error,
    data,
    pending,
    execute,
  };
}
