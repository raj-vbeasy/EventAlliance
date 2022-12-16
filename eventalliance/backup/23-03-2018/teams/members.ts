export class Members {

    // Team Edit
    id: number;
    firstName: string;
    lastName: string;


    constructor() { 
        this.reset();
    }

    public reset(){
        this.id = null;
        this.firstName = "";
        this.lastName = "";
    }
}