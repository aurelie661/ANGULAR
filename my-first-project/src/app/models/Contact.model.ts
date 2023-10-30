class Contact{
    public static count=0
    id: number
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        public email: string,
        public phone: string,
    ){
        this.id = ++ Contact.count
    }
}
export  default Contact