import React, { useEffect, useState } from 'react';

class ResumePdf extends React.Component {
    componentDidMount() {
        window.location.replace('/static/resume.pdf');
    }

    render() {
        return null;
    }
}

export default ResumePdf;