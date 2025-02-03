import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [UpperCasePipe, NgIf, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
