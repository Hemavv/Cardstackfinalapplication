/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
// import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core'
import { NSnackbarService } from 'neutrinos-seed-services';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class stackserviceService {
    // list of draggable cards
    // populate this array for more cards to be rendered
    // Array:[{image: '', name: ''}]
    //User Configurable
    //User can add cards to the cards array as per requirement 
    cards: any = [
        { image: 'Web/Icons/girlc.jpg', name: "Tweety" },
        { image: 'Web/Icons/girlw.jpg', name: "Hatty" },
        { image: 'Web/Icons/girla.jpg', name: "Twinkle" },
        { image: 'Web/Icons/girly.jpg', name: "Elastigirl" },

    ]
    private __lastRemoved;
    private __lastDirection;
    private __cards = new Subject<any>();

    public cardSub$ = this.__cards.asObservable();

    constructor(public snackBar: NSnackbarService) { }
    getcards() {
        return this.cards;

    }
    removecard(event) {
        //User Configurable
        //User can add functionality as per requirement 
        this.__lastDirection = event.throwDirection.toString().replace('Symbol(', '').replace(')', '');
        this.snackBar.openSnackBar("You have swiped " + this.__lastDirection);
        this.__lastRemoved = this.cards.pop();


        this.__cards.next({
            info: this.__lastRemoved,
            direction: this.__lastDirection
        });

    }


    getLastRemoved() {
        if (this.__lastRemoved) {
            return {
                info: this.__lastRemoved,
                direction: this.__lastDirection
            }
        }
        return null;
    }
}
