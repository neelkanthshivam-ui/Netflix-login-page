//single inheritance

class Parent {
    showParent() {
        console.log("This is Parent Class");
    }
}

class Child extends Parent {
    showChild() {
        console.log("This is Child Class");
    }
}

// Create object
const obj = new Child();

obj.showParent(); // inherited method
obj.showChild();

//multipal inheritance

#include <iostream>
using namespace std;

// Base Class 1
class Student {
public:
    void studentInfo() {
        cout << "Student details" << endl;
    }
};

// Base Class 2
class Sports {
public:
    void sportsInfo() {
        cout << "Sports details" << endl;
    }
};

// Derived Class
class Result : public Student, public Sports {
public:
    void display() {
        cout << "Result displayed" << endl;
    }
};

int main() {
    Result obj;

    obj.studentInfo();
    obj.sportsInfo();
    obj.display();

    return 0;
}