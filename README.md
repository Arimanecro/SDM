# ***Algorithm - Size Does not Matter (SDM)***
***My implementation of Hash Table***

### :scroll: Stack:

   ***:heavy_check_mark: NodeJS***

 ## Core Ideas  :fire: 
:loudspeaker: ***All data are stored in array***

:loudspeaker: ***Size of the data does not matter (1 or 1 million records) because search doesn't exist in the traditional sense.
The search is performed with indexes of array.
For example: search of John@gmail.com will have address `arr[9][14][7][13][43][6][12][0][8][11][58][2][14][12].`
It will take only 0 or 1ms! (in 1 million records)***

:loudspeaker: **Insert of records looks like this:
`arr[9][14][7][13][43][6][12][0][8][11][58][2][14][12] `= John@gmail.com**

 ## Install :wrench:
**1)** Clone this repository

**2)** In index.js uncomment the string `// MyMod.CreateDB.processLineByLine()`

**3)** Unrar `users.rar`. Run "npm run start" (on Windows) or npm run unix_start (on Unix-like OS). It will start filling with 1 millions of users from the users.txt(33 MB)
It took me about 10min (Intel(R)_Core(TM)_i7-2600_CPU_@_3.40GHz + RAM: 16GB). PC which has less than 8GB, will get error messages from NodeJS.
You will be able to watch processing(counting) of filling array in your console.
If you don't want wait so much time, you can delete from users.txt few lines (for instance: only 10000)

**4)** Open in browser localhost:8000 and you can to register yourself and click on button "Search" or select any user from users.txt.
Line looks like *user:password*. Paste in search field **only user**.
