import React from 'react';
import "./styles.css";

function UploadWorkDetails () {

    return(
        <div id="workDetails">

            <div id="headerContainer">
                <h1 className="pageTitle">Work Details</h1>
            </div>

            <div id="detailsContainer">
                <form id="uploadForm">
                    <div className="row">
                        <label className="inputLabel">Title</label>
                        <input id="title" type="text" className="inputBox" defaultValue="" />
                    </div>
                    <br/>
                    <div className="row">
                        <label className="inputLabel">Referenced Works</label>
                        <input id="refWorks" type="text" className="inputBox" defaultValue="Dropdown menu" />
                    </div>
                    <br/>
                    <div className="row">
                        <label className="inputLabel">Categories</label>
                        <input id="categories" type="text" className="inputBox" defaultValue="Dropdown menu" />
                    </div>
                    <br/>
                    <div className="row">
                        <label className="inputLabel">Hashtags</label>
                        <input id="hashtags" type="text" className="inputBox" placeholder="#" defaultValue=""/>
                    </div>
                    <br/>
                    <div className="row">
                        <label className="inputLabel">Audio File</label>
                        <label className="inputBox" id="audioFileLabel" htmlFor="audioFile">Click this area to select a file</label>
                        <input id="audioFile" type="file" accept=".mp3"/>
                    </div>
                    <br/>
                    <div className="row">
                        <label className="inputLabel">Description</label>
                        <textarea id="descriptionTextBox" name="description" defaultValue=""/>
                    </div>
                </form>

            </div>
        </div>
    );

}

export default UploadWorkDetails;