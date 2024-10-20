import { describe, it, expect } from 'vitest';

import statement from '../services/statement';
import plays     from '../data/plays.json';
import invoices  from '../data/invoices.json';

describe('Statement Output', () => {
  it('should return the correct statement output', () => {
    const invoice = invoices[0];
    const result = statement(invoice, plays);

    expect(result).toBe(`Statement for BigCo\n Hamlet: $650.00 (55 seats)\n As You Like It: $580.00 (35 seats)\n Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n`);
  });
});