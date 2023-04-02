import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Place from '../interfaces/place';

@Injectable({
  providedIn: 'root'
})
export class PservicesService {

  constructor(private firestore:Firestore) {}

    addPlace(Place:Place) {

const placeRef = collection(this.firestore,'places');
return addDoc(placeRef,Place);

    }

    getPlaces(): Observable<Place[]> {
      const placeRef = collection(this.firestore, 'places');
      return collectionData(placeRef, { idField: 'id' }) as Observable<Place[]>;
    }
  
    deletePlace(place: Place) {
      const placeDocRef = doc(this.firestore, `places/${place.id}`);
      return deleteDoc(placeDocRef);
    }
   }

