import { Subscription } from 'rxjs';
import { UiService } from './../services/ui.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.less'],
})
export class ProgressIndicatorComponent implements OnInit, OnDestroy {
  showSpinner = false;
  private subscription: Subscription;

  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    this.subscription = this.uiService.isLoading.subscribe(
      (isLoading) => (this.showSpinner = isLoading)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
