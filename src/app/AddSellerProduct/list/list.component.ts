import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  searchText = []
  productList: undefined | any[]
 
  constructor(private products: ApiService) { }

  ngOnInit(): void {
    this.products.productList().subscribe((result) => {
      console.warn(result)
      this.productList = result;
    })

  }
  DeleteProduct(id:number) {
    console.warn("test id",id)

    this.products.DeleteProduct(id).subscribe((result)=>{
     if(result){
      delete this.productList;
     }
    })
  }

}
