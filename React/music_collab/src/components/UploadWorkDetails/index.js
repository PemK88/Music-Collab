import React from 'react';
import "./styles.css";
import "../buttons.css";

function UploadWorkDetails () {

    return(
        <div id="workDetails">

            <div id="headerContainer">
                <h1 className="pageTitle">Work Details</h1>
            </div>

            <div id="detailsContainer">
                <form id="uploadForm">
                    <div className="row">
                        <label className="detailLabel">Title</label>
                        <input id="title" type="text" className="detailInput" defaultValue="" />
                    </div>
                    <br/>
                    <div className="row">
                        <label className="detailLabel">Referenced Works</label>
                        <input id="refWorks" type="text" className="detailInput" defaultValue="Dropdown menu" />
                    </div>
                    <br/>
                    <div className="row">
                        <label className="detailLabel">Categories</label>
                        <input id="categories" type="text" className="detailInput" defaultValue="Dropdown menu" />
                    </div>
                    <br/>
                    <div className="row">
                        <label className="detailLabel">Hashtags</label>
                        <input id="hashtags" type="text" className="detailInput" placeholder="#" defaultValue=""/>
                    </div>
                    <br/>
                    <div className="row">
                        <label className="detailLabel">Audio File</label>
                        <label className="detailInput" id="audioFileLabel" htmlFor="audioFile">Click this area to select a file</label>
                        <input id="audioFile" type="file" accept=".mp3"/>
                    </div>
                    <br/>
                    <div className="row">
                        <label className="detailLabel">Description</label>
                        <textarea id="descriptionTextBox" name="description" defaultValue=""/>
                    </div>
                </form>

            </div>
        </div>
    );

}

export default UploadWorkDetails;