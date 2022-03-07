import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategoryPipe } from '../../pipes/category.pipe';

import { LeftSidebarComponent } from './left-sidebar.component';

describe('LeftSidebarComponent', () => {
    let component: LeftSidebarComponent;
    let fixture: ComponentFixture<LeftSidebarComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                LeftSidebarComponent,
                CategoryPipe
            ],
            imports: [
                HttpClientModule,
                FormsModule
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(LeftSidebarComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
