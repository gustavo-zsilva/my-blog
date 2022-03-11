import {  } from 'urql'

declare global {
    interface Window {
        __URQL_DATA__: any;
    }
}