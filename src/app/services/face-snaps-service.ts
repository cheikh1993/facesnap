import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapeType } from "../models/snap-type-type";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
        new FaceSnap(
            "Cheikh Faye",
            "description",
            "https://media.istockphoto.com/id/1985150440/photo/new-zealand-road-trip-at-lake-hawea.jpg?s=612x612&w=0&k=20&c=izifRtvETA0Az6ZkqTsyAnkIsbgqIhH9nwq8Wo3XqPM=",
            new Date,
            3
        ),
        new FaceSnap(
            "Ndeye Diop",
            "description",
            "https://media.istockphoto.com/id/1985150440/photo/new-zealand-road-trip-at-lake-hawea.jpg?s=612x612&w=0&k=20&c=izifRtvETA0Az6ZkqTsyAnkIsbgqIhH9nwq8Wo3XqPM=",
            new Date,
            30
        ).withLocation("A la gare de beaux maraiche"),
        new FaceSnap(
            "Moussa Faye",
            "J'aime monp etit frere",
            "https://media.istockphoto.com/id/1985150440/photo/new-zealand-road-trip-at-lake-hawea.jpg?s=612x612&w=0&k=20&c=izifRtvETA0Az6ZkqTsyAnkIsbgqIhH9nwq8Wo3XqPM=",
            new Date,
            100
        )
    ]

    getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps]
    }

    getFaceSnapsById(id: string): FaceSnap{
        const foundFaceSnapById = this.faceSnaps.find(face => face.id === id)
        if(!foundFaceSnapById){
            throw new Error("FaceSnap not found")
        }
        return foundFaceSnapById
    }
    snapFaceSnapById(faceSnapId: string, type: SnapeType): void {
        const foundFaceSnap = this.getFaceSnapsById(faceSnapId)
        foundFaceSnap.snap(type)
    }
}