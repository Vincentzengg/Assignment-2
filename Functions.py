import pygame
import sys
screen_x = 500
screen_y = 500
screen = pygame.display.set_mode((screen_x, screen_y),0,32)
black = (0, 0, 0)
white = (255, 255, 255)
line_length = 100
line_width = 16
blue = (0, 0, 255)
red = (255, 0, 0)

def dot(x_cord, y_cord):
    pygame.draw.circle(screen, black, (x_cord + line_width/2, y_cord + line_width/2), line_width)

def line(colour, x_cord, y_cord, length, width, border, player):
    pygame.draw.rect(screen, black, (x_cord, y_cord, length, width))
    if player == 1:
        player_color = blue
    elif player == 69:
        player_color = white
    else:
        player_color = red
    line_rect = pygame.draw.rect(screen, player_color, (x_cord + border, y_cord + border, length - 2*border, width- 2*border))
    if line_rect.collidepoint(pygame.mouse.get_pos()):
        if event.type == pygame.MOUSEBUTTONDOWN:
            line_rect = pygame.draw.rect(screen, player_color, (x_cord + border, y_cord + border, length - 2*border, width- 2*border)) 

def Grid(gridSizeX, gridSizeY):

    x= 10
    y= 10
    for i in range(0, gridSizeY):
        for i in range(0, gridSizeX):
    
            line(white, x, y, line_length, line_width, 2, 69)
            line(white, x, y, line_width, line_length, 2, 69)
            dot(x, y)
            x += line_length
        x = 10
        y += line_length

    y= 10
    x = 10

    for i in range(0, gridSizeY):

        line(white, x + (line_length * (gridSizeX)), y, line_width, line_length, 2, 69)
        dot(x + (line_length * (gridSizeX)), y)
        
        y += line_length
    x = 10
    y = 10
    for i in range(0, gridSizeX):
     
        line(white, x , y + (line_length * (gridSizeY)), line_length, line_width, 2, 69)
        dot(x, y + (line_length * (gridSizeY)))
        x += line_length
    x = 10
    y = 10
    dot(x + (line_length * gridSizeX), y + (line_length *gridSizeY))



class Button():
    
    def __init__(self, x, y) -> None:

        width = line_length
        height = line_width
        self.image = line(white, x, y, 100, 16, 2)

    def draw():
        pos = pygame.mouse.get_pos      
        
    
        

        pass