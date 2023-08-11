console.log("hello world")

const Node = (value = null, nextNode = null) => {
    this.value = value
    this.nextNode = nextNode
    return {
        value, nextNode
    }
    // const node = {
    //     value,
    //     nextNode
    // }
    // return node
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
        toString
    }

};

// const list = LinkedList()
// list.append(value = 1)
// list.append(value=3)
// console.log(list.toString())
// list.append(value=9)
// console.log(list.toString())

const list = LinkedList();
list.append(1);
list.append(2);
list.append(3);

console.log(list.toString());
