import pygame
from pygame.locals import *
import sys
#VARIABLES
screen_x = 1000
screen_y = 1000
white = (255, 255, 255)
blue = (0, 0, 255)
black = (0, 0, 0)
screen = pygame.display.set_mode((screen_x, screen_y),0,32)
screen.fill(white)

def line(colour, x_cord, y_cord, length, width, border):
    pygame.draw.rect(screen, black, (x_cord, y_cord, length, width))
    pygame.draw.rect(screen, colour, (x_cord + border, y_cord + border, length - 2*border, width- 2*border))
line(white, screen_x/2, screen_y/2, 50, 30, 2)


def main():
     
    while True:


        

        

        for event in pygame.event.get():
            if event.type==QUIT:
                pygame.quit()
                sys.exit()
        pygame.display.update()



main()








