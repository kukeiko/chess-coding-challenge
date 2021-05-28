/**
 * Implement the following function that should return a 2 dimensional string array representing a chess board,
 * where black is represented by "x", and white is represented by " " (a string with just a space).
 *
 * The 1st dimension of the 2-dimensional array should be the row. The 2nd dimension should be the column.
 *
 * Example:
 * const board = renderTextBoard(8, 8);
 * const firstRowSecondColumn = board[0][1]; // should be black, i.e. "x"
 * const fourthRowLastColumn = board[3][7] // should be white, i.e. " "
 */
export function renderChessBoardAsText(width: number, height: number): string[][] {
    const board: string[][] = [];

    for (let y = 0; y < height; y++) {
        const row: string[] = [];
        const rest = y % 2 == 0 ? 0 : 1;

        for (let x = 0; x < width; x++) {
            row.push(x % 2 == rest ? " " : "x");
        }

        board.push(row);
    }

    return board;
}
