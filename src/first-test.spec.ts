// describe : let's us group tests together | describe can be nested as well
describe('my first test', () => {
  let sut;

  /*beforeEach: reset the state before running every test,
  so that we don't have any effects from previous
  state*/
  beforeEach(() => {
    sut = {};
  });

  // it: actual test
  it('should be true if true', () => {
    // test case -- AAA pattern(Arrange, Act, Assert)
    // 1. arrange
    sut.a = false;

    // 2. act
    sut.a = true;

    // 3. assert -- expect, toBe are Jasmine methods
    expect(sut.a).toBe(true);
  });
});
