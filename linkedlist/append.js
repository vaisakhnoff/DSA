class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Linkedlist{
    constructor(){
this.head = null;
    }
    append(data) {
        let newNode = new Node(data);
        if(this.head===null){
            this.head = newNode
            return;
        }
        let current = this.head;
    
        while(current.next!==null){
            current = current.next;
        }
        current.next = newNode
    }
    
    print(){
        let current = this.head;
        let result = "";
        while( current!==null){
            result+=current.data +"->";
            current =current.next;
        }
        console.log(result+"null");
        
    }
}

let list = new Linkedlist;
list.append(10);
list.append(20);
list.append(30);

list.print();