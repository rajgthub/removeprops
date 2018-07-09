const { 
        removeFalsyProps, 
        removeOneOrManyProps,
        removeOneOrManyFalsyProps,
        countFalsy
      } = require("./index");

describe("function removeFalsyProps:", () => {
    test("should return error message for default argument", () => {
        expect(() => removeFalsyProps()).toThrow("Argument is not a valid object");
    });
    test("should return error message for number argument", () => {
        expect(() => removeFalsyProps(2)).toThrow("Argument is not a valid object");
    });
    test("should return error message for number argument", () => {
        expect(() => removeFalsyProps("randomstring")).toThrow("Argument is not a valid object");
    });
    test("should return error message for array argument", () => {
        expect(() => removeFalsyProps([2, 3])).toThrow("Argument is not a valid object");
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
        expect(() => removeOneOrManyProps()).toThrow("Passed array or argument is not valid");
    })
    test('should throw an error for default parameter with argument', () => {
        expect(() => removeOneOrManyProps(undefined, "unkownkey"))
            .toThrow("Passed array or argument is not valid");
    })
    test('should return error for array of number', () => {
        expect(() => removeOneOrManyProps([2]))
            .toThrow("Passed array or argument is not valid")
    })
    test('should return error for array of number and object', () => {
        expect(() => removeOneOrManyProps([2, {k1: 20}]))
            .toThrow("Passed array or argument is not valid")
    })
    test("should return error for array of objects only passed", () => {
        expect(() => removeOneOrManyProps([{ k1: 1, k2: "4" }, { k1: 2, k2: "hi" }]))
            .toThrow("Passed array or argument is not valid");
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
    test("should throw an error for array of objects and many keys", () => {
         expect(() => removeOneOrManyProps([{ k1: 1, k2: "4" }, { k1: 2, k2: "hi" }]))
            .toThrow("Passed array or argument is not valid");
    });
})
describe('testing removeOneOrManyFalsyProps:', () => {
    test('should not remove any prop from the array of objects without second argument passed', 
        () => {
            expect(() => removeOneOrManyFalsyProps([
                { k1: 1, k2: "" },
                { k1: "", k2: "hi" }
            ])).toThrow("Passed array or argument is not valid")
        }
    )
    test('should remove all false props from the array of objects', 
        () => {
            expect(removeOneOrManyFalsyProps([
                { k1: 1, k2: "" },
                { k1: "", k2: "hi" }
            ], "k1")).toEqual([{ k1: 1, k2: ""},
                { k2: "hi" }])
        }
    )
    test('should not mutate original array',
        () => {
            let set = [{ k1: 1, k2: "" }, { k1: "", k2: "hi" }];
            let got = removeOneOrManyFalsyProps([
                { k1: 1, k2: "" },
                { k1: "", k2: "hi" }
            ], "k1", "k2")
            expect(set).toEqual([
              { k1: 1, k2: "" },
              { k1: "", k2: "hi" }
            ]);
            expect(got).toEqual([
                { k1: 1},
                {k2: "hi" }
            ]);
        }
    )
})
describe('Testing countFalsy', () => {
    let put = { k1: 2, k3: "something", k4: false, k5: "", k6: 0 }
    let got = countFalsy(put)
    let check = 3
    test(`should return 2 for the object ${JSON.stringify(put, undefined, 2)}`,
    () => {
        expect(got).toEqual(check)
    })
    test('should throw an error for function called with default value',
    () => {
        expect(() => countFalsy()).toThrow("Argument is not a valid object")
    })
})