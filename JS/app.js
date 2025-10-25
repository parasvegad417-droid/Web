let DATA= "Secret data";
class data{
    constructor(name,email){
        this.name=name;
        this.email=email;

    }
    viewdata(){
        console.log("data = ",DATA);
    }
};
class Admin extends data{
    constructor(name,email){
        super(name,email);
    }
    editData(){
       DATA =   console.log("data Has BEen edited :");
    }
}
let student1 = new data("paras","paras@emil.com");
let teacher =new data("bhtti","bhatii@email.com");
let admin1=new Admin("vegad","vegad@gmail.com");
