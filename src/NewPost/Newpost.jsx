import React, { useState } from "react";
import "./Newpost.css"; 
import proflephoto from "../assets/profilephoto.png"

import NewPostModal from "../Modal/Modal";

function NewPost() {
  const [showModal, setShowModal] = useState(false);

  function startpost() {
    setShowModal(true);
  }

  return (
    <>
      <div className="Newpost">
        <img src={proflephoto} alt="" className="profilephoto" />
        <div className="start-post" onClick={startpost}>
          Start Typing...
        </div>
        {showModal && <NewPostModal onClick={() => setShowModal(false)} />}
      </div>
    </>
  );
}

export default NewPost;