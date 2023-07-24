def create_board(rows, cols):
    return [[' ' for _ in range(cols)] for _ in range(rows)]

def print_board(board):
    print("   " + "  |  ".join(str(i) for i in range(len(board))))
    print(" " + "-" * (4 * len(board) - 1))
    for i in range(len(board)):
        print(f"{i} | " + " | ".join(board[i]))
        if i < len(board) - 1:
            print("  " + "-" * (4 * len(board) - 1))

def is_winner(board, row, col):
    directions = [(0, 1), (1, 0), (1, 1), (1, -1)]
    for dr, dc in directions:
        count = 1
        for i in range(1, 5):
            r, c = row + i * dr, col + i * dc
            if 0 <= r < len(board) and 0 <= c < len(board[0]) and board[r][c] == board[row][col]:
                count += 1
            else:
                break
        if count == 5:
            return True
    return False

def is_draw(board):
    for row in board:
        for cell in row:
            if cell == ' ':
                return False
    return True

def get_move():
    while True:
        try:
            row = int(input("Enter the row number: "))
            col = int(input("Enter the column number: "))
            return row, col
        except ValueError:
            print("Invalid input. Please enter numbers.")

def main():
    rows, cols = 15, 15
    board = create_board(rows, cols)
    player = 'X'

    while True:
        print_board(board)
        print(f"Player {player}'s turn")
        row, col = get_move()

        if 0 <= row < len(board) and 0 <= col < len(board[0]) and board[row][col] == ' ':
            board[row][col] = player

            if is_winner(board, row, col):
                print_board(board)
                print(f"Player {player} wins!")
                break

            if is_draw(board):
                print_board(board)
                print("It's a draw!")
                break

            player = 'X' if player == 'O' else 'O'
        else:
            print("Invalid move. Try again.")

if __name__ == "__main__":
    main()
