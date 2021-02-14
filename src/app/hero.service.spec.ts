import {TestBed} from '@angular/core/testing';
import {HeroService} from './hero.service';
import {MessageService} from './message.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('HeroService', () => {
  let mockMessageService;
  let httpTestingController: HttpTestingController;
  let service: HeroService;

  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj(['add']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HeroService,
        {provide: MessageService, useValue: mockMessageService}
      ]
    });

    // get() access the dependency injection registry
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(HeroService);
  });

  describe('getHero', () => {
    it('should call get with the correct URL', () => {
      service.getHero(4).subscribe();

      // httpTestingController expects a call from the getHero() on a particular URL
      const req = httpTestingController.expectOne('api/heroes/4');
      req.flush({id: 4, name: 'Iron', strength: 100});
    });
  });
});
