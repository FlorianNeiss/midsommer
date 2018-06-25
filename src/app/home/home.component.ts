import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { Universe } from '@app/models/universe';
import { UniverseApiService } from '@app/core/api-services/universe-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public universe: Universe;
  isLoading: boolean;

  constructor(private universeService: UniverseApiService) { }

  ngOnInit() {
    this.isLoading = true;
    this.universeService.getById('1')
    .pipe(finalize(() => { this.isLoading = false; }))
    .subscribe(
      universe => {
        this.universe = universe;
      },
      error => console.error(error)
    );
  }

}
