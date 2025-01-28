export class project{
    projectName:string;
    projectDesc:string;
    statusId:number;
    isActive:boolean;
    createdBy:number;
    createdOn:Date;
    changedBy:number;
    changedOn:Date;
    constructor(){
        this.projectName="";
        this.projectDesc="";
        this.statusId=0;
        this.isActive=false;
        this.createdBy=0;
        this.createdOn=new Date();
        this.changedBy=0;
        this.changedOn=new Date();
    }
}