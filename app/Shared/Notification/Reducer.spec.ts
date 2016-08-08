import * as Immutable from 'immutable'
import * as Actions from './Actions'
import {NotificationType} from './Dto'
import Reducer, {INotificationReducer} from './Reducer'

describe('Notification Reducer', () => {
    let latestState:Immutable.Map<string,any>;

    it('is a Redux store configured with the correct reducer', () => {
        const
            action = {type: null},
            newReducer = Reducer(undefined, action).toJS();

        expect(newReducer).toEqual({
            isShown: false,
            text: null,
            type: null,
            className: null
        });
    });

    it('updates the Reducer after showing a notification has been requested', () => {
        const
            action = Actions.showNotification('Hello, World!', NotificationType.Success),
            newReducer:INotificationReducer = Reducer(undefined, action).toJS();

        expect(newReducer.isShown).toBe(true);
        expect(newReducer.text).toEqual('Hello, World!');
        expect(newReducer.type).toEqual(NotificationType.Success);
        expect(newReducer.className).toEqual('success');

        // To test successful hideNotification() later
        latestState = Reducer(undefined, action);
    });

    it('updates the Reducer after hiding a notification has been requested', () => {
        const
            action = Actions.hideNotification(),
            newReducer:INotificationReducer = Reducer(latestState, action).toJS();

        expect(newReducer.isShown).toBe(false);
        expect(newReducer.text).toEqual('Hello, World!');
        expect(newReducer.type).toEqual(NotificationType.Success);
        expect(newReducer.className).toEqual('success');
    });
});