const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;        
    }

    append(data) {

        var newNode = new Node(data);

        if (this.length == 0){
            this._head = newNode;
            this._tail = newNode;
        }else{
            newNode.prev = this._tail;
            this._tail.next = newNode;
            this._tail = newNode;
        }         
        this.length++;
        return this;
    }

    head() {
        if(this._head != null) return this._head.data;
        else return null;
    }

    tail() {
        if(this._tail != null) return this._tail.data;
        else return null;
    }

    at(index) {
        if(index > -1 && index < this.length){
            var crrNode = this._head;
            var crrIndex = 0;
            while(crrIndex < index){
                crrNode = crrNode.next;
                crrIndex++;
            }
            return crrNode.data;
        }
        return null;
    }

    insertAt(index, data) {
        if(index > -1 && index < this.length){
            var crrNode = this._head;
            var crrIndex = 0;
            while(crrIndex < index){
                crrNode = crrNode.next;
                crrIndex++;
            }
            var newNode = new Node(data);
            var prevNode = crrNode.prev;
            newNode.prev = prevNode;
            newNode.next = crrNode;
            prevNode.next = newNode;
            crrNode.prevNode = crrNode;
            this.length++;
        }
        return this;
    }

    isEmpty() {
        
        return (this.length == 0);
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        return this;
    }

    deleteAt(index) {
        if(index > 0 && index < this.length){
            var crrNode = this._head;
            var crrIndex = 0;
            while(crrIndex < index){
                crrNode = crrNode.next;
                crrIndex++;
            }
            var prevNode = crrNode.prev;
            var nextNode = crrNode.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            this.length--;
        }
        return this;
    }

   
    reverse() {

        var crrNode = this._head;
        for(var i = 0; i < this.length; i++){
            var tempNode = crrNode.next;
            crrNode.next = crrNode.prev;
            crrNode.prev = tempNode;
            crrNode = tempNode;
        }
        crrNode = this._tail;
        this._tail = this._head;
        this._head = crrNode;
        return this;
    }

    indexOf(data) {
        var node = this._head;
        var index = 0;
        while (node != null){
            if(data == node.data) return index; 
            node = node.next 
            index++;
        }
        return -1;
    }
}

module.exports = LinkedList;
