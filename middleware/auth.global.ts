export default defineNuxtRouteMiddleware((to, from) => {
  const toaster = useToaster();

  const noNeedCredentials = ['/create-account', '/login'];

  const cookie = useCookie('credentials');
  if (!cookie.value && !noNeedCredentials.includes(to.path)) {
    toaster.onShow('ERROR', {
      msg: 'Sessão expirada, realize um novo login.',
    });
    return navigateTo('/login');
  }
});
