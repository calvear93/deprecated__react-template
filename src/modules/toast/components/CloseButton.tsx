export interface ICloseButtonProps {
    closeToast?: React.MouseEventHandler<HTMLElement>;
}

/**
 * Button for close toast.
 *
 * @param {CloseButtonProps} [options]
 *
 * @returns {JSX.Element} close button
 */
export const CloseButton: React.FC<ICloseButtonProps> = ({
    closeToast
}): JSX.Element => (
    <i
        className='close toastify-close-icon'
        onClick={closeToast}
        aria-hidden='true'
    />
);
