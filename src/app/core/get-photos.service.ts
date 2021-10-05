import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Photo } from './photo.model'
import { Observable, BehaviorSubject, pipe } from 'rxjs'
import { find, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class GetPhotosService {
  private sourceId = new BehaviorSubject(0)
  photoId = this.sourceId.asObservable()

  private sourceBool = new BehaviorSubject(false)
  changeBool = this.sourceBool.asObservable()

  constructor(private httpClient: HttpClient) {
  }

  GetPhotos(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>("https://jsonplaceholder.typicode.com/photos")
  }

  GetPhotoById(id: number): Observable<Photo> {
    return this.GetPhotos().pipe(map(x => x.find(p => p.id === id)!))
  }

  GetById(id:number, bool: boolean) {
    this.sourceId.next(id)
    this.sourceBool.next(bool)
  }
}
