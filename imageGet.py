import cv2
import numpy as np
from PIL import ImageGrab
import time






def getScreenShot():
    img = ImageGrab.grab()
    img_np = np.array(img)
    gray_img = cv2.cvtColor(img_np, cv2.COLOR_BGR2GRAY)
    cv2.imwrite("./img/screenshot.png", gray_img)


def runProgram(timeForScreenshot):
    while True:
        getScreenShot()
        time.sleep(timeForScreenshot)

##main program, set the time for screenshots
seconds = 1
runProgram(seconds)