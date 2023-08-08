# Train-Boggie


WEVERVE SYSTEMS, INC
Context
There are 2 super fast trains, Train A and Train B. Train A travels from Chennai to New
Delhi. Train B travels from Trivandrum to Guwahati.

● Passengers can board these trains only at the source station.
● The trains have only reserved bogies and each bogie will only have passengers
to a specific station.
● When the train arrives at a station, the entire bogie with passengers is
detached from the train, and the train continues its journey.
The routes with station code and distances of each station from originating station
are as follows: (STATION (CODE) - DISTANCE ):

Train A                                                 Train B

CHENNAI (CHN) - 0                    TRIVANDRUM (TVC) -0

SALEM (SLM) - 350                    SHORANUR (SRR) - 300

BANGALORE (BLR) - 550         MANGALORE (MAQ) - 600

KURNOOL (KRN) - 900             MADGAON (MAO) - 1000

HYDERABAD (HYB) - 1200      PUNE (PNE) - 1400

NAGPUR (NGP) - 1600              HYDERABAD (HYB) - 2000

ITARSI (ITJ) - 1900                    NAGPUR (NGP) - 2400

BHOPAL (BPL) - 2000               ITARSI (ITJ) - 2700

AGRA (AGA) - 2500                   BHOPAL (BPL) - 2800

NEW DELHI (NDL) - 2700       PATNA (PTA) - 3800

                                                     NEW JALPAIGURI (NJP) - 4200

                                                     GUWAHATI (GHY) - 4700

The Merger
During a part of their journey, these trains follow the same route and travel as one
train - Train AB.

● Trains start from their respective source stations and meet at Hyderabad.
● Trains travel as Train AB from Hyderabad till Bhopal as a single train.
● From Bhopal the trains travel again as two independent trains, Train A and
Train B.
● Train A can have passengers in the route for Train B and vice versa. Eg: People
can board from Chennai in Train A and travel to Guwahati.
Merging Rules
● First, both the engines are attached.
● The remaining bogies from Hyderabad are attached in the descending order of
distances they have to travel further from Hyderabad.
● When the merged train reaches a station, the bogie for that station will be the
last one and it can be detached quickly.


Goal
Given the initial bogie order of both trains, your program should print :

● The bogie order of arrival of Train A and Train B at Hyderabad
● Train AB's departure bogie order from Hyderabad
Assumptions
● The passengers board only from the source station.
● If there are no passenger bogies to travel from Hyderabad station, then the
train should stop there. In such a case it should print JOURNEY_ENDED
● The distances are in kilometres.
● If there are multiple bogies with the same station as its destination, then they
can be arranged next to each other when the Train AB leaves Hyderabad.
Input format
Your program should take as input the order of bogies of each train from the source station

TRAIN_A ENGINE BOGIE_1 BOGIE_2 BOGIE_3 ... BOGIE_N
TRAIN_B ENGINE BOGIE_1 BOGIE_2 BOGIE_3 ... BOGIE_N

Examples :
TRAIN_A ENGINE NDL NDL KRN GHY SLM NJP NGP BLR
TRAIN_B ENGINE NJP GHY AGA PNE MAO BPL PTA
Output format
The output should be
● The order of bogies for Train A while arriving at Hyderabad.
● The order of bogies for Train B while arriving at Hyderabad.
● The order of bogies for Train AB (merged train) while departing from Hyderabad.
Examples :
ARRIVAL TRAIN_A ENGINE NDL NDL GHY NJP NGP
ARRIVAL TRAIN_B ENGINE NJP GHY AGA BPL PTAP
DEPARTURE TRAIN_AB ENGINE ENGINE GHY GHY NJP NJP PTA NDL NDL AGA BPL NGP


Sample Input/Output 1
INPUT 

TRAIN_A ENGINE NDL NDL KRN GHY SLM NJP NGP BLR
TRAIN_B ENGINE NJP GHY AGA PNE MAO BPL PTA

OUTPUT

ARRIVAL TRAIN_A ENGINE NDL NDL GHY NJP NGP
ARRIVAL TRAIN_B ENGINE NJP GHY AGA BPL PTA
DEPARTURE TRAIN_AB ENGINE ENGINE GHY GHY NJP NJP P NDL AGA BPL NGP

Sample Input/Output 2
INPUT 

TRAIN_A ENGINE SLM BLR KRN HYB SLM NGP ITJ
TRAIN_B ENGINE SRR MAO NJP PNE PTA

OUTPUT

ARRIVAL TRAIN_A ENGINE HYB NGP ITJ
ARRIVAL TRAIN_B ENGINE NJP PTA
DEPARTURE TRAIN_AB ENGINE ENGINE NJP PTA ITJ NGP