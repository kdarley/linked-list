console.log("hello world")

const Node = (value = null, nextNode = null) => {
    this.value = value
    this.nextNode = nextNode
    return {
        value, nextNode
    }
};

const LinkedList = () => {
    let head = null;
    let numNodes = null;
    
    const append = (value = null, nextNode = null) => {
        const node = Node(value, nextNode)
        // check if head exists
        if (head == null){
            head = node;
        } else { // iterate to the end of list
            // define start point
            let currentNode = head;
            while (currentNode.nextNode){
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = node;
        }
        numNodes++
    }

    const prepend = (value) => {
        const node = Node(value)

        if (head == null){
            head = node;
        } else {
            node.nextNode = head
            head = node
        }
        numNodes++
    }

    const size = () => {
        return numNodes
    }

    const returnHead = () => {
        return head
    }

    const returnTail = () => {
        let currentNode = head
        while (currentNode.nextNode){
            currentNode = currentNode.nextNode
        }
        return currentNode
    }

    const atIndex = (index) => {
        if (head == null) {
            return "list is empty"
        }

        let currentIndex = 0;
        let currentNode = head;
        while (currentNode) {
            if (currentIndex == index){
                return currentNode;
            }
            currentIndex++
            currentNode = currentNode.nextNode
        }
        return "index does not exist"            
    }

    const pop = () => {
        let currentNode = head
        let lastNode = null
        while (currentNode.nextNode){
            lastNode = currentNode
            currentNode = currentNode.nextNode
        }
        lastNode.nextNode = null
        numNodes--
    }

    const contains = (value) => {
        let currentNode = head
        let inList = false
        while (currentNode){
            if (currentNode.value == value){
                inList = true
                return inList
            }
            currentNode = currentNode.nextNode
        }
        return inList
    }

    const find = (value) => {
        let currentNode = head
        let index = 0;
        while (currentNode){
            if (value == currentNode.value){
                return index
            } 
            currentNode = currentNode.nextNode
            index++
        }
        return "value does not exist in list"
    }

    const insertAt = (value, index) => {
        const node = Node(value)
        if (index == 0) {
            node.nextNode = head;
            head = node;
        }
        else {
            let currentNode = head;
            let currentIndex = 0
            let lastNode = null

            while (currentNode && currentIndex < index){
                lastNode = currentNode;
                currentNode = currentNode.nextNode;
                currentIndex++;
            }
            if (currentIndex == index){
                lastNode.nextNode = node;
                node.nextNode = currentNode
            } else {
                return "index not in list"
            }
        }
    }

    const remove = (index) => {
        let currentNode = head;
        let currentIndex = 0
        let lastNode = null

        if (index==0){
            head = currentNode.nextNode
            return
        }

        while (currentNode && currentIndex < index){
            lastNode = currentNode;
            currentNode = currentNode.nextNode;
            currentIndex++
        }
        if (currentIndex == index){
            lastNode.nextNode = currentNode.nextNode
        } else {
            return "index not in list"
        }
    }

    const toString = () => {
        if (head == null){
            return "null"
        } else {
            let string = ""
            let currentNode = head;
            while (currentNode){
                string += "( " + currentNode.value.toString() + " ) -> "
                currentNode = currentNode.nextNode
            }
            return string + "null"
        }
    }

    return {
        append,
        prepend,
        size,
        returnHead,
        returnTail,
        atIndex,
        pop,
        contains,
        find,
        insertAt,
        remove,
        toString
    }

};

const list = LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(7);
list.prepend(4);

console.log("Linked List: ", list.toString());
console.log("nodes in list: ", list.size())
console.log("head: ", list.returnHead())
console.log("tail: ", list.returnTail())
console.log("node at index: ", list.atIndex(1))

console.log("Linked List: ", list.toString());
list.pop()
console.log("Linked List: ", list.toString());
list.pop()
console.log("Linked List: ", list.toString());
console.log("is 7 in the list?", list.contains(7))
console.log("is 2 in the list?", list.contains(2))
console.log("where is 7?", list.find(7))
console.log("where is 2?", list.find(2))
list.insertAt(90, 3)
console.log("Linked List: ", list.toString());

list.remove(1)
console.log("Linked List: ", list.toString());

list.remove(0)
console.log("Linked List: ", list.toString());

list.remove(1)
console.log("Linked List: ", list.toString());