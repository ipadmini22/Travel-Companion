import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaggageService {

  constructor() { }

  getCarryOnAmount(bookingClass: string, status: string):number {
    switch(status) {
      case "MM":
        switch(bookingClass) {
          case "economy": return 1;
          case "economy-flex": return 1;
          case "premim-economy": return 1;
          case "business": return 2;
          case "first": return 2;
          default: return 1;
        }
      case "FLT":
        switch(bookingClass) {
          case "economy": return 1;
          case "economy-flex": return 1;
          case "premim-economy": return 1;
          case "business": return 2;
          case "first": return 2;
          default: return 1;
        }
      case "SG":
        switch(bookingClass) {
          case "economy": return 1;
          case "economy-flex": return 1;
          case "premim-economy": return 1;
          case "business": return 2;
          case "first": return 2;
          default: return 1;
        }
      case "SEN":
        switch(bookingClass) {
          case "economy": return 1;
          case "economy-flex": return 1;
          case "premim-economy": return 2;
          case "business": return 2;
          case "first": return 2;
          default: return 1;
        }
      case "HON":
        switch(bookingClass) {
          case "economy": return 1;
          case "economy-flex": return 1;
          case "premim-economy": return 2;
          case "business": return 2;
          case "first": return 2;
          default: return 1;
        }
    }
  }

  getBaggageAmount(bookingClass: string, status: string): number {
    switch(status) {
      case "MM":
        switch(bookingClass) {
          case "economy": return 1;
          case "economy-flex": return 1;
          case "premim-economy": return 2;
          case "business": return 2;
          case "first": return 3;
          default: return 1;
        }
      case "FLT":
        switch(bookingClass) {
          case "economy": return 2;
          case "economy-flex": return 2;
          case "premim-economy": return 2;
          case "business": return 2;
          case "first": return 3;
          default: return 1;
        }
      case "SG":
        switch(bookingClass) {
          case "economy": return 2;
          case "economy-flex": return 2;
          case "premim-economy": return 3;
          case "business": return 3;
          case "first": return 4;
          default: return 1;
        }
      case "SEN":
        switch(bookingClass) {
          case "economy": return 2;
          case "economy-flex": return 2;
          case "premim-economy": return 3;
          case "business": return 3;
          case "first": return 4;
          default: return 1;
        }
      case "HON":
        switch(bookingClass) {
          case "economy": return 2;
          case "economy-flex": return 2;
          case "premim-economy": return 3;
          case "business": return 3;
          case "first": return 4;
          default: return 1;
        }
    }
  }

  getBaggageWeight(bookingClass: string, status: string): number {
    switch(status) {
      case "MM":
        switch(bookingClass) {
          case "economy": return 23;
          case "economy-flex": return 23;
          case "premim-economy": return 23;
          case "business": return 32;
          case "first": return 32;
          default: return 23;
        }
      case "FLT":
        switch(bookingClass) {
          case "economy": return 23;
          case "economy-flex": return 23;
          case "premim-economy": return 23;
          case "business": return 32;
          case "first": return 32;
          default: return 23;
        }
      case "SG":
        switch(bookingClass) {
          case "economy": return 23;
          case "economy-flex": return 23;
          case "premim-economy": return 23;
          case "business": return 32;
          case "first": return 32;
          default: return 23;
        }
      case "SEN":
        switch(bookingClass) {
          case "economy": return 23;
          case "economy-flex": return 23;
          case "premim-economy": return 23;
          case "business": return 32;
          case "first": return 32;
          default: return 23;
        }
      case "HON":
        switch(bookingClass) {
          case "economy": return 23;
          case "economy-flex": return 23;
          case "premim-economy": return 23;
          case "business": return 32;
          case "first": return 32;
          default: return 23;
        }
    }
  }
}
