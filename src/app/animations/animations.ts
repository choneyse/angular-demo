import { trigger, animate, transition, style, query, group, stagger } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  // The '* => *' will trigger the animation to change between any two states
  transition('* <=> *', [
    style({ position: 'relative' }),
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    // query(':enter', [style({ opacity: 0 })], { optional: true }),
    query(
      ':leave',
      // here we apply a style and use the animate function to apply the style over 0.3 seconds
      [style({ opacity: 1, position: 'absolute', top: 0, left: 0 }), animate('1.2s', style({ opacity: 0 }))],
      { optional: true }
    )
    // query(':enter', [style({ opacity: 0, position: 'relative' }), animate('1.2s', style({ opacity: 1 }))], {
    //   optional: true
    // })
  ])
]);

export const fromLeft = trigger('fromLeft', [
  transition(':enter', [style({ transform: 'translateX(-100%', opacity: 0 }), animate('1s')]),
  transition(':leave', [style({ transform: 'translateX(100%)', opacity: 0 }), animate('1s')])
]);

export const fromRight = trigger('fromRight', [
  transition(':enter', [style({ transform: 'translateX(100%', opacity: 0 }), animate('1s')]),
  transition(':leave', [style({ transform: 'translateX(-100%)', opacity: 0 }), animate('1s')])
]);

// export const showChange = trigger('showChange', [
//   transition(':enter')
// ])

export const featuredAnimation = trigger('featuredAnimation', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    // Featured Exit
    group([
      query(
        ':leave',
        [style({ opacity: 1, position: 'absolute', top: 0, left: 0 }), animate('1.2s', style({ opacity: 0 }))],
        {
          optional: true
        }
      ),
      query(':leave .exit-left', stagger(200, [animate('0.5s', style({ transform: 'translateX(-200%)' }))]), {
        optional: true
      }),
      // Featured Enter
      query(':enter', [style({ opacity: 0 }), animate('1.2s', style({ opacity: 1 }))], { optional: true })
    ])
  ])
]);
