import React, { useState } from 'react';

const Popup = ({ onClose, onSubmit }) => {
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ width, height });
        onClose();
    };

    return (
        <div style={styles.overlay}>
            <div style={styles.popup}>
                <h2 style={{ filter:'none'}}>Enter Dimensions</h2>
                <form onSubmit={handleSubmit}>
                    <div style={styles.inputGroup}>
                        <label>Width:</label>
                        <input
                            type="number"
                            value={width}
                            onChange={(e) => setWidth(e.target.value)}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label>Height:</label>
                        <input
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            required
                        />
                    </div>
                    <div style={styles.actions}>
                        <button type="button" onClick={onClose} style={styles.button}>
                            Cancel
                        </button>
                        <button type="submit" style={styles.button}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(0.25em)',
        transition: 'opacity 0.3s ease-in-out , blur 0.3s ease-in-out', 
    },
    popup: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        width: '300px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        padding: '8px 12px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default Popup;