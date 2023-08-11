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
    }

    const prepend = (value) => {
        const node = Node(value)

        if (head == null){
            head = node;
        } else {
            node.nextNode = head
            head = node
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
        toString
    }

};

const list = LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(7);
list.prepend(4)

console.log(list.toString());
