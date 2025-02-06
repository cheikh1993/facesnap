import { SnapeType } from "./snap-type-type"

export class FaceSnap {

    
    location?: string
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public imgUrl: string,
        public createdAt: Date,
        public snaps: number,
    ) {
        // this.id = crypto.randomUUID().substring(0, 8)
    }

    snap(type: SnapeType) {
        if (type === 'snap') {
            this.addSnap()
        } else if (type === 'unsnap') {
            this.remove()
        }
    }
    addSnap() {
        this.snaps++
    }
    remove() {
        this.snaps--
    }

    setLocation(location: string): void {
        this.location = location
    }

    withLocation(location: string): FaceSnap {
        this.setLocation(location)

        return this

    }
}