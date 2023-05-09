describe("<Button />", () => {
  it("should call a funcion on button click", () => {
    const fn = jest.fn();

    fn();

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
