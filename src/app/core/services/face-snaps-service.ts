import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapeType } from "../models/snap-type-type";
import { HttpClient } from "@angular/common/http";
import { Observable, map, switchMap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {

    constructor(private http: HttpClient){}
   
    private API: string = "http://localhost:3000/facesnaps"

    getFaceSnaps(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>(this.API)
    }

    getFaceSnapsById(id: number): Observable<FaceSnap>{
       
        return this.http.get<FaceSnap>(`${this.API}/${id}`)

    }
    snapFaceSnapById(faceSnapId: number, snapType:  'snap' | 'unsnap'): Observable<FaceSnap> {
        return this.getFaceSnapsById(faceSnapId).pipe(
            map(faceSnap => ({
                ...faceSnap,
                snaps: snapType === 'snap' ?  faceSnap.snaps + 1  : faceSnap.snaps -1 
            })),
            switchMap(updatedSnap => this.http.put<FaceSnap>(`${this.API}/${faceSnapId}`,updatedSnap))
        )
       
    }

    addFaceSnaps(value: {title: string, description:string, imgUrl:string, location?: string}): Observable<FaceSnap>{
      
            return this.getFaceSnaps().pipe(
                map(facesnap=> [...facesnap].sort((a, b) =>  a.id - b.id)),
                map(sortedFcesnap => sortedFcesnap[sortedFcesnap.length - 1]),
                map(previewFacesnap => ({
                    ...value,
                    snaps: 0,
                    createdAt: new Date(),
                    id: previewFacesnap.id +1,
                })), switchMap(newFaceSnap => this.http.post<FaceSnap>(`${this.API}`, newFaceSnap) )
            )
    }

    


    // addFaceSnaps(formValue: { title: string, description: string, imgUrl: string, location?: string }) {
    //     const faceSnap = new FaceSnap(
    //         formValue.title,
    //         formValue.description,
    //         formValue.imgUrl, 
    //         new Date(),
    //         0
    //     );
    
    //     if (formValue.location) {
    //         faceSnap.withLocation(formValue.location);
    //     }
    
    //     this.faceSnaps.push(faceSnap);
    // }
    
}