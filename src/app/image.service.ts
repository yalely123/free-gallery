import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  imageDetailList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) {}

  getImageDetailList() {
    this.imageDetailList = this.firebase.list("imageDetails", qr =>
      qr.orderByChild("date")
    );
  }

  insertImageDetails(imageDetails) {
    const ref = this.imageDetailList.push(imageDetails);
    ref.update({
      date: new Date(),
      id: ref.key
    });
    console.log(ref.key);
  }

  deleteImage() {
    return this.imageDetailList.remove();
  }
}
