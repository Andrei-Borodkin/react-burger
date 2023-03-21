import toast from 'react-hot-toast';
export function toastSuccess(text) {
    toast.success(text, { duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono' } });
}
export function toastError(text) {
    toast.error(text,  {duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'} });
}

