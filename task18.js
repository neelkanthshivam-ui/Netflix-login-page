class employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

work(){
     console.log(`${this.name} is working`);
}

showdetails(){
    console.log(`ID: ${this.id}, Name: ${this.name}`);
}
}

class developer extends employee{
    constructor(id, name, programming_language) {
        super(id, name);
        this.programming_language = programming_language;
    }


    writecode(){
        console.log(`${this.name} is writing ${this.programming_language} code`);
    }

    showdetails(){
        super.showdetails();
        console.log(`Programming Language: ${this.programming_language}`);
    }
}
 class frontenddeveloper extends developer{
    constructor(id, name, programming_language, framework) {
        super(id, name, programming_language);
        this.framework = framework;
    }
    buildui(){
        console.log(`${this.name} is building UI using ${this.framework}`);
    }

    showdetails(){
        super.showdetails();
        console.log(`Framework: ${this.framework}`);
    }
    work(){
        console.log(`${this.name} is working on frontend development`);
    }
}

class manager extends employee{
    constructor(id, name,  teamsize) {
        super(id, name);
        this.teamsize = teamsize;
    }
    
    conductmeeting(){
        console.log(`${this.name} is conducting a meeting with ${this.teamsize} team members`);

}
work(){ console.log(`${this.name} is managing the team`);


}
}

const emp1 = new employee("101", "rahul" );


const emp2 = new frontenddeveloper("102", "ajay", "JavaScript", "React");

const emp3 = new manager(
    "103", "pravin", 10);


emp1.work();
emp1.showdetails(); 

emp2.work();
emp2.writecode();
emp2.buildui();

 emp3.work();
 emp3.conductmeeting();