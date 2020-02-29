import { Component } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { BaggageService } from '../services/baggage.service';
import { LufthansaService } from '../services/lufthansa.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  status: string;
  bookingClass: string;
  baggageWeight: number;
  carryOnAmount: number;
  baggageAmount: number;
  statusName: string;


  constructor(private settings: SettingsService, private baggage: BaggageService, private lh: LufthansaService) {

    this.loadSettings();
  }

  onChange(e) {
    // this.saveSettings();
    this.baggageWeight = this.baggage.getBaggageWeight(this.bookingClass, this.status);
    this.carryOnAmount = this.baggage.getCarryOnAmount(this.bookingClass, this.status);
    this.baggageAmount = this.baggage.getBaggageAmount(this.bookingClass, this.status);
    this.statusName = this.lh.getStatusName(this.status);
  }

  loadSettings() {
    this.settings.getValue("status").then(s => {
      if(s == "") this.status = "MM";
      else this.status = s;
    });
    this.settings.getValue("bookingClass").then(s => {
      if(s == "") this.bookingClass = "MM";
      else this.bookingClass = s;
    });
    this.onChange(null);
  }

  getBookingClassPictureUrl(): string{
    switch(this.bookingClass) {
      case "economy": return "../../assets/free-baggage_economy-class.jpg";
      case "economy-flex": return "../../assets/free-baggage_economy-class.jpg";
      case "premim-economy": return "../../assets/free-baggage_prem-economy-class.jpg";
      case "business": return "../../assets/free-baggage_bc-kont.jpg";
      case "first": return "../../assets/free-baggage_first-class.jpg";
      default: return "../../assets/free-baggage_first-class.jpg";
    }
  }

}
