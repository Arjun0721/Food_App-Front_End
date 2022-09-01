import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { BranchComponent } from './branch/branch.component';
import { ManagerComponent } from './manager/manager.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminRegComponent } from './admin-reg/admin-reg.component';
import { ManagerRegComponent } from './manager-reg/manager-reg.component';
import { StaffRegComponent } from './staff-reg/staff-reg.component';
import { UpdateBranchComponent } from './update-branch/update-branch.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { ProductsComponent } from './products/products.component';
import { ItemsComponent } from './items/items.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { UpdateOrdersComponent } from './update-orders/update-orders.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { UpdateItemsComponent } from './update-items/update-items.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { BillComponent } from './bill/bill.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AccountComponent } from './account/account.component';
import { AdminDeatilsComponent } from './admin-deatils/admin-deatils.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { EditManagerComponent } from './edit-manager/edit-manager.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    StaffComponent,
    BranchComponent,
    ManagerComponent,
    MenuComponent,
    OrdersComponent,
    AdminRegComponent,
    ManagerRegComponent,
    StaffRegComponent,
    UpdateBranchComponent,
    UpdateMenuComponent,
    ProductsComponent,
    ItemsComponent,
    AddBranchComponent,
    UpdateOrdersComponent,
    UpdateProductsComponent,
    UpdateItemsComponent,
    AddMenuComponent,
    AddOrdersComponent,
    BillComponent,
    AddProductComponent,
    AddItemComponent,
    AccountComponent,
    AdminDeatilsComponent,
    EditAdminComponent,
    ManagerDetailsComponent,
    EditManagerComponent,
    StaffDetailsComponent,
    EditStaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
