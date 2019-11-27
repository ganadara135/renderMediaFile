import React, { useState, useEffect, useCallback, useRef} from 'react';
import PropTypes from 'prop-types';
import {checkImageFileType, checkPDFFileType, checkVideoAudioFileType } from './utils';
import ReactPlayer from 'react-player';
import { Document, Page, Outline } from 'react-pdf';


//export default class HookHOCKcod extends Component {
    // render () {
    //     const fileInfo = this.props.fileInfo;

        
 function RenderMultiMediaMy ({fileInfo})  {
       

            const [pdfTotalPages, setPdfTotalPages ] = useState(null);
            const [pdfPageNumber, setPdfPageNumber ] = useState(1);
            const [dimensions, setDimensions ] = useState({ width:0, height: 0 });
            const targetRef = useRef();
        
            useEffect(() => {
                if (targetRef.current) {
                    setDimensions({
                        width: targetRef.current.offsetWidth,
                        height: targetRef.current.offsetWidth
                    });
                }
            },[fileInfo]);

            const onPDFDocumentLoadSuccess = useCallback( (pdf)  => {
                setPdfTotalPages(pdf._pdfInfo.numPages);
            },[]);
        
            const changePdfPage =  (offset) => setPdfPageNumber(pdfPageNumber + offset);
            const previousPage = () => changePdfPage(-1);
            const nextPage = () => changePdfPage(1);
        
            
        
            return (
                <div>
                    {
                checkImageFileType(this.props.fileInfo.fileType) ? <img src={this.props.fileInfo.src} width={"100%"} /> : 
                (checkVideoAudioFileType(this.props.fileInfo.fileType) ? <ReactPlayer width={"100%"} url={this.props.fileInfo.src} playing={false} controls={true} loop={true} /> : 
                (checkPDFFileType(this.props.fileInfo.fileType) ? 
                    <div ref={targetRef} width={"100%"}>
                        <Document
                            file={this.props.fileInfo.src}
                            onLoadSuccess={onPDFDocumentLoadSuccess}
                        >
                            <Page 
                            pageNumber={pdfPageNumber || 1} 
                            width={dimensions.width}
                            /> 
                        </Document>
        
                        <button type="button" disabled={pdfPageNumber <= 1} onClick={previousPage} >Previous</button>
                        <button type="button" disabled={pdfPageNumber >= pdfTotalPages} onClick={nextPage} >Next</button>
        
                        <span >{" \t   "} Page {pdfPageNumber} of {pdfTotalPages} </span>
            
                    </div> : <div><h1>{"This is not supporting type"}</h1></div>  
                ))
                    }
                </div>
            )
};
    
    


// RenderMultiMedia.propTypes = {
//     fileInfo : PropTypes.object.isRequired,
// }

// export default RenderMultiMedia;

export default class HooksInMyClass extends React.Component {
    
    render() {
       // const fileInfo = this.props.fileInfo;
       console.log("this.props in class : ", this.props)
        return (
            <div>
                <RenderMultiMediaMy ></RenderMultiMediaMy>
            </div>
        )
    }
}