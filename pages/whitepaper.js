import React, { useState, useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core";
import { Typography, Box, Modal, makeStyles, Button } from "@material-ui/core";
import Image from "next/image";
import Iframe from "react-iframe";
import Logo from "../public/logo.png";
import Article from "../public/arcticle.jpg";
import axios from 'axios';
// import shortid from "https://cdn.skypack.dev/shortid@2.2.16";


const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};
const useStyles = makeStyles({
  root: {
    position: "relative",
    maxWidth: "100%",
    
  
  },
  mainContainer: {
    height: "100",
    background: "#fff !important",
  },
  card: {
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.16)",
    borderRadius: "6px",
    overflow: "hidden",
    marginBottom: "30px",
    backgroundColor: "#fff",
    border: "none",
  },
  cardBody: {
    padding: "30px",
  },
  btnPrimary: {
    borderColor: "#5a8dee !important",
    backgroundColor: "#5a8dee !important",
    color: "#fff",
  },
  formSubmit: {
    padding: "13px 30px",
    fontSize: "15px",
    letterSpacing: "0.3px",
    fontWeight: "400",
  },
  kbDataBox: {
    width: "100%",
    flex: 1,
  },
  kbModalDataTitle: {
    marginBottom: "10px",
  },
  kbDataTitle: {
    h6: {
      marginBottom: "0",
      fontSize: "15px",
      fontWeight: "600",
    },
  },
  kbFileUpload: {
    marginBottom: "20px",
  },
  fileUploadBox: {
    border: "1px dashed #b6bed1",
    backgroundColor: "#f0f2f7",
    borderRadius: "4px",
    minHeight: "150px",
    position: "relative",
    overflow: "hidden",
    padding: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#8194aa",
    fontWeight: "400",
    fontSize: "15px",
  },
  fileUploadInput: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    opacity: "0",
    cursor: "pointer",
  },
  fileLink: {
    color: "#475f7b",
    textDecoration: "underline",
    marginLeft: "3px",
  },
  fileLinkHover: {
    textDecoration: "none",
  },
  fileAtcBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  fileImage: {
    width: "130px",
    height: "85px",
    backgroundSize: "cover",
    borderRadius: "5px",
    marginRight: "15px",
    backgroundColor: "#eaecf1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    color: "#475f7b",
    padding: "3px",
  },
  fileImageImg: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "4px",
  },
  fileDetail: {
    flex: 1,
    width: "calc(100% - 210px)",
  },
  fileDetailH6: {
    wordBreak: "break-all",
    fontSize: "13px",
    fontWeight: "500",
    lineHeight: "20px",
    marginBottom: "8px",
  },
  fileDetailP: {
    fontSize: "12px",
    color: "#8194aa",
    lineHeight: "initial",
    fontWeight: "400",
    marginBottom: "8px",
  },
  fileActions: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },
  fileActionBtn: {
    fontSize: "12px",
    color: "#8194aa",
    lineHeight: "20px",
    fontWeight: "400",
    marginBottom: "0",
    padding: "0",
    backgroundColor: "transparent",
    border: "none",
    textDecoration: "underline",
    marginRight: "15px",
    cursor: "pointer",
  },
  fileActionBtnHover: {
    color: "#3d546f",
    textDecoration: "underline",
  },
  fileAtcBoxLastChild: {
    marginBottom: "0",
  },


  
});

const Library = () => {
  

  const classes = useStyles();

  const handleClose = (text) => {
    setOpenModel(false);
  };

  

  const [file, setFile] = useState()

//   function handleChange(event) {
//     setFile(event.target.files[0])
//   }
  const handleChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && selectedFile.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      setFile(selectedFile);
    } else {
      alert("Please select a .docx file.");
      event.target.value = null; // Clear the file input
      setFile(null);
    }
  };
  // Function to post the selected file to the API
  const postFileToAPI = async (event) => {
    event.preventDefault();
    if (!file) {
        alert("No file selected.");
        return;
      }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "multipart/form-data");

   

    var formData = new FormData();
    formData.append("white-paper", 1);
    formData.append("link", file);
console.log(formData, 'file');
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
    };

    try {
      const response = await fetch(
        "https://absolutepitch.website/appdata/webservice.php", // Add the "white-paper" parameter here
        requestOptions
      );
      if (response.ok) {
        const responseJson = await response.json();
        console.log(responseJson, 'response=======');

        if (responseJson.valid === 0) {
          alert(responseJson?.message);
        } else {

          alert('Uploaded Successfully');
        //   router.push({
        //     pathname: "/SigninPage",
        //   });
        }
      } else {
        // Handle error responses from the API
        console.error("Failed to upload the file");
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("An error occurred:", error);
    }
  };


  return (
    <>

<div className={classes.mainContainer}>
      {/* <div className="fileupload-view">
                <div className="row justify-content-center m-0">
                    <div className="col-md-6">
                        <div className="card mt-5">
                            <div className="card-body">
                                <div className="kb-data-box">
                                    <div className="kb-modal-data-title">
                                        <div className="kb-data-title">
                                            <h6>Multiple File Upload With Preview</h6>
                                        </div>
                                    </div>
                                    <form onSubmit={FileUploadSubmit}>
                                        <div className="kb-file-upload">
                                            <div className="file-upload-box">
                                                <input type="file" id="fileupload" className="file-upload-input" onChange={InputChange} multiple />
                                                <span>Drag and drop or <span className="file-link">Choose your files</span></span>
                                            </div>
                                        </div>
                                        <div className="kb-attach-box mb-3">
                                            {
                                                selectedfile.map((data, index) => {
                                                    const { id, filename, filetype, fileimage, datetime, filesize } = data;
                                                    return (
                                                        <div className="file-atc-box" key={id}>
                                                            {
                                                                filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ?
                                                                    <div className="file-image"> <img src={fileimage} alt="" /></div> :
                                                                    <div className="file-image"><i className="far fa-file-alt"></i></div>
                                                            }
                                                            <div className="file-detail">
                                                                <h6>{filename}</h6>
                                                                <p></p>
                                                                <p><span>Size : {filesize}</span><span className="ml-2">Modified Time : {datetime}</span></p>
                                                                <div className="file-actions">
                                                                    <button type="button" className="file-action-btn" onClick={() => DeleteSelectFile(id)}>Delete</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="kb-buttons-box">
                                            <button type="submit" className="btn btn-primary form-submit">Upload</button>
                                        </div>
                                    </form>
                                    {Files.length > 0 ?
                                        <div className="kb-attach-box">
                                            <hr />
                                            {
                                                Files.map((data, index) => {
                                                    const { id, filename, filetype, fileimage, datetime, filesize } = data;
                                                    return (
                                                        <div className="file-atc-box" key={index}>
                                                            {
                                                                filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ?
                                                                    <div className="file-image"> <img src={fileimage} alt="" /></div> :
                                                                    <div className="file-image"><i className="far fa-file-alt"></i></div>
                                                            }
                                                            <div className="file-detail">
                                                                <h6>{filename}</h6>
                                                                <p><span>Size : {filesize}</span><span className="ml-3">Modified Time : {datetime}</span></p>
                                                                <div className="file-actions">
                                                                    <button className="file-action-btn" onClick={() => DeleteFile(id)}>Delete</button>
                                                                    <a href={fileimage}  className="file-action-btn" download={filename}>Download</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
    {/* <div className="row justify-content-center m-0">
        <div className="col-md-6">
          <div className={classes.card}>
            <div className={classes.cardBody}>
              <div className={classes.kbDataBox}>
                <div className={classes.kbModalDataTitle}>
                  <div className={classes.kbDataTitle}>
                    <h6>Multiple File Upload With Preview</h6>
                  </div>
                </div>
                <form onSubmit={FileUploadSubmit}>
                  <div className={classes.kbFileUpload}>
                    <div className={classes.fileUploadBox}>
                      <input type="file" id="fileupload" className={classes.fileUploadInput} onChange={InputChange} multiple />
                      <span>Drag and drop or <span className={classes.fileLink}>Choose your files</span></span>
                    </div>
                  </div>
                  <div className="kb-attach-box mb-3">
                    {selectedfile.map((data, index) => {
                      const { id, filename, filetype, fileimage, datetime, filesize } = data;
                      return (
                        <div className={classes.fileAtcBox} key={id}>
                          {filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
                            <div className={classes.fileImage}>
                              <img src={fileimage} alt="" />
                            </div>
                          ) : (
                            <div className={classes.fileImage}><i className="far fa-file-alt"></i></div>
                          )}
                          <div className={classes.fileDetail}>
                            <h6>{filename}</h6>
                            <p></p>
                            <p><span>Size : {filesize}</span><span className="ml-2">Modified Time : {datetime}</span></p>
                            <div className={classes.fileActions}>
                              <button type="button" className={classes.fileActionBtn} onClick={() => DeleteSelectFile(id)}>Delete</button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="kb-buttons-box">
                    <button type="submit" className="btn btn-primary form-submit">Upload</button>
                  </div>
                </form>
                {Files.length > 0 ? (
                  <div className="kb-attach-box">
                    <hr />
                    {Files.map((data, index) => {
                      const { id, filename, filetype, fileimage, datetime, filesize } = data;
                      return (
                        <div className={classes.fileAtcBox} key={index}>
                          {filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
                            <div className={classes.fileImage}>
                              <img src={fileimage} alt="" />
                            </div>
                          ) : (
                            <div className={classes.fileImage}><i className="far fa-file-alt"></i></div>
                          )}
                          <div className={classes.fileDetail}>
                            <h6>{filename}</h6>
                            <p><span>Size : {filesize}</span><span className="ml-3">Modified Time : {datetime}</span></p>
                            <div className={classes.fileActions}>
                              <button className={classes.fileActionBtn} onClick={() => DeleteFile(id)}>Delete</button>
                              <a href={fileimage} className={classes.fileActionBtn} download={filename}>Download</a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : ''}
              </div>
            </div>
          </div>
        </div>
      </div> */}
         <form>
          <h1>React File Upload</h1>
          <input type="file" onChange={handleChange}/>
          <button type="submit" onClick={postFileToAPI}>Upload</button>
        </form>
    </div>
    </>

  );
};

export default Library;
