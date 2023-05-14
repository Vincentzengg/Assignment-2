import pygame

pygame.init()

SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
FPS = 30

clock = pygame.time.Clock()
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Menu")

#images
play_img = pygame.image.load('./IMAGES/play.png').convert_alpha()

# define font
FONT = pygame.font.SysFont('arialblack', 40)

#game variables
game_play = False

# define colors
WHITE = (255, 255, 255)
background_colour = (30, 50, 20)
TEXT_COLOR = (WHITE)

class Button():
    def __init__(self, x, y, image, scale):
        self.image = image
        self.rect = self.image.get_rect()
        self.rect.topleft = (x, y)
    
    def draw(self):
        #draw button
        screen.blit(self.image, (self.rect.x, self.rect.y))

play_button = Button(100, 100, play_img, 0.5)
#Button instances



def draw_text(text, font, color, x, y):
    img = font.render(text, True, color)
    img_rect = img.get_rect(center=(x, y))
    screen.blit(img, (img_rect))




run = True
while run:
    screen.fill(background_colour)
    

    if game_play == True:
        pass
    else:
        draw_text("PLAY", FONT, TEXT_COLOR, (SCREEN_WIDTH/2), 200)
        draw_text("OPTIONS", FONT, TEXT_COLOR, (SCREEN_WIDTH/2), 250)
        draw_text("QUIT", FONT, TEXT_COLOR, (SCREEN_WIDTH/2), 300)

    
    play_button.draw()

    

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            run = False
    pygame.display.update()
    clock.tick(FPS)

