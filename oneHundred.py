import random

NotDeath = 192
Muchenica = 257
Gromoboy = 192-198 * 2
Damage = 193-199

count_of_steps = 0
count_of_loops = 0
count_of_experiments = 0

room_with_boxes = {}
variants_of_contents = []
numbers_of_prisoners = []

initial_number = 0
num_of_win = 0

def initialize():
    
    initial_number=int(input("enter num of prisoners -- "))
    count_of_experiments = int(input("enter count of experiments -- "))
    
    for i in range(1, initial_number+1):
        numbers_of_prisoners.append(i)
        variants_of_contents.append(i)
        room_with_boxes[str(i)]=0
    
    
   

    for i in range(1, initial_number+1):        
        room_with_boxes[str(i)] = variants_of_contents.pop(random.randint(0, len(variants_of_contents)-1)) 
    print(room_with_boxes)
    print(count_of_experiments)

    # for i in range(1, count_of_experiments+1):
    #     while()
    
initialize()
