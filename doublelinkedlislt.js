class Node{
    constructor(value){
        this.value = value;
        this.prev = null; 
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
           node.next =this.head;
           this.head.prev = node;
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
          node.prev = this.tail;
          this.tail.next = node;
          this.tail = node
        }
        this.size++;
    }
    insert(value,index){
        const node = new Node(value);
        if(index <0 || index > this.size ){
            return null
        }
       
        
        if(index === 0){
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }else{
            
            let pre = this.head;
            for(let i =0; i< index-1;i++){
                pre = pre.next;
            }
            node.next = pre.next;
            pre.next = node;
            node.prev = pre;
        }
        this.size++;
        return;
        
    }

    removeFromFrond(){
        if(this.isEmpty()){
            return null;
        }
        const removeNode = this.head
        if(this.size === 1){
            this.head =null;
            this.tail = null;
        }else{
            this.head = removeNode.next;
            this.head.prev = null;

        }
        this.size--;
        return removeNode;
    }
    removeFromEnd(){
        if(this.isEmpty()){
            return null;
        }
        const removeNode = this.tail
        if(this.size === 1){
            this.head =null;
            this.tail = null;
        }else{
            this.tail = removeNode.prev;
           this.tail.next = null;

        }
        this.size--;
        return removeNode;
    }
    print(){
        if(this.isEmpty()){
            console.log("List is empty");
            
            return null
        }
        let curr = this.head;
        let linkedList = ''
        while(curr){
            linkedList += `${curr.value} `
            curr = curr.next;
        }
        console.log("Linked List  = " ,linkedList);
        
        return;
    }
    reversePrint(){
        if(this.isEmpty()){
            console.log("List is empty");
            
            return null
        }
        let curr  = this.tail;
        let linkedList = ''
        while(curr){
            linkedList += `${curr.value} `
            curr = curr.prev;
        }
        console.log("Linked List  = " ,linkedList);
        return;
    }
}

let list = new LinkedList();


list.prepend(10);
list.prepend(5);
list.append(15);
list.append(20);
list.append(25);
// console.log(list);
// console.log(list.head.next.prev);
list.print()
list.reversePrint()
list.removeFromEnd()
list.print()
list.reversePrint()
list.removeFromFrond()
list.print()
list.reversePrint()