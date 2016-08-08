import * as Immutable from 'immutable'
import * as _ from 'lodash'

import {SHOW_NOTIFICATION, HIDE_NOTIFICATION} from './Actions'
import {NotificationType} from './Dto'

export default function NotificationReducer(state:Immutable.Map<string,any>, action:any) {
    if (_.isUndefined(state)) state = Immutable.Map({
        isShown: false,
        text: null,
        type: null,
        className: null
    });

    switch (action.type) {
        case HIDE_NOTIFICATION:
            return state.merge({
                isShown: false
            });
        case SHOW_NOTIFICATION:
            return state.merge({
                isShown: true,
                text: action.notificationText,
                type: action.notificationType,
                className: action.notificationClassName,
            });
        default:
            return state;
    }
}

export interface INotificationReducer {
    isShown:boolean;
    text:string;
    type:NotificationType;
    className:string;
}