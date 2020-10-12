import React from 'react';

const MyHomeRenoContext = React.createContext({
    projects: [],
    estimates: [],
    deleteProject: () => {},
    deleteEstimate: () => {},
    addProject: () => {},
    addEstimate: () => {},
    updateProject: () => {},
    updateEstimate: () => {},
});

export default MyHomeRenoContext; 