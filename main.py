import pygame
from pygame.locals import *
import sys
#VARIABLES
screen_x = 800
screen_y = 800
white = (255, 255, 255)
blue = (0, 0, 255)
black = (0, 0, 0)
line_length = 50
line_width = 10
x = 10
y = 10
fps = 60
fpsClock = pygame.time.Clock()
screen = pygame.display.set_mode((screen_x, screen_y),0,32)
screen.fill(white)

objects = []

def line(colour, x_cord, y_cord, length, width, border):
    pygame.draw.rect(screen, black, (x_cord, y_cord, length, width))
    pygame.draw.rect(screen, colour, (x_cord + border, y_cord + border, length - 2*border, width- 2*border))

def dot(x_cord, y_cord):
    pygame.draw.rect(screen, (0, 0, 0), x_cord, y_cord, line_width, line_width)
    


def Grid(gridSizeX, gridSizeY):
    x= 10
    y= 10
    for i in range(0, gridSizeY):


        for i in range(0, gridSizeX):
    
            line(white, x, y, line_length, line_width, 2)
            dot(x, y)
            line(white, x, y, line_width, line_length, 2)
            x += line_length
        x = 10
        y += line_length

    y= 10
    x = 10

    for i in range(0, gridSizeY):

        line(white, x + (line_length * (gridSizeX)), y, line_width, line_length, 2)
        
        y += line_length
    x = 10
    y = 10
    for i in range(0, gridSizeX):
     
        line(white, x , y + (line_length * (gridSizeY)), line_length, line_width, 2)
        x += line_length
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


main()








