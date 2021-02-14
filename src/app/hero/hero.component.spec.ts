import {TestBed} from '@angular/core/testing';
import {HeroComponent} from './hero.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('HeroComponent (Shallow tests)', () => {
  let fixture;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeroComponent);
  });

  it('should have the correct hero', () => {
    fixture.componentInstance.hero = {id: 1, name: 'Super', strength: 3};
    expect(fixture.componentInstance.hero.name).toEqual('Super');
  });

  it('should render the hero name in an anchor tag', () => {
    fixture.componentInstance.hero = {id: 1, name: 'Super', strength: 3};
    fixture.detectChanges();
    // debug element is more useful if we are using any directive on the element
    // debug element can handle that directive
    let deA = fixture.debugElement.query(By.css('a'));
    expect(deA.nativeElement.textContent).toContain('Super');
    // expect(fixture.nativeElement.querySelector('a').textContent).toContain('Super');
  });
});
