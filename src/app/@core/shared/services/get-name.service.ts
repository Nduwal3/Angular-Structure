import { Injectable } from '@angular/core';
import { NepalCoronaService } from './nepal-corona.service';
import { startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class GetNameService {
  constructor(private NCSD: NepalCoronaService) {}
  districtList;
  districtNameList = {};
  districtsFromLocalStorage = {};

  // getDistrictNameList() {
  //   let d = this.getDistrictList().subscribe((data) => {
  //     if (data) {
  //       if (data[0] == 'localstorage') {
  //         this.districtNameList = data[1];
  //       } else {
  //         this.setDistrictNameList(data);
  //       }
  //     }
  //   });
  //   console.log(d);
  // }

  getDistrictNameList = new Observable((subscriber) => {
    this.getDistrictList().subscribe((data) => {
      if (data) {
        if (data[0] == 'localstorage') {
          subscriber.next(data[1]);
        } else {
          subscriber.next(this.setDistrictNameList(data));
          subscriber.complete();
        }
      }
    });
  });

  getDistrictList() {
    this.districtList = this.NCSD.getDistrictList();
    return this.districtList.pipe(
      startWith([
        'localstorage',
        JSON.parse(localStorage['district_list'] || null),
      ])
    );

    // districtListData.subscribe((data) => {
    //   if (data) {
    //     if (data[0] == 'localstorage') {
    //       this.districtNameList = data[1];
    //     } else {
    //       this.setDistrictNameList(data);
    //     }
    //   }
    // });

    // this.NCSD.getDistrictList().subscribe((data) => {
    //   console.log(data);
    // });
  }

  getFromLocalStorage() {
    this.districtsFromLocalStorage = JSON.parse(
      localStorage['district_list'] || {}
    );
  }

  getDistrictNames(id) {
    // if (!this.districtsFromLocalStorage) {
    if (Object.keys(this.districtsFromLocalStorage).length == 0) {
      this.getFromLocalStorage();
    }
    let districtList = this.districtsFromLocalStorage;
    if (districtList) {
      return districtList[id];
    } else {
      return {};
    }
  }

  getDistrictListFirstTime() {
    this.NCSD.getDistrictList().subscribe((data) => {
      this.setDistrictNameList(data);
    });
  }

  setDistrictNameList(data) {
    this.districtNameList = {};
    data.map((res) => {
      this.districtNameList[res.id] = {
        title: res.title_en,
        title_nepali: res.title_ne,
      };
    });
    localStorage['district_list'] = JSON.stringify(this.districtNameList);
    return this.districtNameList;
  }
}
