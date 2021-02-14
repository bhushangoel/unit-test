import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HeroesComponent} from './heroes.component';
import {Component, EventEmitter, Input, NO_ERRORS_SCHEMA, Output} from '@angular/core';
import {HeroService} from '../hero.service';
import {of} from 'rxjs';
import {Hero} from '../hero';
import {By} from '@angular/platform-browser';

describe('HeroesComponent (Shallow tests)', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService;
  let HEROES;

  // removing NO_ERRORS_SCHEMA and using a mock child component
  @Component({
    selector: 'app-hero',
    template: '<div></div>'
  })
  class FakeHeroComponent {
    @Input() hero: Hero;
  }

  beforeEach(() => {
    HEROES = [
      {id: 1, name: 'Spider', strength: 8},
      {id: 2, name: 'Wonder', strength: 24},
      {id: 3, name: 'Super', strength: 55}
    ];

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    TestBed.configureTestingModule({
      declarations: [HeroesComponent, FakeHeroComponent],
      providers: [
        {provide: HeroService, useValue: mockHeroService}
      ]
    });

    fixture = TestBed.createComponent(HeroesComponent);
  });

  it('should set heroes correctly from service', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();

    expect(fixture.componentInstance.heroes.length).toBe(3);
  });

  it('should create one "<li>" for each hero', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
  });
});
