import merge from './merge';
describe('merge', () => {
  test('should return [1, 3, 4, 5, 8, 9, 11, 12, 14, 15, 16] for merge([1, 5, 9, 14], [3, 4, 8, 11, 12, 15, 16])', () => {
    expect(merge.merge([1, 5, 9, 14], [3, 4, 8, 11, 12, 15, 16])).toStrictEqual([1,  3,  4,  5,  8, 9, 11, 12, 14, 15, 16]);
  });

  test('should return [1, 3, 4, 5, 8, 9, 11, 12, 14, 15, 16, 45, 50] for merge([1, 5, 9, 14, 45, 50], [3, 4, 8, 11, 12, 15, 16])', () => {
    expect(merge.merge([1, 5, 9, 14, 45, 50], [3, 4, 8, 11, 12, 15, 16])).toStrictEqual([1, 3, 4, 5, 8, 9, 11, 12, 14, 15, 16, 45, 50] );
  });

  test('should return [1, 1, 1, 3, 3] for merge([1, 1, 1], [3, 3])', () => {
    expect(merge.merge([1, 1, 1], [3, 3])).toStrictEqual([1, 1, 1, 3, 3]);
  });
  
});