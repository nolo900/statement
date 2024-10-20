import statement from './services/statement.js';
import invoices  from './data/invoices.json' assert { type: 'json' };
import plays     from './data/plays.json'    assert { type: 'json' };

const stmt = statement(invoices[0], plays);

console.log(stmt);