import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './MovieDetails.component.html',
  styleUrl: './MovieDetails.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsComponent {}
