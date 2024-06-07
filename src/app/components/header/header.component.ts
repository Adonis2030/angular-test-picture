import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {}

  private currentLang: string;

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'hr']);
    this.currentLang = 'en';
    translate.setDefaultLang(this.currentLang);
  }

  switchLanguage(language: string) {
    this.currentLang = language;
    this.translate.use(language);
  }

  isActive(language: string): boolean {
    return this.currentLang === language;
  }
}
