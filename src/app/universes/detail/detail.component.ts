import { Component, OnInit, Input } from '@angular/core';
import { Universe } from '@app/models/universe';
import { ActivatedRoute } from '@angular/router';
import { UniverseApiService } from '@app/core/api-services/universe-api.service';
import { Star } from '@app/models/star';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public stars: Star[];
  constructor(  private universeService: UniverseApiService,
      private activatedRoute: ActivatedRoute,
  ) { this.stars = []}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        // this.loadById(id);
      }
    });
  }

  // private loadById(id: string){
  //   this.universeService.getByIdStars(id)
  //   .subscribe(
  //     any => {
  //       this.stars = any;
  //     },
  //     error => console.error(error)
  //   );
  // }

}
