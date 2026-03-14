// 3 -> public , private , protected
//public -> default access modifier
//private -> its access inside class
//protected -> access inside class and inhert
//property and methods 
class Methods{

    public add(){
        console.log(2+5)
    }

    private sub(){
        console.log(7-3)
    }

    protected mul(){
console.log(6*7)
    }


    public data(){

        this.mul()
        this.sub()
    }
}

let acc=new Methods()
acc.add()
acc.data()