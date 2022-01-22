import { counter } from './singletons/counter';
import { database } from './singletons/database';

database.someBusinessLogic();

console.log('\n\n🚀🚀🚀 ~ file: index.ts ~ line 7 ~ counter.getCount()', counter.getCount());
console.log('\nincrementing...\n');
counter.increment()
console.log('🚀🚀🚀 ~ file: index.ts ~ line 9 ~ counter.getCount()', counter.getCount());
