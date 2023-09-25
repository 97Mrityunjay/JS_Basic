console.log(this);
let userName = {
    firstName: "Mrityunjay",
    lastName: "Kumar Jha",
    getName(){
        console.log(this);
        console.log(`${this.firstName} ${this.lastName}`);
    }
};
userName.getName();
userName.printDetails = function (){
    console.log(this);
}
userName.printDetails();

