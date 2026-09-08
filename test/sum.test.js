import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from '../src/sum.js';

test('suma dos numeros correctamente', () => {
  assert.strictEqual(sum(2, 3), 5);
});

// Para la demo: cambiar "skip: true" a "skip: false" y correr el workflow
// de nuevo para mostrar el ❌ en vivo. Después volver a ponerlo en true.
test('test que falla a propósito (demo)', { skip: false }, () => {
  assert.strictEqual(sum(2, 2), 5);
});
