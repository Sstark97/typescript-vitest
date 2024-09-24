import foo from "../core/foo";

describe('foo', () => {
    it("do something", () => {
        expect(foo(1,1)).toBe(2);
    })
})