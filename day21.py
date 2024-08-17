class Person:
    def __init__(self,name,age,heartrate,area):
        self.name=name
        self.age=age
        self.heartrate=heartrate
        self.area=area
    def __str__(self):
        return f"{self.name} ({self.age}, {self.heartrate} bpm)"

hospital=[];
maxCapacity=2;

def view(area):
    print()
    print("--- "+area+" ---")
    for i in range(len(hospital)):
        if(hospital[i].area==area):
            print(hospital[i]);

def autoadmit():
    mostNeed=0
    admit=-1
    for i in range(len(hospital)):
        if(hospital[i].area=="Waiting Room"):
            need=hospital[i].heartrate*hospital[i].age
            if(need>mostNeed):
                mostNeed=need
                admit=i
    return admit

def autodischarge():
    leastNeed=9999999;
    discharge=-1
    for i in range(len(hospital)):
        if(hospital[i].area=="Hospital"):
            need=hospital[i].heartrate*hospital[i].age
            if(need<leastNeed):
                leastNeed=need
                discharge=i
    return discharge

def countpatients():
    count=0
    for i in range(len(hospital)):
        if(hospital[i].area=="Hospital"):
            count+=1
    return count

def sanitize(number,minimum,maximum):
    try:
        int(number)
    except ValueError:
        print()
        print("Corrupt Input: Not an integer.")
        return False
    if(int(number)<minimum):
        print()
        print(f"Corrupt Input: Cannot be less than {minimum}")
        return False
    if(int(number)>maximum):
        print()
        print(f"Corrupt Input: Cannot be greater than {maximum}")
        return False
    return True
        
while(True):
    print()
    print("----- Welcome! -----")
    print("1. Allow new person into waiting room")
    print("2. View waiting room")
    print("3. Admit new patient")
    print("4. View patients")
    print("5. Update stats of patient")
    print("6. Discharge patient")
    print("7. Update hospital capacity")
    print("8. Quit")
    print()
    choice=input("What would you like to do? ")
    if(sanitize(choice,1,8)):
        if(choice=="1"):
            name=input("Name: ")
            age=input("Age: ")
            heartrate=input("Heartrate: ")
            if(sanitize(age,0,130) and sanitize(heartrate,0,300)):
                hospital.append(Person(name,int(age),int(heartrate),"Waiting Room"))
        if(choice=="2"):
            view("Waiting Room")
        if(choice=="3"):
            if(countpatients()>=maxCapacity):
                print()
                print("Hospital is full. Discharge patient before admitting new one.")
            else:
                mode=input("1. Automatic or 2. Manual? ")
                if(sanitize(mode,1,2)):
                    admit=-1
                    if(mode=="1"):
                        admit=autoadmit()
                        if(admit==-1):
                            print()
                            print("No patients to admit from the waiting room.")
                    if(mode=="2"):
                        name=input("Name: ")
                        for i in range(len(hospital)):
                            if(hospital[i].name==name):
                                admit=i
                                break
                        if(admit==-1):
                            print()
                            print(f"Did not find person in waiting room with name {name}")
                    if(admit!=-1):
                        hospital[admit].area="Hospital"
                        print()
                        print(f"Admitted {hospital[admit]}")
        if(choice=="4"):
            view("Hospital")
        if(choice=="5"):
            name=input("Name: ")
            found=False
            for i in range(len(hospital)):
                    if(hospital[i].name==name):
                        print()
                        print(f"Found {hospital[i]}")
                        stat=input("Update 1. Age or 2. Heartrate? ")
                        if(sanitize(stat,1,2)):
                            if(stat=="1"):
                                age=input("New Age: ")
                                if(sanitize(age,0,130)):
                                    hospital[i].age=int(age)
                            if(stat=="2"):
                                heartrate=input("New Heartrate: ")
                                if(sanitize(heartrate,0,300)):
                                    hospital[i].heartrate=int(heartrate)
                        found=True
                        break
            if(not found):
                print()
                print(f"Did not find person in hospital with name {name}")
        if(choice=="6"):
            mode=input("1. Automatic or 2. Manual? ")
            discharge=-1
            if(mode=="1"):
                discharge=autodischarge()
                if(discharge==-1):
                    print()
                    print("No patients to discharge from the hospital.")
            if(mode=="2"):
                name=input("Name: ")
                for i in range(len(hospital)):
                    if(hospital[i].name==name):
                        discharge=i
                        break
                if(discharge==-1):
                    print()
                    print(f"Did not find person in hospital with name {name}")
            if(discharge!=-1):  
                print()
                print(f"Discharged {hospital[discharge]}")
                hospital.pop(discharge)
        if(choice=="7"):
           capacity=input("New Capacity: ")
           if(sanitize(capacity,1,100)):
               maxCapacity=int(capacity)
        if(choice=="8"):
            print()
            print("Thanks!")
            break
               
        
    
                    
            
    
        
        
        
