import { Component, OnInit } from '@angular/core';;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  image: string[] = [
    '../../assets/real_feedback_carousel.png',
    '../../assets/quality_materials_carousel.png',
    '../../assets/training_school_carousel.png',
    '../../assets/guarantee_carousel.png',
    '../../assets/adopt_experience_carousel.png',
    '../../assets/real_team_carousel.png'
  ];

  title: string[] = [
    'Реальні відгуки клієнтів',
    'Якісні метеріали',
    'Своя школа навчання',
    'Гарантія збереження вашого авто',
    'Переймаємо досвід у кращих',
    'Справжня команда'
  ];

  description: string[] = [
    'Позитивні відгуки наших клієнтів - реальне підтвердження\nякості нашої роботи',
    'Massa dictum eget imperdiet aliquet nibh ullamcorper. Lectus\nconsequat egestas elit platea massa. Vulputate sit eu turpis lorem\nvitae viverra risus dignissim aliquam.',
    'Massa dictum eget imperdiet aliquet nibh ullamcorper. Lectus\nconsequat egestas elit platea massa. Vulputate sit eu turpis lorem\nvitae viverra risus dignissim aliquam.',
    'Цілодобова охорона, камери відеоспостереження,\nюр. особа і прозора бухгалтерія - ось чому\nклієнти нам довіряють.',
    'Massa dictum eget imperdiet aliquet nibh ullamcorper. Lectus\nconsequat egestas elit platea massa. Vulputate sit eu turpis lorem\nnvitae viverra risus dignissim aliquam.',
    'Massa dictum eget imperdiet aliquet nibh ullamcorper. Lectus\nconsequat egestas elit platea massa. Vulputate sit eu turpis lorem\nnvitae viverra risus dignissim aliquam.'
  ];

  i=0;
    getImage() {
        return this.image[this.i];
    }
    getTitle() {
      return this.title[this.i];
    }
    getDescription() {
      return this.description[this.i];
    }

    getPrev() {
        this.i = this.i===0 ? 0 : this.i - 1;
    }
    
    getNext() {
      if(this.i < 5){
        this.i = this.i===this.image.length ? this.i : this.i + 1;
      }
    }
}