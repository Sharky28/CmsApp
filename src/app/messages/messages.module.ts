import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MessagesRoutingModule } from './messages-routing.module';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageNewComponent } from './message-new/message-new.component';

//Material
import{MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatStepperModule} from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [MessageListComponent, MessageNewComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatStepperModule

  ]
})
export class MessagesModule { }
