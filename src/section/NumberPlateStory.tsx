const endpoints = [
  ["POST", "/upload", "Upload an image or video for number plate detection."],
  [
    "POST",
    "/detect_image",
    "Detect a plate and recognize its characters in an image.",
  ],
  [
    "POST",
    "/detect_video",
    "Process uploaded video frames for plate detection.",
  ],
  [
    "GET",
    "/results",
    "Retrieve previous recognition results from the database.",
  ],
];

const NumberPlateStory = () => (
  <div className="number-plate-story">
    <section className="case-story-section">
      <div>
        <p className="eyebrow">How it works</p>
        <h2>
          From a plate image
          <br />
          <em>to recognized text.</em>
        </h2>
      </div>
      <div>
        <ol className="anpr-pipeline">
          <li>
            <strong>Upload</strong>
            <p>
              Users submit an image or video through an HTML/CSS web interface
              backed by FastAPI.
            </p>
          </li>
          <li>
            <strong>Detect</strong>
            <p>
              YOLOv8 locates number plates. OpenCV supports image processing and
              character segmentation.
            </p>
          </li>
          <li>
            <strong>Recognize</strong>
            <p>
              A custom TensorFlow CNN recognizes segmented characters to
              assemble the plate text.
            </p>
          </li>
          <li>
            <strong>Store & retrieve</strong>
            <p>
              Recognized plate results are stored in MySQL and can be retrieved
              through the API.
            </p>
          </li>
        </ol>
      </div>
    </section>
    <section className="case-story-section">
      <div>
        <p className="eyebrow">Backend integration</p>
        <h2>
          A web interface.
          <br />
          <em>Four API endpoints.</em>
        </h2>
      </div>
      <div className="anpr-api-wrap">
        <table className="anpr-api">
          <caption>Recognition API</caption>
          <thead>
            <tr>
              <th scope="col">Method</th>
              <th scope="col">Endpoint</th>
              <th scope="col">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {endpoints.map(([method, path, description]) => (
              <tr key={path}>
                <td>{method}</td>
                <td>
                  <code>{path}</code>
                </td>
                <td>{description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    <section className="case-story-section">
      <div>
        <p className="eyebrow">Results & next steps</p>
        <h2>
          Promising results.
          <br />
          <em>More conditions to test.</em>
        </h2>
      </div>
      <div className="anpr-notes">
        <p>
          The project reports up to{" "}
          <strong>92% accuracy under ideal conditions</strong>. The evaluation
          dataset, metric, and test protocol are not specified in the project
          summary, so this figure should be read as a reported result under
          those conditions.
        </p>
        <p>
          Future work includes real-time video processing, better handling of
          varied lighting and plate styles, and additional training data to
          improve recognition accuracy.
        </p>
        <p>
          Uploaded video processing is part of the prototype; real-time video
          processing remains a planned improvement.
        </p>
      </div>
    </section>
    <section className="case-story-section">
      <div>
        <p className="eyebrow">Team of three</p>
        <h2>Built together.</h2>
      </div>
      <div className="anpr-notes">
        <p>
          <strong>Alish Tuladhar · Arbin Shrestha · Shreejan Shrestha</strong>
        </p>
        <p>
          My contribution covered dataset preparation, image labeling, YOLO
          training, frontend UI, testing, and documentation.
        </p>
      </div>
    </section>
  </div>
);

export default NumberPlateStory;
