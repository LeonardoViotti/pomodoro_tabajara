
import time
import sys

from datetime import datetime  as dt
from datetime import timedelta as td

n_cycles = 0
time1 = dt.now().time()

dash = '-' * 30


print(dash)
print('{:<10s}{:>10d}'.format('Full work cycles',  n_cycles))
print(dash)
print('{:<10s}{:>8d}:{:d}'.format('Work sub-cycles 1',  time1.hour, time1.minute))
print('{:<10s}{:>7d}:{:d}'.format('Break sub-cycles 1', time1.hour, time1.minute))
