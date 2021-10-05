import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetPhotosService } from '../core/get-photos.service';
import { Photo } from '../core/photo.model';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})

export class PhotoDetailComponent implements OnInit {
  visible: boolean = false;
  id: number = 0;
  photo: Photo = {} as Photo
  constructor(private photoService: GetPhotosService, private router: Router) { }

  ngOnInit(): void {
    this.photoService.photoId.subscribe(x => this.id = x)
    this.photoService.changeBool.subscribe(x => this.visible = x)
    this.photoService.GetPhotoById(this.id).subscribe(y => this.photo = y)
  }

  onClick() {
    this.photoService.GetById(this.photo.id, false)
    this.router.navigateByUrl('');
  }
}
