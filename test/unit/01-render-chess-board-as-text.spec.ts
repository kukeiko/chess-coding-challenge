import { renderChessBoardAsText } from "../../src/01-render-chess-board-as-text";

xdescribe("01-render-chess-board-as-text", () => {
    it("should render an 8x8 board", () => {
        // arrange
        const expected = [
            [" ", "x", " ", "x", " ", "x", " ", "x"],
            ["x", " ", "x", " ", "x", " ", "x", " "],
            [" ", "x", " ", "x", " ", "x", " ", "x"],
            ["x", " ", "x", " ", "x", " ", "x", " "],
            [" ", "x", " ", "x", " ", "x", " ", "x"],
            ["x", " ", "x", " ", "x", " ", "x", " "],
            [" ", "x", " ", "x", " ", "x", " ", "x"],
            ["x", " ", "x", " ", "x", " ", "x", " "],
        ];

        // act
        const actual = renderChessBoardAsText(8, 8);

        // assert
        expect(actual).toEqual(expected);
    });

    it("should render an 1x3 board", () => {
        // arrange
        const expected = [[" "], ["x"], [" "]];

        // act
        const actual = renderChessBoardAsText(1, 3);

        // assert
        expect(actual).toEqual(expected);
    });

    it("should render a 3x1 board", () => {
        // arrange
        const expected = [[" ", "x", " "]];

        // act
        const actual = renderChessBoardAsText(3, 1);

        // assert
        expect(actual).toEqual(expected);
    });

    it("should render a 0x0 board", () => {
        // arrange
        const expected: string[][] = [];

        // act
        const actual = renderChessBoardAsText(0, 0);

        // assert
        expect(actual).toEqual(expected);
    });
});
