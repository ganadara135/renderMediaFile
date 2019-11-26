import React, { useState, useEffect, useCallback, useRef} from 'react';
import PropTypes from 'prop-types';
import {checkImageFileType, checkPDFFileType, checkVideoAudioFileType } from './utils';
import ReactPlayer from 'react-player';
import { Document, Page, Outline } from 'react-pdf';

const RenderMultiMedia = ( {fileInfo}) => {

    const [pdfTotalPages, setPdfTotalPages ] = useState(null);
    const [pdfPageNumber, setPdfPageNumber ] = useState(1);
    const [dimensions, setDimensions ] = useState({ width:0, height: 0 });
    const targetRef = useRef();

    const onPDFDocumentLoadSuccess = useCallback( (pdf)  => {
        setPdfTotalPages(pdf._pdfInfo.numPages);
    },[]);

    const changePdfPage =  (offset) => setPdfPageNumber(pdfPageNumber + offset);
    const previousPage = () => changePdfPage(-1);
    const nextPage = () => changePdfPage(1);

    useEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetWidth
            });
        }
    },[fileInfo.id]);

    return (
    
        
        checkImageFileType(fileInfo.fileType) ? <img src={fileInfo.src} width={"100%"} /> : 
        (checkVideoAudioFileType(fileInfo.fileType) ? <ReactPlayer width={"100%"} url={fileInfo.src} playing={false} controls={true} loop={true} /> : 
        (checkPDFFileType(fileInfo.fileType) ? 
            <div ref={targetRef} width={"100%"}>
                <Document
                    file={fileInfo.src}
                    onLoadSuccess={onPDFDocumentLoadSuccess}
                >
                    <Page 
                    pageNumber={pdfPageNumber || 1} 
                    width={dimensions.width}
                    /> 
                </Document>

                <Button type="default" disabled={pdfPageNumber <= 1} onClick={previousPage} >Previous</Button>
                <Button type="default" disabled={pdfPageNumber >= pdfTotalPages} onClick={nextPage} >Next</Button>

                <span >{" \t   "} Page {pdfPageNumber} of {pdfTotalPages} </span>
    
            </div> : [] //<div><h1>{"This is not supporting type"}</h1></div>  
            ))
        
        
    );
};


RenderMultiMedia.propTypes = {
    fileInfo = PropTypes.object.isRequired,
}

export default RenderMultiMedia;