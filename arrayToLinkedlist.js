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

    print(){
        if(this.size === 0){
            console.log("list is empty")
            return null
        }

        let Linkedlist = ''

        if(this.size === 1){
            Linkedlist += `${this.head.value} `;
        }else{
            let curr = this.head;
            while(curr){
                Linkedlist += `${curr.value} `;
                curr = curr.next
            }
        }
        console.log("List = " ,Linkedlist)
        return Linkedlist;
    }
}
 
function arrayToLL(arr){
    if(arr.length === 0){
        return null
    }
    let list = new LinkedList();
    list.head = new Node(arr[0]);
    console.log( list.head)
    list.tail = list.head;
    list.size++;

    for(let i =1 ; i < arr.length ; i++){
        list.tail.next = new Node(arr[i]);
        list.tail = list.tail.next ;
        list.size++;
    }

    return list;
}

const array = [2,3,5,6];
const list = arrayToLL(array);
list.print();

console.log(list.tail);
console.log(list.head);
console.log(list.size);
