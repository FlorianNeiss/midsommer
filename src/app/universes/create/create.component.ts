import { Component, OnInit } from '@angular/core';
import { UniverseApiService } from '@app/core/api-services/universe-api.service';
import { Universe } from '@app/models/universe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public universe: Universe;
  public newUniverse: Universe;


  constructor(private universeService: UniverseApiService,
    private router: Router) { this.universe = new Universe()}

  ngOnInit() {
  }

  public save() {
    this.universeService.insert(this.universe)
    .subscribe(
      universe => {
        this.newUniverse = universe;
        this.router.navigate(['/universes']);
      },
      error => console.error(`Creation of new content failed: ${JSON.stringify(error)}`)
    );
  }
  

}
