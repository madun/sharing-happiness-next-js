import Document, { Html, Head, Main, NextScript} from 'next/document';
import React from 'react';

class Fragment extends Document {
  static async getInitialProps(ctx){
    const initialProps = Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render(){
    return (
      <html lang="en">
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
            <link rel="icon" type="image/png" href="/vector_donate.png" />
            <title>Sharing Happiness</title>
            <style jsx global>{`
              .body {
                font-family: 'Poppins', sans-serif;
              }
            `}</style>
        </head>
        <body className="body">
            <div className="max-w-full container justify-center bg-default-text-field">
              <div className="flex items-center justify-center">
                {this.props.children}
              </div>
            </div> 
        </body>
      </html>
    );
  }
}
export default Fragment;