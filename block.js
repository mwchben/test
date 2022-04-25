//constructor -> function that helps us define unique attributes for any  instance of a class
//and assign them to args passed


//the block will have *(timestamp, lastHash, hash based on its own data and data itself)
//toString (debugging) returns what the specific instance of the class looks like
class Block{
    constructor(timestamp, lastHash, hash,data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString(){
        return `Block fields:
        Timestamp-> ${this.timestamp}
        lastHash-> ${this.lastHash.substring(0,12)}
        hash-> ${this.hash.substring(0,12)}
        data-> ${this.data}
        `;
    }

    //static - able to call the f(x) without having to make new instance of the Block class  as long as we have the class imported
    //new - create new instance of the Block class 
    //this - the f(x) itself
    static genesis(){
        return new this('begins','____','first67hash23',[]);
    }
}

export default Block;