import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminDeatilsComponent } from './admin-deatils/admin-deatils.component';
import { AdminRegComponent } from './admin-reg/admin-reg.component';
import { AdminComponent } from './admin/admin.component';
import { BillComponent } from './bill/bill.component';
import { BranchComponent } from './branch/branch.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditManagerComponent } from './edit-manager/edit-manager.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { AdminGuard } from './Guard/admin.guard';
import { BranchAuthGuard } from './Guard/branch-auth.guard';
import { ItemsGuardGuard } from './Guard/items-guard.guard';
import { ManagerGuard } from './Guard/manager.guard';
import { MenuGuard } from './Guard/menu.guard';
import { OrdersGuard } from './Guard/orders.guard';
import { ProductGuardGuard } from './Guard/product-guard.guard';
import { StaffGuard } from './Guard/staff.guard';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { ManagerRegComponent } from './manager-reg/manager-reg.component';
import { ManagerComponent } from './manager/manager.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { StaffRegComponent } from './staff-reg/staff-reg.component';
import { StaffComponent } from './staff/staff.component';
import { UpdateBranchComponent } from './update-branch/update-branch.component';
import { UpdateItemsComponent } from './update-items/update-items.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { UpdateOrdersComponent } from './update-orders/update-orders.component';
import { UpdateProductsComponent } from './update-products/update-products.component';

const routes: Routes = [
  {path:"admin",component:AdminComponent},
  {path:"account",component:AccountComponent},
  {path:"home",component:HomeComponent},
  {path:"staff",component:StaffComponent},
  {path:"manager",component:ManagerComponent},
  {path:"admin_reg",component:AdminRegComponent},
  {path:"account/admin-details",component:AdminDeatilsComponent,canActivate:[AdminGuard]},
  {path:"account/manager-details",component:ManagerDetailsComponent,canActivate:[ManagerGuard]},
  {path:"account/staff-details",component:StaffDetailsComponent,canActivate:[StaffGuard]},
  {path:"editstaff/:id",component:EditStaffComponent},
  {path:"editmanager/:id",component:EditManagerComponent},
  {path:"editadmin/:id",component:EditAdminComponent},
  {path:"staff_reg",component:StaffRegComponent},
  {path:"manager_reg",component:ManagerRegComponent},
  {path:"updateorders/:id",component:UpdateOrdersComponent},
  {path:"updatebranch/:id",component:UpdateBranchComponent},
  {path:"updatemenu/:id",component:UpdateMenuComponent},
  {path:"updateitems/:id",component:UpdateItemsComponent},
  {path:"addbranch",component:AddBranchComponent},
  {path:"addmenu",component:AddMenuComponent},
  {path:"addorder",component:AddOrdersComponent},
  {path:"addproduct",component:AddProductComponent},
  {path:"additem",component:AddItemComponent},
  {path:"updateproducts/:id",component:UpdateProductsComponent},
  {path:"bill/:id",component:BillComponent},
  {path:"products",component:ProductsComponent,canActivate:[ProductGuardGuard]},
  {path:"items",component:ItemsComponent,canActivate:[ItemsGuardGuard]},
  {path:"menu",component:MenuComponent,canActivate:[MenuGuard]},
  {path:"orders",component:OrdersComponent,canActivate:[OrdersGuard]},
  {path:"branch",component:BranchComponent,canActivate:[BranchAuthGuard]},
  {path:"",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
