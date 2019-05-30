

#----------------------------------------------------------------------------#
#### Settings
#----------------------------------------------------------------------------#

#### Import Libraries
import time
import sys
import winsound # windows only for now
import threading

from datetime import datetime  as dt
from datetime import timedelta as td

#### System settings
sys.stdout.flush()

#----------------------------------------------------------------------------#
#### Globals
#----------------------------------------------------------------------------#

#### Cycle time
Wcy_dur = 25 # Work
Bcy_dur = 5 # Break
LBcy_dur = 20 # Long break

#### Messages
Wcy_mes1 = "Work cycle finished! Have a break."
Wcy_mes2 = "Last work cycle finished! Long break now."
Bcy_mes = "Break finished. Go back to work!"
LBcy_mes = "Full cycle finished!"

#### Acceptable answers
start_ansY = ["y", "yes", "oui", "sim", "si", "yeah"]
start_ansN = ["n",  "no", "nao", "nop", "not"]

start_ansYN = start_ansY + start_ansN

#----------------------------------------------------------------------------#
#### Functions
#----------------------------------------------------------------------------#

#### Printing on the same line
def backspace(n):
    # print((b'\x08').decode(), end='')     # use \x08 char to go back
    print('\r', end='')                     # use '\r' to go back

def SameLinePrint(p):
    # print((b'\x08').decode(), end='')     # use \x08 char to go back
    print(p, end='')
    backspace(len(str(p)))   


#### Subcycle function (in seconds replace with minutes)
def subcycle(dur, message):
    t0 = dt.now()
    ti = dt.now()
    while ti < t0 + td(seconds=dur):
    #while ti < t0 + td(seconds=dur): # for testing
        ti = dt.now()
        SameLinePrint(t0 + td(seconds=dur) - ti)
        #SameLinePrint(t0 + td(seconds=dur) - ti)

    print(ti.time())
    print(message)
    winsound.Beep(550, 750)


#----------------------------------------------------------------------------#
#### cuncurrency
#----------------------------------------------------------------------------#


def thread_function():
    pause_gb = input('Pause?')

    while pause_gb not in "p":
        print("Sorry, I didn't get that.")
        print(pause_gb)

        pause_gb = input('Pause?')

if __name__ == "__main__":
    x = threading.Thread(target=thread_function)
    x.start()
    subcycle(5, "worked?")
    #x.is_alive()
    # x.join()
    