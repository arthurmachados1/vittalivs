import { describe, expect, test } from 'vitest';
import { flavorsFor, freeDelivery, unitPrice } from './menu';
describe('Regras VittaLivs', () => {
  test('Caseirinha tem exatamente os três sabores informados', () => expect(flavorsFor('caseirinha').map(f => f.name)).toEqual(['Carne de panela com legumes', 'Frango com quiabo', 'Macarrão à bolonhesa']));
  test('Comfort Food tem exatamente os cinco sabores informados', () => expect(flavorsFor('comfort').map(f => f.name)).toEqual(['Panqueca de frango', 'Panqueca à bolonhesa', 'Estrogonofe de frango', 'Escondidinho de frango', 'Escondidinho de carne']));
  test('Turbinada inclui todos os oito sabores', () => expect(flavorsFor('turbinada')).toHaveLength(8));
  test('Preços das linhas regulares nas faixas 1, 3 e 5', () => expect([1,3,5].map(q => unitPrice('caseirinha',q))).toEqual([1990,1890,1790]));
  test('Comfort Food usa os mesmos preços regulares', () => expect([1,3,5].map(q => unitPrice('comfort',q))).toEqual([1990,1890,1790]));
  test('Preços da Turbinada nas faixas 1, 3 e 5', () => expect([1,3,5].map(q => unitPrice('turbinada',q))).toEqual([2290,2190,2090]));
  test('Frete gratuito somente em Vila Velha acima de cinco marmitas', () => expect([freeDelivery('Vila Velha',5),freeDelivery('Vila Velha',6),freeDelivery('Vitória',6)]).toEqual([false,true,false]));
});