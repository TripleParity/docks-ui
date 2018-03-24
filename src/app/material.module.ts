import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material';



@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        MatCardModule,
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        MatCardModule,
    ]
})

export class MaterialModule { }
