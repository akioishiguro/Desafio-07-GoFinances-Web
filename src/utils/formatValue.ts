const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency', // ESTILO DE MOEDA
    currency: 'BRL',
  }).format(value);

export default formatValue;
