class ListNode {
    public val: number;
    public next: ListNode | null;

    constructor(val?: number, next?: ListNode) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

class HashSet {
    private _arrLen: number = 100;
    private _hashArray: ListNode[];

    constructor() {
        this._hashArray = new Array(this._arrLen);
        for (let i = 0; i < this._arrLen; i++) {
            this._hashArray[i] = new ListNode();
        }
    }

    get hashArray(): ListNode[] {
        return this._hashArray;
    }

    public add(data: number): void {
        const index: number = data % this._arrLen;
        // find if data is available in the linkedList
        let isAvailable: boolean = false;
        let head: ListNode = this._hashArray[index];
        while (head.next !== null) {
            if (head.next.val === data) {
                isAvailable = true;
                break;
            }

            head = head.next;
        }

        //add data to the list, if not available
        if (!isAvailable) {
            const newNode: ListNode = new ListNode(data);
            head.next = newNode;
        }
    }

    public remove(data: number): void {
        const index: number = data % this._arrLen;
        let head: ListNode = this._hashArray[index];
        while (head.next !== null) {
            if (head.next.val === data) {
                head.next = head.next.next;
                break;
            }

            head = head.next;
        }
    }

    public contains(data: number): boolean {
        const index: number = data % this._arrLen;
        // find if data is available in the linkedList
        let isAvailable: boolean = false;
        let head: ListNode = this._hashArray[index];
        while (head.next !== null) {
            if (head.next.val === data) {
                isAvailable = true;
                break;
            }

            head = head.next;
        }

        return isAvailable;
    }
}

export const hashSet = new HashSet();