const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

    it("Books names should be sorted in descending order", () => {
        const input = [
            "Волшебник изумрудного города",
            "Властелин Колец",
            "Гарри Поттер",
        ];
        const result = sorting.sortByName(input);
        const expected = [
            "Властелин Колец",
            "Волшебник изумрудного города",
            "Гарри Поттер",
        ];
        expect(result).toEqual(expected)
    });

    it("Shouldn't change order if names are already sorted", () => {
        const input = [
            "Волшебник изумрудного города",
            "Волшебник изумрудного города",
            "Волшебник изумрудного города",
        ];
        const result = sorting.sortByName(input);
        const expected = [
            "Волшебник изумрудного города",
            "Волшебник изумрудного города",
            "Волшебник изумрудного города",
        ];
        expect(result).toEqual(expected)
    });
})
