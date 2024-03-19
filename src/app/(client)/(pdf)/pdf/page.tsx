"use client"

import React from 'react';
import ReactPDF, { usePDF, Document, Page, Text, View, StyleSheet, PDFViewer, BlobProvider, pdf } from "@react-pdf/renderer";

const PDF = (
  <Document>
    <Page size="A4">
      <View>
        <Text>TEST PDF</Text>
      </View>
    </Page>
  </Document>
);

// Create Document Component
function BasicDocument() {
  const [instance, updateInstance] = usePDF({ document: PDF });

  if (instance.loading) return <div>Loading ...</div>;
  if (instance.error) return <div>Something went wrong: {error}</div>;

  return (
    <a href={instance.url}>
      Download
    </a>
  );

  const getPdfBlob = async () =>   {
    let blobPdf = await pdf(PDF()).toBlob();
    var fileURL = window.URL.createObjectURL(blobPdf);
    let tab = window.open();
    if (tab) {
      tab.location.href = fileURL;
    }
  }

  const showPDF = (blob) => {
    var fileURL = window.URL.createObjectURL(blob);
    let tab = window.open();
    if (tab) {
      tab.location.href = fileURL;
    }
    ReactPDF.render(PDF(), `${__dirname}/example.pdf`);
  }

  return (
    <div>
      <button onClick={getPdfBlob}>Hello</button>
     <BlobProvider document={PDF()}>
      {({ blob, url, loading, error }) => {
        console.log(blob, url, loading, error);
        // getPdfBlob();
        return <div>There s something going on on the fly</div>;
      }}
     </BlobProvider>
    </div>
  );
}

export default BasicDocument;

// ReactPDF.renderToStream(<BasicDocument />);
