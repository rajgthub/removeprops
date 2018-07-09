const { removeFalsyProps, removeOneOrManyProps } = require("./index");

describe("function removeFalsyProps:", () => {
    test("should return error message for default argument", () => {
        expect(removeFalsyProps()).toBe("Argument is not a valid object");
    });
    test("should return error message for number argument", () => {
        expect(removeFalsyProps(2)).toBe("Argument is not a valid object");
    });
    test("should return error message for number argument", () => {
        expect(removeFalsyProps("randomstring")).toBe("Argument is not a valid object");
    });
    test("should return error message for array argument", () => {
        expect(removeFalsyProps([2, 3])).toBe("Argument is not a valid object");
    });
    const obj = { k1: 2, k2: false, k3: "" };
    test("should remove falsy props for the object", () => {
        expect(removeFalsyProps(obj)).toEqual({ k1: 2 });
    });
    test("should not mutate passed object", () => {
        expect(obj).toEqual({ k1: 2, k2: false, k3: "" });
    });
});

describe('function removeOneOrManyProps:', () => {
    test('should throw an error for default parameter', () => {
        expect(removeOneOrManyProps()).toBe("Passed array or argument is not valid");
    })
    test('should throw an error for default parameter with argument', () => {
        expect(removeOneOrManyProps(undefined, "unkownkey"))
            .toBe("Passed array or argument is not valid");
    })
    test('should return error for array of number', () => {
        expect(removeOneOrManyProps([2]))
            .toBe("Passed array or argument is not valid")
    })
    test('should return error for array of number and object', () => {
        expect( removeOneOrManyProps([2, {k1: 20}]))
            .toBe("Passed array or argument is not valid")
    })
    test("should return error for array of objects only passed", () => {
      expect(removeOneOrManyProps([{ k1: 1, k2: "4" }, { k1: 2, k2: "hi" }]))
      .toBe("Passed array or argument is not valid");
    });
    test("should return removed props specified for array of objects and one key", () => {
        expect(removeOneOrManyProps([{ k1: 1, k2: "4" }, { k1: 2, k2: "hi" }], 'k1'))
            .toEqual([{ "k2": "4" }, { "k2": "hi" }]);
    });
    test("should return array of empty objects specified for array of objects and two keys...", () => {
        expect(removeOneOrManyProps([{ k1: 1, k2: "4" }, { k1: 2, k2: "hi" }], 'k1', 'k2'))
            .toEqual([{ }, { }]);
    });
    test("should return all objects for array of objects and two unknown keys", () => {
        expect(removeOneOrManyProps([{ k1: 1, k2: "4" }, { k1: 2, k2: "hi" }], 'k3', 'k4'))
            .toEqual([{ k1: 1, k2: "4" }, { k1: 2, k2: "hi" }]);
    });
    test("should return removed props specified for array of objects and many keys", () => {
         expect(removeOneOrManyProps([{ k1: 1, k2: "4" }, { k1: 2, k2: "hi" }]))
            .toBe("Passed array or argument is not valid");
    });
})