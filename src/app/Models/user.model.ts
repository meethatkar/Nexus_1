export class user{
    userName:string;
    userEmail:string;
    userPassword:string;
    isActive:boolean;
    createdBy:number;
    joinedData:Date;
    createdOn:Date;
    changedBy:number;
    changedOn:Date;
    constructor(){
        this.userName="";
        this.userEmail="";
        this.userPassword="";
        this.isActive=false;
        this.createdBy=0;
        this.joinedData=new Date();
        this.createdOn=new Date();
        this.changedBy=0;
        this.changedOn=new Date();
    }
}
