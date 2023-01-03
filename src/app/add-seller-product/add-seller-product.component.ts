import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-add-seller-product',
  templateUrl: './add-seller-product.component.html',
  styleUrls: ['./add-seller-product.component.scss']
})
export class AddSellerProductComponent implements OnInit {
  productList:undefined | any[]
  addproduct: FormGroup | any
  Product: any;
  constructor(private formbuilder: FormBuilder, private api: ApiService) {
    
   }
  ngOnInit(): void {
    this.addproduct = new FormGroup({
      name: new FormControl(''),
      Price: new FormControl(''),
      color: new FormControl(''),
      Catagory: new FormControl(''),
      Description: new FormControl(''),
      Image: new FormControl(''),
      id: new FormControl('')
    })
    
  }
  AddProductsubmit() {
    console.log(this.addproduct.value);
    this.api.addproduct(this.addproduct.value).subscribe({
      next: (res) => {
        this.addproduct.reset();
      },
      error: () => { 
      }
    })
  
  }
  
}
