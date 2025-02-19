import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

interface CreationItem {
  id: string;
  title: string;
  imgSrc: string;
}
@Component({
  selector: 'app-creations',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './creations.component.html'
})


export class CreationsComponent implements OnInit {
  creations: any = [
    { id: '01', title: 'Deep Earth', imgSrc: '../../../assets/images/desktop/image-deep-earth.jpg' },
    { id: '02', title: 'Night Arcade', imgSrc: '../../../assets/images/desktop/image-night-arcade.jpg' },
    { id: '03', title: 'Soccer Team VR', imgSrc: '../../../assets/images/desktop/image-soccer-team.jpg' },
    { id: '04', title: 'The Grid', imgSrc: '../../../assets/images/desktop/image-grid.jpg' },
    { id: '05', title: 'From Up Above VR', imgSrc: '../../../assets/images/desktop/image-from-above.jpg' },
    { id: '06', title: 'Pocket Borealis', imgSrc: '../../../assets/images/desktop/image-pocket-borealis.jpg' },
    { id: '07', title: 'The Curiosity', imgSrc: '../../../assets/images/desktop/image-curiosity.jpg' },
    { id: '08', title: 'Make It Fisheye', imgSrc: '../../../assets/images/desktop/image-fisheye.jpg' }
  ];
  ngOnInit() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      this.creations = [
        { id: '01', title: 'Deep Earth', imgSrc: '../../../assets/images/mobile/image-deep-earth.jpg' },
        { id: '02', title: 'Night Arcade', imgSrc: '../../../assets/images/mobile/image-night-arcade.jpg' },
        { id: '03', title: 'Soccer Team VR', imgSrc: '../../../assets/images/mobile/image-soccer-team.jpg' },
        { id: '04', title: 'The Grid', imgSrc: '../../../assets/images/mobile/image-grid.jpg' },
        { id: '05', title: 'From Up Above VR', imgSrc: '../../../assets/images/mobile/image-from-above.jpg' },
        { id: '06', title: 'Pocket Borealis', imgSrc: '../../../assets/images/mobile/image-pocket-borealis.jpg' },
        { id: '07', title: 'The Curiosity', imgSrc: '../../../assets/images/mobile/image-curiosity.jpg' },
        { id: '08', title: 'Make It Fisheye', imgSrc: '../../../assets/images/mobile/image-fisheye.jpg' }
      ];  // Mobile version
    } else {
      this.creations = [
        { id: '01', title: 'Deep Earth', imgSrc: '../../../assets/images/desktop/image-deep-earth.jpg' },
        { id: '02', title: 'Night Arcade', imgSrc: '../../../assets/images/desktop/image-night-arcade.jpg' },
        { id: '03', title: 'Soccer Team VR', imgSrc: '../../../assets/images/desktop/image-soccer-team.jpg' },
        { id: '04', title: 'The Grid', imgSrc: '../../../assets/images/desktop/image-grid.jpg' },
        { id: '05', title: 'From Up Above VR', imgSrc: '../../../assets/images/desktop/image-from-above.jpg' },
        { id: '06', title: 'Pocket Borealis', imgSrc: '../../../assets/images/desktop/image-pocket-borealis.jpg' },
        { id: '07', title: 'The Curiosity', imgSrc: '../../../assets/images/desktop/image-curiosity.jpg' },
        { id: '08', title: 'Make It Fisheye', imgSrc: '../../../assets/images/desktop/image-fisheye.jpg' }
      ];  // Desktop version
    }
  }


}
