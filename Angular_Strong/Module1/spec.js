describe('Hello World', function(){
  it('should increment by one', function(){
    expect(add(1)).toBe(2);

    function add(value) {
      return value + 1;
    }
  });
  it('should decrement by one', function(){
    expect(subtract(1)).toBe(0);

    function subtract(value) {
      return value - 1;
    }
  });

});