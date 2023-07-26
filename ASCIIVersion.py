def GenerateRow(startingValue, squaresPerRow):
    row = []
    squareValue = startingValue

    for i in range(squaresPerRow):
        row.append(squareValue)
        squareValue += 1

    return row

def GenerateBoard():
    board = []

    for i in range(8):
        board.append(GenerateRow(i * 8, 8))

    return board

def print_board(board):
    for row in board:
        print(" | ".join(str(cell).rjust(2) if cell != 'X' and cell != 'O' else cell for cell in row))
        print("-" * (4 * len(row) - 1))

def get_move(player):
    while True:
        try:
            move = int(input(f"Player '{player}' - Enter the number (0-63) to place '{player}': "))
            if 0 <= move < 64:
                return move
            else:
                print("Invalid move. Try again.")
        except ValueError:
            print("Invalid input. Please enter a number.")

def switch_player(player):
    return 'X' if player == 'O' else 'O'

def check_win(board, player):
    # Check horizontal win
    for row in board:
        count = 0
        for cell in row:
            if cell == player:
                count += 1
                if count == 5:
                    return True
            else:
                count = 0

    # Check vertical win
    for col in range(len(board[0])):
        count = 0
        for row in range(len(board)):
            if board[row][col] == player:
                count += 1
                if count == 5:
                    return True
            else:
                count = 0

    # Check diagonal win (top-left to bottom-right)
    for i in range(len(board) - 4):
        for j in range(len(board[0]) - 4):
            count = 0
            for k in range(5):
                if board[i + k][j + k] == player:
                    count += 1
                    if count == 5:
                        return True
                else:
                    count = 0

    # Check diagonal win (bottom-left to top-right)
    for i in range(4, len(board)):
        for j in range(len(board[0]) - 4):
            count = 0
            for k in range(5):
                if board[i - k][j + k] == player:
                    count += 1
                    if count == 5:
                        return True
                else:
                    count = 0

    return False

board = GenerateBoard()
player = 'X'

for _ in range(64):  
    print_board(board)
    print("Player's turn:")
    move = get_move(player)
    row, col = move // 8, move % 8
    if board[row][col] not in ('X', 'O'):
        board[row][col] = player
        if check_win(board, player):
            print_board(board)
            print(f"Player '{player}' wins!")
            break
        player = switch_player(player)
    else:
        print("Invalid move. Cell already occupied.")
