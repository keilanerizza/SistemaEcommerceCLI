import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClientesService } from './clientes.service';
import { ClienteCrudComponent } from './cliente-crud/cliente-crud.component';

@NgModule({
  declarations: [ClienteListComponent, ClienteFormComponent, ClienteCrudComponent],
  imports: [CommonModule, ClientesRoutingModule, FormsModule],
  providers: [ClientesService]
})
export class ClientesModule { }
