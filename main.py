import pygame
from pygame.locals import *
from Functions import *
import sys
#VARIABLES
screen_x = 800
screen_y = 800
white = (255, 255, 255)
blue = (0, 0, 255)
black = (0, 0, 0)
red = (255, 0, 0)

x = 10
y = 10
fps = 60
fpsClock = pygame.time.Clock()
screen = pygame.display.set_mode((screen_x, screen_y),0,32)
screen.fill(white)
CURRENT_PLAYER = 1
objects = []
(mouseX, mouseY) = pygame.mouse.get_pos()




Grid(5, 5)

def main():
     
    while True:
        
        
        
        

        for event in pygame.event.get():
            if event.type==QUIT:
                pygame.quit()
                sys.exit()
            elif event.type == MOUSEBUTTONDOWN:
                mouse_position = pygame.mouse.get_pos()
                if (click_rect.collidepoint(mouse_position)):
                    print("Hit")
                else:
                    print("You missed")

        for object in objects:
            object.process()
        pygame.display.flip()
        fpsClock.tick(fps)

        


main()








