import toast from 'react-hot-toast';
export function toastSuccess(text: string) {
    toast.success(text, { duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontFamily: 'Jet Brains Mono' } });
}
export function toastError(text: string) {
    toast.error(text,  {duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontFamily: 'Jet Brains Mono'} });
}

