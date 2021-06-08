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

  it('migratoryBirdProblem', () => {
    const result = Runner.migratoryBirdProblem(6, [1, 4, 4, 4, 5, 3]);
    expect(result).to.equal(4);
  });
  it('migratoryBirdProblem', () => {
    const result = Runner.migratoryBirdProblem(
      11,
      [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]
    );
    expect(result).to.equal(3);
  });
});
