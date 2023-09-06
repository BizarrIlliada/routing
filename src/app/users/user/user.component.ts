import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //only if the component have to be reloaded from within, use code below (instead using this.route.snapshot.params...)
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      const { id, name } = params;

      this.user = { id, name }
    })
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  } // Angular does it instead of us, so we don't need to unsubscribe manually
}
