import { Component, OnInit } from '@angular/core';
import { TvdsTestService } from '../services/tvds-test.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tvds-map',
  templateUrl: './tvds-map.component.html',
  styleUrls: ['./tvds-map.component.scss']
})
export class TvdsMapComponent implements OnInit {

  docdate: string = ""; // set ค่า docdate เป็นค่าว่าง
  markersData: Array<any> = []; // set ค่า markersData เป็น Array<any> = []; รับได้ทุก ค่า

  contactLists: any[] = [];
  sideNaveOpened: Boolean = false;

  zoom: number = 10;
  lat: number = 13.6186285;
  lng: number = 100.5078163;

  infoWindowOpened = null;
  previous_info_window = null;

  constructor(private tvdsTestService: TvdsTestService) { }

  ngOnInit() {
    this.getMarkerData(this.docdate)
  }


  //* การรับข้อมูล MarkerData ทั้งหมด โดย set docdate: string = ""; *//
  // เรียก show บน map
  async getMarkerData(docdate) {
    this.markersData = await this.tvdsTestService.getMarkerDataList(docdate);
    console.log(this.markersData);
  }
  //*

  //** click Masker Show Balloon */
  // ทำการ check เริ่มแรก if previous_info_window == null
  // จะทำการ this.previous_info_window = infoWindow รับค่าตัวแปร
  // จากนั้น else ก็จะทำงานโดยให้ this.infoWindowOpened = infoWindow รับค่าตัวแปรจาก infoWindow มา
  // จากนั้น this.previous_info_window.close(); ก็จะทำการปิดไปตามการ click แต่ละครั้ง
  clickedInfoWindow(infoWindow) {
    if (this.previous_info_window == null)
      this.previous_info_window = infoWindow;
    else {
      this.infoWindowOpened = infoWindow;
      this.previous_info_window.close();
    }
    this.previous_info_window = infoWindow;
  }
  //*

  //** การปิด  Masker Show Balloon โดย click พื้นที่ว่างบน map*/
  closeInfo() {
    if (this.previous_info_window != null) {
      this.previous_info_window.close();
    }
  }
  //*

  clickedMarker(item: any, index: number) {
    // this.sideNaveOpened = true;
    if (item.contactStatus === "") {
      let mIndex = this.contactLists.findIndex((el) => {
        return el._id === item._id;
      });
      let defualtStatus = "select";

      if (mIndex === -1) {
        let itemList = {
          _id: item._id,
          contactStatus: defualtStatus,
          title: item.title,
          firstName: item.firstName,
          lastName: item.lastName,
          displayName: item.displayName,
          persanalId: item.persanalId,
          isShareHolder: item.isShareHolder,
          mobileNo1: item.mobileNo1,
          mobileNo2: item.mobileNo2,
          mobileNo3: item.mobileNo3,
          addressLine1: item.addressLine1,
          addressStreet: item.addressStreet,
          addressSubDistrict: item.addressSubDistrict,
          addressDistrict: item.addressDistrict,
          addressProvince: item.addressProvince,
          addressPostCode: item.addressPostCode,
          lineUserId: item.lineUserId,
          latitude: item.latitude,
          longitude: item.longitude,
        };

        this.contactLists.push(itemList);
      }
      this.closeInfo();

      if (this.contactLists.length > 0) {
        this.sideNaveOpened = true;
      }
    }
  }

  drop(event: CdkDragDrop<any[]>) {
    console.log(`${event.previousIndex} to ${event.currentIndex}`);
    moveItemInArray(
      this.contactLists,
      event.previousIndex,
      event.currentIndex
    );
  }

  onDeleteList(index) {
    this.contactLists.splice(index, 1);
    if (this.contactLists.length === 0) {
      this.sideNaveOpened = false;
    }
  }

}
