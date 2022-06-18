import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'feature-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport;

  _isScrolling$ = new BehaviorSubject(false);
  timeout;

  visible = { left: 0, right: 1 }

  isScrolling$: Observable<any>;
  isScrolling$$ = new BehaviorSubject<boolean>(false);

  constructor(private _cdr: ChangeDetectorRef) { }

  ngOnInit() {}

  ngAfterViewInit(): void {

    this.isScrolling$ = this.viewPort.elementScrolled().pipe(
      tap(_ => {
        clearTimeout(this.timeout);

        this.isScrolling$$.next(true);
        this._cdr.detectChanges();

        this.visible.left = this.viewPort.measureScrollOffset('left');
        this.visible.right = this.viewPort.measureScrollOffset('right');

        this.timeout = setTimeout(() => {
          this.isScrolling$$.next(false);
          this._cdr.detectChanges();
        }, 100);
      }),
    )
  }

  onScrollLeft() {
    this.viewPort.scrollToOffset(this.viewPort.measureScrollOffset('left') - 1050, 'smooth');
  }
  onScrollRight() {
    this.viewPort.scrollToOffset(this.viewPort.measureScrollOffset('left') + 1050, 'smooth');
  }
}

