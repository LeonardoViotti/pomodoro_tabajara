#----------------------------------------------------------------------------#
#
# 						Pomodoro timer - v0
#
#----------------------------------------------------------------------------#


#----------------------------------------------------------------------------#
#### Settings
#----------------------------------------------------------------------------#

#### Import Libraries
import time
import sys
import winsound # windows only for now
#import os

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
		while ti < t0 + td(minutes=dur):
		#while ti < t0 + td(seconds=dur): # for testing
			ti = dt.now()
			SameLinePrint(t0 + td(minutes=dur) - ti)
			#SameLinePrint(t0 + td(seconds=dur) - ti)

		print(message)
		winsound.Beep(550, 750)


#----------------------------------------------------------------------------#
#### Work cycle
#----------------------------------------------------------------------------#

work_gb = input('Shall we start working? (Y/n) ').strip().lower()

while work_gb not in start_ansYN:
	print("Sorry, I didn't get that.")
	start_gb = input('Shall we start working now? (Y/n) ')

while work_gb in start_ansY:
	print("Start working!")
		# Repeat work subcycle and break 3x
	for i in range(0,3):
		# Work cycle
		subcycle(Wcy_dur, Wcy_mes1)
			# Break cycle
		subcycle(Bcy_dur, Bcy_mes)

	# Last work cycle before long break
	subcycle(Wcy_dur, Wcy_mes2)
	# Long break!
	subcycle(LBcy_dur, LBcy_mes)
	
	work_gb = input('Shall we continue working? (Y/n) ').strip().lower()


print("Ok, have fun!")
time.sleep(1)
