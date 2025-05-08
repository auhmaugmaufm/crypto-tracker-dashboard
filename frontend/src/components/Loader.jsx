import { CircularProgress } from "@mui/material";
import { createRoot } from 'react-dom/client';

export const showLoader = () => {
    if (document.getElementById('loading-spinner')) return; // ป้องกันซ้ำ

    const loaderContainer = document.createElement('div');
    loaderContainer.setAttribute('id', 'loading-spinner');
    loaderContainer.style.position = 'fixed';
    loaderContainer.style.top = '0';
    loaderContainer.style.left = '0';
    loaderContainer.style.width = '100%';
    loaderContainer.style.height = '100%';
    loaderContainer.style.display = 'flex';
    loaderContainer.style.justifyContent = 'center';
    loaderContainer.style.alignItems = 'center';
    loaderContainer.style.background = 'rgba(0, 0, 0, 0.2)';
    loaderContainer.style.zIndex = '9999';

    const loader = document.createElement('div');
    const root = createRoot(loader);
    root.render(<CircularProgress size={50} style={{ color: 'black' }} />);

    loaderContainer.appendChild(loader);
    document.body.appendChild(loaderContainer);
};

// export const hideLoader = (delay = 500) => {
//     const loader = document.getElementById('loading-spinner');
//     if (loader) {
//         loader.remove();
//     }
// };

export const hideLoader = (delay = 500) => {
    setTimeout(() => {
        const loader = document.getElementById('loading-spinner');
        if (loader) {
            loader.remove();
        }
    }, delay);
};

