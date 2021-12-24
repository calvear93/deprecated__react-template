import {
    toast,
    ToastContent,
    ToastOptions,
    ToastPosition
} from 'react-toastify';
import { ToastType } from './components/ToastType';
import { CloseButton } from './components/CloseButton';
import './components/toast.scss';

/**
 * Toastify wrapper.
 */
class ToastReact {
    private _settings: ToastOptions = {
        className: 'toastify-container unselectable',
        bodyClassName: 'toastify-body',
        type: toast.TYPE.DEFAULT,
        position: toast.POSITION.TOP_CENTER,
        closeButton: <CloseButton />,
        autoClose: 3000,
        hideProgressBar: true,
        draggable: true,
        draggablePercent: 60,
        closeOnClick: false
    };

    /**
     * Shows a toast.
     *
     * @param {ToastContent} content toast content
     * @param {number} [duration] toast duration
     * @param {ToastType} [type] toast type
     * @param {ToastPosition} [position] toast position
     * @param {boolean} [showProgressBar] whether toast shows progress bar
     * @param {ToastOptions<{}>} [options] rest of toast options
     *
     * @returns {React.ReactText} toast controller element
     */
    show(
        content: ToastContent,
        duration: number = 3000,
        type: ToastType = toast.TYPE.DEFAULT,
        position: ToastPosition = toast.POSITION.TOP_CENTER,
        showProgressBar: boolean = false,
        options?: ToastOptions<{}>
    ): React.ReactText {
        return toast(content, {
            ...this._settings,
            className: `${this._settings.className} ${type}`,
            autoClose: duration,
            position,
            hideProgressBar: !showProgressBar,
            ...options
        });
    }
}

// singleton
export const Toast = new ToastReact();
