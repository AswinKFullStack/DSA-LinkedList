class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size ;
    }
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;

        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    insert(value,index){
        if(index <0 || index > this.size){
            console.log("this position is invalid");
            return
        }
        if (index === 0){
            this.prepend(value);
        }else{
            const node = new Node(value);
            let prev = this.head
            for(let i =0 ; i < index -1 ; i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++
        }


    }
    removeDuplicates(){
        if(this.isEmpty()){
            console.log("list is empty");
            
            return null;
        }
        let linkedList  = ''
        if(this.size === 1){
            linkedList += this.head.value;
        }else{
            let curr = this.head;

            while(curr){
                
            let next = curr.next;
            while(next && next.value === curr.value){
                next = next.next;
                this.size--;
            }
            if(next === null){
                this.tail =curr;
            }
            curr.next = next;
            curr = next;

        }
        
    }
    this.print();
}

print(){
    if(this.isEmpty()){
        console.log("The list is empty");
        return "The list is empty"
    }
    let curr = this.head ;
    let linkedList = '';
    while(curr){
        linkedList += `${curr.value} `
        curr = curr.next;
    }
    console.log("This lisked list elements = " , linkedList)
    return  linkedList;

}
}
let list = new LinkedList();

list.prepend(10);
list.prepend(5);
list.append(5);
list.append(20);
list.append(20);
list.print();
list.removeDuplicates();
