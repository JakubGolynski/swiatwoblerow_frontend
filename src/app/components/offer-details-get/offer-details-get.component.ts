import { Component, OnInit } from '@angular/core';
import { SwiatwoblerowFrontService } from 'src/app/services/swiatwoblerow-front.service';
import { Offer } from './offer';

@Component({
  selector: 'app-offer-details-get',
  templateUrl: './offer-details-get.component.html',
  styleUrls: ['./offer-details-get.component.css']
})
export class OfferDetailsGetComponent implements OnInit {
  offers: Offer[] = [];
  currentOffer = null;
  currentIndex = -1;

  constructor(
    private swiatwoblerowFrontService: SwiatwoblerowFrontService)
    { }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
      this.swiatwoblerowFrontService.findAll()
      .subscribe(offers => this.offers = offers);
  }
    
  setActiveOffer(offer: any, index: any) {
    this.currentOffer = offer;
    this.currentIndex = index;
  }


  
}
