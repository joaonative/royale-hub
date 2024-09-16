import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clan-details',
  standalone: true,
  imports: [],
  templateUrl: './clan-details.component.html',
})
export class ClanDetailsComponent {
  tag: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.tag = params.get('tag');
      console.log(this.tag);
    });
  }
}
