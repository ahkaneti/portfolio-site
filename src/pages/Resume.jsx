import React from 'react';
import Sidebar from '../components/sidebar';
import Logos from '../components/Logos';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../assets/resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function removeTextLayerOffset() {
  const textLayers = document.querySelectorAll('.react-pdf__Page__textContent');
  textLayers.forEach((layer) => {
    const { style } = layer;
    style.top = '0';
    style.left = '0';
    style.transform = '';
  });
}

function Resume(){
  const resumeHeight = window.innerHeight * 1.25;
  return(
    <div className="App">
      <Sidebar/>
      <div className="mid">
        <h1>Resumé</h1>
        <Document file={resume}>
          <Page height={resumeHeight} pageNumber={1} onLoadSuccess={removeTextLayerOffset} renderAnnotationLayer />
        </Document>
      </div> 
      <Logos/>
    </div>
  )
}

export default Resume;