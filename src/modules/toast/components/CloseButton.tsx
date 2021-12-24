export interface CloseButtonProps {
    closeToast?: React.MouseEventHandler<HTMLElement>;
}

/**
 * Button for close toast.
 *
 * @param {CloseButtonProps} [options]
 *
 * @returns {React.FC<CloseButtonProps>}
 */
export const CloseButton: React.FC<CloseButtonProps> = ({ closeToast }) => (
    <i
        className='close toastify-close-icon'
        onClick={closeToast}
        aria-hidden='true'
    />
);
