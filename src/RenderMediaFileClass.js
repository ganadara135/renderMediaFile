import React from 'react';
import PropTypes from 'prop-types';
import {checkImageFileType, checkPDFFileType, checkVideoAudioFileType } from './utils';
import ReactPlayer from 'react-player';
import { Document, Page, Outline } from 'react-pdf/dist/entry.webpack';
// import { pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class RenderMultiMediaClass  extends React.Component { // }= ( {fileInfo}) => {

    constructor(props) {
        super(props);
        this.targetRef = React.createRef();
        this.onPDFDocumentLoadSuccess = this.onPDFDocumentLoadSuccess.bind(this);
        this.changePdfPage = this.changePdfPage.bind(this);
    }

    state = {
        pdfTotalPages: null,
        pdfPageNumber: 1,
        dimensions: { width:0, height:0 },
    }

    onPDFDocumentLoadSuccess(pdf) {
        //console.log("onPdfDocumentLoad() ", pdf)
        this.setState({
            pdfTotalPages: pdf._pdfInfo.numPages,
        })
    };
    changePdfPage(offset) {
        this.setState({
            pdfPageNumber: this.state.pdfPageNumber + offset,
        })
    }
    previousPage = () => this.changePdfPage(-1);
    nextPage = () => this.changePdfPage(1);

    componentDidMount() {
        if (this.targetRef.current) {
            this.setState({
                dimensions: { width: this.targetRef.current.offsetWidth,
                              height: this.targetRef.current.offsetHight}
            });
        };
    }

    render () {
        const { fileInfo }= this.props;

        return(
        checkImageFileType(fileInfo.fileType) ? <img src={fileInfo.src} width={"100%"} /> : 
        (checkVideoAudioFileType(fileInfo.fileType) ? <ReactPlayer width={"100%"} url={fileInfo.src} playing={false} controls={true} loop={true} /> : 
        (checkPDFFileType(fileInfo.fileType) ? 
            <div ref={this.targetRef} width={"100%"}>
                <Document
                    file={fileInfo.src}
                    onLoadSuccess={this.onPDFDocumentLoadSuccess}
                >
                    <Page 
                    pageNumber={this.state.pdfPageNumber || 1} 
                    width={this.state.dimensions.width}
                    /> 
                </Document>

                <button type="button" 
                    disabled={this.state.pdfPageNumber <= 1} 
                    onClick={this.previousPage}
                    style={{color:"green", border:"1px green solid"}}
                >
                    Previous
                </button>
                <button type="button" 
                    disabled={this.state.pdfPageNumber >= this.state.pdfTotalPages} 
                    onClick={this.nextPage}
                    style={{color:"green", border:"1px green solid"}} 
                >
                    Next
                </button>

                <span >{" \t   "} Page {this.state.pdfPageNumber} of {this.state.pdfTotalPages} </span>
    
            </div> : [] //<div><h1>{"This is not supporting type"}</h1></div>  
            ))
        )
    };
};


RenderMultiMediaClass.propTypes = {
    fileInfo: PropTypes.object.isRequired,
}

export default RenderMultiMediaClass;
