import {HeroesComponent} from './heroes.component';
import {of} from 'rxjs';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROES;

  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      {id: 1, name: 'Spider', strength: 8},
      {id: 2, name: 'Wonder', strength: 24},
      {id: 3, name: 'Super', strength: 55}
    ];

    // createSpyObj: create a mock service
    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    component = new HeroesComponent(mockHeroService);
  });

  describe('delete', () => {
    beforeEach(() => {
      /*
      as delete method expects an observable as a return value from the service,
      we need to use and.returnValue to return
      here we used rxJs of() method to return
      */
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;
      component.delete(HEROES[2]);
    });

    it('should remove the indicated hero from the heroes list', () => {
      // expect(component.heroes.length).toBe(2);
      expect(component.heroes[2]).toEqual(undefined);
      expect(component.heroes[0]['name']).toEqual('Spider');
      expect(component.heroes[1]['name']).toEqual('Wonder');
    });

    it('should call deleteHero', () => {
      // expect(mockHeroService.deleteHero).toHaveBeenCalled();
      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    });
  });
});
