import { SnapeType } from "./snap-type-type"

export class FaceSnap {

    id: string
    location?: string
    constructor(public title: string,
        public description: string,
        public imgUrl: string,
        public createdAt: Date,
        public snaps: number,
    ) {
        this.id = crypto.randomUUID().substring(0, 8)
    }

    snap(type: SnapeType) {
        if (type === 'snap') {
            this.addSnap()
        } else if (type === 'unSnap') {
            this.remove()
        }
    }
    addSnap(): void {
        this.snaps++
    }
    remove(): void {
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