'use client';

import { Toaster } from 'react-hot-toast';

const ToasterProvider = () => {
    return (
        <div>
            <Toaster
                toastOptions={{
                    // Default styles applied to every toast:
                    style: {
                        backgroundColor: '#f06',
                        color: '#fff',
                        // ... other styles
                    },

                    // You can also define styles per-toast-type:
                    success: {
                        style: {
                            backgroundColor: '#4caf50',
                            color: '#fff',
                        },
                 
                    },
                    // ... add more types as needed
                }}
            />
        </div>
    );
};

export default ToasterProvider;
