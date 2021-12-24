import { TypeOptions } from 'react-toastify';

export type ToastType =
    | TypeOptions
    | 'downloading'
    | 'uploading'
    | 'save-success'
    | 'save-warning'
    | 'save-error'
    | 'send-success'
    | 'send-warning'
    | 'send-error'
    | 'key-success'
    | 'key-warning'
    | 'key-error'
    | 'security-success'
    | 'security-warning'
    | 'security-error'
    | 'notification-success'
    | 'notification-warning'
    | 'notification-error'
    | 'form-error'
    | 'smiley-happy'
    | 'smiley-neutral'
    | 'smiley-sad'
    | 'smiley-wink'
    | 'smiley-confused';
