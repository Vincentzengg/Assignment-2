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

objects = []


Grid(5, 5)

def main():
     
    while True:
        
        



        for event in pygame.event.get():
            if event.type==QUIT:
                pygame.quit()
                sys.exit()
        pygame.display.update()

        for object in objects:
            object.process()
        pygame.display.flip()
        fpsClock.tick(fps)

        Button(300, 400)


main()








