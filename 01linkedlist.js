class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
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
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node
        }else{
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = node;
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
    removeFrom(index){
        if(index < 0 || index > this.size){
            console.log("Linked list is empty");
            return null;
        }
        let removeValue;
        if(index === 0 ){
            removeValue = this.head;
            this.head = removeValue.next;
            this.size--;
            return removeValue.value;
        }else{
            let prev = this.head;
            for(let i =0 ;i < index-1 ; i++){
                prev = prev.next
            }
            
                removeValue = prev.next;
                prev.next = removeValue.next;
                this.size--;
                return removeValue.value
           
        }
    }
    removeValue(value){
        if(this.isEmpty()){
            console.log("the linked lis is empty");
            return null;
        }
        let removeNode ;
        if(value === this.head.value){
            removeNode = this.head;
            this.head = removeNode.next;
            this.size--;
            return removeNode.value;
        }else{
            let prev = this.head;
            while(prev.next && prev.next.value !== value){
                prev =  prev.next;
            }
            if(prev.next){
                removeNode = prev.next;
                prev.next = removeNode.next  ;
                this.size--;
                return removeNode.value;
            }
            return null;
        }
    }
    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i =0;
        let curr = this.head;
        while(curr){
            if(curr.value === value){
                return i;
            }
            curr = curr.next;
            i++
        }
        return -1
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
list.append(15);
list.append(20);
console.log("list elements = ",list.print());
console.log("-------------------------------------------------------------------")

console.log("removed value is = ",list.removeFrom(1));
console.log("Is this list is empty ? = " ,list.isEmpty());
console.log("size of list = " ,list.getSize());
console.log("list elements = ",list.print());
console.log("now the list look like this  = ",list)
console.log("-------------------------------------------------------------------")

console.log("removed value is = ",list.removeValue(15));
console.log("Is this list is empty ? = " ,list.isEmpty());
console.log("size of list = " ,list.getSize());
console.log("list elements = ",list.print());
console.log("now the list look like this  = ",list)
console.log("-------------------------------------------------------------------")