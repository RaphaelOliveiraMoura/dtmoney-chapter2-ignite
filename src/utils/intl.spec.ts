import { formatCurrency, formatDate } from './intl';

describe('intl', () => {
  it('should format currency', () => {
    expect(formatCurrency(100)).toContain('R$100,00');
    expect(formatCurrency(-100)).toContain('-R$100,00');
    expect(formatCurrency(999999999.55)).toContain('R$999.999.999,55');
  });

  it('should format date', () => {
    expect(formatDate(new Date('2020/05/01'))).toContain('01/05/2020');
    expect(formatDate(new Date('1850/12/05'))).toContain('05/12/1850');
  });
});
