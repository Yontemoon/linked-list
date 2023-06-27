const LinkedList = () => {

    let head = null;
    let length = 0;

    const append = (value) => {
        const newNode = Node(value);

        if (head == null) {
            head = newNode;
        } else {
            let current = head;
            while (current.next != null) {
                current = current.next
            }
            current.next = newNode;
        }
        length++;
    }

    const prepend = (value) => {
        const newNode = Node(value);

        if(head == null) {
            head = newNode;
        } else {
            let current = head;
            newNode.next = current;
            head = newNode;
        }
    }

    const size = () => {return length};

    const headNode = () => {
        if (head === null) {
            console.log("There is no head");
        } else {
            return head;
        }
    }

    const tailNode = () => {
        if (head === null) {
            console.log("There is no tail");
        } else {
            let current = head;
            while (current.next !== null) {
                current = current.next;
            }
            return current;
        }
    }

    const at = (index) => {
        if (length === 0) {
            console.log('There are no indexes');
        } else {
            let current = head;
            for (let i = 0; i < index; i++) {
                if (current.next === null) {
                    console.log('That index does not exist');
                } else {
                    current = current.next;
                }
            }
        }
        return current;
    }

    const pop = () => {
        if (head === null) {
            console.log('There are no linked lists');
        } else {
            let current = head;
            while (current.next.next !== null) {
                current = current.next;
            }
            current.next = null;
            length--;
        }
    }

    const contains = (value) => {
        if (head === null) {
            return false;
        } else {
            let current = head;
            while (current.next !== null) {
                if (current.value === value) {
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }

    const find = (value) => {
        if (head === null) {
            return null;
        } else {
            let index = 0;
            let current = head;
            while (current.next !== null) {
                if (current.value === value) {
                    return index;
                }
                current = current.next;
                index++;
            }
        }
        return null;
    }

    const toString = () => {
        if (head === null) {
            console.log('There are no linked lists to show');
        } else {
            let str = "";
            let current = head;
            while (current.next !== null) {
                str = str + `( ${current.value} ) --> `;
                current = current.next;
            }
            str = str + ` ( ${current.value} ) --> ( null )`;
            return str;
        }
    }

    const insertAt = (value, index) => {
        if (head === null) {
            console.log('There are no linked lists yet');
        } else {
            let current = head;
            let previous = null;
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
                if (current == null) break;
            }
            const newValue = Node(value);
            length++;
            previous.next = newValue;
            newValue.next = current;
        }
    }

    const removeAt = (index) => {
        if (head === null) {
            console.log('There are no linked lists');
        } else {
            let current = head;
            let previous = null;
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
                if (current == null) return 'Does not Exist!';
            }
            previous.next = current.next;
        }
    }
    

    return { append, prepend, size, headNode, tailNode, at, pop, contains, find, toString, insertAt, removeAt };
}


const Node = (value) => {
    if (value) {
        value = value;
    } else {
        value = null;
    }

    next = null;
    return {value, next}
}

const list = LinkedList();