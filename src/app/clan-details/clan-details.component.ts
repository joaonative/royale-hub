import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ClashRoyaleService } from '../services/clash-royale.service';
import { ClanDetails } from '../models/clash-royale.interfaces';
import { Router } from '@angular/router';
import { LoadingComponent } from '../ui/loading/loading.component';

@Component({
  selector: 'app-clan-details',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './clan-details.component.html',
})
export class ClanDetailsComponent {
  clanTag: string | null = null;

  clan?: ClanDetails;

  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clashRoyaleService: ClashRoyaleService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.clanTag = params.get('clanTag');
    });

    if (this.clanTag) {
      this.loading = true;
      this.clashRoyaleService.getClanByTag(this.clanTag).subscribe({
        next: (res) => (this.clan = res),
        error: () => this.router.navigate(['/404']),
        complete: () => (this.loading = false),
      });
    } else {
      this.router.navigate(['/404']);
    }
  }
}
