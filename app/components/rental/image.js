import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
/**
 * generated using ember CLI `> ember generate component-class rental/image`
 * 
 * class where we can use to store properties and state for our component
 */
export default class RentalImageComponent extends Component {
    /**
     * Annotation tells Ember to monitor this variable for updates. 
     * Whenever this variable's value changes, Ember will automatically re-render any templates that depend on its value.
     */
    @tracked isLarge = false;

    /**
     * Indicates to Ember that we intend to use this method from our template. 
     * Without this, the method will not function properly as a callback function (in this case, a click handler).
     */
    @action toggleSize() {
        this.isLarge = !this.isLarge;
    }
}
