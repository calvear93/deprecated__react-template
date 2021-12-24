import SwalDefault, {
    SweetAlertIcon,
    SweetAlertOptions,
    SweetAlertResult
} from 'sweetalert2';
import withReactContent, { ReactSweetAlert } from 'sweetalert2-react-content';
import './swal.scss';

/**
 * Swal wrapper.
 */
class SwalReact {
    /**
     * Swal default service.
     *
     * @private
     * @type {(typeof SwalDefault & ReactSweetAlert)}
     */
    private _swal: typeof SwalDefault & ReactSweetAlert;

    /**
     *Initializes default service.
     */
    constructor() {
        this._swal = withReactContent(SwalDefault);
    }

    /**
     * Shows a sweet alert dialog.
     *
     * @see https://sweetalert2.github.io/#configuration
     *
     * @param {SweetAlertOptions} options swal configuration
     *
     * @returns {Promise<SweetAlertResult<any>>} popup
     */
    show(options: SweetAlertOptions): Promise<SweetAlertResult<any>> {
        return this._swal.fire(options);
    }

    /**
     * Shows a confirm dialog.
     *
     * @param {SweetAlertIcon} type dialog type from SweetAlert2
     * @param {string | HTMLElement | React.ReactElement} content JSX content for the dialog
     * @param {string} [confirmText] text for confirm button
     *
     * @returns {Promise<SweetAlertResult<any>>} popup
     */
    confirm(
        type?: SweetAlertIcon,
        content?: string | HTMLElement | React.ReactElement,
        confirmText: string = 'Ok'
    ): Promise<SweetAlertResult<any>> {
        return this._swal.fire({
            icon: type,
            html: content,
            confirmButtonText: confirmText,
            allowOutsideClick: false
        });
    }

    /**
     * Shows a alert popup.
     *
     * @param {SweetAlertIcon} type dialog type from SweetAlert2
     * @param {string | HTMLElement | React.ReactElement} content JSX content for the dialog
     * @param {string} [confirmText] text for confirm button
     *
     * @returns {Promise<SweetAlertResult<any>>} popup
     */
    alert(
        type?: SweetAlertIcon,
        content?: string | HTMLElement | React.ReactElement,
        confirmText: string = 'Ok'
    ): Promise<SweetAlertResult<any>> {
        return this._swal.fire({
            icon: type,
            html: content,
            confirmButtonText: confirmText,
            showCancelButton: false,
            showConfirmButton: false
        });
    }

    /**
     * Shows a confirm dialog with Ok and Cancel button.
     *
     * @param {SweetAlertIcon} type dialog type from SweetAlert2
     * @param {string | HTMLElement | React.ReactElement} content JSX content for the dialog
     * @param {string} [confirmText] text for confirm button
     * @param {string} [cancelText] text for cancel button
     *
     * @returns {Promise<SweetAlertResult<any>>} popup
     */
    dialog(
        type?: SweetAlertIcon,
        content?: string | HTMLElement | React.ReactElement,
        confirmText: string = 'Yes',
        cancelText: string = 'No'
    ): Promise<SweetAlertResult<any>> {
        return this._swal.fire({
            icon: type,
            html: content,
            confirmButtonText: confirmText,
            cancelButtonText: cancelText,
            showCancelButton: true,
            allowOutsideClick: false,
            reverseButtons: true
        });
    }
}

// singleton
export const Swal = new SwalReact();
