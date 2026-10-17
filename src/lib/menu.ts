export type LineId = 'caseirinha' | 'comfort' | 'turbinada';
export const flavors = [
  { id: 'carne-panela', name: 'Carne de panela com legumes', line: 'caseirinha' },
  { id: 'frango-quiabo', name: 'Frango com quiabo', line: 'caseirinha' },
  { id: 'macarrao', name: 'Macarrão à bolonhesa', line: 'caseirinha' },
  { id: 'panqueca-frango', name: 'Panqueca de frango', line: 'comfort' },
  { id: 'panqueca-bolonhesa', name: 'Panqueca à bolonhesa', line: 'comfort' },
  { id: 'estrogonofe', name: 'Estrogonofe de frango', line: 'comfort' },
  { id: 'escondidinho-frango', name: 'Escondidinho de frango', line: 'comfort' },
  { id: 'escondidinho-carne', name: 'Escondidinho de carne', line: 'comfort' },
] as const;
export const flavorsFor = (line: LineId) => flavors.filter(f => line === 'turbinada' || f.line === line);
export function unitPrice(line: LineId, quantity: number) {
  const base = line === 'turbinada' ? 2290 : 1990;
  return base - (quantity >= 5 ? 200 : quantity >= 3 ? 100 : 0);
}
export const freeDelivery = (city: string, quantity: number) => city.trim().toLocaleLowerCase('pt-BR') === 'vila velha' && quantity > 5;
export const money = (cents: number) => (cents / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
export const whatsapp = (text: string) => `https://wa.me/5527988355188?text=${encodeURIComponent(text)}`;