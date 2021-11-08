import React, { useState } from 'react';
import UploadCoverPhoto from '../UploadCoverPhoto';
import "./styles.css";
import FormRow from '../FormRow';
import SelectCategories from '../SelectCategories';
import SelectReference from '../SelectReference';
import PropTypes from 'prop-types';
import defaultCoverPhoto from '../../data/default_cover_photo.jpeg';

function UploadWorkDetails (props) {

    const defaultFormInputs = {
        title: "",
        references: [{workId: null, description: ""}],
        categories: [],
        hashtags:[],
        audio: "",
        description: "",
        coverImage: defaultCoverPhoto
    };

    const [uploadFormInputs, setUploadFormInputs] = useState(defaultFormInputs);
    const [audioLabel, setAudioLabel] = useState("Click this area to select a file");
    const [selectedRefWork, setSelectedRefWork] = useState([[]]);

    const downloads = props.currentUser.downloadedWorks.map(work => {
        return {name: work.title + " - " + work.artist, id: work.id }});

    const handleInputChange = (event) => {
        const name = event.target.name;
        let value;
        if(name === "hashtags") {
            value = event.target.value.split(/[ #]+/);
        } else if(name === "coverImage") {
            const image = event.target.files[0];
            if(image) {
                value = URL.createObjectURL(image);
            } else {
                return;
            }
        }
        else {
            value = event.target.value;
        }

        setUploadFormInputs(inputs => ({...inputs, [name]: value}));
    };

    const handleCategoryChange = (categoriesList) => {
        const name = 'categories';
        setUploadFormInputs(inputs => ({...inputs, [name]: categoriesList}));
    };

    const handleRefAdd = (event) => {
        event.preventDefault();
        const references = [...uploadFormInputs.references, {workId: null, description: ""}];
        const name = 'references';
        setUploadFormInputs(inputs => ({...inputs, [name]: references}));
        const works = [...selectedRefWork, []];
        setSelectedRefWork(works);
    }

    const handleRefRemove = (idx, event) => {
        event.preventDefault();
        const name = 'references';
        let references = [...uploadFormInputs.references];
        references.splice(idx,1);
        setUploadFormInputs(inputs => ({...inputs, [name]: references}));
        let works = [...selectedRefWork];
        works.splice(idx,1);
        setSelectedRefWork(works);
      }

    const handleAudioChange = (event) => {
        if(event.target.files.length){
            console.log(event.target.files);
            const name = "audio";
            const value = URL.createObjectURL(event.target.files[0]);
            setUploadFormInputs(inputs => ({...inputs, [name]: value}));
            setAudioLabel(event.target.files[0].name);
        }
    }

    const handleRefSelect = (idx, workId, selectedWork) => {
        let references = [...uploadFormInputs.references];
        references[idx].workId = workId;
        const name = 'references';
        setUploadFormInputs(inputs => ({...inputs, [name]: references}));
        let works = [...selectedRefWork];
        works[idx] = selectedWork;
        setSelectedRefWork(works);
    }

    const handleDescriptionChange = (idx, event) => {
        let references = [...uploadFormInputs.references];
        references[idx].description = event.target.value;
        const name = 'references';
        setUploadFormInputs(inputs => ({...inputs, [name]: references}));
    }

    const handleUpload = (event) => {
        event.preventDefault();
        //a post request will be made with the form data
        setUploadFormInputs(defaultFormInputs);
        setSelectedRefWork([[]]);
        return alert("Your work was successfully uploaded");
    }


    return(
        <div id="upload-page"> 
            <div id="work-details">
                <div id="header-container">
                    <h1 className="page-title">Work Details</h1>
                </div>

                <div id="details-container">
                    <form id="upload-form">
                        <FormRow label={"Title"} type={"text"} className={"input-box"} value={uploadFormInputs.title} 
                            handleChange={handleInputChange} name={"title"}/>
                        <br/>
                        <div className="row">
                            <label className="input-label">Categories</label>
                            <SelectCategories selectedValues={uploadFormInputs.categories} disabled={false} handleSelect={handleCategoryChange}/>
                        </div>
                        <br/>
                        <FormRow label={"Hashtags"} type={"text"} className={"input-box"} value={uploadFormInputs.hashtags.join(" #")} 
                            handleChange={handleInputChange} name={"hashtags"} placeholder={"#hashtag1 #hashtag2"}/>
                        <br/>
                        <div className="row">
                            <label className="input-label">Audio File</label>
                            <label className="input-box" id="audio-file-label" htmlFor="audio-file">{audioLabel}</label>
                            <input id="audio-file" type="file" accept=".mp3, .wav" onChange={handleAudioChange}/>
                        </div>
                        <br/>
                        <div className="row">
                            <label className="input-label">Description</label>
                            <textarea className="description-text-box" name="description" value={uploadFormInputs.description} onChange={handleInputChange}/>
                        </div>
                        <br/>
                        <div className="row">
                            <label className="input-label">Referenced Works</label>
                                {uploadFormInputs.references.map((ref, idx) => {
                                    return (
                                        <div className="add-ref-box" key={idx}> 
                                            <SelectReference options={downloads} selectedOptions={selectedRefWork[idx]} selectLimit={1}
                                                handleSelect={selectedWork => handleRefSelect(idx, selectedWork.length ? selectedWork[0].id : "", selectedWork)}/>
                                            <textarea className="description-text-box ref-description" name="description" value={uploadFormInputs.references[idx].description}
                                                onChange={event => handleDescriptionChange(idx, event)} placeholder={"How did you use this work?"}/>
                                            {uploadFormInputs.references.length > 1 && <button className="remove-ref-btn red-box-btn"
                                                                                            onClick={event => handleRefRemove(idx, event)}>-</button>}
                                            <button className="add-ref-btn" onClick={handleRefAdd}>+</button>
                                        </div>
                                    );
                                })}
                        </div>
                    </form>
                </div>
            </div>

            <UploadCoverPhoto coverImageSrc={uploadFormInputs.coverImage} handleImgChange={handleInputChange} handleUpload={handleUpload}/>
        </div>
    );

}

UploadWorkDetails.propTypes = {
    currentUser: PropTypes.object
};

export default UploadWorkDetails;