
import time
import sys

from datetime import datetime  as dt
from datetime import timedelta as td

n_cycles = 0
time1 = dt.now().time()

dash = '-' * 30

# Print correct width Functions
def tabPrint(obj1, obj2):
    colLength = 40
    w = colLength - len(obj1) + 1
    wform = '{:<' + str(0) + 's}{:^' + str(w) + 's}'
    print(wform.format(str(obj1),  str(obj2)))
    #print('{:<10s}{:>10d}:{:d}'.format(obj1,  obj2))

# Print time function
def timePrint(text, timeobject):
    pto1 = timeobject.hour
    pto2 = timeobject.minute
    pTimeOb = str(pto1) + ':' + str(pto2)
    tabPrint(text, pTimeOb)
    #print('{:<10s}{:>8d}:{:d}'.format(text,  timeobject.hour, timeobject.minute))


print(dash)
tabPrint('Full work cycles', n_cycles)
print(dash)
timePrint("Work sub-cycle  1", time1)
timePrint("Break sub-cycle 1", time1)
timePrint("Work sub-cycle  2", time1)
timePrint("Break sub-cycle 2", time1)
timePrint("Work sub-cycle  3", time1)
timePrint("Break sub-cycle 3", time1)
timePrint("Work sub-cycle  4", time1)
timePrint("Long Break sub-cycle", time1)
#print('{:<10s}{:>8d}:{:d}'.format('Work sub-cycles 1',  time1.hour, time1.minute))
#print('{:<10s}{:>7d}:{:d}'.format('Break sub-cycles 1', time1.hour, time1.minute))
