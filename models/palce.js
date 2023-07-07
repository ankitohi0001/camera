class Place {
    constructor(title,imgaeUri,address,location){
        this.title = title;
        this.imgaeUri = imgaeUri;
        this.address = address;
        this.location = location;
        this.id = new Date().toString() + Math.random().toString();
    }
}