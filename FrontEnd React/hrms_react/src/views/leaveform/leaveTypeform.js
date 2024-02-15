import React, { useState } from 'react';
import axios from 'axios';

const AddLeaveTypeForm = () => {
    const [leaveType, setLeaveType] = useState('');
    const [maxLeaves, setMaxLeaves] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('/api/leaveTypes', {
                leaveType,
                maxLeaves
            });
            console.log('Leave type added successfully:', response.data);
            // Reset form fields after successful submission
            setLeaveType('');
            setMaxLeaves(0);
        } catch (error) {
            console.error('Error adding leave type:', error);
        }
    };

    return (
        <div className="leave-type-form">
            <h2>Add Leave Type</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="leaveType">Leave Type:</label>
                    <input
                        type="text"
                        id="leaveType"
                        value={leaveType}
                        onChange={(e) => setLeaveType(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="maxLeaves">Max Leaves:</label>
                    <input
                        type="number"
                        id="maxLeaves"
                        value={maxLeaves}
                        onChange={(e) => setMaxLeaves(parseInt(e.target.value))}
                        required
                    />
                </div>
                <button type="submit">Add Leave Type</button>
            </form>
        </div>
    );
};

export default AddLeaveTypeForm;
