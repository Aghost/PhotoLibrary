import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetPhotosService } from '../core/get-photos.service';
import { Photo } from '../core/photo.model';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss']
})
export class PhotoGridComponent implements OnInit {
  photos: Photo[] = [];
  isVisible: Boolean = false;
  constructor(private PhotoService: GetPhotosService, private router: Router) { }

  ngOnInit(): void {
    this.PhotoService.GetPhotos().subscribe(x => this.photos = x.slice(0, 30))
    this.isVisible = false
  }

  onClick(id: number) {
    this.PhotoService.GetById(id, true)
    this.router.navigate(['/Photo'])
  }

  showImg(id: number) {
    this.PhotoService.GetById(id, false)
    this.isVisible = true
  }
}
