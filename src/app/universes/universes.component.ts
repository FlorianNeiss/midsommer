import { Component, OnInit } from '@angular/core';
import { Universe } from '@app/models/universe';
import { UniverseApiService } from '@app/core/api-services/universe-api.service';

@Component({
  selector: 'app-universes',
  templateUrl: './universes.component.html',
  styleUrls: ['./universes.component.scss']
})
export class UniversesComponent implements OnInit {

  public universes: Universe [];

  constructor(
    private universeService: UniverseApiService
  ) { this.universes = [];  }

  ngOnInit() {
    this.universeService.get()
    .subscribe(
      universes => {
        this.universes = universes;
      },
      error => console.error(error)
    );
  }
}
