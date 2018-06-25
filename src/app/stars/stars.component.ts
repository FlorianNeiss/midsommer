import { Component, OnInit } from '@angular/core';
import { Star } from '@app/models/star';
import { StarApiService } from '@app/core/api-services/star-api.service';
import { UniverseApiService } from '@app/core/api-services/universe-api.service';
import { identifierModuleUrl } from '@angular/compiler';
import { Universe } from '@app/models/universe';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  public stars: Star [];
  public universe: Universe;

  constructor(
    private starService: StarApiService,
    private universService: UniverseApiService
  ) { this.stars = [];  }

  ngOnInit() {
    this.starService.get()
    .subscribe(
      stars => {
        this.stars = stars;
      },
      error => console.error(error)
    );
  }

  public getNameOfUniverseById(id : string, button: any){
    this.universService.getById(id)
    .subscribe(
      universe => {
        this.universe = universe;
      },
      error => console.error(error)
    );
    button.text = this.universe.name;
  }
}
