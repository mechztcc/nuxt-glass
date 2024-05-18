interface IProps {
  type: 'BRL';
  value: any;
}
export default function useCurrency({ type, value }: IProps) {
  let data = value?.replace(/\D/g, '');

  data = (parseInt(data, 10) / 100).toFixed(2);
  data = data
    .toString()
    .replace('.', ',')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  const formattedValue = `R$ ${value}`;

  return { formattedValue };
}
