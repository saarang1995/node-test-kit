import { Runner } from '../index.js';
import { expect } from 'chai';
describe('Runner tests', () => {
  it('add', () => {
    const result = Runner.add(1, 56);
    expect(result).to.equal(57);
  });

  it('sub', () => {
    const result = Runner.sub(1, 56);
    expect(result).to.equal(-55);
  });
});
