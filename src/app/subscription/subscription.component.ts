import { Component, OnInit } from '@angular/core';
import { Subscription } from '../model/Subscription';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  subscriptionlist: any = [];
  // It maintains registration Model
  subscriptionModel: Subscription;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: String = 'Save';
  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;
  // It maintains table row index based on selection.
  selectedRow: number;

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.subscriptionService.getAllSubscriptions().subscribe(
      data => {
        this.subscriptionlist  = data; }
     );
  }

}
