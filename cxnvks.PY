import pygame

SCREEN = WIDTH, HEIGHT = 300, 300
CELLSIZE = 20
PADDING = 20
ROWS = COLS = (WIDTH- 4*PADDING) // CELLSIZE
print(ROWS, COLS)

pygame.init()
win = pygame.display.set_mode(SCREEN)

WHITE = (255, 255, 255)
RED = (252, 91, 0)
BLUE = (78, 193, 246)
GREEN = (0, 255, 0)
BLACK = (12, 12, 12)

running = True
while running:
    win.fill(WHITE)
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    for r in range(ROWS):
        for c in range(COLS):
            pygame.draw.circle(win, RED, (c*CELLSIZE + 2*PADDING, r*CELLSIZE + 2*PADDING), 2)

    pygame.display.update()
pygame.quit()