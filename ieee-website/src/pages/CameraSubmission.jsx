import React from 'react';

const CameraSubmission = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <main className="content">
          <div className="card-box">
            <h1 style={{ margin: '0.0px 0.0px 16.1px 0.0px', font: '24.0px Times', color: '#1b5c71', WebkitTextStroke: '#1b5c71', textAlign: 'center', fontWeight: 'bold' }}>
              <b>Camera Submission</b>
            </h1>
            
            <h2 style={{ margin: '0.0px 0.0px 14.9px 0.0px', font: '18.0px Times', color: '#1b5c71', WebkitTextStroke: '#1b5c71' }}>
              <b>Final Manuscript Submission:</b>
            </h2>
            <p>..............................................................................................................................</p>

            <h2 style={{ margin: '20px 0px 14.9px 0.0px', font: '18.0px Times', color: '#1b5c71', WebkitTextStroke: '#1b5c71' }}>
              <b>Before Upload: Register for the Conference</b>
            </h2>
            <p>Please ensure that you have registered to the conference via the Chair website in order to upload your camera-ready paper. Please register using the same email as the one to which you received your notification of acceptance, this is necessary to let us match your registration with your paper. At least one author per paper is required to pay the full member/non-member conference registration fee in order to publish their paper, also in cases where all authors are students.</p>

            <h3 style={{ margin: '20px 0px 14.0px 0.0px', font: '16.0px Times', WebkitTextStroke: '#000000' }}>
              <b>Step 1: Login to EasyChair</b>
            </h3>
            <p>Go to the camera-ready EasyChair web site. Login using the email on which you received the acceptance notification. You may need to register(using that same email),if you are already registered and forgot your password, please use the Reset Password function. Once you have logged in, you may also go to Edit Profile at the top right and update your profile as needed, this step is not required.</p>

            <h3 style={{ margin: '20px 0px 14.0px 0.0px', font: '16.0px Times', WebkitTextStroke: '#000000' }}>
              <b>Step 2: Enter Paper Details and Upload Manuscript</b>
            </h3>
            <p>Once logged in you should see on the Home page a list of conference, tracks and workshops to which you have been accepted. Select from the list the conference to which you want to submit your camera ready paper. If you submit to a workshop, please select the host conference, the workshop will be listed as one of the tracks. After choosing the conference, go to Submit Camera Ready on the right.</p>

            <p>Please Provide the following Details of your Paper:</p>
            <ul>
              <li>Title, Abstract and Keywords.</li>
              <li>Co-authors of your paper (if any) and in the correct order.</li>
              <li>The corresponding author.</li>
            </ul>

            <h3 style={{ margin: '20px 0px 14.0px 0.0px', font: '16.0px Times', WebkitTextStroke: '#000000' }}>
              <b>FOR ALL THE CONFERENCES:</b>
            </h3>
            <p>Upload a PDF copy of your paper in the "Manuscript (PDF)" section by clicking the Choose file button.</p>

            <h3 style={{ margin: '20px 0px 14.0px 0.0px', font: '16.0px Times', WebkitTextStroke: '#000000' }}>
              <b>For CONFERENCES PUBLISHING WITH LNICST:</b>
            </h3>
            <p>Besides the PDF file, Please upload an archive file (zip, tar.gz or rar) containing both the PDF and the source files (MS Word or LaTeX) of your paper, in the "Source file (archive)" section by clicking the Choose file button. Please upload this as well as (not instead of) the separate PDF copy.</p>

            <h3 style={{ margin: '20px 0px 14.0px 0.0px', font: '16.0px Times', WebkitTextStroke: '#000000' }}>
              <b>NOTE:</b>
            </h3>
            <p>Make sure that your PDF and source files (MS Word or LaTeX)conforms to the publisher's formatting requirements. Failure to upload your camera ready paper in the required format(s) will result in your paper not appearing on the proceedings CD or in the digital library. Accept the conditions and hit Confirm and Continue.</p>

            <h3 style={{ margin: '20px 0px 14.0px 0.0px', font: '16.0px Times', WebkitTextStroke: '#000000' }}>
              <b>You completed your submission</b>
            </h3>
            <p>Your submission is now complete. You will be taken to your submission page. If you need to make any further modifications on your paper, you may do so by hitting Edit Submission. Upon returning to the web site, you may find your paper by going to My Papers.</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CameraSubmission;
